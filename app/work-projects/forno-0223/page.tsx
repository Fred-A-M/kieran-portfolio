"use client";
import { projects } from "@/app/consts"
import { useIsMobile } from '@/app/hooks/useIsMobile';
import ProjectPageDesktop from '@/app/components/ProjectPageDesktop';
import ProjectPageMobile from '@/app/components/ProjectPageMobile'

export default function Forno0223() {

  const project = projects.find(project => project.link === "/work-projects/forno-0223");
  const isMobile = useIsMobile();

  return(
    <>
      {isMobile ? (
        <ProjectPageMobile project={project} />
      ) : (
        <ProjectPageDesktop project={project} />
      )}
    </>
  )
}