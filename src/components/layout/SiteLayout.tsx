import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function SiteLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-dvh bg-brandBlue font-sans antialiased">
      <ScrollToTop />
      <SiteHeader />
      <Outlet />
      <div className={isHome ? "hidden md:block" : undefined}>
        <SiteFooter />
      </div>
    </div>
  );
}
