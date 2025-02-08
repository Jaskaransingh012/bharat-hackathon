import React, { useState } from 'react';
import horse from "../assets/Images/image.png";
import img from "../assets/Images/7309681.jpg";
import { Link } from 'react-router-dom';

const AnimalProduct = () => {
  const [mainImage, setMainImage] = useState(horse);
  const product = {
    id: 1,
    title: "French Bulldog",
    price: 15000,
    rating: 4.5,
    description: "French Bulldog is a small breed of domestic dog. Frenchies were the result in the 1800s of a cross between bulldog ancestors imported from England and local ratters in Paris, France.",
    images: [
      'https://via.placeholder.com/500x500',
      'https://via.placeholder.com/500x500?text=Image+2',
      'https://via.placeholder.com/500x500?text=Image+3',
      'https://via.placeholder.com/500x500?text=Image+4'
    ],
    features: [
      '20 inches height',
      '3 feet long',
      '15kg weight',
      '12kmph speed',
      'Brown Color'
    ],
    owner: {
      id: 1,
      name: "Jaskaran",
      profilePic: img
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden transform transition hover:shadow-3xl">
        <div className="flex flex-col lg:flex-row gap-8 p-8">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-6">
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src={"https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}
                alt="Main product"
                className="w-full object-cover transform transition duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-xl">
                ⭐ {product.rating} Rating
              </div>
            </div>

            <div className="flex gap-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  onClick={() => setMainImage(img)}
                  className="w-24 h-24 object-cover rounded-xl cursor-pointer border-2 transition hover:border-blue-500 hover:scale-110"
                  alt={`Thumbnail ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.title}</h1>
              <p className="text-2xl text-blue-600 font-semibold mb-4">
              ₹{product.price} <span className="text-sm text-gray-500">(Negotiable)</span>
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

              <div className="my-6 space-y-3">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-50 p-3 rounded-lg transition hover:bg-blue-50"
                  >
                    <span className="mr-2 text-blue-500">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Owner Section */}
            <Link
              to={`/user/${product.owner.id}`}
              className="inline-block w-full transform transition hover:-translate-y-1"
            >
              <div className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg">
                <img
                  src={product.owner.profilePic}
                  alt="Owner"
                  className="w-14 h-14 rounded-full border-2 border-blue-200"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Sold by {product.owner.name}</h3>
                  <p className="text-gray-500">Member since 2018</p>
                </div>
              </div>
            </Link>

            {/* Google Maps Integration */}
            <div className="mt-8 animate-slide-up">
              <h3 className="text-xl font-semibold mb-4">📍 Location</h3>
              <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55015.77799360949!2d76.55227719652825!3d30.478990097266898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fdc7c202e6489%3A0xf2b1d67562f68349!2sRajpura%2C%20Punjab%20140401!5e0!3m2!1sen!2sin!4v1738410218254!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Contact Button */}
            <Link to={`/chat/${product.owner.id}`}>
              <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:scale-105 hover:bg-blue-700 active:scale-95">
                🐎 Contact Owner
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalProduct;