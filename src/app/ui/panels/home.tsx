import Image from "next/image";
import MainTitle from "@/app/ui/main-title";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="snap-start snap-always" id="home">
      <div className="relative flex max-h-dvh min-h-dvh flex-col items-center justify-center bg-brandBlue">
        <div className="container mx-auto flex h-dvh max-w-screen-xl flex-col items-center justify-center gap-8 text-base">
          <div className="flex flex-col items-center justify-center gap-8">
            <Image
              src="/nwtc-logo.PNG"
              alt="NWTC Logo"
              width={536}
              height={536}
              className="h-56 w-56 rounded-full border border-white hover:border-brandGreen"
              priority
            />

            <MainTitle />
          </div>
        </div>
        <div className="pb-4 text-center">
          <ArrowDownCircleIcon className="mx-auto h-12 w-12 animate-bounce text-white" />
          Scroll down
        </div>
      </div>
    </div>
  );
}
