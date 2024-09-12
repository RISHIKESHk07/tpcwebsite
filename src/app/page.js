import { homepageData } from "@/data"

const Home = () => {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-between py-24">
                <div className="flex-col w-[100%] justify-center align-middle py-[5%]">
                    <div className="flex-col justify-center align-middle text-[#fff]">
                        <p className="flex justify-center align-middle font-medium text-[6.5vw] md:text-[3.25rem] xl:text-[3.75vw]">
                            Talk is Cheap,
                        </p>
                        <p className="flex justify-center align-middle font-medium text-[6.5vw] md:text-[3.25rem] xl:text-[3.75vw]">
                            Show me the{" "}
                            <span className="green-gradient-text pl-2">
                                Code
                            </span>
                            .
                        </p>
                    </div>
                    <div className="flex-col justify-center align-middle py-5">
                        <p className="text-center w-[80%] md:w-[40rem] xl:w-[45%] flex justify-center mx-auto text-[2.5vw] md:text-[1.25rem] xl:text-[1.4vw]">
                            {
                                "<p>An open coding community where you can explore, collaborate, and engage with friends on various coding activities and projects.</p>  "
                            }
                        </p>
                    </div>
                    <div className="flex-col justify-center align-middle py-5">
                        <p className="text-center w-[80%] md:w-[40rem] xl:w-[45%] flex justify-center mx-auto text-[2.5vw] md:text-[1.25rem] xl:text-[1.4vw]">
                            <span className="text-[#FF8A00]">if</span>
                            (youWantToLearn =={" "}
                            <span className="text-[#5F95FF] pl-1">true</span>)
                            click();
                        </p>
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
                            )
                        })}
                    </div>
                    <div className="flex-col justify-center align-middle text-[#fff] mx-auto w-[100%] pb-[5%] flex-wrap">
                        <p className="text-center w-[80%] flex justify-center mx-auto text-[2.5vw] md:text-[1.25rem] xl:text-[1.4vw] py-10">
                            Bitbyte-TPC is a peer-learning community filled with
                            tech-enthusiasts just like YOU! We intend to keep
                            your interest kindled with regular thought-provoking
                            sessions on Competitive coding , web, app, and game
                            development, open source contributions, AI and ML
                            (basically anything and everything that involves
                            coding). aim to help students and as a community we
                            want to grow as much as possible in many domains of
                            coding and development, be it Competitive
                            Programming, Android, Web, Open Source, AI/ML,
                            Ethical Hacking.
                        </p>
                        <p className="text-center w-[80%] flex justify-center mx-auto text-[2.5vw] md:text-[1.25rem] xl:text-[1.4vw]">
                            You also get a chance to exhibit your skills and win
                            prizes in events like Jamboree, NewBie, Commix and
                            many more organised every now and then.
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
                                    {Array.from(data.desc).map(
                                        (detail, index) => {
                                            return (
                                                <p
                                                    key={index}
                                                    className="text-left flex justify-start mx-auto text-[2.5vw] md:text-[1.25rem] xl:text-[1.65vw] leading-[2.5vw] md:leading-7 xl:leading-9"
                                                >
                                                    {detail}
                                                </p>
                                            )
                                        }
                                    )}
                                </div>
                                {data.image && (
                                    <div className="flex justify-center align-middle pl-4 w-[40rem] md:w-[150%]">
                                        <img
                                            src={data.image.src}
                                            alt={data.title}
                                            className="w-[40rem] md:w-[22rem] xl:w-[28rem] mx-auto"
                                        />
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </main>
        </>
    )
}

export default Home
