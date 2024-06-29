import { teamsData } from "@/data";
import Footer from "../_UIcomponents/Footer";
import Navbar from "../_UIcomponents/Navbar";
import TeamContainer from "../_UIcomponents/TeamContainer";

function page() {
  return (
    <div className="min-h-screen mx-auto">
      <Navbar />
      <main className="min-h-screen w-full py-6">
        <div className="flex justify-center items-center flex-col gap-2 mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold text-center">
            <span className="green-gradient-text">We</span> are everywhere
          </h1>
          <p className="max-sm:text-sm break-words text-center">
            {"<p>From web to app, AI to ML, Blockchain to DevOps</p>"}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {teamsData.map((team, index) => (
            <TeamContainer key={index} title={team.teamName} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default page;
