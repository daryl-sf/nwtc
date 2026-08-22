import { PageHero, TextCta } from "../../components/desktop/Editorial";
import { swimSessionsPage, useSwimSessions } from "../../content/swim";
import { SessionChips, SessionSteps } from "../../components/swim/SessionDetails";

export default function SwimSessionsDesktop() {
  const { sessions, error } = useSwimSessions();

  return (
    <>
      <PageHero
        title={swimSessionsPage.title}
        intro={swimSessionsPage.intro}
        image={{
          src: "/training/pool-swimming.jpg",
          alt: "Athlete swimming in pool",
        }}
      />
      <section className="mx-auto max-w-3xl space-y-6 px-6 py-12 text-lg leading-relaxed">
        <div className="rounded-xl border-t-2 border-brandGreen bg-black/30 p-6">
          <p>{swimSessionsPage.hint}</p>
        </div>
        {error ? (
          <p className="text-red-300">
            Sessions could not be loaded. Please try again later.
          </p>
        ) : null}
        {!sessions && !error ? <p>Loading sessions…</p> : null}
        {sessions?.map((session) => (
          <article
            key={session.title}
            className="rounded-xl bg-black/30 p-6 ring-1 ring-white/15"
          >
            <h2 className="mb-4 border-b-2 border-white pb-3 text-3xl">
              {session.title}
            </h2>
            <div className="space-y-4 border-t-2 border-brandGreen pt-4">
              <div className="flex justify-start">
                <SessionChips session={session} />
              </div>
              <p>{session.description}</p>
              <SessionSteps steps={session.steps} />
            </div>
          </article>
        ))}
        <div className="rounded-xl border-t-2 border-brandGreen bg-black/30 p-6">
          <p>{swimSessionsPage.join}</p>
          <TextCta to="/join">{swimSessionsPage.joinCta}</TextCta>
        </div>
      </section>
    </>
  );
}
