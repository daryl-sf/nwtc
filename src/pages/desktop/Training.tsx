import { MapPinIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import { trainingPage, trainingSlides } from "../../content/training";
import { PageHero, PhotoEditorial, TextCta } from "../../components/desktop/Editorial";
import { FacebookLink, InstagramLink } from "../../components/link";
import { swimSessionsPage } from "../../content/swim";

export default function TrainingPage() {
  const [hero, ...rest] = trainingSlides;

  return (
    <>
      <PageHero
        title={trainingPage.title}
        intro={trainingPage.intro}
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
          <ul className="mt-4 space-y-3">
            {slide.sessions.map((session) => (
              <li
                key={`${session.venue}-${session.time}`}
                className="flex flex-wrap gap-x-6 gap-y-2"
              >
                <span className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-red-600" />
                  {session.venue}
                </span>
                <span className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5" />
                  {session.time}
                </span>
              </li>
            ))}
          </ul>
          {slide.id === "pool" ? (
            <TextCta to="/training/swim-sessions">
              {swimSessionsPage.ctaFromTraining}
            </TextCta>
          ) : null}
          {slide.social ? (
            <div className="mt-4 flex gap-6">
              <FacebookLink />
              <InstagramLink />
            </div>
          ) : null}
        </PhotoEditorial>
      ))}
    </>
  );
}
