import React from 'react';

const Page: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to ClearView Pressure Washing</h1>
      <p className="text-lg text-gray-700 mb-8">Your trusted partner for a cleaner, brighter property.</p>
      <a href="#contact" className="bg-blue-500 text-white py-2 px-4 rounded">Contact Us</a>

      <section id="contact" className="mt-16 p-6 bg-white shadow-md rounded">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" className="border p-2 mb-4 w-full" required />
          <input type="email" placeholder="Your Email" className="border p-2 mb-4 w-full" required />
          <textarea placeholder="Your Message" className="border p-2 mb-4 w-full" required />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
        </form>
      </section>
    </main>
  );
};

export default Page;