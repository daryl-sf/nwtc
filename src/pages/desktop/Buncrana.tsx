import { races } from "../../content/races";
import { PageHero } from "../../components/desktop/Editorial";

export default function BuncranaPage() {
  const race = races.buncrana;
  return (
    <>
      <PageHero title={race.title} intro={race.summary} image={race.image} />
      <article className="mx-auto max-w-3xl space-y-6 px-6 py-16 text-lg leading-relaxed">
        {race.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </article>
    </>
  );
}
