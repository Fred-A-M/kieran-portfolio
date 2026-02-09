"use client";
import { projects } from "@/app/consts"
import { CldImage } from 'next-cloudinary'

export default function Console0925() {

  const project = projects.find(project => project.name === "Console")

  return(
    <>
      <div className="relative flex justify-center items-center h-screen w-screen ">
        <div className='flex flex-col lg:flex-row items-start w-[70%] h-[60%] gap-20'>
          {project &&
            <div className='w-1/2 flex items-start gap-5'>
              <div className='flex flex-col'>
                <CldImage
                  src={project.gallery[0].image}
                  alt='image'
                  width={300}
                  height={300}
                  className="max-w-full max-h-full object-contain"
                />
                <p>{project.gallery[0].caption}</p>
              </div>
              <div className='flex flex-col'>
                <CldImage
                  src={project.gallery[1].image}
                  alt='image'
                  width={200}
                  height={200}
                  className="max-w-full max-h-full object-contain"
                />
                <p>{project.gallery[1].caption}</p>
              </div>
            </div>
          }
          <div className='w-1/2'>
            {project?.description.map((paragraph, index) => (
              <p className='pb-5 mx-auto' key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}