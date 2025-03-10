import Home from "@/app/ui/panels/home";
import AboutUs from "@/app/ui/panels/about-us";
import Training from "@/app/ui/panels/training";
import Races from "@/app/ui/panels/races";
import Join from "@/app/ui/panels/join";
import Juniors from "@/app/ui/panels/juniors";

export default function Page() {
  return (
    <main className="snap-y snap-mandatory overflow-y-scroll h-screen no-scrollbar">
      <Home />
      <AboutUs />
      <Training />
      <Races />
      <Join />
      <Juniors />
    </main>
  );
}
