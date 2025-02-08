// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen py-12 px-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
//         <h1 className="text-6xl font-bold text-center text-red-800 mb-6">
//           About Us
//         </h1>
//         <p className="text-gray-600 text-lg text-center">
//           Welcome to **Animal MarketPlace**, your one-stop destination for
//           buying and selling animals, pet products, and veterinary support. Our
//           mission is to connect animal lovers with trusted sellers while
//           ensuring the best care for their pets and livestock.
//         </p>

//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">
//             🐾 What We Offer:
//           </h2>
//           <ul className="list-disc list-inside text-gray-600 text-lg">
//             <li>Wide range of animals for sale – pets, livestock, and exotic breeds</li>
//             <li>High-quality pet and farm products</li>
//             <li>Verified sellers for a trustworthy experience</li>
//             <li>24/7 veterinary consultation and support</li>
//           </ul>
//         </div>

//         <div className="mt-8">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">
//             ❤️ Our Mission:
//           </h2>
//           <p className="text-gray-600 text-lg">
//             We aim to create a **safe, ethical, and transparent** marketplace
//             where animal lovers can find the perfect companions, farm animals,
//             and essential products while promoting responsible pet ownership and
//             care.
//           </p>
//         </div>

//         <div className="mt-8 text-center">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-2">
//             📩 Contact Us
//           </h2>
//           <p className="text-gray-600 text-lg">
//             Have questions? Reach out to us at:
//           </p>
//           <p className="text-gray-800 font-semibold">support@animalmarket.com</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";
import { Link } from "react-router-dom";


const AboutUs = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen p-6">
      <div className="max-w-6xl bg-white shadow-lg rounded-2xl p-10">

        {/* About Us Section */}
        <div className="flex items-center justify-between mb-10">
          {/* Left: Dog Icon */}
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
            <span className="text-7xl">🐶</span>
          </div>

          {/* Center: About Us Title */}
          <div className="text-center flex-1">
            <h6 className="text-7xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-blue-800 text-transparent bg-clip-text mt-1">
              Vet-Villa
            </h6>
            <p className="text-gray-600 text-lg mt-1">
              Trade Pets, Trust Vets – All in One Place.
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed text-center max-w-3xl mx-auto">
          Welcome to <strong>Vet-Villa an Animal MarketPlace</strong>, your one-stop destination for buying and selling animals, pet products, and veterinary support.
          Our mission is to connect animal lovers with trusted sellers while ensuring the best care for their pets and livestock.
        </p>

        {/* Additional Information Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Link to="/post-ad" >

            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-4xl">📢</span>
              </div>
              <h2 className="text-xl font-semibold mt-4 text-gray-800">Sell Your Animals</h2>
              <p className="text-gray-600 mt-2">Effortlessly list and sell your pets or livestock to verified buyers in our trusted marketplace.</p>
            </div>
          </Link> 


          <Link to="/veterinary-support/video-consult">
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-4xl">🏥</span>
              </div>
              <h2 className="text-xl font-semibold mt-4 text-gray-800">Expert Animal Care</h2>
              <p className="text-gray-600 mt-2">Our team of skilled veterinarians provides top-tier medical care to keep your pets healthy and happy.</p>
            </div>
          </Link>


          <Link to="/products">
          <div className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-4xl">📅</span>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Pet Essentials with Ease</h2>
            <p className="text-gray-600 mt-2">List and sell pet products effortlessly, from food and toys to accessories and grooming supplies, in our trusted marketplace.</p>
          </div>
          </Link>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Link to="/post-ad">
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between h-full min-h-[250px] items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-4xl">📢</span>
              </div>
              <h2 className="text-xl font-semibold mt-4 text-gray-800">Sell Your Animals</h2>
              <p className="text-gray-600 mt-2">Effortlessly list and sell your pets or livestock to verified buyers in our trusted marketplace.</p>
            </div>
          </Link>

          <Link to="/veterinary-support/video-consult">
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between h-full min-h-[250px] items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-4xl">🏥</span>
              </div>
              <h2 className="text-xl font-semibold mt-4 text-gray-800">Expert Animal Care</h2>
              <p className="text-gray-600 mt-2">Our team of skilled veterinarians provides top-tier medical care to keep your pets healthy and happy.</p>
            </div>
          </Link>

          <Link to="/products">
            <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between h-full min-h-[250px] items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-4xl">📅</span>
              </div>
              <h2 className="text-xl font-semibold mt-4 text-gray-800">Pet Essentials with Ease</h2>
              <p className="text-gray-600 mt-2">Easily list and sell pet products, from food and toys to accessories and grooming supplies.</p>
            </div>
          </Link>
        </div>


        {/* Original Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white shadow-md rounded-xl p-6 flex justify-between flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-4xl">🐾</span>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Animal Marketplace</h2>
            <p className="text-gray-600 mt-2">Buy, sell, or adopt animals safely through our trusted marketplace, connecting sellers with genuine buyers effortlessly.</p>
            <Link to="/marketplace">
              <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-110">
                Purchase
              </button>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-xl p-6 flex justify-between flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-4xl">🐶</span>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Sign Up</h2>
            <p className="text-gray-600 mt-2">Sign up today and gain access to exclusive deals, pet-friendly services, and a supportive pet-loving community.</p>
            <Link to="/signup">
              <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-110">
                Sign Up
              </button>
            </Link>
          </div>

          <div className="bg-white shadow-md rounded-xl justify-between p-6 flex flex-col items-center text-center border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-4xl">🐕</span>
            </div>
            <h2 className="text-xl font-semibold mt-4 text-gray-800">Our Mission</h2>
            <p className="text-gray-600 mt-2">Committed to providing exceptional pet care while promoting sustainability and responsible pet ownership.</p>
            <Link to="/login">
              <button className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-110">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
