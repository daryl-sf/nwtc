import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import MainTitle from "./MainTitle";

export default function Splash() {
  return (
    <div className="relative flex min-h-full flex-col items-center justify-center bg-brandBlue md:min-h-[calc(100dvh-4rem)]">
      <div className="flex flex-1 flex-col items-center justify-center gap-8 px-4 py-16">
        <img
          src="/nwtc-logo.PNG"
          alt="NWTC Logo"
          width={536}
          height={536}
          className="h-44 w-44 rounded-full border border-white hover:border-brandGreen md:h-64 md:w-64"
        />
        <MainTitle />
        <p className="max-w-xl text-center text-lg text-white/80 md:text-xl">
          Swim. Bike. Run. Belong. Derry&apos;s triathlon club since 1983.
        </p>
      </div>
      <div className="pb-6 text-center md:hidden">
        <ArrowDownCircleIcon className="mx-auto h-12 w-12 animate-bounce text-white" />
        Scroll down
      </div>
    </div>
  );
}
