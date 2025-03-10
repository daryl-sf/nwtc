"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { BrandLink } from "../link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Join() {
  return (
    <div className="snap-always snap-center pb-20" id="join">
      <div className="relative min-h-with-footer flex bg-brandBlue pb-20">
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
                width={6000}
                height={4000}
                src={"/training/pool-swimming.jpg"}
                alt="Athlete swimming in pool"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Become a member today
                  </h1>
                  <p className="border-t-2 border-brandGreen py-3 rounded-xl">
                    Join North West Triathlon Club today and become part of a
                    vibrant and supportive community of athletes. You can join
                    our club through the Triathlon Ireland website.
                  </p>
                  <BrandLink
                    href="https://www.triathlonireland.com/"
                    target="_blank"
                  >
                    <span>Visit Triathlon Ireland</span>
                    <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  </BrandLink>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
