  import React from 'react'
  import "../Css/Login.css"
  import doctorIcon from "../assets/Images/doctor.jpg"; 
  import { Link } from 'react-router-dom';
  import "../Css/Login.css";
  const Signup = () => {
      return (
          <div className="login-page">
                <div className="login-container">
                  <div className="small-container">
                    <h1>Welcome to Our Healthcare Portal</h1>
                    <p>
                      Select your role to proceed with secure access. Our platform ensures a
                      seamless experience for both doctors and patients.
                    </p>
                    <div className="login-options">
                      <Link to="/login-doctor" className="login-card doctor-card">
                        <img src={doctorIcon} alt="Doctor Icon" className="icon" />
                        <span>SignUp as Doctor →</span>
                      </Link>
                      <Link to="/signup-user" className="login-card patient-card">
                        <img src={doctorIcon} alt="Patient Icon" className="icon" />
                        <span>SignUp as User →</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
      )
  }

  export default Signup