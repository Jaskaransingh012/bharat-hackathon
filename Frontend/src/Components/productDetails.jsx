// ProductDetails.jsx
import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Product Images Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img 
              src={product.mainImage} 
              alt={product.title} 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, index) => (
              <div 
                key={index}
                className="aspect-square bg-gray-100 rounded cursor-pointer hover:opacity-75"
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="text-4xl font-bold text-emerald-600">
            ₹{product.price.toLocaleString()}
          </div>
          
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-gray-500">Category:</span>
              <span>{product.category}</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500">Posted:</span>
              <span>{product.postedDate}</span>
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600 whitespace-pre-line">
              {product.description}
            </p>
          </div>

          <button className="text-red-500 hover:text-red-700 text-sm">
            Report Ad
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;