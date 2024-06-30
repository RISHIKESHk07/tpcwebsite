import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    // changed dimensions from  figma design (388X760) to improve readibility
    <div className=" w-[196px] h-[384px] sm:w-[245px] sm:h-[480px] xl:w-[330px] xl:h-[646px] shrink-0 rounded-[40px] bg-[#1A1A1A] overflow-hidden relative">
      <Image
        src="/Github.svg" //project.image
        alt="ProjectCard" //project.title
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ProjectCard;
