import CinematicSplit from "../components/CinematicSplit";
import SectionHeading from "../components/SectionHeading";
import CtaLink from "../components/CtaLink";
import { SnapPage, SnapSection } from "../components/SnapPage";

export default function About() {
  return (
    <SnapPage>
      <SnapSection>
        <CinematicSplit
          image="/about-us/reid.jpg"
          alt="Aileen Reid crossing the finish line"
        >
          <SectionHeading>Our origins</SectionHeading>
          <p>
            Founded in 1983, North West Triathlon Club (NWTC) is one of
            Ireland&apos;s longest-standing triathlon communities, based in
            Derry, Northern Ireland.
          </p>
          <p className="mt-3">
            As a Triathlon Ireland-affiliated club, we welcome athletes of all
            levels from across the Northwest region, offering a supportive and
            inclusive environment to train, compete, and grow.
          </p>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/about-us/swimmers.jpg"
          alt="Swimmers in a pool"
          reverse
        >
          <SectionHeading as="h2">What we offer</SectionHeading>
          <p>
            From complete beginners to seasoned triathletes, our members
            benefit from expert coaching, structured training sessions, and a
            vibrant social community.
          </p>
          <p className="mt-3">
            We also run a dedicated junior program to inspire the next
            generation of triathletes. Whether your goal is fitness, fun, or
            high-level competition, NWTC is here to help you achieve it.
          </p>
          <CtaLink to="/training">See training</CtaLink>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/about-us/running-legs.jpg"
          alt="Athletes running"
        >
          <SectionHeading as="h2">By the community, for the community</SectionHeading>
          <p>
            NWTC is a volunteer-run club, with members contributing to
            coaching, event planning, and club management.
          </p>
          <p className="mt-3">
            Our ethos is built on community spirit, with members supporting
            each other to achieve their goals, whether that&apos;s completing
            their first triathlon or qualifying for international competition.
          </p>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/juniors/bike-on-ground.jpg"
          alt="Bike at the side of the road"
          reverse
        >
          <SectionHeading as="h2">Fully affiliated with Triathlon Ireland</SectionHeading>
          <div className="mb-4 flex justify-center gap-6 md:justify-start">
            <img
              alt="Triathlon Ireland logo"
              src="/juniors/triathlon-ireland-logo.png"
              className="h-20 w-auto"
            />
            <img
              src="/nwtc-logo.PNG"
              alt="NWTC Logo"
              className="h-20 w-auto rounded-full border border-white"
            />
          </div>
          <p>
            NWTC is fully aligned with Triathlon Ireland, ensuring that our
            coaching, safeguarding, and safety practices meet the highest
            standards.
          </p>
          <p className="mt-3">
            Our dedicated, qualified coaches are committed to creating a
            positive and inclusive training environment.
          </p>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/races/cyclists-racing.jpg"
          alt="Cyclists racing"
        >
          <SectionHeading as="h2">NWTC Hall of Fame</SectionHeading>
          <p>
            The NWTC Hall of Fame is a celebration of our members&apos;
            achievements, both on and off the course.
          </p>
          <p className="mt-3">
            We recognize the dedication, perseverance, and sportsmanship of
            our athletes, and we are proud to showcase their accomplishments.
          </p>
          <CtaLink to="/hall-of-fame">Meet the Hall of Fame</CtaLink>
        </CinematicSplit>
      </SnapSection>
    </SnapPage>
  );
}
