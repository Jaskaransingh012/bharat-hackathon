import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const PostAd = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "Horse",
    location: "",
    images: [],
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [userId, setUserId] = useState(null);

  // Check authentication on component mount
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please login to post an ad");
        navigate("/login");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        console.log("Decoded token in frontend:", decoded); // Log the decoded token
        setUserId(decoded.userId); // Ensure this matches the payload structure
      } catch (error) {
        localStorage.removeItem("token");
        toast.error("Session expired. Please login again");
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleImageUpload = (e) => {
  //   const files = Array.from(e.target.files);
  //   const previewURLs = files.map((file) => URL.createObjectURL(file));
  //   setFormData({ ...formData, images: files });
  //   setImagePreviews(previewURLs);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userString = localStorage.getItem("user"); // Retrieve the JSON string
    const userObject = JSON.parse(userString);
    const userId = userObject._id;
    // Retrieve user ID from localStorage
    console.log("Stored User ID:", userId);

    if (!userId) {
      toast.error("You must be logged in to post an ad");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("No token found. Please login again.");
      navigate("/login");
      return;
    }

    console.log("Sending token:", token); // Debugging log

    const adData = {
      title: formData.title,
      price: formData.price,
      description: formData.description,
      category: formData.category,
      location: formData.location,
      userId,
    };
    console.log(adData)

    try {
      const response = await axios.post("http://localhost:5000/api/animals/", adData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer 67a748f2d486daade166c293`,  // Ensure Bearer token format
        },
      });

      if (response.status === 201) {
        toast.success("Ad posted successfully!");
        navigate("/");
      }
    } catch (error) {
      console.error("Error posting ad:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to post ad");
    }
  };



  // Keep the existing UI exactly as it was
  return (
    <div className="min-h-screen pt-5 flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-200 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">📢 Post Your Animal Ad</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Ad Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter animal name or breed"
              className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">Price ($)</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter price"
                className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              >
                <option value="Horse">Horse</option>
                <option value="Cow">Cow</option>
                <option value="Goat">Goat</option>
                <option value="Dog">Dog</option>
                <option value="Cat">Cat</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter city or area"
              className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Describe your animal (age, breed, special features)"
              className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-lg font-medium text-gray-700">Upload Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              className="mt-1 w-full p-3 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {/* Image Previews */}
            {imagePreviews.length > 0 && (
              <div className="mt-4 flex gap-2">
                {imagePreviews.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt="Preview"
                    className="w-24 h-24 object-cover rounded-lg shadow-md border"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:bg-blue-700 active:scale-95 transition-all"
          >
            🚀 Post Ad
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostAd;