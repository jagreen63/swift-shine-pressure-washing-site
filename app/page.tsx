import React from 'react';

const HomePage: React.FC = () => {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-blue-600'>Clean Slate Pressure Washing</h1>
      <p className='mt-4 text-lg text-gray-700'>Your trusted partner for a pristine clean.</p>
      <section className='mt-10'>
        <h2 className='text-2xl font-semibold'>Contact Us</h2>
        <form className='mt-4 flex flex-col'>
          <input type='text' placeholder='Your Name' className='p-2 border border-gray-300 rounded' />
          <input type='email' placeholder='Your Email' className='p-2 mt-2 border border-gray-300 rounded' />
          <textarea placeholder='Your Message' className='p-2 mt-2 border border-gray-300 rounded'></textarea>
          <button type='submit' className='mt-4 p-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Submit</button>
        </form>
      </section>
    </main>
  );
};

export default HomePage;