import { teamsData } from "@/data";
import TicketCard from "./TicketCard";
import CustomCarousel from "./CustomCarousel";

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
      <CustomCarousel>
        {batch.batchMembers.map((member, index) => (
          <div key={index} className="snap-center">
            <TicketCard {...member} />
          </div>
        ))}
      </CustomCarousel>
    </div>
  );
};

export default BatchContainer;
