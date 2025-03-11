"use client";
import SwipeableCarousel from "@/app/ui/SwipeableCarousel";
import Image from "next/image";
// import Link from "next/link";

export default function Races() {
  return (
    <div className="snap-always snap-start" id="races">
      <div className="relative min-h-screen max-h-screen flex bg-brandBlue pb-20">
        <div className="container max-w-screen-xl mx-auto text-xl md:pt-4">
          <SwipeableCarousel
            className="md:rounded-xl md:h-[calc(100vh-2rem)] h-screen"
            id="races"
          >
            <div>
              <Image
                width={1500}
                height={999}
                src={"/races/liamball.jpg"}
                alt="Liam Ball mural"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Liam Ball Sprint Triathlon
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    Liam Ball, a proud Derry swimmer, represented Ireland at the
                    1968 & 1972 Olympics. A remarkable athlete, he left a
                    lasting legacy despite his untimely death in 1984 at 33. To
                    honour his memory, NWTC named their annual sprint triathlon
                    after him. Year after year the event continues to grow,
                    keeping his story alive and inspiring the next generation of
                    athletes.
                  </p>
                  {/* <Link
                    href="/races/buncrana-duathlon"
                    className="text-brandGreen font-bold hover:underline"
                  >
                    Read more
                  </Link> */}
                </div>
              </div>
            </div>
            <div>
              <Image
                width={2000}
                height={1333}
                src={"/races/cyclists-racing.jpg"}
                alt="Triathletes racing"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/70">
                <div className="w-3/4 text-center md:w-2/4">
                  <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl rounded-xl border-b-2 border-white pb-3">
                    Buncrana Duathlon
                  </h1>
                  <p className="border-t-2 border-brandGreen pt-3 rounded-xl">
                    The Buncrana Duathlon is a great way to start the season.
                    Taking place in the beautiful town of Buncrana, the duathlon
                    consists of a 3.2km run, 16km bike and a 3.2km run. The
                    course is flat and fast and is perfect for beginners and
                    seasoned athletes alike.
                  </p>
                  {/* <Link
                    href="/races/liam-ball-triathlon"
                    className="text-brandGreen font-bold hover:underline"
                  >
                    Read more
                  </Link> */}
                </div>
              </div>
            </div>
          </SwipeableCarousel>
        </div>
      </div>
    </div>
  );
}
