import { projects } from "@/app/consts"
import ProjectPageDesktop from '@/app/components/ProjectPageDesktop';

export default function Console0925() {

  const project = projects.find(project => project.name === "Console")

  return(
    <ProjectPageDesktop project={project}/>
  )
}