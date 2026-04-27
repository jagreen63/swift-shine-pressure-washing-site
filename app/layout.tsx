export const metadata = {
  title: 'CleanSlate Pressure Washing',
  description: 'Professional pressure washing services to keep your property clean and pristine.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}