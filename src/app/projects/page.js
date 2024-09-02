"use client";

import { useRef } from "react";
import ProjectCard from "../_UIcomponents/ProjectCard";
import { projectsData } from "@/data";
import Image from "next/image";

import leftarrow from "../../../public/left_arrow.svg";
import rightarrow from "../../../public/right_arrow.svg";

const Carousel = () => {
  const carouselRef = useRef(null);

  const handleScroll = (direction) => {
    const scrollAmount = carouselRef.current.clientWidth / 2;
    if (direction === "left") {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="m-auto">
    <main className="w-full py-6">
    <div className="relative bg-black py-8 w-[80%] mx-auto min-h-full mb-30">
      <div className="flex justify-center items-center flex-col gap-2">
        <h1 className="text-4xl md:text-6xl font-semibold text-center">
          Our<span className="green-gradient-text"> Projects</span>
        </h1>
        <p className="max-sm:text-sm break-words text-center relative">
          {"<p>From websites to apps, CLIs to Discord bots, Typescript to Golang</p>"}
        </p>
      </div>
      <div className="relative flex gap-4">
        <div
          ref={carouselRef}
          className="flex overflow-x-scroll scroll-smooth space-x-5 pb-4 max-h-[700px] mt-16 gap-8 hide-scrollbar"
          style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="carousel-item snap-start"
              style={{ scrollSnapAlign: "start" }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-[-56px] top-[50%] transform -translate-y-1/2 text-white rounded-full h-20 w-20 md:h-28 md:w-28 z-10"
        >
          <Image 
            src={leftarrow}
            alt="Left Arrow"
            width={112}
            height={112} 
          />
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-[-56px] top-[50%] transform -translate-y-1/2 text-white rounded-full h-20 w-20 md:h-28 md:w-28 z-10"
        >
          <Image 
            src={rightarrow}
            alt="Right Arrow"
            width={112} 
            height={112} 
          />
        </button>

        
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black from-[-38%] via-transparent to-transparent pointer-events-none z-0"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-52 bg-gradient-to-l from-black from-[-38%] via-transparent to-transparent pointer-events-none z-0"></div>
      </div>
    </div>
    </main>
    </div>
  );
};

export default Carousel;
