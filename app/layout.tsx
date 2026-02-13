import type { Metadata } from "next";
import NavBar from './components/NavBar';
import { americaMono, geistMono } from './ui/fonts';
import "./globals.css";


export const metadata: Metadata = {
  title: "KIERAN SLATER",
  description: "Furniture Maker",
  metadataBase: new URL('https://www.something.com'),
  openGraph: {
    title: 'KIERAN SLATER',
    description: 'Furniture Maker',
    images: [
      {
        url: '/rat.png',
        width: 1200,
        height: 676,
        alt: 'Kieran Slater - Very Good Boy',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/rat.png',
    apple: '/rat.png',
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
