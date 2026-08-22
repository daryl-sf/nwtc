import { Link } from "react-router-dom";
import { racesPage, raceList } from "../../content/races";
import { PageHero } from "../../components/desktop/Editorial";

export default function RacesPage() {
  return (
    <>
      <PageHero
        title={racesPage.title}
        intro={racesPage.intro}
        image={raceList[0].image}
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
        {raceList.map((race) => (
          <Link
            key={race.slug}
            to={race.path}
            className="group overflow-hidden rounded-xl ring-1 ring-white/15 hover:ring-brandGreen"
          >
            <img
              src={race.image.src}
              alt={race.image.alt}
              className="h-64 w-full object-cover"
            />
            <div className="bg-black/30 p-6">
              <h2 className="mb-3 text-2xl text-brandGreen group-hover:underline">
                {race.title}
              </h2>
              <p className="text-lg text-white/90">{race.summary}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
