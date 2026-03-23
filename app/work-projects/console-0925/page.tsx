"use client";
import { projects } from "@/app/consts"
import { useIsMobile } from '@/app/hooks/useIsMobile';
import ProjectPage2Desktop from '@/app/components/ProjectPage2Desktop';
import ProjectPageMobile from '@/app/components/ProjectPageMobile'

export default function Console0925() {

  const project = projects.find(project => project.name === "Console");
  const isMobile = useIsMobile();

  return(
    <>
      {isMobile ? (
        <ProjectPageMobile project={project} />
      ) : (
        <ProjectPage2Desktop project={project} />
      )}
    </>
  )
}