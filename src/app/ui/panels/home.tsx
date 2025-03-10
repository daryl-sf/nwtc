import Image from "next/image";
import MainTitle from "@/app/ui/main-title";

export default function Home() {
  return (
    <div className="snap-always snap-center" id="home">
      <div className="relative min-h-screen flex bg-brandBlue pb-20">
        <div className="container max-w-screen-xl mx-auto flex flex-col gap-8 justify-center items-center text-base ">
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
      </div>
    </div>
  );
}
