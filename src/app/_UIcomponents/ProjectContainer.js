import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data";

const ProjectContainer = () => {
  return (
    <div className="flex justify-center items-center" >   
      <div className="carousel rounded-box w-[70vw] max-w-[1260px] space-x-4 p-4 gap-2 sm:gap-9 ">
        {projectsData.map((project, index) => (
          <div key={index} className="carousel-item snap-start  ">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectContainer;
