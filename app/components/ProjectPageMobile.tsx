"use client";
import { CldImage } from 'next-cloudinary';
import { Project } from '../consts';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

interface ProjectPageProps {
  project: Project | undefined;
}

export default function ProjectPageMobile({project} : ProjectPageProps) {
  const [firstImageLoaded, setFirstImageLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ready = firstImageLoaded;

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prev) =>
        prev === (project?.gallery.length || 1) - 1 ? 0 : prev + 1
      );
    },
    onSwipedRight: () => {
      setCurrentIndex((prev) =>
        prev === 0 ? (project?.gallery.length || 1) - 1 : prev - 1
      );
    },
    preventScrollOnSwipe: true,
    trackMouse: true, // optional (lets you swipe with mouse on desktop)
  });


  return (
    <div className={`relative flex flex-col justify-center items-center h-screen w-screen transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}>
      <div className='flex flex-col text-center justify-center items-center gap-2 lg:gap-5'>
        <div className="relative w-full flex flex-col items-center justify-center gap-2 lg:gap-5">
    

          {/* CAROUSEL */}
          <div className="relative w-full h-[40vh] lg:h-[50vh]" {...handlers}>
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
                  className="object-contain pointer-events-none"
                  preload={index === 0}
                  onLoad={() => {
                    if (index === 0) setFirstImageLoaded(true);
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2">
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

        </div>
        <div className='flex flex-col gap-2 mt-5 w-[80%]'>
          <p className=''>{project?.description[0]}</p>
          <p className='uppercase'>{project?.description[1]}</p>
        </div>
      </div>
    </div>
  )
}