"use client";
import { profile } from "../consts";
import FadeInPage from '../components/FadeInPage';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';


export default function About() {
  return (
    <FadeInPage>
      <div className="relative w-screen min-h-dvh flex justify-center">
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
              className='w-[80%] lg:w-[50%] 2xl:w-[40%]'
              target='_blank'
            >
              INSTAGRAM
            </Link>
            <CldImage
              src="MOUSEPOT_v5ws5x"
              alt="Mousepot"
              width={1933}
              height={1345}
              className="w-52 sm:w-2xs"
            />
          </div>
      </div>
    </FadeInPage>
  );
}

