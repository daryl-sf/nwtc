import Image from "next/image";
import MainTitle from "@/app/ui/main-title";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="snap-always snap-start" id="home">
      <div className="relative min-h-dvh max-h-dvh flex bg-brandBlue flex-col justify-center items-center">
        <div className="container max-w-screen-xl h-dvh mx-auto flex flex-col gap-8 justify-center items-center text-base ">
          <div className="flex flex-col gap-8 items-center justify-center">
            <Image
              src="/nwtc-logo.PNG"
              alt="NWTC Logo"
              width={536}
              height={536}
              className="border-white border rounded-full hover:border-brandGreen h-56 w-56"
            />

            <MainTitle />
          </div>
        </div>
        <div className="text-center pb-4">
          <ArrowDownCircleIcon className="w-12 h-12 text-white mx-auto animate-bounce" />
          Scroll down
        </div>
      </div>
    </div>
  );
}
