'use client';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

export function HeroImage({ onReady }: { onReady: () => void }) {
  return (
    <div className="relative w-screen h-screen">
      <CldImage
        src="FULL_1565_rj4phn"
        fill
        crop="fill"
        gravity="auto"
        alt="Full screen portfolio background"
        className='object-cover'
        preload
        onLoad={onReady}
      />
    </div>
  );
}

export default function MobileHome() {
  const [ready, setReady] = useState(false);


  return (
    <div
      className={`transition-opacity duration-200 ${ready ? 'opacity-100' : 'opacity-0'}`}
    >
      <HeroImage onReady={() => setReady(true)} />
    </div>
  );
}