use client;
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      message,
      source_site: 'swift-shine-pressure-washing-site',
      business_name: 'CleanWave Pressure Washing'
    };

    try {
      const res = await fetch('http://localhost:5678/webhook-test/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.ok) {
        setResponseMessage('Thank you for your message! We will get back to you soon.');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setError('');
      } else {
        setError('Failed to submit the form. Please try again later.');
        setResponseMessage('');
      }
    } catch (err) {
      setError('An error occurred. Please check your connection and try again.');
      setResponseMessage('');
    }
  };

  return (
    <div>
      <h1>Welcome to CleanWave Pressure Washing</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type='text' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type='submit'>Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}