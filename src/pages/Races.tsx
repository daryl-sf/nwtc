import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import CtaLink from "../components/CtaLink";

const races = [
  {
    to: "/races/liam-ball",
    title: "Liam Ball Sprint Triathlon",
    image: "/races/liamball.jpg",
    alt: "Liam Ball mural",
    lede: "Our flagship sprint triathlon, named for Derry Olympian Liam Ball — a race that grows every year.",
  },
  {
    to: "/races/buncrana",
    title: "Buncrana Duathlon",
    image: "/races/cyclists-racing.jpg",
    alt: "Triathletes racing on bikes",
    lede: "A flat, fast season-opener: 3.2km run, 16km bike, 3.2km run on the Inishowen peninsula.",
  },
];

export default function Races() {
  return (
    <div>
      <section className="relative min-h-[40dvh] md:min-h-[48dvh]">
        <img
          src="/races/cyclists-racing.jpg"
          alt="Club racing"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative flex min-h-[40dvh] items-center justify-center bg-black/70 px-6 py-20 md:min-h-[48dvh]">
          <div className="max-w-3xl text-center">
            <SectionHeading>Club races</SectionHeading>
            <p className="text-lg text-white/90">
              NWTC puts two signature events on the calendar each year. Both
              welcome first-timers and seasoned racers, and both are run by
              club volunteers.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-screen-xl gap-8 px-6 py-16 md:grid-cols-2">
        {races.map((race) => (
          <Link
            key={race.to}
            to={race.to}
            className="group overflow-hidden rounded-xl border border-white/15 bg-black/20"
          >
            <img
              src={race.image}
              alt={race.alt}
              className="h-56 w-full object-cover transition group-hover:scale-[1.02]"
            />
            <div className="border-t-2 border-brandGreen p-6">
              <h2 className="font-display mb-2 text-2xl uppercase tracking-wide">
                {race.title}
              </h2>
              <p className="text-white/80">{race.lede}</p>
              <span className="mt-4 inline-block font-display text-sm uppercase tracking-wider text-brandGreen">
                Read more
              </span>
            </div>
          </Link>
        ))}
      </section>

      <div className="pb-16 text-center">
        <CtaLink to="/join">Race with the club</CtaLink>
      </div>
    </div>
  );
}
