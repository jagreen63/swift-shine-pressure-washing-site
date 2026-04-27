use client;

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    const data = {
      name,
      email,
      phone,
      message,
      source_site: 'swift-shine-pressure-washing-site',
      business_name: 'Sparkle Clean Pressure Washing'
    };

    try {
      const response = await fetch('http://localhost:5678/webhook-test/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSuccess('Your message has been sent successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      setError('There was a problem submitting your message.');
    }
  };

  return (
    <div>
      <h1>Welcome to Sparkle Clean Pressure Washing</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}