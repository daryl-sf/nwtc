import Splash from "../components/Splash";
import AboutUs from "../components/AboutUs";
import Training from "../components/Training";
import Races from "../components/Races";
import Join from "../components/Join";
import Juniors from "../components/Junior";

export default function Page() {
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
