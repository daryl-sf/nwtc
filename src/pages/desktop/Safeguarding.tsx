import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { safeguardingPage } from "../../content/safeguarding";
import { PageHero } from "../../components/desktop/Editorial";
import { BrandLink } from "../../components/link";
import { social } from "../../content/links";

export default function SafeguardingDesktop() {
  return (
    <>
      <PageHero
        title={safeguardingPage.title}
        intro={safeguardingPage.paragraphs[0]}
        image={{
          src: "/juniors/swim-line-up.jpg",
          alt: "Triathletes lining up to swim",
        }}
      />
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-lg leading-relaxed">
        <p>{safeguardingPage.paragraphs[1]}</p>
        <BrandLink to={social.safeguardingPdf} target="_blank" external>
          <ArrowDownTrayIcon className="h-5 w-5" />
          {safeguardingPage.posterLabel}
        </BrandLink>
      </section>
    </>
  );
}
