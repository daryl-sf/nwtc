"use client";

import { useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BrandLink } from "@/app/ui/link";

const links: { href: string; label: string }[] = [
  {
    href: "#about",
    label: "About Us",
  },
  {
    href: "#training",
    label: "Training",
  },
  {
    href: "#races",
    label: "Races",
  },
  {
    href: "#join",
    label: "Join",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-md sm:relative border-b-4 border-brandGreen">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex py-2 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:ring-2 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="size-8" />
              ) : (
                <Bars3Icon className="size-8" />
              )}
            </button>
          </div>

          {/* Logo and Nav Links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <BrandLink href="/" className="flex shrink-0 items-center">
              <Image
                src="/nwtc-logo.PNG"
                alt="NWTC Logo"
                width={536}
                height={536}
                className="border-white border rounded-full h-20 w-20 hover:border-brandGreen"
              />
            </BrandLink>
            <div className="hidden sm:flex gap-4 items-center">
              {links.map(({ href, label }) => (
                <BrandLink
                  key={href}
                  href={href}
                  className="px-3 py-2 text-sm font-medium text-white"
                >
                  {label}
                </BrandLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-10 bg-background w-full overflow-hidden transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "max-h-44 opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-100"
        } sm:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 flex flex-col gap-2">
          {links.map(({ href, label }) => (
            <BrandLink
              key={href}
              href={href}
              className="px-3 py-2 text-sm font-medium text-white"
            >
              {label}
            </BrandLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
