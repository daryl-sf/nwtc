import Image from "next/image";
// import HeroSection from "@/app/ui/hero-section";
import { BrandLink } from "@/app/ui/link";
import Section from "@/app/ui/nav/section";

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col text-gray-800">
        {/* <HeroSection /> */}
        <main className="flex flex-col gap-4 container mx-auto px-4 py-8 snap-y snap-mandatory snap-always text-white">
          <div className="h-[80vh] w-full snap-center">Hello</div>
          <div className="h-[80vh] w-full snap-center">World</div>
          {/* <Section
            id="about"
            img={{
              src: "/about-image.jpg",
              alt: "Members of the Northwest Triathlon Club",
              width: 1600,
              height: 1062,
            }}
          >
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-4">
              North West Triathlon Club (NWTC) is based in Derry in Northern
              Ireland. The club was formed in 1983 at Templemore Sports Complex
              in the city and hosts one of Ireland&apos;s longest running
              triathlon events, the Liam Ball Sprint triathlon.
            </p>
            <p className="mt-4">
              We are a community of triathletes who train together and compete
              in triathlons. We welcome all levels of athletes, from beginners
              to seasoned competitors. Our goal is to provide a supportive
              environment for athletes to achieve their personal best.
            </p>
          </Section>
          <Section
            id="training"
            img={{
              src: "/about-image.jpg",
              alt: "Members of the Northwest Triathlon Club",
              width: 1600,
              height: 1062,
            }}
          >
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-4">
              North West Triathlon Club (NWTC) is based in Derry in Northern
              Ireland. The club was formed in 1983 at Templemore Sports Complex
              in the city and hosts one of Ireland&apos;s longest running
              triathlon events, the Liam Ball Sprint triathlon.
            </p>
            <p className="mt-4">
              We are a community of triathletes who train together and compete
              in triathlons. We welcome all levels of athletes, from beginners
              to seasoned competitors. Our goal is to provide a supportive
              environment for athletes to achieve their personal best.
            </p>
          </Section>
          <Section
            id="races"
            img={{
              src: "/about-image.jpg",
              alt: "Members of the Northwest Triathlon Club",
              width: 1600,
              height: 1062,
            }}
          >
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-4">
              North West Triathlon Club (NWTC) is based in Derry in Northern
              Ireland. The club was formed in 1983 at Templemore Sports Complex
              in the city and hosts one of Ireland&apos;s longest running
              triathlon events, the Liam Ball Sprint triathlon.
            </p>
            <p className="mt-4">
              We are a community of triathletes who train together and compete
              in triathlons. We welcome all levels of athletes, from beginners
              to seasoned competitors. Our goal is to provide a supportive
              environment for athletes to achieve their personal best.
            </p>
          </Section>
          <Section
            id="join"
            img={{
              src: "/about-image.jpg",
              alt: "Members of the Northwest Triathlon Club",
              width: 1600,
              height: 1062,
            }}
          >
            <h2 className="text-2xl font-bold">About</h2>
            <p className="mt-4">
              North West Triathlon Club (NWTC) is based in Derry in Northern
              Ireland. The club was formed in 1983 at Templemore Sports Complex
              in the city and hosts one of Ireland&apos;s longest running
              triathlon events, the Liam Ball Sprint triathlon.
            </p>
            <p className="mt-4">
              We are a community of triathletes who train together and compete
              in triathlons. We welcome all levels of athletes, from beginners
              to seasoned competitors. Our goal is to provide a supportive
              environment for athletes to achieve their personal best.
            </p>
          </Section> */}
        </main>
        <footer className="text-white p-4 text-center border-t border-brandGreen">
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
