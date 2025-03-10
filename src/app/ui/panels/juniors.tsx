"use client";
import Image from "next/image";
import { Carousel } from "@material-tailwind/react";
import { BrandLink } from "@/app/ui/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

export default function Juniors() {
  return (
    <div className="snap-always snap-start" id="juniors">
      <div className="relative min-h-screen max-h-screen flex bg-brandBlue pb-8">
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
                width={2000}
                height={1333}
                src={"/juniors/single-swimmer.jpg"}
                alt="Single swimmer performing front crawl"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Junior Section
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    At NWTC, we are passionate about developing young athletes
                    in a fun, supportive, and safe environment. Our junior
                    section provides structured coaching for aspiring
                    traiathletes, focusing on skill development, fitness, and a
                    love for the sport.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                width={1500}
                height={1125}
                src={"/juniors/cyclists.jpg"}
                alt="Traithletes racing on bikes"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Open to all committed young athletes
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    Age is not a limiting factor at NWTC. If your child
                    canconfidently swim 100m (4 lengths of a 25m pool) in under
                    two minutes and do so safely, we can work with them - as
                    long as the have the desire to become a triathlete.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                width={1660}
                height={1106}
                src={"/juniors/swim-line-up.jpg"}
                alt="Traithletes lining up to swim"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    A proven pathway to success
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    Our junior club has a strong track record of developing
                    top-quality atheletes. Over the years, we have proudly seen
                    four of our juniors progress to represent Ireland at various
                    international events. At NWTC, we provide the coaching,
                    guidance, and opportunities to help young athletes reach
                    their full potential.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                width={2000}
                height={1436}
                src={"/juniors/runners.jpg"}
                alt="Traithletes running"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Keeping costs low
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    At NWTC, we believe in making triathlon as accessbile as
                    apossible. We susidise junior training costs through our
                    senior club to ensure that young atheltes have the best
                    opportunity to develop. Fees are calculated per training
                    block, but as a reference, in 2024, the cost per session was
                    around £3.50.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                width={2000}
                height={1333}
                src={"/juniors/bike-on-ground.jpg"}
                alt="Bike on the ground at side of road"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Fully affiliated with Triathlon Ireland
                  </h1>
                  <div className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    <div className="flex justify-around mb-3">
                      <Image
                        width={512}
                        height={332}
                        alt="Triathlon Ireland logo"
                        src="/juniors/triathlon-ireland-logo.png"
                        className="h-28 w-auto"
                      />
                      <Image
                        src="/nwtc-logo.PNG"
                        alt="NWTC Logo"
                        width={536}
                        height={536}
                        className="border-white border rounded-full hover:border-brandGreen h-28 w-auto"
                      />
                    </div>
                    <p>
                      NWTC is fully aligened with Triathlon Ireland, ensuring
                      that our coaching, safeguarding, and safety practices meet
                      the highest standards. Our dedicated, qualified coaches
                      are committed to creating a positive and inclusive
                      training environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full w-full">
              <Image
                width={2000}
                height={1122}
                src={"/juniors/cyclist.jpg"}
                alt="Single cyclist on road"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Want to become a triathlete?
                  </h1>
                  <p className="border-t-2 border-brandGreen py-3 rounded-xl">
                    Whether your child is new to triathlon or looking to improve
                    their race performance, NWTC offers a fantastic opportunity
                    to train, learn, and grow in a supportive team setting.
                  </p>
                  <p>Join us</p>
                  <div className="flex flex-wrap justify-around">
                    <BrandLink
                      href="https://www.facebook.com/north.westtriathlon/"
                      target="_blank"
                    >
                      <Image
                        aria-hidden
                        src="/social-media/Facebook_Logo_Primary.png"
                        alt="Facebook"
                        width={2084}
                        height={2084}
                        className="w-6 h-6"
                      />
                      Facebook <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </BrandLink>
                    <BrandLink
                      href="https://www.instagram.com/northwest.triathlonclub/"
                      target="_blank"
                    >
                      <Image
                        aria-hidden
                        src="/social-media/Instagram_Glyph_Gradient.png"
                        alt="Instagram"
                        width={500}
                        height={500}
                        className="w-6 h-6"
                      />
                      Instagram{" "}
                      <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </BrandLink>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
