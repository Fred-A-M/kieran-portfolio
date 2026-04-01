"use client";
import { profile } from "../consts";
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';

export default function About() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={`relative w-screen min-h-dvh flex justify-center transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="flex flex-col items-center justify-center pt-15 sm:pt-10 gap-5">
          {profile.background.map((line, index) => (
            <p 
              className='w-[80%] lg:w-[50%] 2xl:w-[40%]'
              key={index}
            >
              {line}
            </p>
          ))}
          <Link 
            href="https://www.instagram.com/kieran.slater/"
            className='w-[80%] lg:w-[50%] 2xl:w-[40%] hover:font-medium'
            target='_blank'
          >
            INSTAGRAM
          </Link>
          <CldImage
            src="MOUSEPOT_v5ws5x"
            alt="Mousepot"
            preload
            width={1933}
            height={1345}
            className="w-52 sm:w-2xs"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
    </div>
  );
}

