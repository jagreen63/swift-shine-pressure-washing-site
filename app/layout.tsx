export const metadata = { title: 'CleanSlate Pressure Washing', description: 'Professional pressure washing services for a clean start!' };

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}