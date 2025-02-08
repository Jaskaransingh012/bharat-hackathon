// import React from "react";
// import { FaRegHeart, FaHeart, FaMapMarkerAlt, FaCheck } from "react-icons/fa";

// // AnimalCard Component
// const AnimalCard = ({ breed, image, price, age, gender, location, timeAgo }) => {
//   const [isLiked, setIsLiked] = React.useState(false);
//   const handleLike = () => setIsLiked(!isLiked);

//   return (
//     <div className="group border border-gray-100 rounded-2xl shadow-lg overflow-hidden w-80 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative hover:border-gray-200 transform-gpu">
//       {/* Image Section */}
//       <div className="relative overflow-hidden">
//         <div className="relative h-56 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
//           <img
//             src={image}
//             alt={breed}
//             className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 transform-gpu"
//             style={{ objectPosition: "center" }} // Ensure the image is centered
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
//         </div>
//         <button
//           onClick={handleLike}
//           className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
//         >
//           {isLiked ? (
//             <FaHeart className="text-red-500 w-6 h-6 animate-pop-in" />
//           ) : (
//             <FaRegHeart className="text-gray-700 w-6 h-6 transition-colors duration-200 hover:text-red-400" />
//           )}
//         </button>
//       </div>

//       {/* Details Section */}
//       <div className="p-5 space-y-4">
//         <div className="flex justify-between items-start">
//           <div>
//             <h3 className="text-2xl font-bold text-gray-900">
//               <span className="text-blue-600">₹</span>
//               <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
//                 {price}
//               </span>
//             </h3>
//             <p className="text-lg font-semibold text-gray-900 mt-1">{breed}</p>
//           </div>
//           <span className="flex items-center gap-1.5 text-xs bg-emerald-100/90 text-emerald-800 px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm border border-emerald-200/50">
//             <FaCheck className="w-3.5 h-3.5" />
//             Verified
//           </span>
//         </div>

//         <div className="flex flex-wrap gap-2">
//           <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
//             🐾 {age}
//           </span>
//           <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
//             {gender}
//           </span>
//         </div>

//         <div className="flex items-center gap-3 text-sm text-gray-600">
//           <div className="flex items-center gap-1.5">
//             <FaMapMarkerAlt className="w-4 h-4 text-gray-500 flex-shrink-0" />
//             <span className="truncate">{location}</span>
//           </div>
//           <div className="h-1 w-1 bg-gray-400 rounded-full" />
//           <span className="text-gray-500">{timeAgo}</span>
//         </div>

//         <div className="flex items-center gap-2.5 px-4 py-2.5 bg-blue-50/80 rounded-lg backdrop-blur-sm">
//           <svg
//             className="w-5 h-5 text-blue-600 flex-shrink-0"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//             />
//           </svg>
//           <span className="text-sm font-medium text-blue-800">
//             Vaccinated & Health Checked
//           </span>
//         </div>
//       </div>

//       {/* CTA Button */}
//       <button className="mx-5 mb-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 px-3.5 text-sm font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-600 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-200/50 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transform-gpu">
//         <span>Start Adoption Process</span>
//         <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
//           →
//         </span>
//       </button>
//     </div>
//   );
// };

// // Container to display 3 AnimalCard components
// const AnimalCardsContainer = () => {
//   return (
//     <div className="flex justify-center space-x-5 flex-wrap">
//       {/* Rendering 3 AnimalCard Components with Different Dogs */}
//       <AnimalCard
//         breed="French Bulldog"
//         image="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//         price="15,000"
//         age="2 years"
//         gender="♂ Male"
//         location="Mumbai, India"
//         timeAgo="3d ago"
//       />
//       <AnimalCard
//         breed="Labrador"
//         image="https://dogbreederpune.com/dog_images/labrador-bangalore1.jpeg"
//         price="18,000"
//         age="3 years"
//         gender="♀ Female"
//         location="Delhi, India"
//         timeAgo="2d ago"
//       />
//       <AnimalCard
//         breed="Golden Retriever"
//         image="https://petsworld.in/cdn/shop/articles/golden-retriever_7d05df63-fecf-4246-9c76-abd9da09ede3.jpg?v=1730809408"
//         price="20,000"
//         age="1.5 years"
//         gender="♂ Male"
//         location="Bangalore, India"
//         timeAgo="1d ago"
//       />
//     </div>
//   );
// };

// export default AnimalCardsContainer;    


import React from "react";
import { FaRegHeart, FaHeart, FaMapMarkerAlt, FaCheck } from "react-icons/fa";

