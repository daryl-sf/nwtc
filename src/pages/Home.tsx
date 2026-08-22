import Splash from "../components/Splash";
import CinematicSplit from "../components/CinematicSplit";
import SectionHeading from "../components/SectionHeading";
import CtaLink from "../components/CtaLink";
import { SnapPage, SnapSection } from "../components/SnapPage";
import SiteFooter from "../components/layout/SiteFooter";

export default function Home() {
  return (
    <SnapPage>
      <SnapSection id="home">
        <Splash />
      </SnapSection>

      <SnapSection id="about-us">
        <CinematicSplit
          image="/about-us/reid.jpg"
          alt="Aileen Reid crossing the finish line"
        >
          <SectionHeading as="h2">Our club</SectionHeading>
          <p>
            Founded in 1983, North West Triathlon Club is one of Ireland&apos;s
            longest-standing triathlon communities, based in Derry.
          </p>
          <p className="mt-3">
            We welcome athletes of every level — from first-timers to
            internationals — in a supportive, volunteer-run club.
          </p>
          <CtaLink to="/about">Our story</CtaLink>
        </CinematicSplit>
      </SnapSection>

      <SnapSection id="training">
        <CinematicSplit
          image="/training/pool-swimming.jpg"
          alt="Athlete swimming in a pool"
          reverse
        >
          <SectionHeading as="h2">Training</SectionHeading>
          <p>
            Structured swim, bike and run sessions across Derry, plus summer
            open water and regular club events.
          </p>
          <p className="mt-3">
            Pool Tuesdays and Thursdays, run on Wednesday evenings — all
            abilities welcome.
          </p>
          <CtaLink to="/training">View timetable</CtaLink>
        </CinematicSplit>
      </SnapSection>

      <SnapSection id="races">
        <CinematicSplit
          image="/races/liamball.jpg"
          alt="Liam Ball mural"
        >
          <SectionHeading as="h2">Club races</SectionHeading>
          <p>
            We host the Liam Ball Sprint Triathlon and the Buncrana Duathlon —
            two events that bring the northwest racing calendar to life.
          </p>
          <CtaLink to="/races">Explore races</CtaLink>
        </CinematicSplit>
      </SnapSection>

      <SnapSection id="juniors">
        <CinematicSplit
          image="/juniors/lukemccarron.jpg"
          alt="Luke McCarron on a bike"
          reverse
        >
          <SectionHeading as="h2">Juniors</SectionHeading>
          <p>
            A proven pathway for young athletes: skilled coaching, low costs,
            and a safe, inclusive environment.
          </p>
          <CtaLink to="/juniors">Junior section</CtaLink>
        </CinematicSplit>
      </SnapSection>

      <SnapSection id="join">
        <CinematicSplit
          image="/join/runners-on-bridge.jpg"
          alt="A group of runners on a bridge"
        >
          <SectionHeading as="h2">Become a member</SectionHeading>
          <p>
            Join through Triathlon Ireland and train with a community that has
            been racing — and looking after each other — for four decades.
          </p>
          <CtaLink to="/join">Join today</CtaLink>
        </CinematicSplit>
      </SnapSection>

      <SnapSection className="md:hidden">
        <SiteFooter compact />
      </SnapSection>
    </SnapPage>
  );
}
