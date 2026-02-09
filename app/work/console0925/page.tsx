"use client";
import { projects } from "@/app/consts"
import { CldImage } from 'next-cloudinary'

export default function Console0925() {

  const project = projects.find(project => project.name === "Console")

  return(
    <>
      <div className="relative flex justify-center items-center h-screen w-screen ">
        <div className='flex justify-center items-center w-[80%] h-[80%]'>
          <div className='w-1/2 flex gap-5'>
            {project?.gallery.map((image, index) =>(
              <CldImage
                key={index}
                src={image.image}
                alt='image'
                width={300}
                height={300}
                // className=
              />
            ))}

          </div>
          <div className='w-1/2 flex flex-col'>
            {project?.description.map((paragraph, index) => (
              <p className='pb-5 w-[60%] mx-auto' key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}