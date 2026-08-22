import SwipeableCarousel from "./SwipableCarousel";
import { raceList } from "../content/races";

export default function Races() {
  return (
    <div className="snap-start snap-always" id="races">
      <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
        <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
          <SwipeableCarousel
            className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
            id="races"
          >
            {raceList.map((race) => (
              <div key={race.slug}>
                <img
                  width={race.image.width}
                  height={race.image.height}
                  src={race.image.src}
                  alt={race.image.alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                  <div className="w-3/4 text-center md:w-2/4">
                    <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                      {race.title}
                    </h1>
                    <p className="rounded-xl border-t-2 border-brandGreen pt-3">
                      {race.paragraphs[0]} {race.paragraphs[1]}
                    </p>
                    <p className="pt-3">{race.paragraphs[2]}</p>
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
