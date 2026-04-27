import React from 'react';
import { Metadata } from 'next';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang='en'>
      <head>
        <title>Clear View Pressure Washing</title>
        <meta name='description' content='Professional pressure washing services to enhance the curb appeal of your property.' />
      </head>
      <body className='bg-gray-50'>{children}</body>
    </html>
  );
};

export default Layout;