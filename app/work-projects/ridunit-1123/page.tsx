"use client";
import { projects } from "@/app/consts"
import { useIsMobile } from '@/app/hooks/useIsMobile';
import ProjectPageDesktop from '@/app/components/ProjectPageDesktop';
import ProjectPageMobile from '@/app/components/ProjectPageMobile'

export default function RidUnit1123() {

  const project = projects.find(project => project.name === "Rid Unit");
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