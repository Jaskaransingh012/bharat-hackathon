import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import img from "../assets/Images/7309681.jpg";
import "../Css/ProfilePage.css";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [ads, setAds] = useState([]); // State to store fetched ads

  // Default user details
  const defaultUser = {
    name: "John Doe",
    profileImageUrl: img,
    phoneNumber: "+91 98765 43210",
    email: "john.doe@example.com",
    pincode: "123456",
    animals: [], // Empty array since we'll use fetched ads
  };

  // Fetch user details and their ads from API
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser?.email) {
      // Fetch user details
      axios
        .get(`http://localhost:5000/api/users/user/${storedUser.email}`)
        .then((response) => {
          setUser(response.data);

          // Fetch ads using the animals array
          if (response.data.animals && response.data.animals.length > 0) {
            axios
              .post(`http://localhost:5000/api/animals/ads`, {
                animalIds: response.data.animals,
              })
              .then((adsResponse) => {
                setAds(adsResponse.data);
              })
              .catch((error) => {
                console.error("Error fetching ads:", error);
              });
          }
        })
        .catch(() => {
          setUser(null); // Set to null so defaultUser is used
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  const displayedUser = user || defaultUser;

  const handleEditProfile = () => {
    navigate("/edit-profile/info");
  };

  if (loading) {
    return <div className="loading">Loading profile...</div>;
  }

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-picture">
          <img src={displayedUser.profileImageUrl || img} alt="Profile" />
        </div>
        <h1 className="profile-name">{displayedUser.name}</h1>

        {/* Edit Profile Button - Only for logged-in users */}
        {user && (
          <button className="edit-profile-button" onClick={handleEditProfile}>
            <FontAwesomeIcon icon={faEdit} /> Edit Profile
          </button>
        )}
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="info-card">
          <FontAwesomeIcon icon={faPhone} className="info-icon" />
          <span>{displayedUser.phoneNumber}</span>
        </div>
        <div className="info-card">
          <FontAwesomeIcon icon={faEnvelope} className="info-icon" />
          <span>{displayedUser.email}</span>
        </div>
        <div className="info-card">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
          <span>{displayedUser.pincode}</span>
        </div>
      </div>

      {/* Ads Posted Section */}
      <div className="ads-section">
        <h2 className="section-title">Posted Advertisements</h2>
        <div className="ads-grid">
          {ads.length > 0 ? (
            ads.map((ad) => (
              <div key={ad._id} className="ad-card">
                <div className="image-container">
                  <img src={ad.image} alt={ad.title} className="ad-image" />
                  <div className="image-overlay">
                    <span className={`ad-status ${ad.status?.toLowerCase() || "available"}`}>
                      {ad.status || "Available"}
                    </span>
                  </div>
                </div>
                <div className="ad-details">
                  <h3 className="ad-title">{ad.title}</h3>
                  <button className="view-button">View Details</button>
                </div>
              </div>
            ))
          ) : (
            <p>No ads posted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;