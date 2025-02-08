// SellerInfo.jsx
import React, { useState } from 'react';

const SellerInfo = ({ seller }) => {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-4 pb-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Seller Information</h2>
        
        <div className="flex gap-4 items-start">
          <img 
            src={seller.avatar} 
            alt={seller.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-lg font-semibold">{seller.name}</h3>
              <span className="text-sm text-gray-500">
                Member since {seller.memberSince}
              </span>
            </div>
            
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5a5 5 0 015 5v.093a3.95 3.95 0 00-1.111 2.238A6.483 6.483 0 015 13H3.5A1.5 1.5 0 012 11.5v-1A1.5 1.5 0 013.5 9H5V5zm11 8a4 4 0 01-4-4V5a4 4 0 118 0v4a4 4 0 01-4 4z"/>
                </svg>
                <span>{seller.location}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>Response rate: {seller.responseRate}%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={() => setShowChat(true)}
            className="flex-1 bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition"
          >
            Contact Seller
          </button>
          
          <button className="flex-1 bg-gray-100 py-3 rounded-lg hover:bg-gray-200 transition">
            Visit Profile
          </button>
        </div>

        {showChat && (
          <div className="mt-4 border-t pt-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Chat with Seller</h4>
              <textarea
                className="w-full p-2 border rounded mb-2"
                placeholder="Type your message..."
                rows="3"
              ></textarea>
              <button className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700">
                Send Message
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SellerInfo;