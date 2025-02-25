"use client";
import { BrandLink } from "@/app/ui/link";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import { useState } from "react";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="sm:hidden focus:outline-none"
      >
        <Bars3Icon className="h-12 w-12" />
      </button>
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-6 p-4 sm:hidden bg-white shadow-md`}
      >
        <li>
          <BrandLink href="#About">About</BrandLink>
        </li>
        <li>
          <BrandLink href="#Training">Training</BrandLink>
        </li>
        <li>
          <BrandLink href="#Races">Races</BrandLink>
        </li>
        <li>
          <BrandLink href="#Join">Join</BrandLink>
        </li>
      </ul>
    </>
  );
};
