import SwipeableCarousel from "./SwipableCarousel";
import { swimSessionsPage, useSwimSessions } from "../content/swim";
import { SessionChips, SessionSteps } from "./swim/SessionDetails";
import { TextCta } from "./desktop/Editorial";

export default function SwimSessionsMobile() {
  const { sessions, error } = useSwimSessions();

  const intro = (
    <div key="intro">
      <img
        src="/training/pool-swimming.jpg"
        alt="Athlete swimming in pool"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
        <div className="w-3/4 text-center">
          <h1 className="mb-2 rounded-xl border-b-2 border-white pb-2 text-3xl">
            {swimSessionsPage.title}
          </h1>
          <p className="rounded-xl border-t-2 border-brandGreen py-2">
            {swimSessionsPage.intro}
          </p>
          <p className="py-2">{swimSessionsPage.hint}</p>
          <p className="py-2">{swimSessionsPage.join}</p>
          <TextCta to="/join">{swimSessionsPage.joinCta}</TextCta>
          {error ? (
            <p className="pt-4 text-sm text-red-300">
              Sessions could not be loaded. Please try again later.
            </p>
          ) : null}
          {!sessions && !error ? (
            <p className="pt-4 text-sm text-white/70">Loading sessions…</p>
          ) : null}
        </div>
      </div>
    </div>
  );

  const sessionSlides = (sessions ?? []).map((session) => (
    <div key={session.title}>
      <img
        src="/training/pool-swimming.jpg"
        alt="Athlete swimming in pool"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
        <div className="w-3/4 text-center">
          <h1 className="mb-3 rounded-xl border-b-2 border-white pb-3 text-3xl">
            {session.title}
          </h1>
          <div className="rounded-xl border-t-2 border-brandGreen pt-3">
            <SessionChips session={session} />
            <p className="py-3">{session.description}</p>
            <SessionSteps
              steps={session.steps}
              className="no-scrollbar relative max-h-[45dvh] overflow-scroll px-1 text-base"
            />
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <main className="no-scrollbar h-dvh snap-y snap-mandatory overflow-y-scroll">
      <div className="snap-start snap-always" id="swim-sessions">
        <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
          <div className="container mx-auto max-w-screen-xl text-xl">
            <SwipeableCarousel
              className="h-dvh"
              id="swim-sessions"
            >
              {[intro, ...sessionSlides]}
            </SwipeableCarousel>
          </div>
        </div>
      </div>
    </main>
  );
}
