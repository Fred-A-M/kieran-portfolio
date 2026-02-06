'use client';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

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
        style={{objectFit: 'cover'}}
      />

      {/* 2. The Text Overlay */}
      <div style={{ 
        position: 'relative', // Keeps it above the absolute-filled image
        zIndex: 10, 
        paddingTop: '20px',
        paddingRight: '20px',
        paddingLeft: '20px',
        display: 'flex', 
        justifyContent: 'space-between', 
        height: '100%',
        textAlign: 'center'
      }}
      >
        <Link 
          href="/about"
          style={{textDecoration: "none", color: "black"}}
          className="no-underline hover:underline"
        >
          <h2>
            ABOUT
          </h2>
        </Link>
        <h2>
          KIERAN SLATER
        </h2>
        <h2>
          INDEX
        </h2>
      </div>
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