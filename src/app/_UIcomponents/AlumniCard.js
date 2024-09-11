"use client";
import Image from "next/image";
import Linkdln from "../../../public/Linkdln.svg";
import Github from "../../../public/Github.svg";
import Email from "../../../public/Email.svg";
import { useEffect } from "react";

function AlumniCard({ name, position, links, imageUrl }) {
  useEffect(() => {
    const cards = document.querySelectorAll(".alumni-card");

    const handleMouseMove = (ev) => {
      cards.forEach((e) => {
        const blob = e.querySelector(".blob");
        const rec = e.getBoundingClientRect();
        const blobSize = getComputedStyle(e).getPropertyValue('--blob-size');
        const blobWidth = parseFloat(blobSize);
        const blobHeight = blob.offsetHeight;

        const x = ev.clientX - rec.left - (blobWidth / 2) -85;
        const y = ev.clientY - rec.top - (blobHeight / 2) -250;

        blob.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="alumni-card group h-[18rem] sm:h-[24rem] xl:h-[26rem]   flex flex-col w-[16rem] sm:w-[20rem] xl:w-[21rem] aspect-[4/5] p-[16px] rounded-[20px] bg-[#1A1A1A] hover:shadow-lg hover:scale-[1.03] transform transition-transform duration-300 ease-out">
      {/* Image container with hover zoom effect */}
      <div className="relative w-full aspect-square bg-[#4D4D4D] rounded-[20px] overflow-hidden">
        <Image 
          src={`/${imageUrl}`}
          alt="Profile picture" 
          fill 
          objectFit="cover"
          className="transition-transform duration-500 ease-in-out group-hover:scale-[1.05]"
        />
      </div>

      {/* Name and position */}
      <p className="pt-[6px] sm:pt-[10px] text-white text-[20px] sm:text-[26px] font-[500] transition-opacity duration-300 ease-in-out">
        {name}
      </p>
      <p className="text-[#FFFFFF80] text-[10px] sm:text-[14px] font-[500] pt-[3px] sm:pt-[5px] transition-opacity duration-300 ease-in-out">
        {position}
      </p>

      {/* Social links with smooth hover effect and delay for staggered animation */}
      <div className="flex pt-[10px] sm:pt-[16px] gap-[6px]">
        {links?.linkedin && (
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link opacity-50 transition-opacity duration-300 ease-in-out delay-100"
          >
            <Image 
              src={Linkdln} 
              width={24} 
              height={24} 
              alt="LinkedIn" 
            />
          </a>
        )}
        {links?.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link opacity-50 transition-opacity duration-300 ease-in-out delay-200"
          >
            <Image 
              src={Github} 
              width={24} 
              height={24} 
              alt="GitHub" 
            />
          </a>
        )}
        {links?.email && (
          <a
            href={`mailto:${links.email}`}
            className="social-link opacity-50 transition-opacity duration-300 ease-in-out delay-300"
          >
            <Image 
              src={Email} 
              width={24} 
              height={24} 
              alt="Email" 
            />
          </a>
        )}
      </div>

      {/* Blob effect */}
      <div className="blob"></div>
      <div className="fakeblob"></div>
    </div>
  );
}

export default AlumniCard;
