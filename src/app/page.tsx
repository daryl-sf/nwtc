import Image from "next/image";
// import HeroSection from "@/app/ui/hero-section";
import { BrandLink } from "@/app/ui/link";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50 text-brandBlue">
        {/* <HeroSection /> */}
        <main className="flex-1 container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold">Main Content</h1>
          <p className="mt-4 text-gray-700">
            This is the main content section.
          </p>
        </main>
        <footer className="bg-gray-100 p-4 text-center">
          <ul className="flex justify-between sm:justify-center flex-wrap gap-4">
            <li>
              <BrandLink
                href="https://www.facebook.com/north.westtriathlon/"
                target="_blank"
              >
                <Image
                  aria-hidden
                  src="/Facebook_Logo_Primary.png"
                  alt="Facebook"
                  width={2084}
                  height={2084}
                  className="w-6 h-6"
                />
                Facebook
              </BrandLink>
            </li>
            <li>
              <BrandLink
                href="https://www.instagram.com/northwest.triathlonclub/"
                target="_blank"
              >
                <Image
                  aria-hidden
                  src="/Instagram_Glyph_Gradient.png"
                  alt="Instagram"
                  width={500}
                  height={500}
                  className="w-6 h-6"
                />
                @northwest.triathlonclub
              </BrandLink>
            </li>
            <li>
              <BrandLink
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
              >
                <Image
                  aria-hidden
                  src="/Digital_Glyph_Green.png"
                  alt="WhatsApp"
                  width={360}
                  height={362}
                  className="w-6 h-6"
                />
                WhatsApp
              </BrandLink>
            </li>
          </ul>
          <p className="text-xs mt-1">© 2025 - Northwest Triathlon Club</p>
        </footer>
      </div>
    </>
  );
}
