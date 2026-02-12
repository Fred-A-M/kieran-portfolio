'use client';
import { CldImage } from 'next-cloudinary';

export function HeroImage() {
  return (
    <div className="relative w-screen h-screen">
      {/* 1. The Background Image */}
      <CldImage
        src="FULL_1565_rj4phn"
        fill
        crop="fill"
        gravity="auto"
        alt="Full screen portfolio background"
        className='object-cover'
        preload
      />
    </div>
  );
}

export default function MobileHome() {


  return (
    <>
      <HeroImage />
    </>
  );
}