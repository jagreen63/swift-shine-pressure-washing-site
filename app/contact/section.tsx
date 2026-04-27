import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id='contact' className='my-12 p-6 bg-white shadow-md rounded'>
      <h2 className='text-3xl font-semibold'>Contact Us</h2>
      <form className='mt-4'>
        <input type='text' placeholder='Your Name' className='w-full p-3 border border-gray-300 rounded mb-4' required />
        <input type='email' placeholder='Your Email' className='w-full p-3 border border-gray-300 rounded mb-4' required />
        <textarea placeholder='Your Message' className='w-full p-3 border border-gray-300 rounded mb-4' rows={4} required></textarea>
        <button type='submit' className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700'>Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;