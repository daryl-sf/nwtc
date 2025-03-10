import type { Metadata } from "next";
import "@/app/globals.css";
import { geistMono, geistSans } from "@/app/ui/fonts";
import { BrandLink } from "@/app/ui/link";
import Image from "next/image";
import FloatingMenu from "@/app/ui/nav/floating";

export const metadata: Metadata = {
  title: "Northwest Triathlon Club",
  description:
    "North West Triathlon Club (NWTC) is based in Derry in Northern Ireland. The club was formed in 1983 at Templemore Sports Complex in the city and hosts one of Ireland's longest running triathlon events, the Liam Ball Sprint triathlon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background scroll-smooth`}
      >
        {children}
        <footer className="text-white p-4 text-center border-t border-brandGreen bg-brandBlue sticky bottom-0 hidden md:block">
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
        <FloatingMenu />
      </body>
    </html>
  );
}
