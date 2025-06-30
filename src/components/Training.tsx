import { MapPinIcon } from "@heroicons/react/24/solid";
import {
  ArrowTopRightOnSquareIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import SwipeableCarousel from "./SwipableCarousel";
import { BrandLink } from "./link";

export default function Training() {
  return (
    <div className="snap-start snap-always" id="training">
      <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
        <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
          <SwipeableCarousel
            className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
            id="training"
          >
            <div>
              <img
                width={1500}
                height={800}
                src={"/training/pool-swimming.jpg"}
                alt="Athlete swimming in pool"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    Pool Swimming
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    Join our structured pool swimming sessions to improve your
                    technique, speed, and endurance. With each lane catering to
                    a different ability level, our sessions are suitable for all
                    members.
                  </p>
                  <ul className="flex flex-col gap-6 text-left">
                    <li className="flex flex-wrap justify-between gap-2">
                      <span className="flex items-center gap-2">
                        <MapPinIcon className="h-6 w-6 text-red-600" /> Foyle
                        Arena, Derry
                      </span>
                      <span className="flex items-center gap-2">
                        <ClockIcon className="h-6 w-6" /> Tuesdays 8:30pm
                      </span>
                    </li>
                    <li className="flex flex-wrap justify-between gap-2">
                      <span className="flex gap-2">
                        <MapPinIcon className="h-6 w-6 text-red-600" />{" "}
                        Templemore Complex, Derry
                      </span>
                      <span className="flex items-center gap-2">
                        <ClockIcon className="h-6 w-6" /> Thursdays 6pm
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/training/running.jpg"
                alt="Athlete running on road"
                width={1200}
                height={799}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    Running
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    Our weekly running sessions are designed to help you build
                    speed, strength, and stamina. Training plans are designed
                    with the race calendar in mind, with a focus on improving
                    performance and reducing injury risk.
                  </p>
                  <ul className="flex flex-col gap-6 text-left">
                    <li className="flex flex-wrap justify-between gap-2">
                      <span className="flex items-center gap-2">
                        <MapPinIcon className="h-6 w-6 text-red-600" />{" "}
                        Templemore Complex, Derry
                      </span>
                      <span className="flex items-center gap-2">
                        <ClockIcon className="h-6 w-6" /> Wednesday 6:15pm
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/training/open-water-swimming.jpg"
                alt="Athlete swimming in open water"
                width={1200}
                height={605}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    Open Water Swimming
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    During summer months, we host open water swimming sessions
                    at local lakes and beaches. Wetsuits, swim caps, and swim
                    bouy are required. Follow us on social media for updates.
                  </p>
                  <ul className="flex flex-col gap-6 text-left">
                    <li className="mb-6 flex flex-wrap items-center justify-around gap-2">
                      <span className="flex gap-2">
                        <MapPinIcon className="h-6 w-6 text-red-600" /> Various
                      </span>
                      <span className="flex gap-2">
                        <ClockIcon className="h-6 w-6" /> Various
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap justify-around">
                    <BrandLink
                      to="https://www.facebook.com/north.westtriathlon/"
                      target="_blank"
                    >
                      <img
                        aria-hidden
                        src="/social-media/Facebook_Logo_Primary.png"
                        alt="Facebook"
                        width={2084}
                        height={2084}
                        className="h-6 w-6"
                      />
                      Facebook <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                    </BrandLink>
                    <BrandLink
                      to="https://www.instagram.com/northwest.triathlonclub/"
                      target="_blank"
                    >
                      <img
                        aria-hidden
                        src="/social-media/Instagram_Glyph_Gradient.png"
                        alt="Instagram"
                        width={500}
                        height={500}
                        className="h-6 w-6"
                      />
                      Instagram{" "}
                      <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                    </BrandLink>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/training/cycling.jpg"
                alt="Two female athletes cycling on road"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    Club Events
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    Join us for regular club events, including time trials,
                    duathlons, and social rides. We offer these to all members
                    with a collection for locals charities at each event. Follow
                    us on social media for updates.
                  </p>
                  <ul className="flex flex-col gap-6 text-left">
                    <li className="mb-6 flex flex-wrap items-center justify-around gap-2">
                      <span className="flex gap-2">
                        <MapPinIcon className="h-6 w-6 text-red-600" /> Various
                      </span>
                      <span className="flex gap-2">
                        <ClockIcon className="h-6 w-6" /> Various
                      </span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap justify-around">
                    <BrandLink
                      to="https://www.facebook.com/north.westtriathlon/"
                      target="_blank"
                    >
                      <img
                        aria-hidden
                        src="/social-media/Facebook_Logo_Primary.png"
                        alt="Facebook"
                        width={2084}
                        height={2084}
                        className="h-6 w-6"
                      />
                      Facebook <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                    </BrandLink>
                    <BrandLink
                      to="https://www.instagram.com/northwest.triathlonclub/"
                      target="_blank"
                    >
                      <img
                        aria-hidden
                        src="/social-media/Instagram_Glyph_Gradient.png"
                        alt="Instagram"
                        width={500}
                        height={500}
                        className="h-6 w-6"
                      />
                      Instagram{" "}
                      <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                    </BrandLink>
                  </div>
                </div>
              </div>
            </div>
          </SwipeableCarousel>
        </div>
      </div>
    </div>
  );
}
