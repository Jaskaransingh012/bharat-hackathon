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

  // Default user details
  const defaultUser = {
    name: "John Doe",
    profilePicture: img,
    phoneNumber: "+91 98765 43210",
    email: "john.doe@example.com",
    pincode: "123 Animal Street, Pune, Maharashtra",
    adsPosted: [
<<<<<<< HEAD
      { id: 1, title: "Golden Retriever Puppy", status: "Available", image: "https://source.unsplash.com/random/800x600/?dog" },
      { id: 2, title: "Persian Cat", status: "Sold", image: "https://source.unsplash.com/random/800x600/?cat" },
      { id: 3, title: "Parrot", status: "Available", image: "https://source.unsplash.com/random/800x600/?parrot" },
=======
      { id: 1, title: 'Golden Retriever Puppy', status: 'Available', image: "https://slatercreekgoldenretrievers.com/wp-content/uploads/2023/03/127819769_m_normal_none.jpg" },
      { id: 2, title: 'Persian Cat', status: 'Sold', image: "https://azure.wgp-cdn.co.uk/app-yourcat/posts/iStock-174776419-1.jpg?&format=webp&webp.quality=40&scale=both" },
      { id: 3, title: 'Parrot', status: 'Available', image: "data:image/jpeg;base64,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" },
>>>>>>> 1813563128de2007ff495e8f28f675de6af4b983
    ],
  };

  // Fetch user details from API
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser?.email) {
      axios
        .get(`http://localhost:5000/api/users/user/${storedUser.email}`)
        .then((response) => {
          setUser(response.data);
          console.log(response.data);
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
          <img src={displayedUser.profilePicture || img} alt="Profile" />
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
          {(displayedUser.adsPosted || []).map((ad) => (
            <div key={ad.id} className="ad-card">
              <div className="image-container">
                <img src={ad.image} alt={ad.title} className="ad-image" />
                <div className="image-overlay">
                  <span className={`ad-status ${ad.status.toLowerCase()}`}>
                    {ad.status}
                  </span>
                </div>
              </div>
              <div className="ad-details">
                <h3 className="ad-title">{ad.title}</h3>
                <button className="view-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
