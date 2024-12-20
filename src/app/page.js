import { homepageData } from "@/data";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between py-24">
        <Image
          src={"/homeBg/blob6.svg"}
          alt=""
          width={45}
          height={34}
          className="absolute blur-[40px] w-[45rem] h-[50rem] top-0 right-[30vw] bottom-0 border border-solid border-yellow-500 "
        />
        <Image
          src={"/homeBg/blob1.svg"}
          alt=""
          width={60}
          height={45}
          className="absolute blur-[150px] w-[60rem] h-[45rem] z-10 left-10 top-16 border border-solid border-yellow-400 animate-pulse "
          style={{
            animationDelay: "1s",
          }}
        />
        <Image
          src={"/homeBg/blob2.svg"}
          alt=""
          width={60}
          height={45}
          className="absolute blur-[40px] w-[60rem] h-[45rem] rotate-[80deg] z-20 left-28 top-40 border border-solid border-red-500 "
        />
        <Image
          src={"/homeBg/blob3.svg"}
          alt=""
          width={45}
          height={34}
          className="absolute blur-[40px] w-[45rem] h-[50rem] left-[30vw] z-10 top-3 border border-solid border-blue-500   "
        />

        <Image
          src={"/homeBg/blob4.svg"}
          alt=""
          width={60}
          height={45}
          className="absolute blur-[150px] w-[60rem] h-[45rem] top-36 right-10 border border-solid border-orange-500 animate-pulse "
        />
        <Image
          src={"/homeBg/blob5.svg"}
          alt=""
          width={60}
          height={45}
          className="absolute blur-[150px] w-[60rem] h-[45rem] rotate-[106deg] bottom-5 right-0 border border-solid border-green-500  "
        />

        <div className="flex flex-row w-[100%] justify-center align-middle mb-[8%] mt-[2%] z-50">
          <div className="text-[#fff] text-[15svh] gap-0 leading-none ml-[10vw] w-[75%]">
            <p className="text-bold font-bold">Show</p>
            <p className="">me</p>
            <p className="text-bold font-bold">The Code</p>
          </div>
          <div className=" text-[#fff] font-mono w-[37%] mr-[15vw] backdrop:blur-[50px] bg-black/40 h-fit rounded-2xl border-green-300 p-[2.5rem] text-xl">
            <p>
              {
                "<p>An open coding community where you can explore, collaborate, and engage with friends on various coding activities and projects.</p>"
              }
            </p>
            <br></br>
            <p className="">
              <span className="text-[#FF8A00]">if</span>
              (youWantToLearn =={" "}
              <span className="text-[#5F95FF] pl-1">true</span>) click();
            </p>{" "}
          </div>
        </div>
        <div className="flex-col w-[100%] justify-center align-middle py-[5%]">
          <p className="flex justify-center align-middle font-medium text-[6.5vw] md:text-[3.25rem] xl:text-[3.75vw] green-gradient-text">
            About
          </p>
          <div className="flex justify-center align-middle gap-10 text-[#fff] mx-auto w-[80%] xl:w-[100%] py-[3%] flex-wrap">
            {Array.from(homepageData.about).map((data, index) => {
              return (
                <div
                  key={index}
                  className="flex-col justify-center align-middle py-4 sm:py-8 px-12 sm:px-20 bg-[#1A1A1A] rounded-xl"
                >
                  <img
                    src={data.ImageSRC.src}
                    alt={data.title}
                    className="w-[75px] md:w-[7.5vw] 2xl:w-[8rem] 2xl:h-[8rem] mx-auto"
                  />
                  <p className="text-[#fff] text-center flex justify-center mx-auto text-[2.5vw] md:text-[1.25rem] xl:text-[1.4vw] pt-5">
                    {data.title}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex-col justify-center align-middle text-[#fff] mx-auto w-[100%] pb-[5%] flex-wrap">
            <p className="text-center w-[80%] flex justify-center mx-auto text-[2.5vw] md:text-[1.25rem] xl:text-[1.4vw] py-10">
              Bitbyte-TPC is a peer-learning community filled with
              tech-enthusiasts just like YOU! We intend to keep your interest
              kindled with regular thought-provoking sessions on Competitive
              coding , web, app, and game development, open source
              contributions, AI and ML (basically anything and everything that
              involves coding). aim to help students and as a community we want
              to grow as much as possible in many domains of coding and
              development, be it Competitive Programming, Android, Web, Open
              Source, AI/ML, Ethical Hacking.
            </p>
            <p className="text-center w-[80%] flex justify-center mx-auto text-[2.5vw] md:text-[1.25rem] xl:text-[1.4vw]">
              You also get a chance to exhibit your skills and win prizes in
              events like Jamboree, NewBie, Commix and many more organised every
              now and then.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center gap-32 items-center">
          <div className="flex justify-center items-center relative">
            <div className="flex justify-center items-center max-w-lg gap-40 flex-wrap animate-rotate flex-col lg:flex-row">
              <div className="rounded-full bg-slate-800 size-24 border flex border-white/50 hover:scale-110 duration-300 shadow-2xl shadow-teal-600/80">
                {" "}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original-wordmark.svg"
                  className="size-20 animate-rotate animate-reverse m-auto"
                />
              </div>
              <div className="rounded-full bg-slate-800 size-24 border flex border-white/50 hover:scale-110 duration-300 shadow-2xl shadow-teal-600/80">
                {" "}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                  className="size-20 animate-rotate animate-reverse m-auto"
                />
              </div>
              <div className="rounded-full bg-slate-800 size-24 border flex border-white/50 hover:scale-110 duration-300 shadow-2xl shadow-teal-600/80">
                {" "}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                  className="size-16 animate-rotate animate-reverse m-auto"
                />
              </div>
              <div className="rounded-full bg-slate-800 size-24 border flex border-white/50 hover:scale-110 duration-300 shadow-2xl shadow-teal-600/80">
                {" "}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg"
                  className="size-20 animate-rotate animate-reverse m-auto"
                />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-800 size-24 border border-white/50 hover:scale-110 duration-300 flex">
              {" "}
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
                className="size-20 m-auto"
              />
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            <div className="flex justify-center items-center max-w-lg gap-40 flex-wrap animate-rotate">
              <div className="rounded-full flex bg-slate-800 size-24 border border-white/50 hover:scale-110 duration-300 shadow-2xl shadow-teal-600/80">
                {" "}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg"
                  className="size-20 m-auto animate-rotate animate-reverse"
                />
              </div>
              <div className="rounded-full flex bg-slate-800 size-24 border border-white/50 hover:scale-110 duration-300 shadow-2xl shadow-teal-600/80">
                {" "}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
                  className="size-20 m-auto animate-rotate animate-reverse"
                />
              </div>
              <div className="rounded-full flex bg-slate-800 size-24 border border-white/50 hover:scale-110 duration-300 shadow-2xl shadow-teal-600/80">
                {" "}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
                  className="size-20 m-auto animate-rotate animate-reverse"
                />
              </div>
              <div className="rounded-full flex bg-slate-800 size-24 border border-white/50 hover:scale-110 duration-300 shadow-2xl shadow-teal-600/80">
                {" "}
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"
                  className="size-20 m-auto animate-rotate animate-reverse"
                />
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-800 size-24 border border-white/50 hover:scale-110 duration-300 flex">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"
                className="size-20 m-auto"
              />
            </div>
          </div>
        </div>
        <div className="flex-col w-[80%] justify-center align-middle py-[5%]">
          {Array.from(homepageData.details).map((data, index) => {
            return (
              <div
                key={index}
                className="flex justify-center align-middle py-5 md:py-10"
              >
                <div className="flex-col justify-center align-middle">
                  <p className="flex justify-start align-middle mx-auto font-medium text-[6.5vw] lg:text-[3.5rem] xl:text-[3.25vw] text-[#fff]">
                    {data.title}
                  </p>
                  {Array.from(data.desc).map((detail, index) => {
                    return (
                      <p
                        key={index}
                        className="text-left flex justify-start mx-auto text-[2.5vw] md:text-[1.25rem] xl:text-[1.65vw] leading-[2.5vw] md:leading-7 xl:leading-9"
                      >
                        {detail}
                      </p>
                    );
                  })}
                </div>
                {data.image && (
                  <div className="flex justify-center align-middle pl-4 border w-[40rem] md:w-[150%] relative bg-slate-900">
                    <Image
                      src={"/" + data.image}
                      alt={data.title}
                      fill
                      className="object-cover hover:m-2 duration-100"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
