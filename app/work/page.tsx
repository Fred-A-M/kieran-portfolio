"use client";
import { projects } from "../consts";
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';
import FadeInPage from '../components/FadeInPage';
import Link from 'next/link';


export default function Index() {
  const group = 'group-hover:font-bold cursor-pointer';
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  return (
    <FadeInPage>
      <div className="relative flex flex-col justify-center h-screen w-screen">
        <div className="w-full sm:w-[70%] mx-auto grid grid-cols-5 relative pt-10 px-3">

        {!isMobile && 
          <div className="pointer-events-none absolute w-[400px] h-[300px] lg:w-[600px] lg:h-[400px] top-1/2 left-5/6 -translate-x-5/6 -translate-y-1/2 z-50">
            {projects.map((project, index) => (
              <div
                key={`img-${index}`}
                className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <CldImage 
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={600}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          }

          {projects.map((project, index) => (
            <div 
              key={index} 
              className='contents group'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link className={`${group}`} href={project.link}>{index+1 < 10 && 0}{index+1}</Link>
              <Link className={`${group} text-right`} href={project.link}>{project.date}</Link>
              <Link className={`${group} text-right col-span-3 uppercase`} href={project.link}>{project.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </FadeInPage>
  );
}

