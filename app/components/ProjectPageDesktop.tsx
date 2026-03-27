"use client";
import { CldImage } from 'next-cloudinary';
import { Project } from '../consts';
import { useState } from 'react';
import Carousel from './Carousel';

interface ProjectPageProps {
  project: Project | undefined;
}

export default function ProjectPageDesktop({project} : ProjectPageProps) {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ready = firstImageLoaded;
  // const pointers = project && project?.gallery.length > 1;
  const total = project?.gallery.length || 0;

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  // Preload neighbors (instant transitions)
  const items = [prevIndex, currentIndex, nextIndex];

  if (!project || total === 0) return null;


  return (
    <div className={`relative flex flex-col justify-center items-center h-screen w-screen px-3 transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}>
      <div className='flex flex-col text-center justify-center items-center gap-5 w-[70%] lg:w-[50%]'>
        <div className="relative w-full flex items-center justify-center ">

          <Carousel
            setCurrentIndex={setCurrentIndex}
            total={total}
            galleryLength={project.gallery.length}
          >
            {items.map((index) => (
              <div key={index} className="relative min-w-full h-full">
                <CldImage
                  src={project.gallery[index].image}
                  alt={`Image ${index}`}
                  fill
                  className="object-contain pointer-events-none"
                  preload={index === currentIndex}
                  onLoad={() => {
                    if (index === 0) setFirstImageLoaded(true);
                  }}
                />
              </div>
            ))}
          </Carousel>

        </div>

        <div className="flex justify-center items-center gap-2">
          {project?.gallery.map((_, index) => (
            <p
              key={index}
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