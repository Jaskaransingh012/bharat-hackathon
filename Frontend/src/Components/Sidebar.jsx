import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // ✅ Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faTags,
  faAngleLeft,
  faAngleRight,
  faHorse,
  faUser,
  faHome,
} from '@fortawesome/free-solid-svg-icons';
import '../Css/Sidebar.css';

const Sidebar = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`fixedSidebar fixedSidebarLeft ${isSidebarVisible ? '' : 'active'}`}>
      {/* Sidebar Items */}
      <NavLink to="/"  className={({isActive}) =>(isActive? "is-active sidebarItem" : "sidebarItem" )} data-tooltip="Home">
      <FontAwesomeIcon icon={faHome} className="sidebarIcon" />
      </NavLink>
      <NavLink to="/marketplace" className={({isActive}) =>(isActive? "is-active sidebarItem" : "sidebarItem" )} data-tooltip="Market Place">
        <FontAwesomeIcon icon={faHorse} className="sidebarIcon" />
      </NavLink>
      <NavLink to="/veterinary-support/video-consult" className={({isActive}) =>(isActive? "is-active sidebarItem" : "sidebarItem" )} data-tooltip="Veterinary Support">
        <FontAwesomeIcon icon={faStethoscope} className="sidebarIcon" />
      </NavLink>
      <NavLink to="/products" className={({isActive}) =>(isActive? "is-active sidebarItem" : "sidebarItem" )} data-tooltip="Products">
        <FontAwesomeIcon icon={faTags} className="sidebarIcon" />
      </NavLink>
      <NavLink to="/profile" className={({isActive}) =>(isActive? "is-active sidebarItem" : "sidebarItem" )} data-tooltip="Profile">
        <FontAwesomeIcon icon={faUser} className="sidebarIcon" />
      </NavLink>

      {/* Toggle Button */}
      <button className="buttonTrigger" onClick={toggleSidebar} data-tooltip={isSidebarVisible ? 'Hide' : 'Show'}>
        <FontAwesomeIcon icon={isSidebarVisible ? faAngleLeft : faAngleRight} className="toggleIcon" />
      </button>
    </div>
  );
};

export default Sidebar;
