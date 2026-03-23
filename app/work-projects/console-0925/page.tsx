"use client";
import { projects } from "@/app/consts"
import { useIsMobile } from '@/app/hooks/useIsMobile';
import ProjectPage2Desktop from '@/app/components/ProjectPage2Desktop';
import ProjectPage2Mobile from '@/app/components/ProjectPage2Mobile'

export default function Console0925() {

  const project = projects.find(project => project.name === "Console");
  const isMobile = useIsMobile();

  return(
    <>
      {isMobile ? (
        <ProjectPage2Mobile project={project} />
      ) : (
        <ProjectPage2Desktop project={project} />
      )}
    </>
  )
}