import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import SwipeableCarousel from "./SwipableCarousel";
import { BrandLink } from "./link";
import { joinSlides } from "../content/join";
import { social } from "../content/links";

export default function Join() {
  return (
    <div className="snap-start snap-always" id="join">
      <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
        <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
          <SwipeableCarousel
            className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
            id="join"
          >
            {joinSlides.map((slide) => (
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
                    {slide.kind === "membership" ? (
                      <BrandLink to={social.triathlonIreland} target="_blank">
                        <span>Visit Triathlon Ireland</span>
                        <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                      </BrandLink>
                    ) : null}
                    {slide.kind === "social" ? (
                      <ul className="flex flex-wrap justify-between gap-4 sm:justify-center">
                        <li>
                          <BrandLink to={social.facebook} target="_blank">
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
                          <BrandLink to={social.instagram} target="_blank">
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
                    ) : null}
                    {slide.kind === "contact" ? (
                      <div className="flex flex-col items-center gap-4">
                        <ul className="flex flex-wrap justify-center gap-4">
                          <li>
                            <BrandLink to={social.facebook} target="_blank">
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
                            <BrandLink to={social.instagram} target="_blank">
                              <img
                                aria-hidden
                                src="/social-media/Instagram_Glyph_Gradient.png"
                                alt="Instagram"
                                width={500}
                                height={500}
                                className="h-6 w-6"
                              />
                              Instagram{" "}
                              <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                            </BrandLink>
                          </li>
                        </ul>
                        <BrandLink
                          to={social.safeguardingPdf}
                          target="_blank"
                          external
                        >
                          <ArrowDownTrayIcon className="h-6 w-6" />
                          Safeguarding Poster 2026
                        </BrandLink>
                      </div>
                    ) : null}
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
