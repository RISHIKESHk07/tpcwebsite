"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";

const ProjectContainer = ({ project, modal, setModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    modalElement.showModal();

    const handleClickOutside = (e) => {
      if (e.target === modalElement) {
        modalElement.close();
        setModal(false);
      }
    };

    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        modalElement.close();
        setModal(false);
      }
    };

    modalElement.addEventListener("click", handleClickOutside);
    modalElement.addEventListener("keydown", handleEscapeKey);

    return () => {
      modalElement.removeEventListener("click", handleClickOutside);
      modalElement.removeEventListener("keydown", handleEscapeKey);
    };
  }, [modal, setModal]);

  return (
    <dialog className="modal modal-bottom " ref={modalRef} >
      <div className="modal-box rounded-[40px] w-[80vw] max-w-[1300px] bg-[#1A1A1A] mx-auto">
      <button className=" btn btn-sm btn-circle btn-ghost absolute top-3 right-3 sm:top-6 sm:right-6 text-xl" onClick={() => setModal(false)}>x</button>
        <div className="modal-content flex flex-col items-center justify-center mx-auto max-w-[1100px]">
          <h1 className="text-4xl sm:text-6xl mb-8 mt-2 font-semibold text-center">
            {project.title}
          </h1>
          <div className="relative w-[100%] max-w-[1100px] h-[350px] sm:h-[55vh] max-h-[550px] bg-[#333] rounded-[40px] overflow-hidden">
            <Image
              src="/Github.svg" // Use project.image
              alt="ProjectCard" // Use project.title
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex mt-10 mb-10 w-full justify-around">
            <p className="text-md  sm:text-2xl ">{project.links.github}</p>
            <p className="text-md sm:text-2xl ">{project.links.website}</p>
          </div>
          <div>
            <p className="text-sm sm:text-xl">{project.description}</p>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop backdrop-blur-sm">
        <button onClick={() => setModal(false)}>close</button>
      </form>
    </dialog>
  );
};

export default ProjectContainer;
