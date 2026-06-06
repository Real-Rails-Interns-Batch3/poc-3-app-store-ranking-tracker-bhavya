import React from 'react';
import './globals.css'; // This is correct inside a .tsx file

export const metadata = {
  title: 'App Store Ranking Tracker',
  description: 'EV Store Metrics Analytics',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#050811] text-slate-300 antialiased overflow-y-auto m-0 p-0">
        {children}
      </body>
    </html>
  );
}