// AnimalCard Component
const AnimalCard = ({ breed, image, price, age, gender, location, timeAgo }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const handleLike = () => setIsLiked(!isLiked);

  return (
    <div className="group border border-gray-100 rounded-2xl shadow-lg overflow-hidden w-80 bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 relative hover:border-gray-200 transform-gpu">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <div className="relative h-56 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
          <img
            src={image}
            alt={breed}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 transform-gpu"
            style={{ objectPosition: "center" }} // Ensure the image is centered
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <button
          onClick={handleLike}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2.5 rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
        >
          {isLiked ? (
            <FaHeart className="text-red-500 w-6 h-6 animate-pop-in" />
          ) : (
            <FaRegHeart className="text-gray-700 w-6 h-6 transition-colors duration-200 hover:text-red-400" />
          )}
        </button>
      </div>

      {/* Details Section */}
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              <span className="text-blue-600">₹</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                {price}
              </span>
            </h3>
            <p className="text-lg font-semibold text-gray-900 mt-1">{breed}</p>
          </div>
          <span className="flex items-center gap-1.5 text-xs bg-emerald-100/90 text-emerald-800 px-3 py-1.5 rounded-full font-semibold backdrop-blur-sm border border-emerald-200/50">
            <FaCheck className="w-3.5 h-3.5" />
            Verified
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
            🐾 {age}
          </span>
          <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
            {gender}
          </span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-600">
          <div className="flex items-center gap-1.5">
            <FaMapMarkerAlt className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="h-1 w-1 bg-gray-400 rounded-full" />
          <span className="text-gray-500">{timeAgo}</span>
        </div>

        <div className="flex items-center gap-2.5 px-4 py-2.5 bg-blue-50/80 rounded-lg backdrop-blur-sm">
          <svg
            className="w-5 h-5 text-blue-600 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-sm font-medium text-blue-800">
            Vaccinated & Health Checked
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <button className="mx-5 mb-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3.5 px-3.5 text-sm font-semibold transition-all duration-300 hover:from-blue-700 hover:to-blue-600 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-200/50 rounded-xl hover:-translate-y-0.5 active:translate-y-0 transform-gpu">
        <span>Start Adoption Process</span>
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
};

// Container to display 9 AnimalCard components
const AnimalCardsContainer = () => {
  return (
    <div className="grid grid-cols-3 gap-5 justify-center">
      {/* Rendering 9 AnimalCard Components with Different Animals */}
      <AnimalCard
        breed="French Bulldog"
        image="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        price="15,000"
        age="2 years"
        gender="♂ Male"
        location="Mumbai, India"
        timeAgo="3d ago"
      />
      <AnimalCard
        breed="Labrador"
        image="https://dogbreederpune.com/dog_images/labrador-bangalore1.jpeg"
        price="18,000"
        age="3 years"
        gender="♀ Female"
        location="Delhi, India"
        timeAgo="2d ago"
      />
      <AnimalCard
        breed="Golden Retriever"
        image="https://petsworld.in/cdn/shop/articles/golden-retriever_7d05df63-fecf-4246-9c76-abd9da09ede3.jpg?v=1730809408"
        price="20,000"
        age="1.5 years"
        gender="♂ Male"
        location="Bangalore, India"
        timeAgo="1d ago"
      />
      <AnimalCard
        breed="Persian Cat"
        image="https://www.cuteness.com/cuteness/identify-persian-cat/9d63ea7f7bd0464b8ebcf42a5d6b8a45"
        price="12,000"
        age="4 years"
        gender="♀ Female"
        location="Pune, India"
        timeAgo="4d ago"
      />
      <AnimalCard
        breed="Scottish Fold"
        image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQs-Rbr-2nb-otJKPJUkXaSwHNsHBSFkZnXjbh0hb85hIrKXyxLAZXMXZgAuQDPdPFxOBNzlx4uSKbrX5KBlXI4aw"
        price="22,000"
        age="3 years"
        gender="♂ Male"
        location="Chennai, India"
        timeAgo="5d ago"
      />
      <AnimalCard
        breed="Ranchu"
        image="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRHc-hn-wtBtKuCnyl_aQo3bp6Sqx8G2oIadx2-T3svIVieizMMDT-me2CBv8oksfsn"
        price="25,000"
        age="5 years"
        gender="♀ Female"
        location="Hyderabad, India"
        timeAgo="6d ago"
      />
      <AnimalCard
        breed="American Indian Horse"
        image="https://www.indianhorse.com/wp-content/uploads/2013/01/16-7421_1110115325480_3297088_n.jpg"
        price="13,000"
        age="2 years"
        gender="♂ Male"
        location="Kolkata, India"
        timeAgo="7d ago"
      />
      <AnimalCard
        breed="Marwari"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Humayun%2C_Marwari_Stallion_of_Virendra_Kankariya.jpg/1200px-Humayun%2C_Marwari_Stallion_of_Virendra_Kankariya.jpg"
        price="16,000"
        age="1 year"
        gender="♀ Female"
        location="Jaipur, India"
        timeAgo="8d ago"
      />
      <AnimalCard
        breed="Blue-and-Yellow macaw"
        image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQrv6NIqtaGOYM5jhfIgEqEK48HZR5yWxYaNPAULillAqSP_pMdRF4RZtM9znTx902m9oPRrWQL5OKrZKPY6oLjeA"
        price="17,000"
        age="2.5 years"
        gender="♂ Male"
        location="Surat, India"
        timeAgo="9d ago"
      />
    </div>
  );
};

export default AnimalCardsContainer;
