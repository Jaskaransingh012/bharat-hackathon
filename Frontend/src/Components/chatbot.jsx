import React, { useState, useRef, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyDevmJ3xpEgLeN4N-CguP1eZ15wJefaQUU"; // Store API key in environment variables
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever messages update
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e?.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const userMessage = { text: trimmedInput, sender: "user", timestamp: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: trimmedInput }] }] });
      const responseText = result.response.candidates[0]?.content?.parts[0]?.text || "I couldn't generate a response.";

      const botMessage = {
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I'm experiencing technical difficulties.", sender: "bot", timestamp: new Date() },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      sendMessage(e);
    }
  };

  return (
    <div className="flex flex-col h-[600px] w-full max-w-2xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden pt-4">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-teal-400 to-emerald-500 p-6">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <span className="text-teal-600 text-3xl">🤖</span>
          </div>
          <div>
            <h1 className="text-white text-2xl font-bold">AI Chatbot</h1>
            <p className="text-white text-sm font-semibold">Your intelligent assistant</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-4`}>
            <div
              className={`max-w-[75%] rounded-2xl p-4 relative ${
                msg.sender === "user" ? "bg-teal-500 text-white rounded-br-none" : "bg-gray-700 shadow-md rounded-bl-none text-white"
              }`}
            >
              <p className="chat leading-relaxed font-semibold">{msg.text}</p>
              <span className="text-xs block mt-1 text-white">
                {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
              <div className={`absolute -bottom-1 ${msg.sender === "user" ? "right-0" : "left-0"} w-3 h-3 transform rotate-45 ${msg.sender === "user" ? "bg-teal-500" : "bg-gray-700"}`} />
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-[75%] bg-gray-700 shadow-md rounded-2xl p-4 rounded-bl-none text-white">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <form onSubmit={sendMessage} className="border-t p-4 bg-white flex items-center">
        <div className="relative flex-1">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="w-full p-4 pr-16 rounded-xl border-2 border-gray-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 transition-all text-gray-900"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="ml-3 bg-teal-600 text-white p-3 rounded-xl hover:bg-teal-700 disabled:bg-gray-400 transition-colors shadow-md flex items-center justify-center"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
