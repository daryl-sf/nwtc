import ReactMarkdown from "react-markdown";
import { hallOfFameEntries, hallOfFamePage } from "../../content/hallOfFame";
import { PageHero } from "../../components/desktop/Editorial";

export default function HallOfFameDesktop() {
  const heroImage = hallOfFameEntries[0].image ?? hallOfFameEntries[0].profileImage;

  return (
    <>
      <PageHero
        title={hallOfFamePage.title}
        intro={hallOfFamePage.intro}
        image={heroImage}
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {hallOfFameEntries.map((entry) => (
          <a
            key={entry.slug}
            href={`#${entry.slug}`}
            className="group rounded-xl bg-black/30 p-5 text-center ring-1 ring-white/15 hover:ring-brandGreen"
          >
            <img
              src={entry.profileImage.src}
              alt={entry.profileImage.alt}
              className="mx-auto mb-4 h-32 w-32 rounded-full border-2 border-brandGreen object-cover"
            />
            <h2 className="text-xl text-brandGreen group-hover:underline">
              {entry.name}
            </h2>
          </a>
        ))}
      </section>
      <div className="mx-auto max-w-3xl space-y-24 px-6 pb-24">
        {hallOfFameEntries.map((entry) => (
          <article key={entry.slug} id={entry.slug} className="scroll-mt-28">
            <div className="mb-6 flex items-center gap-4">
              <img
                src={entry.profileImage.src}
                alt={entry.profileImage.alt}
                className="h-24 w-24 rounded-full border-2 border-brandGreen object-cover"
              />
              <h2 className="border-b-2 border-white pb-2 text-3xl">
                {entry.name}
              </h2>
            </div>
            <div className="prose prose-invert max-w-none border-t-2 border-brandGreen pt-4 text-lg leading-relaxed [&_p]:mb-4 [&_strong]:text-brandGreen">
              <ReactMarkdown>{entry.description}</ReactMarkdown>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
