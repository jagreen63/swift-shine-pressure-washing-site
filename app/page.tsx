import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-blue-100'>
      <h1 className='text-4xl font-bold'>Welcome to Prime Pressure Washing</h1>
      <p className='mt-4 text-lg'>Quality pressure washing services for your home and business.</p>
      <a href='#contact' className='mt-6 px-4 py-2 bg-blue-600 text-white rounded'>Contact Us</a>
    </div>
  );
};

export default HomePage;