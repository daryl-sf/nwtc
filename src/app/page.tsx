import Image from "next/image";
import { geistMono } from "./ui/fonts";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
      <div className="snap-always snap-center">
        <div className="relative min-h-screen flex bg-brandBlue">
          <div className="container max-w-screen-xl mx-auto flex flex-col gap-16 justify-center items-center text-2xl ">
            <Image
              src="/nwtc-logo.PNG"
              alt="NWTC Logo"
              width={536}
              height={536}
              className="border-white border rounded-full hover:border-brandGreen h-56 w-56"
            />
            <h1
              className={`text-4xl text-center text-white text-wrap ${geistMono.className}`}
            >
              Northwest <br /> Triathlon Club
            </h1>
            <p className="mx-4 bg-white p-4 rounded-lg text-brandBlue">
              North West Triathlon Club (NWTC) is based in Derry in Northern
              Ireland. The club was formed in 1983 at Templemore Sports Complex
              in the city and hosts one of Ireland&apos;s longest running
              triathlon events, the Liam Ball Sprint triathlon.
            </p>
          </div>
        </div>
      </div>
      <div className="snap-always snap-center">
        <div className="relative min-h-screen flex bg-brandGreen">
          <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-4xl ">
            <div className="snap-y snap-mandatory flex flex-col gap-8 overflow-y-scroll no-scrollbar justify-between w-full mx-auto px-6 max-h-screen">
              <div className="snap-center snap-always">
                <div className="h-[80vh] w-[90vw] rounded bg-red-500">
                  Session 1
                </div>
              </div>
              <div className="snap-center snap-always">
                <div className="h-[80vh] w-[90vw] rounded bg-blue-500">
                  Session 2
                </div>
              </div>
              <div className="snap-center snap-always">
                <div className="h-[80vh] w-[90vw] rounded bg-rose-500">
                  Session 3
                </div>
              </div>
              <div className="snap-center snap-always">
                <div className="h-[80vh] w-[90vw] rounded bg-lime-500">
                  Session 4
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="snap-always snap-center">
        <div className="relative min-h-screen flex bg-brandBlue">
          <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
            Races
          </div>
        </div>
      </div>
      <div className="snap-always snap-center">
        <div className="relative min-h-screen flex bg-brandGreen">
          <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-4xl ">
            Join Us
          </div>
        </div>
      </div>
    </div>
  );
}
