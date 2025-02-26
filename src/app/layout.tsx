import type { Metadata } from "next";
import "./globals.css";
import { geistMono, geistSans } from "@/app/ui/fonts";
import Navbar from "@/app/ui/nav/nav-bar";

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
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
