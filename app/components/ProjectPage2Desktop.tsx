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


  return (
    <div className={`relative flex flex-col justify-center items-center h-screen w-screen transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}>
      <div className='flex flex-col text-center justify-center items-center gap-5 w-[70%] lg:w-[50%]'>
        <div className="relative w-full flex items-center justify-center ">
    
          {/* LEFT BUTTON */}
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
                  onLoad={() => {
                    if (index === 0) setFirstImageLoaded(true);
                  }}
                />
              </div>
            ))}
          </div>

          {/* RIGHT BUTTON */}
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
          {/* {project?.description.map((paragraph, index) => (
            <p className='last:mb-0 mb-2 lg:mb-5' key={index}>{paragraph}</p>
          ))} */}
          <p className=''>{project?.description[0]}</p>
          <p className='uppercase'>{project?.description[1]}</p>
        </div>
      </div>
    </div>
  )
}