import SwipeableCarousel from "./SwipableCarousel";
import { aboutSlides } from "../content/about";
import { TextCta } from "./desktop/Editorial";

export default function AboutUs() {
  return (
    <div className="snap-start snap-always" id="about-us">
      <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
        <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
          <SwipeableCarousel
            className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
            id="about-us"
          >
            {aboutSlides.map((slide) => (
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
                    {slide.id === "affiliation" ? (
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
                        {slide.paragraphs.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    ) : (
                      <>
                        <p className="rounded-xl border-t-2 border-brandGreen py-3">
                          {slide.paragraphs[0]}
                        </p>
                        {slide.paragraphs.slice(1).map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </>
                    )}
                    {"cta" in slide && slide.cta ? (
                      <TextCta
                        to={slide.cta.to}
                      >
                        {slide.cta.label}
                      </TextCta>
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
