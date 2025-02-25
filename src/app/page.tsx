import Image from "next/image";
import HeroSection from "@/app/ui/hero-section";
import { BrandLink } from "@/app/ui/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <HeroSection />
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <BrandLink
            href="https://www.facebook.com/north.westtriathlon/"
            target="_blank"
          >
            <Image
              aria-hidden
              src="/Facebook_Logo_Secondary.png"
              alt="Facebook"
              width={2084}
              height={2084}
              className="w-6 h-6"
            />
            Facebook
          </BrandLink>
          <BrandLink
            href="https://www.instagram.com/northwest.triathlonclub/"
            target="_blank"
          >
            <Image
              aria-hidden
              src="/Instagram_Glyph_White.png"
              alt="Instagram"
              width={500}
              height={500}
              className="w-6 h-6"
            />
            @northwest.triathlonclub
          </BrandLink>
          <BrandLink
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
          >
            <Image
              aria-hidden
              src="/Digital_Glyph_White.png"
              alt="WhatsApp"
              width={360}
              height={362}
              className="w-6 h-6"
            />
            WhatsApp
          </BrandLink>
        </footer>
      </div>
    </>
  );
}
