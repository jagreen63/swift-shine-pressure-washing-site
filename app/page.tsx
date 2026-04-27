use client;
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      phone,
      message,
      source_site: 'swift-shine-pressure-washing-site',
      business_name: 'Clear Shine Pressure Washing'
    };

    try {
      const response = await fetch('http://localhost:5678/webhook-test/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setStatus('Submission successful!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        setStatus('Submission failed. Please try again.');
      }
    } catch (error) {
      setStatus('Submission failed. Please try again.');
    }
  };

  return (
    <div>
      <h1>Welcome to Clear Shine Pressure Washing</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type='tel' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type='submit'>Submit</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
