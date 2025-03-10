"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import { BrandLink } from "../link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Join() {
  return (
    <div className="snap-always snap-start" id="join">
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
                width={2000}
                height={1324}
                src={"/join/runners-on-bridge.jpg"}
                alt="A grou of runner on a bridge"
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
            <div className="relative h-full w-full">
              <Image
                width={2000}
                height={1333}
                src={"/join/swimmer-open-water.jpg"}
                alt="Single swimmer in open water"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Join the conversation
                  </h1>
                  <p className="border-t-2 border-brandGreen py-3 rounded-xl">
                    Follow us on social media to stay up to date with the latest
                    club news, events, and training sessions. We are active on
                    Facebook, Instagram
                  </p>
                  <ul className="flex justify-between sm:justify-center flex-wrap gap-4">
                    <li>
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
                        Facebook{" "}
                        <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                      </BrandLink>
                    </li>
                    <li>
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
                        @northwest.triathlonclub{" "}
                        <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                      </BrandLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
