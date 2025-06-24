import React, { useState } from 'react';
import { sendMessage } from './api';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    const response = await sendMessage(input);
    const botMessage = { sender: "bot", text: response.reply };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chat;
