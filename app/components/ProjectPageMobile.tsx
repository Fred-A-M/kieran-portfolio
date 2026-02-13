"use client";
import { CldImage } from 'next-cloudinary';
import { Project } from '../consts';
import { useState } from 'react';

interface ProjectPageProps {
  project: Project | undefined;
}

export default function ProjectPageDesktop({project} : ProjectPageProps) {
  const [loadedCount, setLoadedCount] = useState(0);
  const ready = loadedCount >= 2;

  return (
    <div className={`relative flex justify-center items-center h-screen w-screen transition-opacity duration-200 ${ready ? "opacity-100" : "opacity-0"}`}>
      <div className='flex items-stretch px-3 gap-5 h-fit mt-10'>
        {project &&
          <div className='w-1/2 flex flex-col gap-2 pt-1'>
            <div className='flex flex-col flex-1'>
              <div className='relative grow'>
                <CldImage
                  src={project.gallery[0].image}
                  alt='image'
                  fill
                  className="object-cover"
                  preload
                  onLoad={() => setLoadedCount(c => c + 1)}
                />
              </div>
              <p className='mt-2'>{project.gallery[0].caption}</p>
            </div>
            <div className='flex flex-col flex-1'>
              <div className='relative grow'>
                <CldImage
                  src={project.gallery[1].image}
                  alt='image'
                  fill
                  className="object-cover"
                  preload
                  onLoad={() => setLoadedCount(c => c + 1)}
                />
              </div>
              <p className='mt-2'>{project.gallery[1].caption}</p>
            </div>
          </div>
        }
        <div className='w-1/2 h-full flex flex-col'>
          {project?.description.map((paragraph, index) => (
            <p className='last:mb-0 mb-2 lg:mb-5' key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )

}