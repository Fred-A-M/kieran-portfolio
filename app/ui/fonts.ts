import localFont from 'next/font/local';
import { Geist_Mono } from "next/font/google";

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const americaMono = localFont({
  src: [
    {
      path: '../fonts/GT-America-Mono-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/GT-America-Mono-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/GT-America-Mono-Medium.otf',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap', // Optional: 'swap' ensures fallback font is used while custom font loads
  variable: '--font-america-mono', // Optional: for use with CSS variables/Tailwind CSS
  fallback: ['var(--font-geist-mono)', 'monospace'],
});