"use client";
import SwipeableCarousel from "@/app/ui/SwipeableCarousel";
import Image from "next/image";
import { BrandLink } from "@/app/ui/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Join() {
  return (
    <div className="snap-always snap-start" id="join">
      <div className="relative min-h-dvh max-h-dvh flex bg-brandBlue pb-20">
        <div className="container max-w-screen-xl mx-auto text-xl md:pt-4">
          <SwipeableCarousel
            className="md:rounded-xl md:h-[calc(100dvh-2rem)] h-dvh"
            id="join"
          >
            <div>
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
            <div>
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
          </SwipeableCarousel>
        </div>
      </div>
    </div>
  );
}
