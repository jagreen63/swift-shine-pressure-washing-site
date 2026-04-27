use client;

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage('');
    
    const response = await fetch('http://localhost:5678/webhook-test/lead-capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        source_site: 'swift-shine-pressure-washing-site',
        business_name: 'CleanSlate Pressure Washing'
      })
    });

    if (response.ok) {
      setStatusMessage('Success! Your message has been sent.');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } else {
      setStatusMessage('Error! Something went wrong.');
    }
  };

  return (
    <div>
      <h1>Welcome to CleanSlate Pressure Washing</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
}