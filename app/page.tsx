import React from 'react';

const Page: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold'>Pro Clean Pressure Washing</h1>
      <p className='mt-4 text-lg'>Your trusted partner for a cleaner, brighter property.</p>
      <a href='#contact' className='mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Contact Us</a>
    </div>
  );
};

export default Page;