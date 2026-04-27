export const metadata = {
  title: 'ClearView Pressure Washing',
  description: 'Top-notch pressure washing services.'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}