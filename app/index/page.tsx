"use client";
import { projects } from "../consts";
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';


export default function Index() {
  const group = 'group-hover:font-bold cursor-pointer';

  return (
    <div className="relative flex flex-col justify-center h-screen w-screen ">
      <div className="w-[70%] mx-auto grid grid-cols-5 relative">
        {projects.map((project, index) => (
          <div key={index} className='contents group'>
            <div className="hoveringImage absolute w-[600px] h-[400px] top-1/2 left-5/6 -translate-x-5/6 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
              <CldImage 
                src={project.image}
                alt={project.name}
                width={600}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <Link className={`${group}`} href={project.link}>{index+1 < 10 && 0}{index+1}</Link>
            <Link className={`${group} text-right`} href={project.link}>{project.date}</Link>
            <Link className={`${group} text-right col-span-3`} href={project.link}>{project.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

