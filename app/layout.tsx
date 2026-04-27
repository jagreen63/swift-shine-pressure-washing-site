export const metadata = {
  title: 'Spotless Pressure Washing',
  description: 'Expert pressure washing services.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
