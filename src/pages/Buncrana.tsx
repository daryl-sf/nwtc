import CinematicSplit from "../components/CinematicSplit";
import SectionHeading from "../components/SectionHeading";
import CtaLink from "../components/CtaLink";

export default function Buncrana() {
  return (
    <div>
      <CinematicSplit
        image="/races/cyclists-racing.jpg"
        alt="Triathletes racing"
      >
        <SectionHeading>Buncrana Duathlon</SectionHeading>
        <p>
          The Buncrana Duathlon is a great way to start the season. Taking
          place in the beautiful town of Buncrana, the duathlon consists of a
          3.2km run, 16km bike and a 3.2km run.
        </p>
        <p className="mt-3">
          The course is flat and fast and is perfect for beginners and seasoned
          athletes alike.
        </p>
      </CinematicSplit>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-display mb-4 text-2xl uppercase tracking-wide text-brandGreen">
          The course
        </h2>
        <ul className="mb-6 list-disc space-y-2 pl-5">
          <li>Run 1 — 3.2km</li>
          <li>Bike — 16km</li>
          <li>Run 2 — 3.2km</li>
        </ul>
        <p>
          An early-season test on Inishowen roads, hosted by the club and open
          to members and visitors. Follow NWTC on social media for the next
          edition.
        </p>
        <CtaLink to="/races">All club races</CtaLink>
      </section>
    </div>
  );
}
