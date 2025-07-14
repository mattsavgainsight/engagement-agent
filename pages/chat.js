// pages/chat.js
import React, { useState, useEffect, useRef } from "react";

export default function ChatAgent() {
  const [messages, setMessages] = useState([
    { id: 1, from: "agent", text: "Hi Jane! How can I assist you with your learning today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage() {
    if (!input.trim()) return;

    const newMsg = { id: Date.now(), from: "learner", text: input.trim() };
    setMessages((msgs) => [...msgs, newMsg]);
    setInput("");

    // Simulate agent response with a delay
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        {
          id: Date.now() + 1,
          from: "agent",
          text:
            "Thanks for your message! We'll review your request and get back to you shortly.",
        },
      ]);
    }, 1500);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-indigo-700 mb-6">Chat Agent</h1>

      <div className="flex-grow overflow-auto border rounded-lg bg-white p-4 shadow mb-4 max-h-[500px]">
        {messages.map(({ id, from, text }) => (
          <div
            key={id}
            className={`mb-3 max-w-[70%] p-3 rounded-lg ${
              from === "agent" ? "bg-indigo-100 self-start" : "bg-indigo-600 text-white self-end"
            }`}
          >
            {text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <textarea
        rows={2}
        className="resize-none border rounded-md p-3 mb-3 focus:outline-indigo-500"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        className="bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
        onClick={sendMessage}
      >
        Send
      </button>
    </div>
  );
}
