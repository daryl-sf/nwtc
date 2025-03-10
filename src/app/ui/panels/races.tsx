"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

export default function Races() {
  return (
    <div className="snap-always snap-start" id="races">
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
                height={999}
                src={"/races/bike-transition.jpg"}
                alt="Bikes in transition area"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Liam Ball Sprint Triathlon
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    The Liam Ball Triathlon is one of Ireland&apos;s oldest
                    triathlons and its also one of the most popular. The race is
                    a perfect for everyone from a complete beginner trying
                    triathlon for the first time or seasoned triathletes looking
                    for a fast course. The Liam Ball consists of a 750m pool
                    swim, a 20km bike and a 5km run.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                width={2000}
                height={1333}
                src={"/races/cyclists-racing.jpg"}
                alt="Triathletes racing"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Buncrana Duathlon
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    The Buncrana Duathlon is a great way to start the season.
                    Taking place in the beautiful town of Buncrana, the duathlon
                    consists of a 3.2km run, 16km bike and a 3.2km run. The
                    course is flat and fast and is perfect for beginners and
                    seasoned athletes alike.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
