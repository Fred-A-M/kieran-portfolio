'use client';
import { CldImage } from 'next-cloudinary';
import NavBar from './NavBar';

export function HeroImage() {
  return (
    <div className="relative w-screen h-screen">
      {/* 1. The Background Image */}
      <CldImage
        src="FULL_1515_nz2se2"
        fill
        crop="fill"
        gravity="auto"
        alt="Full screen portfolio background"
        className='object-cover'
      />
      <NavBar/>
    </div>
  );
}

export default function DesktopHome() {


  return (
    <>
      <HeroImage />
    </>
  );
}