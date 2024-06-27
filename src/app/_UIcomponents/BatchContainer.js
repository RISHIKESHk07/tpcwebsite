import { teamsData } from "@/data";
import TicketCard from "./TicketCard";

const BatchContainer = ({ teamName, batchName }) => {
  // Find the correct team
  const team = teamsData.find((team) => team.teamName === teamName);
  if (!team) {
    return <div>Team not found</div>;
  }

  // Find the correct batch within the team
  const batch = team.batches.find((batch) => batch.batchName === batchName);
  if (!batch) {
    return <div>Batch not found</div>;
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <h4 className="font-semibold text-lg text-slate-300">{batchName}</h4>
      <div className="flex gap-4 snap-x overflow-x-auto bg-transparent max-sm:max-w-[290px] sm:max-w-[290px] md:max-w-[594px] lg:max-w-[896px] rounded-[20px] custom-scroll">
        {batch.batchMembers.map((member, index) => (
          <div key={index} className="snap-center">
            <TicketCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatchContainer;
