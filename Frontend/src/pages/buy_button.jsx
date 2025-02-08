// import { useState } from 'react';

// const PaymentGateway = () => {
//   const [showPayment, setShowPayment] = useState(false);
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiry, setExpiry] = useState('');
//   const [cvv, setCvv] = useState('');
//   const [cardHolder, setCardHolder] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);

//   const formatCardNumber = (value) => {
//     return value.replace(/\D/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
//   };

//   const handleCardNumberChange = (e) => {
//     setCardNumber(formatCardNumber(e.target.value));
//   };

//   const handleExpiryChange = (e) => {
//     let value = e.target.value.replace(/\D/g, '');
//     if (value.length > 2) {
//       value = value.slice(0, 2) + '/' + value.slice(2, 4);
//     }
//     setExpiry(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsProcessing(true);
//     setTimeout(() => {
//       setIsProcessing(false);
//       setShowPayment(false);
//       alert('Payment Successful!');
//       setCardNumber('');
//       setExpiry('');
//       setCvv('');
//       setCardHolder('');
//     }, 2000);
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg text-center">
//       {!showPayment ? (
//         <button 
//           className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-green-600 transition duration-300"
//           onClick={() => setShowPayment(true)}
//         >
//           Pay Now →
//         </button>
//       ) : (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-96 animate-fadeIn">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-semibold">Secure Payment Gateway</h2>
//               <button className="text-gray-600 text-2xl" onClick={() => setShowPayment(false)}>&times;</button>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block font-medium">Card Number</label>
//                 <input 
//                   type="text" 
//                   value={cardNumber} 
//                   onChange={handleCardNumberChange} 
//                   placeholder="4242 4242 4242 4242" 
//                   maxLength="19" 
//                   required 
//                   className="w-full p-2 border rounded focus:border-green-500" 
//                 />
//               </div>
//               <div className="flex space-x-4">
//                 <div className="flex-1">
//                   <label className="block font-medium">Expiration Date</label>
//                   <input 
//                     type="text" 
//                     value={expiry} 
//                     onChange={handleExpiryChange} 
//                     placeholder="MM/YY" 
//                     maxLength="5" 
//                     required 
//                     className="w-full p-2 border rounded focus:border-green-500" 
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <label className="block font-medium">CVV</label>
//                   <input 
//                     type="password" 
//                     value={cvv} 
//                     onChange={(e) => setCvv(e.target.value)} 
//                     placeholder="•••" 
//                     maxLength="3" 
//                     required 
//                     className="w-full p-2 border rounded focus:border-green-500" 
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block font-medium">Card Holder Name</label>
//                 <input 
//                   type="text" 
//                   value={cardHolder} 
//                   onChange={(e) => setCardHolder(e.target.value)} 
//                   placeholder="John Doe" 
//                   required 
//                   className="w-full p-2 border rounded focus:border-green-500" 
//                 />
//               </div>
//               <button 
//                 type="submit" 
//                 className={`w-full p-3 rounded text-white font-semibold shadow-md transition duration-300 ${isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`} 
//                 disabled={isProcessing}
//               >
//                 {isProcessing ? 'Processing...' : 'Pay $XX.XX'}
//               </button>
//             </form>
//             <p className="text-sm text-gray-500 mt-4">🔒 Secure SSL encrypted payment processing</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PaymentGateway;
