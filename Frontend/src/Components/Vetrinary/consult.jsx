import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ConsultDoctor = () => {
  const [mobile, setMobile] = useState("");
  const [symptom, setSymptom] = useState("");

  // Check if both fields are valid to enable the button
  const isFormValid = symptom.length >= 4 && mobile.length >= 10;

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50 ">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl flex flex-col md:flex-row">
        {/* Left: Form Section */}
        <div className="md:w-2/3 pr-6">
          <h2 className="text-2xl font-semibold text-gray-800">Consult with a Doctor</h2>
          <p className="mt-4 text-gray-700">Tell us your symptom or health problem</p>
          
          <input
            type="text"
            placeholder="Eg: fever, headache"
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">Min 4 characters</p>

          {/* <p className="mt-4 text-gray-700">A relevant speciality will be shown below...</p> */}

          <p className="mt-4 text-gray-700">Mobile number</p>
          <PhoneInput
            country={"in"}
            value={mobile}
            onChange={setMobile}
            inputStyle={{
              width: "100%",
              height: "44px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              paddingLeft: "48px",
            }}
            containerStyle={{ marginTop: "8px" }}
          />
          <p className="text-xs text-gray-500 mt-1">A verification code will be sent to this number.</p>

          <button
            className={`mt-6 w-full py-3 rounded-lg transition ${
              isFormValid ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!isFormValid}
          >
            Continue
          </button>
        </div>

        {/* Right: Image & Text Section */}
        <div className="md:w-1/3 flex flex-col items-center justify-center border-t md:border-l md:border-t-0 pt-6 md:pt-0 pl-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4228/4228636.png"
            alt="Private & Secure"
            className="w-24"
          />
          <p className="mt-2 text-gray-700 font-semibold">Private & Secure</p>
        </div>
      </div>
    </div>
  );
};

export default ConsultDoctor;
