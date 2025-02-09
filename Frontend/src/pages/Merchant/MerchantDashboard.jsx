import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Layout, Menu, Card, Statistic, Table, Button, Spin, message } from 'antd';
import {
  DashboardOutlined,
  ShoppingCartOutlined,
  PlusOutlined,
  LineChartOutlined,
  UserOutlined,
  StockOutlined,
} from '@ant-design/icons';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import '../../Css/MerchantDashboard.css';

const { Header, Content, Sider } = Layout;

const MerchantDashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [merchantData, setMerchantData] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [salesData, setSalesData] = useState({});
  const [selectedKey, setSelectedKey] = useState('1');

  useEffect(() => {
    const fetchMerchantData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
          return;
        }

        // Fetch merchant profile
        const merchantRes = await axios.get('http://localhost:5000/api/merchants/me', {
          headers: { Authorization: `Bearer ${token}` }
        });

        // Fetch merchant products
        const productsRes = await axios.get('http://localhost:5000/api/merchant/products', {
          headers: { Authorization: `Bearer ${token}` }
        });

        // Fetch merchant orders
        const ordersRes = await axios.get('http://localhost:5000/api/merchant/orders', {
          headers: { Authorization: `Bearer ${token}` }
        });

        setMerchantData(merchantRes.data);
        setProducts(productsRes.data);
        setOrders(ordersRes.data);
        setLoading(false);
      } catch (error) {
        message.error('Failed to fetch dashboard data');
        navigate('/login');
      }
    };

    fetchMerchantData();
  }, [navigate]);

  // Sales chart data configuration
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: '#7367f0',
        tension: 0.4,
        fill: false,
      },
    ],
  };

  const stats = [
    { title: 'Total Products', value: products.length, icon: <ShoppingCartOutlined />, color: '#7367f0' },
    { title: 'Active Orders', value: orders.filter(o => o.status === 'pending').length, icon: <StockOutlined />, color: '#28c76f' },
    { title: 'Total Revenue', value: `$${orders.reduce((sum, o) => sum + o.total, 0)}`, icon: <LineChartOutlined />, color: '#ea5455' },
    { title: 'Customer Rating', value: '4.8/5', icon: <UserOutlined />, color: '#ff9f43' },
  ];

  const columns = [
    { title: 'Order ID', dataIndex: '_id', key: '_id' },
    { title: 'Customer', dataIndex: 'customerName', key: 'customer' },
    { title: 'Amount', dataIndex: 'total', key: 'amount', render: value => `$${value}` },
    { title: 'Status', dataIndex: 'status', key: 'status', 
      render: status => (
        <span className={`status-${status}`}>{status.toUpperCase()}</span>
      ) 
    },
    { title: 'Date', dataIndex: 'createdAt', key: 'date' },
  ];

  const menuItems = [
    { key: '1', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: '2', icon: <ShoppingCartOutlined />, label: 'Products' },
    { key: '3', icon: <StockOutlined />, label: 'Orders' },
    { key: '4', icon: <LineChartOutlined />, label: 'Analytics' },
  ];

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} theme="dark">
        <div className="dashboard-logo">
          <h2>{merchantData?.businessName}</h2>
          <p>Merchant Dashboard</p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onSelect={({ key }) => setSelectedKey(key)}
          items={menuItems}
        />
      </Sider>

      <Layout className="site-layout">
        <Header className="dashboard-header">
          <div className="header-actions">
            <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate('/merchant/add-product')}>
              Add Product
            </Button>
          </div>
        </Header>

        <Content className="dashboard-content">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <Card key={index} className="stats-card" style={{ borderLeft: `4px solid ${stat.color}` }}>
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  prefix={stat.icon}
                  valueStyle={{ color: stat.color }}
                />
              </Card>
            ))}
          </div>

          <div className="main-content">
            <Card title="Sales Overview" className="chart-card">
              <Line data={chartData} options={{ responsive: true }} />
            </Card>

            <Card 
              title="Recent Orders" 
              className="orders-card"
              extra={<Button type="link" onClick={() => navigate('/merchant/orders')}>View All</Button>}
            >
              <Table
                columns={columns}
                dataSource={orders.slice(0, 5)}
                pagination={false}
                rowKey="_id"
                onRow={(record) => ({
                  onClick: () => navigate(`/merchant/orders/${record._id}`),
                })}
              />
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MerchantDashboard;