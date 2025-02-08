import React, { useState, useEffect } from "react";
import { Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginUser = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ emailOrPhone: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await fetch("http://localhost:5000/api/users/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        if (data.Success) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, []);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.emailOrPhone) {
      newErrors.emailOrPhone = "Email or Phone is required.";
    }
    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (data.Success) {
        localStorage.setItem("token", data.token); // Store token
        localStorage.setItem("user", JSON.stringify(data.user)); // Store user data
        toast.success("Login successful!");
        navigate("/"); // Redirect to dashboard or home page
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-blue-300 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">🔑 Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email/Phone Input */}
          <div className="relative">
            <Mail className="absolute left-4 top-3 text-gray-500" size={20} />
            <input
              type="text"
              placeholder="Email or Phone"
              value={formData.emailOrPhone}
              onChange={(e) =>
                setFormData({ ...formData, emailOrPhone: e.target.value })
              }
              className={`w-full px-12 py-3 bg-gray-100 rounded-lg border ${
                errors.emailOrPhone ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            {errors.emailOrPhone && (
              <p className="text-red-500 text-sm mt-1">{errors.emailOrPhone}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <Lock className="absolute left-4 top-3 text-gray-500" size={20} />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className={`w-full px-12 py-3 bg-gray-100 rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:ring-2 focus:ring-blue-500 outline-none`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition-all"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginUser;
