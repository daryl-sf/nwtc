import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import SwipeableCarousel from "./SwipableCarousel";
import { BrandLink } from "./link";
import { juniorSlides } from "../content/juniors";
import { safeguardingPage } from "../content/safeguarding";
import { social } from "../content/links";

export default function Juniors() {
  return (
    <div className="snap-start snap-always" id="juniors">
      <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
        <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
          <SwipeableCarousel
            className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
            id="juniors"
          >
            {juniorSlides.map((slide) => (
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
                    {"showLogos" in slide && slide.showLogos ? (
                      <div className="rounded-xl border-t-2 border-brandGreen pt-3">
                        <div className="mb-3 flex justify-around">
                          <img
                            width={512}
                            height={332}
                            alt="Triathlon Ireland logo"
                            src="/juniors/triathlon-ireland-logo.png"
                            className="h-28 w-auto"
                          />
                          <img
                            src="/nwtc-logo.PNG"
                            alt="NWTC Logo"
                            width={536}
                            height={536}
                            className="h-28 w-auto rounded-full border border-white hover:border-brandGreen"
                          />
                        </div>
                        <p>{slide.paragraphs[0]}</p>
                      </div>
                    ) : (
                      <p className="rounded-xl border-t-2 border-brandGreen pt-3">
                        {slide.paragraphs[0]}
                      </p>
                    )}
                    {"joinCta" in slide && slide.joinCta ? (
                      <>
                        <p>Join us</p>
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
                            Facebook{" "}
                            <ArrowTopRightOnSquareIcon className="h-6 w-6" />
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
                            Instagram{" "}
                            <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                          </BrandLink>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
            <div id="safeguarding">
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    {safeguardingPage.title}
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    {safeguardingPage.paragraphs[0]}
                  </p>
                  <p>{safeguardingPage.paragraphs[1]}</p>
                  <div className="flex flex-wrap justify-around pt-3">
                    <BrandLink
                      to={social.safeguardingPdf}
                      target="_blank"
                      external
                    >
                      <ArrowDownTrayIcon className="h-6 w-6" />{" "}
                      {safeguardingPage.posterLabel}
                    </BrandLink>
                  </div>
                </div>
              </div>
            </div>
          </SwipeableCarousel>
        </div>
      </div>
    </div>
  );
}
