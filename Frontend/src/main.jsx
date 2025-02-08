import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About.jsx";
// import Login from "./pages/Login.jsx";
import Profile from "./pages/Profile.jsx";  // Fixed import
import DocVideo from "./pages/DocVideo.jsx";
import DocChat from "./pages/DocChat.jsx";
import AiDoctor from "./pages/AiDoctor.jsx";
import Signup from "./pages/Signup.jsx";
import MarketPlace from "./pages/MarketPlace.jsx";
import Products from "./pages/Products.jsx";
import AnimalProduct from "./pages/AnimalProduct.jsx";
import EditProfile from "./pages/EditProfile.jsx";
import VeterinaryPage from "./pages/veterinarySupport.jsx";
import ChatPage from "./pages/chatPage.jsx";
import PostAd from "./pages/PostAd.jsx";
import LoginUser from "./pages/LoginPages/LoginUser.jsx";
import ProductPage from "./pages/ProductPage.jsx";
<<<<<<< HEAD
import SignupUser from "./pages/LoginPages/SignUpUser.jsx";
=======
import ConsultDoctor from "./Components/Vetrinary/consult.jsx";
>>>>>>> 1813563128de2007ff495e8f28f675de6af4b983

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>{/* Use 'index' for default route */}
      <Route path="" element={<About />} /> {/* Consistent naming */}
      <Route path="/marketplace" >
        <Route index element={<MarketPlace />} />
        <Route path=":id" element={<AnimalProduct />} />
      </Route>
      <Route path="/veterinary-support/*" element={<VeterinaryPage />} />
      <Route path='/Products' element={<Products />} />
      <Route path='/Product-page' element={<ProductPage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="chat/*" element={<ChatPage />} />
      <Route path="edit-profile/*" element={<EditProfile />} />
      <Route path="/post-ad" element={<PostAd />} />
      <Route path="aiDoctor" element={<AiDoctor />} />
      <Route path="doctor/chat" element={<DocChat />} /> {/* Fixed path */}
      <Route path="doctor/video" element={<DocVideo />} />
      <Route path="/login" element={<LoginUser/>} />
      <Route path="signup" element={<Signup />} />
<<<<<<< HEAD
      <Route path="signup-user" element={<SignupUser/>} />
=======
      <Route path="consult" element={<ConsultDoctor />} />
>>>>>>> 1813563128de2007ff495e8f28f675de6af4b983
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
