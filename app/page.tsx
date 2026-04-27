use client;
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    const payload = {
      name,
      email,
      phone,
      message,
      source_site: 'swift-shine-pressure-washing-site',
      business_name: 'Clear View Pressure Washing'
    };

    try {
      const response = await fetch('http://localhost:5678/webhook-test/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Network response was not ok');
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <h1>Clear View Pressure Washing</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' required />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required type='email' />
        <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Phone' required />
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Message' required />
        <button type='submit'>Submit</button>
      </form>
      {success && <p>Submission successful!</p>}
      {error && <p>Submission failed. Please try again.</p>}
    </div>
  );
}