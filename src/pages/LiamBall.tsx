import CinematicSplit from "../components/CinematicSplit";
import SectionHeading from "../components/SectionHeading";
import CtaLink from "../components/CtaLink";

export default function LiamBall() {
  return (
    <div>
      <CinematicSplit image="/races/liamball.jpg" alt="Liam Ball mural">
        <SectionHeading>Liam Ball Sprint Triathlon</SectionHeading>
        <p>
          Liam Ball, a proud Derry swimmer, represented Ireland at the 1968 and
          1972 Olympics. A remarkable athlete, he left a lasting legacy despite
          his untimely death in 1984 at 33.
        </p>
        <p className="mt-3">
          To honour his memory, NWTC named their annual sprint triathlon after
          him. Year after year the event continues to grow, keeping his story
          alive and inspiring the next generation of athletes.
        </p>
      </CinematicSplit>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-display mb-4 text-2xl uppercase tracking-wide text-brandGreen">
          Who it&apos;s for
        </h2>
        <p className="mb-4">
          The Liam Ball Sprint is the club&apos;s flagship race: a community
          event on home roads and water, organised by volunteers and raced by
          members, visitors, and first-timers alike.
        </p>
        <p>
          Watch our social channels for the next date, entries, and volunteer
          calls — the race only happens because the club turns out.
        </p>
        <CtaLink to="/races">All club races</CtaLink>
      </section>
    </div>
  );
}
