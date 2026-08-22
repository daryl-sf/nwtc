import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { contactPage } from "../../content/contact";
import { joinSlides } from "../../content/join";
import { PageHero } from "../../components/desktop/Editorial";
import { BrandLink, FacebookLink, InstagramLink } from "../../components/link";
import { social } from "../../content/links";

export default function ContactPage() {
  const contactSlide = joinSlides.find((s) => s.kind === "contact")!;

  return (
    <>
      <PageHero
        title={contactPage.title}
        intro={contactPage.intro}
        image={contactSlide.image}
      />
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-lg leading-relaxed">
        {contactPage.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <ul className="space-y-4 pt-4">
          <li>
            <FacebookLink />
          </li>
          <li>
            <InstagramLink />
          </li>
          <li>
            <BrandLink to={social.triathlonIreland} target="_blank">
              Join via Triathlon Ireland
              <ArrowTopRightOnSquareIcon className="h-5 w-5" />
            </BrandLink>
          </li>
          <li>
            <BrandLink to="/safeguarding">Safeguarding</BrandLink>
          </li>
          <li>
            <BrandLink to={social.safeguardingPdf} target="_blank" external>
              <ArrowDownTrayIcon className="h-5 w-5" />
              Safeguarding Poster 2025
            </BrandLink>
          </li>
        </ul>
      </section>
    </>
  );
}
