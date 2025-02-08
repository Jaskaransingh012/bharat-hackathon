import React from 'react'
import cowDoctor from "../assets/Images/Cow-Doctor.png"
import VeterinarySpecialities from './vetrinarySpecialists'
import { Link } from 'react-router-dom'
const VideoConsult = () => {
  return (
    <>
      <div className="w-full">
        <div className=" bg-pink-100 m-auto flex flex-col max-w-6xl md:flex-row items-center justify-between p-8 rounded-2xl shadow-lg">
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">Skip the clinic visit!</h1>
            <h2 className="text-2xl font-semibold text-gray-700">Get Online Veterinary Consultation</h2>
            <p className="text-gray-600">Private consultation + Audio call - Starts at just ₹199</p>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <img src="https://media.istockphoto.com/id/1301595548/photo/female-doctor-stock-photo.jpg?s=1024x1024&w=is&k=20&c=5TZmRIrv19xzHJG9DINZYPqxyZh6Ae-0utCXG7J0sGE=" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/4588057/pexels-photo-4588057.jpeg" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/7469215/pexels-photo-7469215.jpeg" alt="Doctor" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              <span className="text-gray-700">+100 Vets are online</span>
            </div>
            <Link to="/consult">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600">Consult Now</button>
            </Link>
            <div className="flex space-x-4 text-gray-600 text-sm mt-2">
              <span>✅ Verified Vets</span>
              <span>📄 Digital Prescription</span>
              <span>🔄 Free Follow-up</span>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={cowDoctor} alt="Pet Owner" className="w-full max-w-md rounded-lg" />
          </div>
        </div>
      </div>
      <VeterinarySpecialities/>
    </>


  )
}

export default VideoConsult
