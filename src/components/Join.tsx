import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import SwipeableCarousel from "./SwipableCarousel";
import { BrandLink } from "./link";

export default function Join() {
  return (
    <div className="snap-start snap-always" id="join">
      <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
        <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
          <SwipeableCarousel
            className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
            id="join"
          >
            <div>
              <img
                width={2000}
                height={1324}
                src={"/join/runners-on-bridge.jpg"}
                alt="A grou of runner on a bridge"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    Become a member today
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    Join North West Triathlon Club today and become part of a
                    vibrant and supportive community of athletes. You can join
                    our club through the Triathlon Ireland website.
                  </p>
                  <BrandLink
                    to="https://www.triathlonireland.com/"
                    target="_blank"
                  >
                    <span>Visit Triathlon Ireland</span>
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                  </BrandLink>
                </div>
              </div>
            </div>
            <div>
              <img
                width={2000}
                height={1333}
                src={"/join/swimmer-open-water.jpg"}
                alt="Single swimmer in open water"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    Join the conversation
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    Follow us on social media to stay up to date with the latest
                    club news, events, and training sessions. We are active on
                    Facebook, Instagram
                  </p>
                  <ul className="flex flex-wrap justify-between gap-4 sm:justify-center">
                    <li>
                      <BrandLink
                        to="https://www.facebook.com/north.westtriathlon/"
                        target="_blank"
                      >
                        <img
                          aria-hidden
                          src="/social-media/Facebook_Logo_Primary.png"
                          alt="Facebook"
                          width={2084}
                          height={2084}
                          className="h-6 w-6"
                        />
                        Facebook{" "}
                        <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                      </BrandLink>
                    </li>
                    <li>
                      <BrandLink
                        to="https://www.instagram.com/northwest.triathlonclub/"
                        target="_blank"
                      >
                        <img
                          aria-hidden
                          src="/social-media/Instagram_Glyph_Gradient.png"
                          alt="Instagram"
                          width={500}
                          height={500}
                          className="h-6 w-6"
                        />
                        @northwest.triathlonclub{" "}
                        <ArrowTopRightOnSquareIcon className="h-6 w-6" />
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
