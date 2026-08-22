import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import CinematicSplit from "../components/CinematicSplit";
import SectionHeading from "../components/SectionHeading";
import CtaLink from "../components/CtaLink";
import { BrandLink } from "../components/link";
import { SnapPage, SnapSection } from "../components/SnapPage";

export default function Join() {
  return (
    <SnapPage>
      <SnapSection>
        <CinematicSplit
          image="/join/runners-on-bridge.jpg"
          alt="A group of runners on a bridge"
        >
          <SectionHeading>Become a member today</SectionHeading>
          <p>
            Join North West Triathlon Club today and become part of a vibrant
            and supportive community of athletes. You can join our club through
            the Triathlon Ireland website.
          </p>
          <CtaLink to="https://www.triathlonireland.com/" external>
            Visit Triathlon Ireland
          </CtaLink>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/join/swimmer-open-water.jpg"
          alt="Swimmer in open water"
          reverse
        >
          <SectionHeading as="h2">Join the conversation</SectionHeading>
          <p>
            Follow us on social media to stay up to date with the latest club
            news, events, and training sessions. We are active on Facebook and
            Instagram.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 md:justify-start">
            <BrandLink
              to="https://www.facebook.com/north.westtriathlon/"
              target="_blank"
            >
              <img
                aria-hidden
                src="/social-media/Facebook_Logo_Primary.png"
                alt=""
                className="h-6 w-6"
              />
              Facebook <ArrowTopRightOnSquareIcon className="h-6 w-6" />
            </BrandLink>
            <BrandLink
              to="https://www.instagram.com/northwest.triathlonclub/"
              target="_blank"
            >
              <img
                aria-hidden
                src="/social-media/Instagram_Glyph_Gradient.png"
                alt=""
                className="h-6 w-6"
              />
              @northwest.triathlonclub{" "}
              <ArrowTopRightOnSquareIcon className="h-6 w-6" />
            </BrandLink>
          </div>
        </CinematicSplit>
      </SnapSection>
    </SnapPage>
  );
}
