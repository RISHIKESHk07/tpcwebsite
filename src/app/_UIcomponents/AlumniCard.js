"use client";
import Image from "next/image";
import Linkdln from "../../../public/Linkdln.svg";
import Github from "../../../public/Github.svg";
import Email from "../../../public/Email.svg";

function AlumniCard({ name, position, links, imageUrl }) {
  return (
    <div className="flex-col w-[16rem] sm:w-[20rem] xl:w-[24rem] aspect-[4/5] pl-[16px] pr-[16px] py-[12px] rounded-[20px] bg-[#1A1A1A]">
      <div className="w-[14rem] sm:w-[18rem] xl:w-[22rem] aspect-[1/1] bg-[#4D4D4D] rounded-[6.7px]">
        <Image src={Github} width={340} height={340} alt="test"/>
      </div>
      <p className="pt-[6px] sm:pt-[10px] text-white text-[20px] sm:text-[26px] font-[500]">{name}</p>
      <p className="text-[#FFFFFF80] text-[10px] sm:text-[14px] font-[500] pt-[3px] sm:pt-[5px]">
        {position}
      </p>
      <div className="join join-horizontal pt-[10px] sm:pt-[16px] gap-[6px]">
        {
            links && links.linkedin && (
                <a
                onClick={() => {
                    console.log("clicked");
                }}
                >
                <Image
                    src={Linkdln}
                    width={24}
                    height={24}
                    alt="Picture of the author"
                />
                </a>
            )
        }
        {
            links && links.github && (
                <a
                onClick={() => {
                    console.log("clicked");
                }}
                >
                <Image
                    src={Github}
                    width={24}
                    height={24}
                    alt="Picture of the author"
                />
                </a>
            )
        }
        {
            links && links.email && (
                <a
                onClick={() => {
                    console.log("clicked");
                }}
                >
                <Image
                    src={Email}
                    width={24}
                    height={24}
                    alt="Picture of the author"
                />
                </a>
            )
        }
      </div>
    </div>
  );
}

export default AlumniCard;
