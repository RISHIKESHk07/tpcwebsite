"use client"

import { pastEvents, ourEvents } from "@/data"

const PastEvent = ({ data }) => {
    return (
        <div className="bg-[#1a1a1a] flex-shrink-0 h-[180px] sm:h-[70vh] w-[128px] sm:w-[50vh] rounded-xl sm:rounded-[24px]">
            <h1 className="text-center p-2 text-3xl font-bold">{data.title}</h1>
        </div>
    )
}

const OurEvent = ({ data }) => {
    return (
        <div className="bg-[#1a1a1a] flex-shrink-0 h-[84px] w-[84px] sm:h-[300px] sm:w-[300px] rounded-full flex justify-center items-center">
            {data.title}
        </div>
    )
}

function page() {
    return (
        <div className="min-h-full w-full mx-auto">
            <main className="bg-[#000]">
                <p className="text-3xl sm:text-6xl my-4 text-center text-transparent bg-clip-text bg-gradient-linear green-gradient-text">
                    Events
                </p>
                <p className="text-xs sm:text-2xl text-[#999999] text-center">
                    {
                        "<p>From workshop to speaker sessions, CP challenges to Hackathons</p>"
                    }
                </p>
                <div className="px-5 sm:px-32 py-12 w-full">
                    <p className="text-white text-2xl sm:text-5xl mb-5 sm:mb-10">
                        Upcoming Events
                    </p>
                    <div className="bg-[#1a1a1a] h-[198px] sm:h-[80vh] rounded-[20px] sm:rounded-[40px]"></div>
                </div>
                <div className="pl-5 sm:pl-32 pr-16 pb-12 w-full">
                    <p className="text-white text-2xl sm:text-5xl mb-5 sm:mb-10 w-full">
                        {" "}
                        Past Events
                    </p>
                    <div className="flex gap-3 sm:gap-10 w-full overflow-x-scroll hide-scrollbar">
                        {pastEvents.map((event) => (
                            <PastEvent key={event} data={event} />
                        ))}
                    </div>
                </div>
                <div className="pl-5 sm:pl-32 pb-12 w-full">
                    <p className="text-white text-2xl sm:text-5xl mb-5 sm:mb-10">
                        {" "}
                        Our Events
                    </p>
                    <div className="flex gap-3 sm:gap-10 overflow-x-scroll hide-scrollbar">
                        {ourEvents.map((event) => (
                            <OurEvent key={event.title} data={event} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page
