import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import SectionHeading from "../components/SectionHeading";
import CtaLink from "../components/CtaLink";
import { BrandLink } from "../components/link";

export default function Safeguarding() {
  return (
    <div>
      <section className="relative min-h-[36dvh] md:min-h-[44dvh]">
        <img
          src="/juniors/swim-line-up.jpg"
          alt="Young athletes lining up"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative flex min-h-[36dvh] items-center justify-center bg-black/70 px-6 py-20 md:min-h-[44dvh]">
          <div className="max-w-3xl text-center">
            <SectionHeading>Safeguarding</SectionHeading>
            <p className="text-lg text-white/90">
              Every athlete has the right to enjoy sport free from harm, abuse
              or neglect.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="mb-4">
          At NWTC, we are committed to creating a safe and positive environment
          for all members, especially children and young people.
        </p>
        <p className="mb-8">
          If you are concerned about the welfare or protection of a child, or
          if you are a young person who needs to talk to someone, please reach
          out. We all have a role to play in keeping our community safe.
        </p>
        <BrandLink to="/Safeguarding-Poster-NI-2025.pdf" target="_blank" external>
          <ArrowDownTrayIcon className="h-6 w-6" /> View our Safeguarding Poster
          2025
        </BrandLink>
        <div className="mt-8">
          <CtaLink to="/juniors">Junior section</CtaLink>
        </div>
      </section>
    </div>
  );
}
