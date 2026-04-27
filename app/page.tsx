import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className='flex flex-col items-center justify-center h-screen p-4 text-center'>
      <h1 className='text-4xl font-bold mb-4'>Welcome to Clear View Pressure Washing</h1>
      <p className='text-lg mb-8'>We provide high-quality pressure washing services to make your property shine.</p>
      <a href='#contact' className='bg-blue-500 text-white py-2 px-4 rounded'>Contact Us</a>
      <section id='contact' className='mt-16'>
        <h2 className='text-2xl font-semibold mb-4'>Get in Touch</h2>
        <form className='flex flex-col space-y-4'>
          <input type='text' placeholder='Your Name' className='border rounded p-2' />
          <input type='email' placeholder='Your Email' className='border rounded p-2' />
          <textarea placeholder='Your Message' className='border rounded p-2' rows={4} />
          <button type='submit' className='bg-green-500 text-white py-2 rounded'>Send Message</button>
        </form>
      </section>
    </main>
  );
};

export default HomePage;