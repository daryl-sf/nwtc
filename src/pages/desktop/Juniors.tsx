import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { juniorsPage, juniorSlides } from "../../content/juniors";
import { safeguardingPage } from "../../content/safeguarding";
import { PageHero, PhotoEditorial, TextCta } from "../../components/desktop/Editorial";
import { BrandLink, FacebookLink, InstagramLink } from "../../components/link";
import { social } from "../../content/links";

export default function JuniorsPage() {
  const [hero, ...rest] = juniorSlides;

  return (
    <>
      <PageHero
        title={juniorsPage.title}
        intro={juniorsPage.intro}
        image={hero.image}
      />
      {[hero, ...rest].map((slide, i) => (
        <PhotoEditorial
          key={slide.id}
          title={slide.title}
          paragraphs={slide.paragraphs}
          image={slide.image}
          reverse={i % 2 === 1}
        >
          {"showLogos" in slide && slide.showLogos ? (
            <div className="mt-4 flex gap-6">
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
          ) : null}
          {"joinCta" in slide && slide.joinCta ? (
            <div className="mt-4 flex flex-wrap gap-6">
              <FacebookLink />
              <InstagramLink />
            </div>
          ) : null}
        </PhotoEditorial>
      ))}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="mb-4 border-b-2 border-white pb-3 text-3xl">
          {safeguardingPage.title}
        </h2>
        <div className="space-y-4 border-t-2 border-brandGreen pt-3 text-lg">
          {safeguardingPage.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <TextCta to="/safeguarding">Safeguarding</TextCta>
          <div className="pt-2">
            <BrandLink to={social.safeguardingPdf} target="_blank" external>
              <ArrowDownTrayIcon className="h-5 w-5" />
              {safeguardingPage.posterLabel}
            </BrandLink>
          </div>
        </div>
      </section>
    </>
  );
}
