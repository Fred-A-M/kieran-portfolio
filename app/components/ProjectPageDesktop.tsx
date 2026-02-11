"use client";
import { CldImage } from 'next-cloudinary';
import { Project } from '../consts';

interface ProjectPageProps {
  project: Project | undefined;
}

export default function ProjectPageDesktop({project} : ProjectPageProps) {

  return (
    <div className="relative flex justify-center items-center h-screen w-screen ">
      <div className='flex items-stretch px-[10vw] gap-[10vw] 2xl:w-[85%]'>
        {project &&
          <div className='w-1/2 flex gap-5'>
            <div className='flex flex-col w-full'>
              <div className='relative grow'>
                <CldImage
                  src={project.gallery[0].image}
                  alt='image'
                  fill
                  className="object-cover"
                />
              </div>
              <p className='mt-2'>{project.gallery[0].caption}</p>
            </div>
            <div className='flex flex-col w-[70%] h-[70%]'>
              <div className='relative grow'>
                <CldImage
                  src={project.gallery[1].image}
                  alt='image'
                  fill
                  className="object-cover"
                />
              </div>
              <p className='mt-2'>{project.gallery[1].caption}</p>
            </div>
          </div>
        }
        <div className='w-1/2 h-full flex flex-col'>
          {project?.description.map((paragraph, index) => (
            <p className='last:mb-0 mb-5' key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  )
}