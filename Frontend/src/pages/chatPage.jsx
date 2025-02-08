import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import img from "../assets/Images/7309681.jpg"; // Owner Profile Image

const ChatPage = () => {
  const { ownerId } = useParams();
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! Is the animal still available?", sender: "user" },
    { id: 2, text: "Yes! It's available. Would you like to visit?", sender: "owner" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { id: messages.length + 1, text: input, sender: "user" }]);
    setInput("");
  };

  return (
    <div className="max-w-6xl m-auto min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white py-4 px-6 flex items-center shadow-lg">
        <Link to="/" className="text-white text-2xl font-bold">←</Link>
        <div className="flex items-center ml-4">
          <img src={img} alt="Owner" className="w-12 h-12 rounded-full border-2 border-white" />
          <h2 className="text-lg font-semibold ml-3">Chat with Owner</h2>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs px-4 py-3 rounded-lg shadow-md ${msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-900"}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Box */}
      <div className="bg-white p-4 flex items-center border-t">
        <input
          type="text"
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="ml-3 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
