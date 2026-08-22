import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";
import type { ReactNode } from "react";
import { BrandLink, FacebookLink, InstagramLink } from "../link";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/training", label: "Training" },
  { to: "/races", label: "Races" },
  { to: "/juniors", label: "Juniors" },
  { to: "/hall-of-fame", label: "Hall of Fame" },
  { to: "/contact", label: "Contact" },
] as const;

function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brandBlue/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/nwtc-logo.PNG"
            alt="NWTC"
            className="h-12 w-12 rounded-full border border-white"
          />
          <span className="hidden text-sm font-semibold tracking-wide text-white lg:inline">
            North West Triathlon Club
          </span>
        </NavLink>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm text-white">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                clsx(
                  "hover:text-brandGreen",
                  isActive && "text-brandGreen underline decoration-brandGreen underline-offset-4",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink
            to="/join"
            className="rounded-lg bg-brandGreen px-3 py-1.5 font-semibold text-brandBlue hover:bg-brandGreen/80"
          >
            Join
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brandBlue">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-white">
        <p>North West Triathlon Club</p>
        <div className="flex flex-wrap items-center gap-4">
          <FacebookLink />
          <InstagramLink />
          <BrandLink to="/safeguarding">Safeguarding</BrandLink>
        </div>
      </div>
    </footer>
  );
}

export default function DesktopLayout({ children }: { children?: ReactNode }) {
  return (
    <div className="min-h-dvh bg-brandBlue text-foreground">
      <ScrollToTop />
      <Header />
      <div>{children ?? <Outlet />}</div>
      <Footer />
    </div>
  );
}
