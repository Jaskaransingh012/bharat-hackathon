import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faShoppingCart, faTruck, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    title: "Wireless Bluetooth Headphones with Noise Cancellation",
    price: 199.99,
    rating: 4.5,
    description: "Premium quality wireless headphones with active noise cancellation, 40hrs battery life, and deep bass sound.",
    images: [
      'https://via.placeholder.com/500x500',
      'https://via.placeholder.com/500x500?text=Image+2',
      'https://via.placeholder.com/500x500?text=Image+3',
      'https://via.placeholder.com/500x500?text=Image+4'
    ],
    features: [
      'Active Noise Cancellation',
      '40 Hours Playtime',
      'IPX5 Water Resistant',
      'Bluetooth 5.0',
      'Fast Charging'
    ],
    reviews: [
      { id: 1, user: 'John D.', rating: 5, title: 'Amazing sound quality', comment: 'Best headphones I\'ve ever owned!' },
      { id: 2, user: 'Sarah M.', rating: 4, title: 'Good value', comment: 'Noise cancellation works pretty well' }
    ]
  };

  // Function to render star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FontAwesomeIcon key={`full-${i}`} icon={faStar} className="text-yellow-400" />
        ))}
        {hasHalfStar && (
          <FontAwesomeIcon key="half" icon={faStarHalfAlt} className="text-yellow-400" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <FontAwesomeIcon key={`empty-${i}`} icon={faStarRegular} className="text-gray-300" />
        ))}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Product Main Section */}
        <div className="md:grid md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-sm">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title} 
                className="w-full h-full object-contain p-4"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded cursor-pointer border-2 ${
                    selectedImage === index ? 'border-blue-500' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="py-4 space-y-6">
            <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-500">(1,234 ratings)</span>
            </div>

            <div className="text-3xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </div>

            <div className="space-y-2">
              <p className="text-gray-600">{product.description}</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <button className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2">
                <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>

              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium">
                Buy Now
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-600">
                <FontAwesomeIcon icon={faTruck} className="h-5 w-5" />
                <span>FREE delivery Tomorrow by 8 PM</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-green-500" />
                <span>In Stock</span>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map(review => (
              <div key={review.id} className="border-b pb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                  <h3 className="font-medium">{review.user}</h3>
                </div>
                <h4 className="font-medium text-gray-900">{review.title}</h4>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;