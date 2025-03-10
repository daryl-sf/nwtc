"use client";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  ArrowTopRightOnSquareIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { BrandLink } from "@/app/ui/link";

export default function Training() {
  return (
    <div className="snap-always snap-center" id="training">
      <div className="relative min-h-screen max-h-screen flex bg-brandBlue pb-20">
        <div className="container max-w-screen-xl mx-auto text-2xl pt-4">
          <Carousel
            className="rounded-xl"
            placeholder={undefined}
            onPointerEnterCapture={console.log}
            onPointerLeaveCapture={console.log}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div className="relative h-full w-full">
              <Image
                width={1500}
                height={800}
                src={"/training/pool-swimming.jpg"}
                alt="Athlete swimming in pool"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Pool Swimming
                  </h1>
                  <p className="border-t-2 border-brandGreen py-3 rounded-xl">
                    Join our structured pool swimming sessions to improve your
                    technique, speed, and endurance. With each lane catering to
                    a different ability level, our sessions are suitable for all
                    members.
                  </p>
                  <ul className="text-left flex flex-col gap-6">
                    <li className="flex gap-2 justify-between flex-wrap">
                      <span className="flex items-center gap-2">
                        <MapPinIcon className="w-6 h-6 text-red-600" /> Foyle
                        Arena, Derry
                      </span>
                      <span className="flex items-center gap-2">
                        <ClockIcon className="w-6 h-6" /> Tuesdays 8:30pm
                      </span>
                    </li>
                    <li className="flex gap-2 justify-between flex-wrap">
                      <span className="flex gap-2">
                        <MapPinIcon className="w-6 h-6 text-red-600" />{" "}
                        Templemore Complex, Derry
                      </span>
                      <span className="flex items-center gap-2">
                        <ClockIcon className="w-6 h-6" /> Thursdays 6pm
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                src="/training/running.jpg"
                alt="Athlete running on road"
                width={1200}
                height={799}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Running
                  </h1>
                  <p className="border-t-2 border-brandGreen py-3 rounded-xl">
                    Our weekly running sessions are designed to help you build
                    speed, strength, and stamina. Training plans are designed
                    with the race calendar in mind, with a focus on improving
                    performance and reducing injury risk.
                  </p>
                  <ul className="text-left flex flex-col gap-6">
                    <li className="flex gap-2 justify-between flex-wrap">
                      <span className="flex items-center gap-2">
                        <MapPinIcon className="w-6 h-6 text-red-600" />{" "}
                        Templemore Complex, Derry
                      </span>
                      <span className="flex items-center gap-2">
                        <ClockIcon className="w-6 h-6" /> Wednesday 6:15pm
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                src="/training/open-water-swimming.jpg"
                alt="Athlete swimming in open water"
                width={1200}
                height={605}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Open Water Swimming
                  </h1>
                  <p className="border-t-2 border-brandGreen py-3 rounded-xl">
                    During summer months, we host open water swimming sessions
                    at local lakes and beaches. Wetsuits, swim caps, and swim
                    bouy are required. Follow us on social media for updates.
                  </p>
                  <ul className="text-left flex flex-col gap-6">
                    <li className="flex items-center gap-2 justify-around flex-wrap mb-6">
                      <span className="flex gap-2">
                        <MapPinIcon className="w-6 h-6 text-red-600" /> Various
                      </span>
                      <span className="flex gap-2">
                        <ClockIcon className="w-6 h-6" /> Various
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap justify-around">
                    <BrandLink
                      href="https://www.facebook.com/north.westtriathlon/"
                      target="_blank"
                    >
                      <Image
                        aria-hidden
                        src="/social-media/Facebook_Logo_Primary.png"
                        alt="Facebook"
                        width={2084}
                        height={2084}
                        className="w-6 h-6"
                      />
                      Facebook <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </BrandLink>
                    <BrandLink
                      href="https://www.instagram.com/northwest.triathlonclub/"
                      target="_blank"
                    >
                      <Image
                        aria-hidden
                        src="/social-media/Instagram_Glyph_Gradient.png"
                        alt="Instagram"
                        width={500}
                        height={500}
                        className="w-6 h-6"
                      />
                      Instagram{" "}
                      <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </BrandLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                src="/training/cycling.jpg"
                alt="Two female athletes cycling on road"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Club Events
                  </h1>
                  <p className="border-t-2 border-brandGreen py-3 rounded-xl">
                    Join us for regular club events, including time trials,
                    duathlons, and social rides. We offer these to all members
                    with a collection for locals charities at each event. Follow
                    us on social media for updates.
                  </p>
                  <ul className="text-left flex flex-col gap-6">
                    <li className="flex items-center gap-2 justify-around flex-wrap mb-6">
                      <span className="flex gap-2">
                        <MapPinIcon className="w-6 h-6 text-red-600" /> Various
                      </span>
                      <span className="flex gap-2">
                        <ClockIcon className="w-6 h-6" /> Various
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap justify-around">
                    <BrandLink
                      href="https://www.facebook.com/north.westtriathlon/"
                      target="_blank"
                    >
                      <Image
                        aria-hidden
                        src="/social-media/Facebook_Logo_Primary.png"
                        alt="Facebook"
                        width={2084}
                        height={2084}
                        className="w-6 h-6"
                      />
                      Facebook <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </BrandLink>
                    <BrandLink
                      href="https://www.instagram.com/northwest.triathlonclub/"
                      target="_blank"
                    >
                      <Image
                        aria-hidden
                        src="/social-media/Instagram_Glyph_Gradient.png"
                        alt="Instagram"
                        width={500}
                        height={500}
                        className="w-6 h-6"
                      />
                      Instagram{" "}
                      <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </BrandLink>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
