import ProjectContainer from "../_UIcomponents/ProjectContainer";

function page() {
  return (
    <div className="min-h-screen mx-auto">
      <main className="min-h-screen w-full py-6">
        <div className="flex justify-center items-center flex-col gap-2 mb-12">
          <h1 className="text-4xl md:text-6xl font-semibold text-center">
            Our<span className="green-gradient-text">Projects</span>
          </h1>
          <p className="max-sm:text-sm break-words text-center">
            {
              "<p>From websites to apps, CLIs to Discord bots, Typescript to Golang</p>"
            }
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ProjectContainer />
        </div>
      </main>
    </div>
  );
}

export default page;
