import React, { useState } from "react";
import { CameraIcon, UploadCloudIcon } from "lucide-react";
import toast from "react-hot-toast";

const EditProfilePic = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };
  const handleChanges = (event)=>{
    toast.success("Change Saved");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 px-6">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-lg text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">👤 Update Profile Picture</h2>

        {/* Profile Picture Preview */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <img
            src={selectedImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-4 border-blue-400 shadow-md"
          />
          <label
            htmlFor="fileInput"
            className="absolute bottom-2 right-2 bg-blue-600 p-3 rounded-full text-white cursor-pointer shadow-lg hover:bg-blue-700 transition-all"
          >
            <CameraIcon size={20} />
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Drag & Drop Upload Box */}
        <label
          htmlFor="dropzone"
          className="block border-2 border-dashed border-blue-400 rounded-xl p-6 text-gray-600 bg-blue-50 cursor-pointer hover:bg-blue-100 transition-all"
        >
          <UploadCloudIcon className="mx-auto mb-2 text-blue-600" size={32} />
          Drag & Drop or Click to Upload
        </label>
        <input
          id="dropzone"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />

        {/* Save Button */}
        <button onClick={handleChanges}
          className="mt-6 w-full py-3 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          ✅ Save Changes
        </button>
      </div>
    </div>
  );
};

export default EditProfilePic;
