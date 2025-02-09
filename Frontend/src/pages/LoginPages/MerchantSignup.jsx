import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faEnvelope, faPhone, faMapMarker, faIdCard } from '@fortawesome/free-solid-svg-icons';
import '../../Css/MerchantSignup.css';
import toast from 'react-hot-toast';

const  MerchantSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // User Details
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    pincode: '',
    
    // Merchant Details
    businessName: '',
    businessEmail: '',
    contactNumber: '',
    registrationNumber: '',
    street: '',
    city: '',
    state: '',
    businessPincode: '',
    website: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

    // User Validation
    if (!formData.name) newErrors.name = 'Name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Invalid email address';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!phoneRegex.test(formData.phoneNumber)) newErrors.phoneNumber = 'Invalid phone number';
    if (!formData.pincode) newErrors.pincode = 'Pincode is required';

    // Merchant Validation
    if (!formData.businessName) newErrors.businessName = 'Business name is required';
    if (!emailRegex.test(formData.businessEmail)) newErrors.businessEmail = 'Invalid business email';
    if (!phoneRegex.test(formData.contactNumber)) newErrors.contactNumber = 'Invalid contact number';
    if (!formData.registrationNumber) newErrors.registrationNumber = 'Registration number is required';
    if (!formData.street) newErrors.street = 'Street address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.businessPincode) newErrors.businessPincode = 'Business pincode is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      // Step 1: Register User
      const userResponse = await axios.post('http://localhost:5000/api/users/register', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        pincode: formData.pincode,
        role: 'merchant'
      });

      // Step 2: Login to get token
      const loginResponse = await axios.post('http://localhost:5000/api/users/login', {
        email: formData.email,
        password: formData.password
      });

      const token = loginResponse.data.token;

      // Step 3: Create Merchant Profile
      await axios.post('http://localhost:5000/api/merchants/', {
        businessName: formData.businessName,
        businessEmail: formData.businessEmail,
        contactNumber: formData.contactNumber,
        registrationNumber: formData.registrationNumber,
        businessAddress: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          pincode: formData.businessPincode
        },
        website: formData.website,
        description: formData.description
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      toast.success('Merchant account created successfully');

      navigate('/merchant/dashboard');
    } catch (err) {
      const errorMsg = err.message || 'Registration failed';
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="merchant-signup-container">
      <div className="merchant-signup-card">
        <h1 className="signup-title">
          <FontAwesomeIcon icon={faStore} className="title-icon" />
          Create Merchant Account
        </h1>

        <form onSubmit={handleSubmit} className="signup-form">
          {/* Personal Information Section */}
          <fieldset className="form-section">
            <legend>Personal Information</legend>
            
            <div className="input-group">
              <label>
                <FontAwesomeIcon icon={faIdCard} /> Full Name
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <span className="error">{errors.name}</span>}
              </label>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>
                  <FontAwesomeIcon icon={faEnvelope} /> Email
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                  {errors.email && <span className="error">{errors.email}</span>}
                </label>
              </div>

              <div className="input-group">
                <label>
                  <FontAwesomeIcon icon={faPhone} /> Phone
                  <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                  {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
                </label>
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>
                  Password
                  <input type="password" name="password" value={formData.password} onChange={handleChange} />
                  {errors.password && <span className="error">{errors.password}</span>}
                </label>
              </div>

              <div className="input-group">
                <label>
                  <FontAwesomeIcon icon={faMapMarker} /> Pincode
                  <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
                  {errors.pincode && <span className="error">{errors.pincode}</span>}
                </label>
              </div>
            </div>
          </fieldset>

          {/* Business Information Section */}
          <fieldset className="form-section">
            <legend>Business Information</legend>

            <div className="input-group">
              <label>
                <FontAwesomeIcon icon={faStore} /> Business Name
                <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} />
                {errors.businessName && <span className="error">{errors.businessName}</span>}
              </label>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>
                  <FontAwesomeIcon icon={faEnvelope} /> Business Email
                  <input type="email" name="businessEmail" value={formData.businessEmail} onChange={handleChange} />
                  {errors.businessEmail && <span className="error">{errors.businessEmail}</span>}
                </label>
              </div>

              <div className="input-group">
                <label>
                  <FontAwesomeIcon icon={faPhone} /> Contact Number
                  <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
                  {errors.contactNumber && <span className="error">{errors.contactNumber}</span>}
                </label>
              </div>
            </div>

            <div className="input-group">
              <label>
                Registration Number
                <input type="text" name="registrationNumber" value={formData.registrationNumber} onChange={handleChange} />
                {errors.registrationNumber && <span className="error">{errors.registrationNumber}</span>}
              </label>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>
                  Street Address
                  <input type="text" name="street" value={formData.street} onChange={handleChange} />
                  {errors.street && <span className="error">{errors.street}</span>}
                </label>
              </div>

              <div className="input-group">
                <label>
                  City
                  <input type="text" name="city" value={formData.city} onChange={handleChange} />
                  {errors.city && <span className="error">{errors.city}</span>}
                </label>
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>
                  State
                  <input type="text" name="state" value={formData.state} onChange={handleChange} />
                  {errors.state && <span className="error">{errors.state}</span>}
                </label>
              </div>

              <div className="input-group">
                <label>
                  Business Pincode
                  <input type="text" name="businessPincode" value={formData.businessPincode} onChange={handleChange} />
                  {errors.businessPincode && <span className="error">{errors.businessPincode}</span>}
                </label>
              </div>
            </div>

            <div className="input-row">
              <div className="input-group">
                <label>
                  Website (Optional)
                  <input type="url" name="website" value={formData.website} onChange={handleChange} />
                </label>
              </div>

              <div className="input-group">
                <label>
                  Description (Optional)
                  <textarea name="description" value={formData.description} onChange={handleChange} />
                </label>
              </div>
            </div>
          </fieldset>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'Register as Merchant'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default MerchantSignup;