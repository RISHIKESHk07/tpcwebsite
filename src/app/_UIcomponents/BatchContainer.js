import React from "react";
import TicketCard from "./TicketCard";
import { teamsData } from "@/data";

const BatchContainer = ({ teamName, batchName }) => {
  // Find the correct team
  const team = teamsData.find(team => team.teamName === teamName);
  if (!team) {
    return <div>Team not found</div>;
  }

  // Find the correct batch within the team
  const batch = team.batches.find(batch => batch.batchName === batchName);
  if (!batch) {
    return <div>Batch not found</div>;
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <h4 className="font-semibold text-lg text-slate-300">{batchName}</h4>
      <div className="carousel carousel-center bg-neutral rounded-box max-w-md lg:max-w-2xl space-x-4 p-4">
        {batch.batchMembers.map((member, index) => (
          <div key={index} className="carousel-item">
            <TicketCard
              name={member.name}
              position={member.position}
              links={member.links}
              ImageSRC={member.ImageSRC}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatchContainer;
