import './globals.css';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full max-h-screen">
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  );
}
