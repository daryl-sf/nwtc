import Image from "next/image";
import { geistMono } from "./ui/fonts";

export default function Page() {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
      <div className="snap-always snap-center">
        <div className="relative min-h-screen flex bg-brandBlue">
          <div className="container max-w-screen-xl mx-auto flex flex-col gap-8 justify-center items-center text-base ">
            <div className="flex flex-col gap-8 items-center justify-center">
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
            </div>
            <div className="mx-4 bg-white p-4 rounded-lg text-brandBlue flex flex-col gap-3">
              <p>
                Founded in 1983, North West Triathlon Club (NWTC) is one of
                Ireland’s longest-standing triathlon communities, based in
                Derry, Northern Ireland. As a Triathlon Ireland-affiliated club,
                we welcome athletes of all levels from across the Northwest
                region, offering a supportive and inclusive environment to
                train, compete, and grow.
              </p>
              <p>
                {" "}
                From complete beginners to seasoned triathletes, our members
                benefit from expert coaching, structured training sessions, and
                a vibrant social community. We also run a dedicated junior
                program to inspire the next generation of triathletes. Whether
                your goal is fitness, fun, or high-level competition, NWTC is
                here to help you achieve it.
              </p>
              {/* <p>
                North West Triathlon Club (NWTC) is based in Derry in Northern
                Ireland. The club was formed in 1983 at Templemore Sports
                Complex in the city and hosts one of Ireland&apos;s longest
                running triathlon events, the Liam Ball Sprint triathlon.
              </p>
              <p>
                The club is affiliated to Triathlon Ireland and has a strong
                membership base of all abilities and ages. The club has a
                dedicated committee who work tirelessly to promote the sport of
                triathlon in the North West.
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="snap-always snap-center">
        <div className="relative min-h-screen flex bg-brandGreen">
          <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center text-4xl ">
            <div className="snap-y snap-mandatory flex flex-col gap-8 overflow-y-scroll no-scrollbar justify-between w-full mx-auto my-6 px-6 max-h-screen">
              <div className="snap-center snap-always">
                <div className="h-[80vh] w-[90vw] rounded bg-brandBlue text-white flex flex-col justify-around items-center">
                  <Image
                    src="/nwtc-logo.PNG"
                    alt="NWTC Logo"
                    width={536}
                    height={536}
                    className="border-white border rounded-full hover:border-brandGreen h-56 w-56"
                  />
                  <div className="mx-4">
                    <h1>🏊🏼‍♂️ Swimming</h1>
                    <p>🗓️ Tuesday 8:30pm</p>
                    <p>📍 Foyle Arena</p>
                    <p>
                      Coached session lasting 1 hour.
                      <br />
                      <br />
                      All abilities welcome.
                    </p>
                  </div>
                </div>
              </div>
              <div className="snap-center snap-always">
                <div className="h-[80vh] w-[90vw] rounded bg-brandBlue text-white flex flex-col justify-around items-center">
                  <Image
                    src="/nwtc-logo.PNG"
                    alt="NWTC Logo"
                    width={536}
                    height={536}
                    className="border-white border rounded-full hover:border-brandGreen h-56 w-56"
                  />
                  <div className="mx-4">
                    <h1>🏊🏻‍♀️ Swimming</h1>
                    <p>🗓️ Thursday 6pm</p>
                    <p>📍 Templemore Sports Complex</p>
                    <p>
                      Coached session lasting 1 hour.
                      <br />
                      <br />
                      All abilities welcome.
                    </p>
                  </div>
                </div>
              </div>
              <div className="snap-center snap-always">
                <div className="h-[80vh] w-[90vw] rounded bg-brandBlue text-white flex flex-col justify-around items-center">
                  <Image
                    src="/nwtc-logo.PNG"
                    alt="NWTC Logo"
                    width={536}
                    height={536}
                    className="border-white border rounded-full hover:border-brandGreen h-56 w-56"
                  />
                  <div className="mx-4">
                    <h1>🏃🏼‍♂️ Running</h1>
                    <p>🗓️ Wednesday 6:15pm</p>
                    <p>📍 Templemore Sports Complex</p>
                    <p>
                      Coached session lasting 1 hour.
                      <br />
                      <br />
                      All abilities welcome.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="snap-center snap-always">
                <div className="h-[80vh] w-[90vw] rounded bg-lime-500">
                  Session 4
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="snap-always snap-center">
        <div className="relative min-h-screen flex bg-brandBlue text-brandGreen">
          <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-2xl ">
            <div className="flex flex-col gap-8 items-center justify-center">
              <Image
                src="/file.svg"
                alt="NWTC Logo"
                width={536}
                height={536}
                className="border-white text-brandGreen border rounded-full hover:border-brandGreen h-56 w-56"
              />
              <h1 className="text-center text-wrap text-4xl">Races</h1>
              <p className="text-center text-white">
                A bit of copy about the races the clubs hosts
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="snap-always snap-center">
        <div className="relative min-h-screen flex bg-brandGreen">
          <div className="container max-w-screen-xl mx-auto flex justify-center items-center text-2xl ">
            <div className="flex flex-col gap-8 items-center justify-center">
              <Image
                src="/globe.svg"
                alt="NWTC Logo"
                width={536}
                height={536}
                className="border-white text-brandBlue border rounded-full hover:border-brandGreen h-56 w-56"
              />
              <h1 className="text-center text-wrap text-4xl">Join Us</h1>
              <p className="text-center text-white">
                Some copy and CTA to join the club
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
