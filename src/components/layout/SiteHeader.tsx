import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/training", label: "Training" },
  { to: "/races", label: "Races" },
  { to: "/juniors", label: "Juniors" },
  { to: "/hall-of-fame", label: "Hall of Fame" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-white/10 bg-brandBlue/95 backdrop-blur">
      <div className="mx-auto flex h-full max-w-screen-xl items-center justify-between gap-4 px-4">
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/nwtc-logo.PNG"
            alt="NWTC"
            className="h-10 w-10 rounded-full border border-white"
          />
          <span className="font-display text-lg uppercase tracking-wide text-white">
            NWTC
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                clsx(
                  "font-display text-sm uppercase tracking-wider hover:text-brandGreen",
                  isActive ? "text-brandGreen" : "text-white",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/join"
            className="rounded-lg bg-brandGreen px-4 py-2 font-display text-sm font-semibold uppercase tracking-wider text-brandBlue hover:bg-brandGreen/85"
          >
            Join
          </Link>
        </nav>

        <button
          type="button"
          className="text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandGreen lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {open ? (
        <div className="border-b border-white/10 bg-brandBlue lg:hidden">
          <nav className="mx-auto flex max-w-screen-xl flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "rounded-md px-3 py-2 font-display uppercase tracking-wider",
                    isActive
                      ? "bg-white/10 text-brandGreen"
                      : "text-white hover:bg-white/5",
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/join"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-brandGreen px-4 py-2 text-center font-display text-sm font-semibold uppercase tracking-wider text-brandBlue"
            >
              Join the club
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
