import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  ArrowTopRightOnSquareIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import SwipeableCarousel from "./SwipableCarousel";
import { BrandLink } from "./link";
import { trainingSlides } from "../content/training";
import { social } from "../content/links";

function SocialRow() {
  return (
    <div className="flex flex-wrap justify-around">
      <BrandLink to={social.facebook} target="_blank">
        <img
          aria-hidden
          src="/social-media/Facebook_Logo_Primary.png"
          alt="Facebook"
          width={2084}
          height={2084}
          className="h-6 w-6"
        />
        Facebook <ArrowTopRightOnSquareIcon className="h-6 w-6" />
      </BrandLink>
      <BrandLink to={social.instagram} target="_blank">
        <img
          aria-hidden
          src="/social-media/Instagram_Glyph_Gradient.png"
          alt="Instagram"
          width={500}
          height={500}
          className="h-6 w-6"
        />
        Instagram <ArrowTopRightOnSquareIcon className="h-6 w-6" />
      </BrandLink>
    </div>
  );
}

export default function Training() {
  return (
    <div className="snap-start snap-always" id="training">
      <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
        <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
          <SwipeableCarousel
            className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
            id="training"
          >
            {trainingSlides.map((slide) => (
              <div key={slide.id}>
                <img
                  width={slide.image.width}
                  height={slide.image.height}
                  src={slide.image.src}
                  alt={slide.image.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                  <div className="w-3/4 text-center md:w-2/4">
                    <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                      {slide.title}
                    </h1>
                    <p className="rounded-xl border-t-2 border-brandGreen py-3">
                      {slide.paragraphs[0]}
                    </p>
                    <ul className="flex flex-col gap-6 text-left">
                      {slide.sessions.map((session) => (
                        <li
                          key={`${session.venue}-${session.time}`}
                          className={
                            slide.social
                              ? "mb-6 flex flex-wrap items-center justify-around gap-2"
                              : "flex flex-wrap justify-between gap-2"
                          }
                        >
                          <span
                            className={
                              slide.id === "pool" &&
                              session.venue.startsWith("Foyle")
                                ? "flex items-center gap-2"
                                : "flex gap-2"
                            }
                          >
                            <MapPinIcon className="h-6 w-6 text-red-600" />{" "}
                            {session.venue}
                          </span>
                          <span className="flex items-center gap-2">
                            <ClockIcon className="h-6 w-6" /> {session.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {slide.social ? <SocialRow /> : null}
                  </div>
                </div>
              </div>
            ))}
          </SwipeableCarousel>
        </div>
      </div>
    </div>
  );
}
