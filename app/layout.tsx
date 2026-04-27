export const metadata = {
  title: 'CleanWave Pressure Washing',
  description: 'Professional pressure washing services to keep your property clean.'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}