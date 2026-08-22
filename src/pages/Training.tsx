import { MapPinIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import CinematicSplit from "../components/CinematicSplit";
import SectionHeading from "../components/SectionHeading";
import CtaLink from "../components/CtaLink";
import { SnapPage, SnapSection } from "../components/SnapPage";

const sessions = [
  {
    discipline: "Pool swimming",
    venue: "Foyle Arena, Derry",
    time: "Tuesdays 8:30pm",
  },
  {
    discipline: "Pool swimming",
    venue: "Templemore Complex, Derry",
    time: "Thursdays 6pm",
  },
  {
    discipline: "Running",
    venue: "Templemore Complex, Derry",
    time: "Wednesdays 6:15pm",
  },
  {
    discipline: "Open water swimming",
    venue: "Various lakes and beaches",
    time: "Summer — dates on social",
  },
  {
    discipline: "Club events",
    venue: "Various",
    time: "Time trials, duathlons, social rides",
  },
];

export default function Training() {
  return (
    <SnapPage>
      <SnapSection>
        <CinematicSplit
          image="/training/pool-swimming.jpg"
          alt="Athlete swimming in a pool"
        >
          <SectionHeading>Pool swimming</SectionHeading>
          <p>
            Join our structured pool swimming sessions to improve your
            technique, speed, and endurance. With each lane catering to a
            different ability level, our sessions are suitable for all members.
          </p>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/training/running.jpg"
          alt="Athlete running on the road"
          reverse
        >
          <SectionHeading as="h2">Running</SectionHeading>
          <p>
            Our weekly running sessions are designed to help you build speed,
            strength, and stamina. Training plans are designed with the race
            calendar in mind, with a focus on improving performance and reducing
            injury risk.
          </p>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/training/open-water-swimming.jpg"
          alt="Athlete swimming in open water"
        >
          <SectionHeading as="h2">Open water swimming</SectionHeading>
          <p>
            During summer months, we host open water swimming sessions at local
            lakes and beaches. Wetsuits, swim caps, and a swim buoy are
            required. Follow us on social media for updates.
          </p>
          <CtaLink to="/join">Follow for dates</CtaLink>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <CinematicSplit
          image="/training/cycling.jpg"
          alt="Two athletes cycling on the road"
          reverse
        >
          <SectionHeading as="h2">Club events</SectionHeading>
          <p>
            Join us for regular club events, including time trials, duathlons,
            and social rides. We offer these to all members with a collection
            for local charities at each event.
          </p>
        </CinematicSplit>
      </SnapSection>

      <SnapSection>
        <section className="bg-brandBlue px-6 py-16 md:py-20">
          <div className="mx-auto max-w-screen-xl">
            <SectionHeading as="h2">Weekly timetable</SectionHeading>
            <p className="mb-8 max-w-2xl text-white/80">
              A snapshot of regular senior sessions. Open water and club events
              vary — check Facebook and Instagram for the latest.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/15">
              <table className="w-full min-w-[36rem] text-left">
                <thead className="bg-white/5 font-display uppercase tracking-wider text-brandGreen">
                  <tr>
                    <th className="px-4 py-3">Session</th>
                    <th className="px-4 py-3">Venue</th>
                    <th className="px-4 py-3">When</th>
                  </tr>
                </thead>
                <tbody>
                  {sessions.map((row) => (
                    <tr
                      key={`${row.discipline}-${row.venue}`}
                      className="border-t border-white/10"
                    >
                      <td className="px-4 py-3">{row.discipline}</td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-2">
                          <MapPinIcon className="h-5 w-5 text-red-500" />
                          {row.venue}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="inline-flex items-center gap-2">
                          <ClockIcon className="h-5 w-5" />
                          {row.time}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </SnapSection>
    </SnapPage>
  );
}
