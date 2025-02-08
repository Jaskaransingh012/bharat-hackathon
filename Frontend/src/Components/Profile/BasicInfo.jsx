import React, { useState } from 'react'
import toast from 'react-hot-toast';

const BasicInfo = () => {
  const [name, setName] = useState("Jaskaran Singh");
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("6280341055");
  const [email, setEmail] = useState("");
  const handleChanges = () => {
    toast.success("Changes Saved!");
  }
  return (

    <div className='container'>
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>

        {/* Basic Information */}
        <div className="mb-4">
          <label className="block font-medium">Basic Information</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded"
            maxLength={30}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="w-full mt-2 p-2 border rounded"
            placeholder="About me (optional)"
            maxLength={200}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <p className="text-xs text-gray-500 mt-1">
            OLX is built on trust. Help others get to know you by sharing your interests.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <label className="block font-medium">Contact Information</label>
          <input
            type="text"
            className="w-full mt-1 p-2 border rounded bg-gray-100"
            value={`+91 ${phone}`}
            readOnly
          />
          <p className="text-green-600 text-sm">Yay! Your number is verified.</p>
          <input
            type="email"
            className="w-full mt-2 p-2 border rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-xs text-gray-500">
            Your email is never shared with external parties.
          </p>
        </div>

        {/* Additional Information */}
        <div className="mb-4">
          <label className="block font-medium">Additional Information</label>
          <button className="w-full flex items-center justify-center p-2 border rounded bg-gray-100 hover:bg-gray-200">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <button className="px-4 py-2 border rounded text-gray-700">Discard</button>
          <button onClick={handleChanges} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Save changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default BasicInfo