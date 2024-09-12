"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { pastEvents, ourEvents } from "@/data";

const PastEvent = ({ data }) => {
  return (
    <div className="bg-[#1a1a1a] flex-shrink-0 h-[160px] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] w-[100px] sm:w-[35vh] md:w-[40vh] lg:w-[50vh] rounded-lg sm:rounded-xl md:rounded-[24px] overflow-hidden relative group">
      {/* Container for image and gradient overlay */}
      <div className="relative w-full h-1/2 overflow-hidden">
        <Image
          src={`/${data.thumb}`}
          alt={data.title}
          layout="fill"
          className="transition-transform duration-500 ease-in-out group-hover:scale-105 saturate-150 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
      </div>
      {/* Title positioned in the bottom half */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-center justify-center">
        <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white bg-gradient-to-r from-[#37ee90] to-[#33dec6] bg-clip-text text-transparent">
          {data.title}
        </h1>
      </div>
    </div>
  );
};

const OurEvent = ({ data }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let interval;
    if (!isHovered && data.images && data.images.length > 0) {
      // Start auto-slide if not hovered
      interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === data.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Slide every 3 seconds
    }
    return () => {
      clearInterval(interval); // Clear interval on cleanup
    };
  }, [isHovered, data.images]);

  // Click on dot to navigate to the corresponding image
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      className="relative bg-[#1a1a1a] w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[350px] rounded-2xl p-3 flex flex-col justify-between h-[350px] sm:h-[450px] md:h-[500px] lg:h-[500px] xl:h-[490px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {data.images && data.images.length > 0 ? (
        <div className="h-[180px] sm:h-[220px] md:h-[240px] lg:h-[220px] xl:h-[230px] rounded-2xl overflow-hidden relative">
          <div
            className="w-full h-full flex transition-transform duration-1000 ease-in-out"
            style={{
              transform: `translateX(-${currentImageIndex * 100}%)`,
            }}
          >
            {data.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={data.title}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-[180px] sm:h-[220px] md:h-[240px] lg:h-[250px] xl:h-[270px] rounded-2xl bg-gray-500 flex justify-center items-center">
          <p className="text-white">No image available</p>
        </div>
      )}
      <div className="mt-4 h-[40%] flex flex-col p-2 justify-between">
        <div className="h-[40%] flex flex-col">
          <h3 className="text-white text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl font-semibold ">
            {data.title}
          </h3>
          <h4 className="text-gray-400 text-xs sm:text-sm md:text-sm lg:text-base xl:text-base mt-2 truncate">
            {data.subtitle}
          </h4>
        </div>
        <p className="text-gray-300 text-xs sm:text-xs md:text-sm lg:text-sm xl:text-sm mt-2 overflow-hidden text-ellipsis ">
          {data.description}
        </p>
      </div>
      <div className="flex justify-center mt-4">
        {data.images &&
          data.images.map((_, index) => (
            <span
              key={index}
              onClick={() => goToImage(index)} // Click handler for dot navigation
              className={`h-1.5 w-1.5 lg:h-2 lg:w-2 xl:h-2 xl:w-2 rounded-full mx-1 cursor-pointer ${
                currentImageIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
      </div>
    </div>
  );
};

function page() {
  return (
    <div className="min-h-full w-full mx-auto">
      <main className="bg-[#000]">
        <p className="text-3xl sm:text-6xl my-4 text-center text-transparent bg-clip-text bg-gradient-linear green-gradient-text">
          Events
        </p>
        <p className="text-xs sm:text-2xl text-[#999999] text-center">
          {
            "<p>From workshop to speaker sessions, CP challenges to Hackathons</p>"
          }
        </p>
        <div className="px-5 sm:px-32 py-12 w-full">
          <p className="text-white text-2xl sm:text-5xl mb-5 sm:mb-10">
            Upcoming Events
          </p>
          <div className="bg-[#1a1a1a] h-[198px] sm:h-[80vh] rounded-[20px] sm:rounded-[40px]"></div>
        </div>
        <div className="pl-5 sm:pl-32 pr-16 pb-12 w-full">
          <p className="text-white text-2xl sm:text-5xl mb-5 sm:mb-10 w-full">
            {" "}
            Past Events
          </p>
          <div className="flex gap-3 sm:gap-10 w-full overflow-x-scroll hide-scrollbar">
            {pastEvents.map((event) => (
              <PastEvent key={event} data={event} />
            ))}
          </div>
        </div>
        <div className="pl-5 sm:pl-32 pb-12 w-full">
          <p className="text-white text-2xl sm:text-5xl mb-5 sm:mb-10">
            {" "}
            Our Events
          </p>
          <div className="flex gap-3 sm:gap-10 overflow-x-scroll hide-scrollbar">
            {ourEvents.map((event) => (
              <OurEvent key={event.title} data={event} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;