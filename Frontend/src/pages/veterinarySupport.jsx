import React from 'react';
import '../Css/VetrinaryPage.css';
import logo from "../assets/Images/Logo.png";
import { NavLink, Outlet, Route, Routes } from 'react-router-dom'; // Use NavLink instead of Link
import VideoConsult from '../Components/VideoConsult';
import FindVet from '../Components/Vetrinary/FindVet';
import Chatbot from '../Components/chatbot';

const VeterinaryPage = () => {
  return (
    <div className="vetrinary-container">
      <nav className='flex justify-center '>
        <div className=' flex justify-between nav-container bg-amber-50 p-3'>
          {/* Use NavLink instead of Link */}
          <NavLink 
            to="/veterinary-support/find-doctor" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            <div className=''>
              Find Doctors
            </div>
          </NavLink>
          <NavLink 
            to="/veterinary-support/video-consult" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            <div>
              Video Consult
            </div>
          </NavLink>
          <NavLink 
            to="/veterinary-support/chatbot" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            <div>
            AI at Your Service!
            </div>
          </NavLink>
        </div>
      </nav>
      <div className="vet-hero-s">
        
      </div>

      {/* Nested Routes */}
      <Routes>
        <Route path="find-doctor" element={<FindVet/>} />
        <Route path="video-consult" element={<VideoConsult/>} />
        {/* <Route path="surgeries" element={<div>Surgeries</div>} /> */}
        <Route path="chatbot" element={<Chatbot />} />
      </Routes>
      <Outlet/>
    </div>
  );
};

export default VeterinaryPage;