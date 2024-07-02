import ProjectCard from "../_UIcomponents/ProjectCard";
import { projectsData } from "@/data";

function page() {
  return (
    <div className="min-h-screen mx-auto">
      <main className="min-h-screen w-full py-6">
        <div className="flex justify-center items-center flex-col gap-2 mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold text-center">
            Our<span className="green-gradient-text">Projects</span>
          </h1>
          <p className="max-sm:text-sm break-words text-center">
            {
              "<p>From websites to apps, CLIs to Discord bots, Typescript to Golang</p>"
            }
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center">
            <div className="carousel rounded-box w-[70vw] max-w-[1260px] space-x-4 p-4 gap-2 sm:gap-9 ">
              {projectsData.map((project, index) => (
                <div key={index} className="carousel-item snap-start  ">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
