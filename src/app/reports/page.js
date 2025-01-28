"use client"

import { reportData } from "@/data"
import ReportsTable from "../_UIcomponents/ReportsTable"

const page = () => {

    return (
        <div className="m-auto min-h-[72vh]">
            <main className="w-full py-6">
                <div className="relative bg-black py-8 w-[80%] mx-auto min-h-full mb-30">
                    <div className="flex justify-center items-center flex-col gap-2">
                        <h1 className="text-4xl md:text-6xl font-semibold text-center">
                            Our Event
                            <span className="green-gradient-text">
                                {" "}
                                Reports
                            </span>
                        </h1>
                        <p className="max-sm:text-sm break-words text-center relative">
                            {
                                "<p>Event Reports are listed below!!!</p>"
                            }
                        </p>
                    </div>
                    <div className="relative flex gap-4 mt-10">
                        <ReportsTable reports={reportData} />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page
