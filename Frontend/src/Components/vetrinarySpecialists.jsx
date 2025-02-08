// import React from "react";
// import vetSpecialist from "../assets/Images/generalVetrinary.jpeg";
// import vetSurgery from "../assets/Images/petSurgery.jpeg";
// import petDermatologist from "../assets/Images/pet-dermatology.webp";
// import cowFood from "../assets/Images/cowFood.jpeg";


// const VeterinarySpecialities = () => {
//   const specialities = [
//     {
//       id: 1,
//       name: "General Veterinary",
//       price: "₹499",
//       image: vetSpecialist,
//       link: "/consult/vet/general",
//     },
//     {
//       id: 2,
//       name: "Pet Dermatology",
//       price: "₹449",
//       image: petDermatologist,
//       link: "/consult/vet/dermatology",
//     },
//     {
//       id: 3,
//       name: "Pet Surgery",
//       price: "₹599",
//       image: vetSurgery,
//       link: "/consult/vet/surgery",
//     },
//     {
//       id: 4,
//       name: "Pet Nutrition",
//       price: "₹399",
//       image: cowFood,
//       link: "/consult/vet/nutrition",
//     },
//     // {
//     //   id: 5,
//     //   name: "Pet Cardiology",
//     //   price: "₹549",
//     //   image: "/images/vet-cardiology.svg",
//     //   link: "/consult/vet/cardiology",
//     // },
//     // {
//     //   id: 6,
//     //   name: "Pet Dentistry",
//     //   price: "₹499",
//     //   image: "/images/vet-dentistry.svg",
//     //   link: "/consult/vet/dentistry",
//     // },
//   ];

//   return (
//     <div id="TopSpecialityCardsContainer" className="bg-gray-50 py-8 w-full">
//       <div className="homepage-section-wrapper max-w-[80vw] mx-auto px-4 ">
//         <h2 className="homepage-section-heading text-2xl font-bold text-gray-800 mb-2">
//           20+ Veterinary Specialities
//         </h2>
//         <p className="homepage-section-paragraph text-gray-600 mb-6">
//           Consult with top veterinary doctors across specialities
//         </p>
//         <a
//           href="/consult/vet/all"
//           className="link top-speciality-cards__button text-blue-600 hover:underline"
//         >
//           See all Specialities
//         </a>

//         {/* Slider Container */}
//         <div className="glide slider mt-6 overflow-hidden">
//           <div className="glide__track" data-glide-el="track">
//             <ul className="glide__slides flex gap-4 justify-between">
//               {specialities.map((speciality) => (
//                 <li
//                   key={speciality.id}
//                   className="glide__slide flex-shrink-0 w-40"
//                 >
//                   <div className="horizontal-list-card bg-white min-w-[200px] rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
//                     <div className="top-speciality-card text-center">
//                       <figure>
//                         <img
//                           src={speciality.image}
//                           alt={speciality.name}
//                           className="rounded-full w-16 h-16 mx-auto"
//                         />
//                       </figure>
//                       <div className="content mt-4">
//                         <h4 className="heading text-lg font-semibold text-gray-800">
//                           {speciality.name}
//                         </h4>
//                         <p className="price text-gray-600 mt-2">{speciality.price}</p>
//                         <a
//                           href={speciality.link}
//                           className="link cta mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
//                         >
//                           Consult now
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Slider Controls */}
//           {/* <div className="slider-controls mt-4 flex justify-center gap-4">
//             <button
//               className="slider-back bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
//               data-glide-dir="<"
//             >
//               <i className="icon-ic_back_cheveron">←</i>
//             </button>
//             <button
//               className="slider-next bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition-colors"
//               data-glide-dir=">"
//             >
//               <i className="icon-ic_next_cheveron">→</i>
//             </button>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VeterinarySpecialities;

import React from "react";
import vetSpecialist from "../assets/Images/generalVetrinary.jpeg";
import vetSurgery from "../assets/Images/petSurgery.jpeg";
import petDermatologist from "../assets/Images/pet-dermatology.webp";
import cowFood from "../assets/Images/cowFood.jpeg";
import { Link } from "react-router-dom";

const VeterinarySpecialities = () => {
  const specialities = [
    {
      id: 1,
      name: "General Veterinary",
      price: "₹499",
      image: vetSpecialist,
      link: "/consult/vet/general",
    },
    {
      id: 2,
      name: "Pet Dermatology",
      price: "₹449",
      image: petDermatologist,
      link: "/consult/vet/dermatology",
    },
    {
      id: 3,
      name: "Pet Surgery",
      price: "₹599",
      image: vetSurgery,
      link: "/consult/vet/surgery",
    },
    {
      id: 4,
      name: "Pet Nutrition",
      price: "₹399",
      image: cowFood,
      link: "/consult/vet/nutrition",
    },
  ];

  return (
    <div id="TopSpecialityCardsContainer" className="bg-gray-50 py-8 w-full">
      <div className="homepage-section-wrapper max-w-[80vw] mx-auto px-4 ">
        <h2 className="homepage-section-heading text-2xl font-bold text-gray-800 mb-2">
          20+ Veterinary Specialities
        </h2>
        <p className="homepage-section-paragraph text-gray-600 mb-6">
          Consult with top veterinary doctors across specialities
        </p>
        <a
          href="/consult/vet/all"
          className="link top-speciality-cards__button text-blue-600 hover:underline"
        >
          See all Specialities
        </a>

        {/* Slider Container */}
        <div className="glide slider mt-6 overflow-hidden">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides flex gap-4 justify-start"> {/* Reduced gap between cards */}
              {specialities.map((speciality) => (
                <li
                  key={speciality.id}
                  className="glide__slide flex-shrink-0 w-[250px]" // Increased width of each card
                >
                  <div className="horizontal-list-card bg-white min-w-[250px] rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
                    <div className="top-speciality-card text-center">
                      <figure>
                        <img
                          src={speciality.image}
                          alt={speciality.name}
                          className="rounded-full w-16 h-16 mx-auto"
                        />
                      </figure>
                      <div className="content mt-4">
                        <h4 className="heading text-lg font-semibold text-gray-800">
                          {speciality.name}
                        </h4>
                        <p className="price text-gray-600 mt-2">{speciality.price}</p>
                        <Link
                          to={"/consult"}
                          className="link cta mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          Consult now
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VeterinarySpecialities;
