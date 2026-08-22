import CinematicSplit from "../components/CinematicSplit";
import SectionHeading from "../components/SectionHeading";
import CtaLink from "../components/CtaLink";
import { SnapPage, SnapSection } from "../components/SnapPage";
import { BrandLink } from "../components/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Juniors() {
  return (
    <SnapPage>
      <SnapSection>
        <CinematicSplit
          image="/juniors/lukemccarron.jpg"
          alt="Luke McCarron on a bike"
        >
          <SectionHeading>Junior section</SectionHeading>
          <p>
            At NWTC, we are passionate about developing young athletes in a
            fun, supportive, and safe environment. Our junior section provides
            structured coaching for aspiring triathletes, focusing on skill
            development, fitness, and a love for the sport.
          </p>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/juniors/cyclists.jpg"
          alt="Triathletes racing on bikes"
          reverse
        >
          <SectionHeading as="h2">Open to all committed young athletes</SectionHeading>
          <p>
            Age is not a limiting factor at NWTC. If your child can confidently
            swim 100m (4 lengths of a 25m pool) in under two minutes and do so
            safely, we can work with them — as long as they have the desire to
            become a triathlete.
          </p>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/juniors/swim-line-up.jpg"
          alt="Triathletes lining up to swim"
        >
          <SectionHeading as="h2">A proven pathway to success</SectionHeading>
          <p>
            Our junior club has a strong track record of developing top-quality
            athletes. Over the years, we have proudly seen four of our juniors
            progress to represent Ireland at various international events. At
            NWTC, we provide the coaching, guidance, and opportunities to help
            young athletes reach their full potential.
          </p>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/juniors/runners.jpg"
          alt="Triathletes running"
          reverse
        >
          <SectionHeading as="h2">Keeping costs low</SectionHeading>
          <p>
            At NWTC, we believe in making triathlon as accessible as possible.
            We subsidise junior training costs through our senior club to
            ensure that young athletes have the best opportunity to develop.
            Fees are calculated per training block, but as a reference, in 2024
            the cost per session was around £3.50.
          </p>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/juniors/bike-on-ground.jpg"
          alt="Bike on the ground at the side of the road"
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
            standards. Our dedicated, qualified coaches are committed to
            creating a positive and inclusive training environment.
          </p>
          <CtaLink to="/safeguarding">Safeguarding</CtaLink>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/juniors/cyclist.jpg"
          alt="Cyclist on the road"
          reverse
        >
          <SectionHeading as="h2">Want to become a triathlete?</SectionHeading>
          <p>
            Whether your child is new to triathlon or looking to improve their
            race performance, NWTC offers a fantastic opportunity to train,
            learn, and grow in a supportive team setting.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <BrandLink
              to="https://www.facebook.com/north.westtriathlon/"
              target="_blank"
            >
              Facebook <ArrowTopRightOnSquareIcon className="h-6 w-6" />
            </BrandLink>
            <BrandLink
              to="https://www.instagram.com/northwest.triathlonclub/"
              target="_blank"
            >
              Instagram <ArrowTopRightOnSquareIcon className="h-6 w-6" />
            </BrandLink>
          </div>
        </CinematicSplit>
      </SnapSection>
    </SnapPage>
  );
}
