import Image from "next/image";
import { BrandLink } from "@/app/ui/link";

export default function HeroSection() {
  return (
    <nav className="flex flex-row justify-between align-middle place-items-center gap-40">
      <Image
        src="/nwtc-logo.PNG"
        alt="NWTC Logo"
        width={536}
        height={536}
        className="border-white border-2 rounded-full h-28 w-28 hover:border-brandGreen"
      />
      <div className="flex flex-row gap-4">
        <BrandLink href="#About">About</BrandLink>
        <BrandLink href="#Training">Training</BrandLink>
        <BrandLink href="#Races">Races</BrandLink>
        <BrandLink href="#Join">Join</BrandLink>
      </div>
    </nav>
  );
}
