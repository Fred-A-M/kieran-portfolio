"use client";
import { projects } from "@/app/consts"
import { useIsMobile } from '@/app/hooks/useIsMobile';
import ProjectPageDesktop from '@/app/components/ProjectPageDesktop';
import ProjectPageMobile from '@/app/components/ProjectPageMobile'

export default function Landrace0723() {

  const project = projects.find(project => project.link === "/work-projects/landrace-0723");
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