import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import MainTitle from "./MainTitle";
import { homeOverview } from "../content/home";
import DesktopLayout from "./layout/DesktopLayout";

export default function DesktopHome() {
  return (
    <DesktopLayout>
      <section className="relative flex min-h-[calc(100dvh-4.75rem)] flex-col items-center justify-center bg-brandBlue">
        <div className="flex flex-col items-center justify-center gap-8">
          <img
            src="/nwtc-logo.PNG"
            alt="NWTC Logo"
            width={536}
            height={536}
            className="h-56 w-56 rounded-full border border-white hover:border-brandGreen"
          />
          <MainTitle />
        </div>
        <div className="absolute bottom-8 pb-4 text-center">
          <ArrowDownCircleIcon className="mx-auto h-12 w-12 animate-bounce text-white" />
          Scroll down
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-10 border-b-2 border-white pb-3 text-3xl">
          The club
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {homeOverview.map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group overflow-hidden rounded-xl bg-black/30 ring-1 ring-white/15 transition hover:ring-brandGreen"
            >
              <img
                src={card.image.src}
                alt={card.image.alt}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="mb-2 text-xl text-brandGreen group-hover:underline">
                  {card.title}
                </h3>
                <p className="text-white/85">{card.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </DesktopLayout>
  );
}
