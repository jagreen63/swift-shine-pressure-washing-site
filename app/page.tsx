use client;
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    try {
      const response = await fetch('http://localhost:5678/webhook-test/lead-capture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
          source_site: 'swift-shine-pressure-washing-site',
          business_name: 'ClearView Pressure Washing'
        })
      });

      if (response.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      } else {
        throw new Error('Failed to submit');
      }
    } catch (err) {
      setError('Error submitting form');
    }
  };

  return (
    <div>
      <h1>ClearView Pressure Washing</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
        <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type='tel' placeholder='Phone' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
        <button type='submit'>Submit</button>
      </form>
      {success && <p>Form submitted successfully!</p>}
      {error && <p>{error}</p>}
    </div>
  );
}