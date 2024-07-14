"use client"
import { AlumniData } from "@/data";
import AlumniCard from "../_UIcomponents/AlumniCard";

function page() {
  return (
    <div>
      <div className="mx-auto">
      <main className=" w-full py-6">
        <div className="flex justify-center items-center flex-col gap-2 mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold text-center">
            <span className="green-gradient-text">Alumni</span>
          </h1>
          <p className="max-sm:text-sm break-words text-center">
            {
              "<p>From web to app, AI to ML, Blockchain to DevOps</p>"
            }
          </p>
        </div>
        <div className="flex gap-10 flex-wrap justify-center align-middle px-20 md:px-40 mx-auto">
          {
            AlumniData.map((alumni, index) => (
              <AlumniCard
              key={index}
              name={alumni.name}
              position={alumni.position}
              links={alumni.links}
              imageUrl={alumni.imageUrl}
              />
            ))
          }
        </div>
      </main>
    </div>
    </div>
  )
}

export default page