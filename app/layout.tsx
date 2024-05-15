'use client';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full max-h-screen">
        <NextUIProvider>
          <main>{children}</main>
        </NextUIProvider>
      </body>
    </html>
  );
}
