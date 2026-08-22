import DesktopLayout from "../components/layout/DesktopLayout";
import HallOfFameMobile from "../components/HallOfFameMobile";
import HallOfFameDesktop from "./desktop/HallOfFame";

export default function HallOfFamePage() {
  return (
    <>
      <div className="md:hidden">
        <HallOfFameMobile />
      </div>
      <div className="hidden md:block">
        <DesktopLayout>
          <HallOfFameDesktop />
        </DesktopLayout>
      </div>
    </>
  );
}
