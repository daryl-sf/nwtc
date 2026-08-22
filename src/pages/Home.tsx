import { useEffect } from "react";
import Splash from "../components/Splash";
import AboutUs from "../components/AboutUs";
import Training from "../components/Training";
import Races from "../components/Races";
import Join from "../components/Join";
import Juniors from "../components/Junior";
import DesktopHome from "../components/DesktopHome";

function MobileHome() {
  useEffect(() => {
    const { hash } = window.location;
    if (!hash) return;
    document.querySelector(hash)?.scrollIntoView();
  }, []);

  return (
    <div className="no-scrollbar h-dvh snap-y snap-mandatory overflow-y-scroll">
      <Splash />
      <AboutUs />
      <Training />
      <Races />
      <Join />
      <Juniors />
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="md:hidden">
        <MobileHome />
      </div>
      <div className="hidden md:block">
        <DesktopHome />
      </div>
    </>
  );
}
