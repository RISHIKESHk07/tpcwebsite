"use client";

import { useEffect, useRef, useState } from "react";
import BatchContainer from "./BatchContainer";
import TicketCard from "./TicketCard";

const TeamContainer = ({ title }) => {
  const [popUp, setpopUp] = useState(false);
  const modalRef = useRef(null);

  // Close modal if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setpopUp(false);
      }
    };

    if (popUp) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popUp]);

  return (
    <div className="container mx-auto h-48 relative">
      <div
        className="bbx absolute inset-0 flex-center max-sm:mx-6 max-w-[850px] mx-auto rounded-lg"
        onClick={() => setpopUp(true)}
      >
        <div>
          <p className="text-4xl max-sm:text-2xl">{title ?? "Team Title"}</p>
        </div>
      </div>
      {popUp && (
        <div
          ref={modalRef}
          className={`bg-gray-700 inset-0 fixed my-16 rounded-3xl z-10 ${title !== "Office Bearers" ? "overflow-y-scroll mx-32 md:mx-64 lg:mx-96" : ""}`}
        >
          <div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5"
              onClick={() => setpopUp(false)}
            >
              ✕
            </button>
            <ModalContent title={title} />
          </div>
        </div>
      )}
    </div>
  );
};

const ModalContent = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-5 p-5">
      <h3 className="font-bold text-2xl text-slate-300">{title}</h3>
      {title === "Office Bearers" ? (
        <div className="flex items-center justify-center gap-5">
          <TicketCard/>
          <TicketCard/>
        </div>
      ) : (
        <>
          <BatchContainer batchName={"2020 batch"} teamName={title} />
          <BatchContainer batchName={"2021 batch"} teamName={title} />
          <BatchContainer batchName={"2022 batch"} teamName={title} />
        </>
      )}
    </div>
  );
};

export default TeamContainer;
