import React from 'react';
import "../Css/Login.css";
import doctorIcon from "../assets/Images/doctor.jpg"; 
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="login-page">
            <div className="login-container">
                <div className="small-container">
                    <h1>Welcome to Our Healthcare Portal</h1>
                    <p>
                        Select your role to proceed with secure access. Our platform ensures a
                        seamless experience for doctors, patients, and merchants.
                    </p>
                    <div className="login-options">
                        <Link to="/login-doctor" className="login-card doctor-card">
                            <img src={doctorIcon} alt="Doctor " className="icon-s" />
                            <span>Sign Up as Doctor →</span>
                        </Link>
                        <Link to="/signup-user" className="login-card patient-card">
                            <img src={doctorIcon} alt="Patient" className="icon-s" />
                            <span>Sign Up as User →</span>
                        </Link>
                        <Link to="/signup-merchant" className="login-card merchant-card">
                            <img src={doctorIcon} alt="Merchant" className="icon-s" />
                            <span>Sign Up as Merchant →</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;