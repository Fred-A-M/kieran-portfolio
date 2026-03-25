"use client";
import { CldImage } from 'next-cloudinary';
import { Project } from '../consts';
import { useState } from 'react';

interface ProjectPageProps {
  project: Project | undefined;
}

export default function ProjectPageDesktop({project} : ProjectPageProps) {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ready = firstImageLoaded;
  const pointers = project && project?.gallery.length > 1;


  return (
    <div className={`relative flex flex-col justify-center items-center h-screen w-screen transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}>
      <div className='flex flex-col text-center justify-center items-center gap-5 w-[70%] lg:w-[50%]'>
        <div className="relative w-full flex items-center justify-center ">
    
          {/* LEFT BUTTON */}
          {pointers && 
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === 0 ? (project?.gallery.length || 1) - 1 : prev - 1
                )
              }
              className="absolute left-0 -translate-x-full pr-4 text-3xl hover:text-4xl"
            >
              ←
            </button>
          }

          {/* CAROUSEL */}
          <div className="relative w-[80%] h-[40vh] lg:h-[50vh]">
            {project?.gallery.map((img, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <CldImage
                  src={img.image}
                  alt={`Project image ${index}`}
                  fill
                  className="object-contain"
                  preload={index === 0}
                  onLoad={() => {
                    if (index === 0) setFirstImageLoaded(true);
                  }}
                />
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}

          {pointers &&
            <button
              onClick={() =>
                setCurrentIndex((prev) =>
                  prev === (project?.gallery.length || 1) - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-0 translate-x-full pl-4 text-3xl hover:text-4xl"
            >
              →
            </button>
          }

        </div>
        <div className="flex justify-center items-center gap-2">
          {project?.gallery.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 w-1 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-black"
                  : "bg-gray-300 opacity-60"
              }`}
            />
          ))}
        </div>


        <div className='flex flex-col gap-5 mt-5'>
          <p className=''>{project?.description[0]}</p>
          <p className='uppercase'>{project?.description[1]}</p>
        </div>
      </div>
    </div>
  )
}