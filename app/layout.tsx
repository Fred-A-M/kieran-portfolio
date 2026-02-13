import type { Metadata } from "next";
import NavBar from './components/NavBar';
import { americaMono, geistMono } from './ui/fonts';
import "./globals.css";


export const metadata: Metadata = {
  title: "KIERAN SLATER",
  description: "Profession",
  metadataBase: new URL('https://www.something.com'),
  openGraph: {
    title: 'Something',
    description: 'Professional Something',
    images: [
      {
        url: '/Something.jpg',
        width: 1200,
        height: 629,
        alt: 'Something - Professional Something',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/Something.jpg',
    apple: '/Something.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${americaMono.variable} ${geistMono.variable} ${americaMono.className} antialiased text-xs sm:text-sm`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
