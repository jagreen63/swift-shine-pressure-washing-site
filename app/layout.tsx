export const metadata = {
  title: 'Sparkle Clean Pressure Washing',
  description: 'Professional pressure washing services to make your property shine.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}