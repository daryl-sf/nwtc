import { aboutPage, aboutSlides } from "../../content/about";
import { PageHero, PhotoEditorial, TextCta } from "../../components/desktop/Editorial";

export default function AboutPage() {
  const hof = aboutSlides.find((s) => s.id === "hall-of-fame");
  const sections = aboutSlides.filter((s) => s.id !== "hall-of-fame");

  return (
    <>
      <PageHero
        title={aboutPage.title}
        intro={aboutPage.intro}
        image={aboutSlides[0].image}
      />
      {sections.map((slide, i) => (
        <PhotoEditorial
          key={slide.id}
          title={slide.title}
          paragraphs={slide.paragraphs}
          image={slide.image}
          reverse={i % 2 === 1}
        >
          {slide.id === "affiliation" ? (
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
        </PhotoEditorial>
      ))}
      {hof ? (
        <PhotoEditorial
          title={hof.title}
          paragraphs={hof.paragraphs}
          image={hof.image}
          reverse
        >
          <TextCta to="/hall-of-fame">View the Hall of Fame</TextCta>
        </PhotoEditorial>
      ) : null}
    </>
  );
}
