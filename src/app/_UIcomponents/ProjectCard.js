"use client"
import Image from "next/image"
import ProjectContainer from "./ProjectContainer"
import { useState, useRef } from "react"
const ProjectCard = ({ project }) => {
    const [modal, setModal] = useState(false)

    const handleModalOpen = () => {
        setModal((prev) => !prev)
    }

    return (
        <>
            {/* changed dimensions from  figma design (388X760) to improve readibility */}
            <div
                className=" w-[196px] h-[384px] sm:w-[245px] sm:h-[480px] xl:w-[330px] xl:h-[646px] shrink-0 rounded-[40px] bg-[#1A1A1A] overflow-hidden relative cursor-pointer border border-white/50 hover:scale-x-105 duration-300"
                onClick={handleModalOpen}
            >
                <div className="w-full relative h-52">
                    <Image
                        src={project.image}
                        alt="ProjectCard" //project.title
                        fill
                        className="object-cover"
                    />
                </div>
                <h2 className="text-center my-4 text-4xl font-bold">
                    {project.title}
                </h2>
                <p className="p-2 text-ellipsis mt-12">{project.description}</p>
            </div>
            {modal && (
                <ProjectContainer
                    project={project}
                    modal={modal}
                    setModal={setModal}
                />
            )}
        </>
    )
}

export default ProjectCard
