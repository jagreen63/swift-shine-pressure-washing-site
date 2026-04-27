export const metadata = {
  title: 'SparkleWash Solutions',
  description: 'Professional washing services for your needs.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}