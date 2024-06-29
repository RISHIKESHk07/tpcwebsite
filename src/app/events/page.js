"use client"
import Footer from "../_UIcomponents/Footer";
import Navbar from "../_UIcomponents/Navbar";

const PastEvent = () => {
  return (
    <div className="bg-[#1a1a1a] h-[380px] w-[480px] rounded-[24px]">

    </div>
  );
};

const OurEvent = () => {
  return (
    <div className="bg-[#1a1a1a] h-[200px] w-[200px] rounded-full">

    </div>
  );
};

function page() {
  return (
    <div className=" min-h-full w-full mx-auto">
      <Navbar />
      <main className="bg-[#000]">
        <p className="text-6xl my-4 text-center text-transparent bg-clip-text bg-gradient-linear green-gradient-text">Events</p>
        <p className=" text-white text-center opacity-60">
          {"<p>From workshop to speaker sessions, CP challenges to Hackathons</p>"}
        </p>
        <div className="px-32 py-12">
          <p className="text-white text-5xl mb-10" >Upcoming Events</p>
          <div className="bg-[#1a1a1a] h-[504px] rounded-[40px]">

          </div>
        </div>
        <div className="px-32 pb-12 w-full">
          <p className="text-white text-5xl mb-10"> Past Events</p>
          <div className="flex gap-4">
              {
                [1, 2, 3].map((event) => (
                  <PastEvent key={event} />
                ))
              }
          </div>
        </div>
        <div className="px-32 pb-12 w-full">
          <p className="text-white text-5xl mb-10"> Our Events</p>
          <div className="flex gap-4 overflow-hidden">
              {
                [1, 2, 3, 4].map((event) => (
                  <OurEvent key={event} />
                ))
              }
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default page
