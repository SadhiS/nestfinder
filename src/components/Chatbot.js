'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your AI NestFinder assistant. What kind of property are you looking for?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setMessages([...messages, { text: input, sender: 'user' }]);
    const currentInput = input;
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      let reply = "I can help you find that! Let me check our listings.";
      if (currentInput.toLowerCase().includes('metro')) {
        reply = "Yes, there are several properties near the metro station. Would you like to see 2BHKs or 3BHKs?";
      } else if (currentInput.toLowerCase().includes('maintenance')) {
        reply = "Maintenance varies by society, but typically ranges from ₹1000 to ₹3000 per month.";
      }
      setMessages(prev => [...prev, { text: reply, sender: 'bot' }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '60px', height: '60px', borderRadius: '50%', background: 'var(--primary)', color: 'white', border: 'none', boxShadow: 'var(--shadow-lg)', cursor: 'pointer', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="card" style={{ position: 'fixed', bottom: '2rem', right: '2rem', width: '350px', height: '500px', display: 'flex', flexDirection: 'column', zIndex: 1000, boxShadow: 'var(--shadow-lg)' }}>
          {/* Header */}
          <div style={{ padding: '1rem', background: 'var(--primary)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.25rem' }}>✨</span>
                <strong style={{ margin: 0 }}>AI Assistant</strong>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '1.25rem' }}>×</button>
          </div>
          
          {/* Messages */}
          <div style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', background: 'var(--background)' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', background: msg.sender === 'user' ? 'var(--primary)' : 'var(--surface)', color: msg.sender === 'user' ? 'white' : 'var(--foreground)', padding: '0.75rem 1rem', borderRadius: '1rem', borderBottomRightRadius: msg.sender === 'user' ? '0' : '1rem', borderBottomLeftRadius: msg.sender === 'bot' ? '0' : '1rem', maxWidth: '80%', border: msg.sender === 'bot' ? '1px solid var(--border)' : 'none' }}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSend} style={{ padding: '1rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.5rem', background: 'var(--surface)' }}>
            <input 
              type="text" 
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask anything..." 
              style={{ flex: 1, padding: '0.75rem', borderRadius: '2rem', border: '1px solid var(--border)', outline: 'none' }}
            />
            <button type="submit" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
