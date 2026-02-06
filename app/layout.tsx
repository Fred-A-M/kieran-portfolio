import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from './components/NavBar';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
