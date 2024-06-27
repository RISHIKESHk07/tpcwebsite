"use client";

import { teamsData } from "@/data";
import { useEffect, useRef, useState } from "react";
import BatchContainer from "./BatchContainer";
import TicketCard from "./TicketCard";

const TeamContainer = ({ title }) => {
  const [popUp, setpopUp] = useState(false);
  const modalRef = useRef(null);

  const mockCards = teamsData.find(
    (team) => team.teamName === title
  )?.mockCards;

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
    <div className="container mx-auto h-[546px] relative">
      <div
        className="bg-[#1a1a1a] absolute inset-0 flex-center flex-col gap-8 max-sm:mx-6 max-w-[1252px] mx-auto rounded-[20px] p-4 cursor-pointer"
        onClick={() => setpopUp(true)}>
        <p className="text-4xl max-sm:text-2xl text-center font-semibold">
          {title}
        </p>
        <div className="w-[90%] flex gap-6 overflow-x-auto rounded-[20px] snap-x custom-scroll">
          {mockCards.map((card, index) => {
            return (
              <div key={index} className="snap-center">
                <TicketCard {...card} />
              </div>
            );
          })}
          <div className="snap-center">
            <div className="w-[287px] h-[388px] rounded-[20px] flex-center border-zinc-700 border-2 bg-[#333]">
              Click to view all
            </div>
          </div>
        </div>
      </div>
      {popUp && (
        <div
          ref={modalRef}
          className={`bg-[#1a1a1a] inset-0 fixed my-12 rounded-3xl z-10 max-sm:mx-4 sm:mx-4 md:mx-10 overflow-y-auto`}>
          <div>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-5"
              onClick={() => setpopUp(false)}>
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
  const allCards = teamsData.find((team) => team.teamName === title)?.allCards;
  const batches = teamsData.find((team) => team.teamName === title)?.batches;

  return (
    <div className="flex flex-col items-center gap-5 p-5">
      <h3 className="font-bold text-2xl text-slate-300 text-center">{title}</h3>
      {title === "Office Bearers" ? (
        <div className="flex gap-4 snap-x overflow-x-auto bg-transparent max-sm:max-w-[290px] sm:max-w-[290px] md:max-w-[594px] lg:max-w-[896px] rounded-[20px] custom-scroll">
          {allCards.map((card, index) => {
            return (
              <div key={index} className="snap-center">
                <TicketCard {...card} />
              </div>
            );
          })}
        </div>
      ) : (
        <>
          {batches.map((batch, index) => (
            <BatchContainer
              key={index}
              batchName={batch.batchName}
              teamName={title}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default TeamContainer;
