import DesktopLayout from "../components/layout/DesktopLayout";
import SwimSessionsMobile from "../components/SwimSessionsMobile";
import SwimSessionsDesktop from "./desktop/SwimSessions";

export default function SwimSessionsPage() {
  return (
    <>
      <div className="md:hidden">
        <SwimSessionsMobile />
      </div>
      <div className="hidden md:block">
        <DesktopLayout>
          <SwimSessionsDesktop />
        </DesktopLayout>
      </div>
    </>
  );
}
