import React from 'react'
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Sidebar from "./Components/Sidebar.jsx";
import Navbar from './Components/Navbar.jsx';
import AnimalProduct from './pages/AnimalProduct.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}

export default App;
