"use client"
import Image from "next/image"
import Linkdln from "../../../public/Linkdln.svg"
import Github from "../../../public/Github.svg"
import Email from "../../../public/Email.svg"

function TicketCard({ name, position, ImageSRC, links }) {
    return (
        <div className="w-[287px] h-[388px] pl-[12px] pt-[12px] rounded-[20px] bg-[#333333] hover:bg-gradient-to-b hover:from-teal-600/10 hover:to-green-600/10">
            <div className="w-[263px] h-[263px] bg-[#4D4D4D] rounded-[6.7px]">
                {/* here will have a image which we can fic once we got the images , use ImageSRC here */}
                <Image src={Github} width={263} height={263} alt="test" />
            </div>
            <p className="mt-[10px] text-white text-[20px] font-[500]">
                {name}
            </p>
            <p className="text-[#FFFFFF80] text-[10px] font-[500] mt-[5px]">
                {position}
            </p>
            <div className="join join-horizontal mt-[16px] gap-[4px]">
                <a
                    onClick={() => {
                        console.log("clicked")
                    }}
                >
                    <Image
                        src={Linkdln}
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />
                </a>
                <a
                    onClick={() => {
                        console.log("clicked")
                    }}
                >
                    <Image
                        src={Github}
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />
                </a>
                <a
                    onClick={() => {
                        console.log("clicked")
                    }}
                >
                    <Image
                        src={Email}
                        width={20}
                        height={20}
                        alt="Picture of the author"
                    />
                </a>
            </div>
        </div>
    )
}

export default TicketCard
