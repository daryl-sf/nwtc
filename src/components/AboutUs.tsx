import { Link } from "react-router-dom";
import SwipeableCarousel from "./SwipableCarousel";

export default function AboutUs() {
  return (
    <div className="snap-start snap-always" id="about-us">
      <div className="relative flex max-h-dvh min-h-dvh bg-brandBlue pb-20">
        <div className="container mx-auto max-w-screen-xl text-xl md:pt-4">
          <SwipeableCarousel
            className="h-dvh md:h-[calc(100dvh-2rem)] md:rounded-xl"
            id="about-us"
          >
            <div>
              <img
                width={1440}
                height={810}
                src={"/about-us/reid.jpg"}
                alt="Aileen Reid crossing finish line"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    Our origins
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    Founded in 1983, North West Triathlon Club (NWTC) is one of
                    Ireland&apos;s longest-standing triathlon communities, based
                    in Derry, Northern Ireland.
                  </p>
                  <p>
                    As a Triathlon Ireland-affiliated club, we welcome athletes
                    of all levels from across the Northwest region, offering a
                    supportive and inclusive environment to train, compete, and
                    grow.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                width={2000}
                height={1335}
                src={"/about-us/swimmers.jpg"}
                alt="Swimmers swomming in pool"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    What we offer
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    From complete beginners to seasoned triathletes, our members
                    benefit from expert coaching, structured training sessions,
                    and a vibrant social community.
                  </p>
                  <p>
                    We also run a dedicated junior program to inspire the next
                    generation of triathletes. Whether your goal is fitness,
                    fun, or high-level competition, NWTC is here to help you
                    achieve it.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                width={5071}
                height={3379}
                src={"/about-us/running-legs.jpg"}
                alt="Legs running"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    By the community, for the community
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    NWTC is a volunteer-run club, with members contributing to
                    coaching, event planning, and club management.
                  </p>
                  <p>
                    Our ethos is built on community spirit, with members
                    supporting each other to achieve their goals, whether
                    that&apos;s completing their first triathlon or qualifying
                    for international competition.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                width={2000}
                height={1333}
                src={"/juniors/bike-on-ground.jpg"}
                alt="Bike on the ground at side of road"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    Fully affiliated with Triathlon Ireland
                  </h1>
                  <div className="rounded-xl border-t-2 border-brandGreen pt-3">
                    <div className="mb-3 flex justify-around">
                      <img
                        width={512}
                        height={332}
                        alt="Triathlon Ireland logo"
                        src="/juniors/triathlon-ireland-logo.png"
                        className="h-28 w-auto"
                      />
                      <img
                        src="/nwtc-logo.PNG"
                        alt="NWTC Logo"
                        width={536}
                        height={536}
                        className="h-28 w-auto rounded-full border border-white hover:border-brandGreen"
                      />
                    </div>
                    <p>
                      NWTC is fully aligened with Triathlon Ireland, ensuring
                      that our coaching, safeguarding, and safety practices meet
                      the highest standards.
                    </p>
                    <p>
                      Our dedicated, qualified coaches are committed to creating
                      a positive and inclusive training environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                width={5071}
                height={3379}
                src={"/races/cyclists-racing.jpg"}
                alt="Legs running"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 rounded-xl border-b-2 border-white pb-3 text-3xl md:text-4xl lg:text-5xl">
                    NWTC Hall of Fame
                  </h1>
                  <p className="rounded-xl border-t-2 border-brandGreen py-3">
                    The NWTC Hall of Fame is a celebration of our members&apos;
                    achievements, both on and off the course.
                  </p>
                  <p>
                    We recognize the dedication, perseverance, and sportsmanship
                    of our athletes, and we are proud to showcase their
                    accomplishments.
                  </p>
                  <Link
                    to="/hall-of-fame"
                    className="hover:bg-brandGreen/80 mt-4 inline-block rounded-lg bg-brandGreen px-4 py-2 text-white"
                  >
                    View the Hall of Fame
                  </Link>
                </div>
              </div>
            </div>
          </SwipeableCarousel>
        </div>
      </div>
    </div>
  );
}
