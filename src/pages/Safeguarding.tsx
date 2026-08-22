import DesktopLayout from "../components/layout/DesktopLayout";
import SafeguardingMobile from "../components/SafeguardingMobile";
import SafeguardingDesktop from "./desktop/Safeguarding";

export default function SafeguardingPage() {
  return (
    <>
      <div className="md:hidden">
        <SafeguardingMobile />
      </div>
      <div className="hidden md:block">
        <DesktopLayout>
          <SafeguardingDesktop />
        </DesktopLayout>
      </div>
    </>
  );
}
