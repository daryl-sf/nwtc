"use client";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";

export default function AboutUs() {
  return (
    <div className="snap-always snap-center pb-20" id="about-us">
      <div className="relative min-h-with-footer flex bg-brandBlue pb-20">
        <div className="container max-w-screen-xl mx-auto text-2xl pt-4">
          <Carousel
            className="rounded-xl"
            placeholder={undefined}
            onPointerEnterCapture={console.log}
            onPointerLeaveCapture={console.log}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div className="relative h-full w-full">
              <Image
                width={5071}
                height={3379}
                src={"/juniors/bikes-transition.jpg"}
                alt="Bikes in transition area"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Our origins
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    Founded in 1983, North West Triathlon Club (NWTC) is one of
                    Ireland&apos;s longest-standing triathlon communities, based
                    in Derry, Northern Ireland. As a Triathlon
                    Ireland-affiliated club, we welcome athletes of all levels
                    from across the Northwest region, offering a supportive and
                    inclusive environment to train, compete, and grow.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                width={5071}
                height={3379}
                src={"/juniors/bikes-transition.jpg"}
                alt="Bikes in transition area"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    What we offer
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    From complete beginners to seasoned triathletes, our members
                    benefit from expert coaching, structured training sessions,
                    and a vibrant social community. We also run a dedicated
                    junior program to inspire the next generation of
                    triathletes. Whether your goal is fitness, fun, or
                    high-level competition, NWTC is here to help you achieve it.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                width={5071}
                height={3379}
                src={"/juniors/bikes-transition.jpg"}
                alt="Bikes in transition area"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    By the community, for the community
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    NWTC is a volunteer-run club, with members contributing to
                    coaching, event planning, and club management. Our ethos is
                    built on community spirit, with members supporting each
                    other to achieve their goals, whether that&apos;s completing
                    their first triathlon or qualifying for international
                    competition.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                width={3500}
                height={2333}
                src={"/juniors/bike-on-ground.jpg"}
                alt="Bike on the ground at side of road"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Fully affiliated with Triathlon Ireland
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    NWTC is fully aligened with Triathlon Ireland, ensuring that
                    our coaching, safeguarding, and safety practices meet the
                    highest standards. Our dedicated, qualified coaches are
                    committed to creating a positive and inclusive training
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
