import type { ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HallOfFame from "./pages/HallOfFame";
import Safeguarding from "./pages/Safeguarding";
import AboutPage from "./pages/desktop/About";
import TrainingPage from "./pages/desktop/Training";
import RacesPage from "./pages/desktop/Races";
import LiamBallPage from "./pages/desktop/LiamBall";
import BuncranaPage from "./pages/desktop/Buncrana";
import JoinPage from "./pages/desktop/Join";
import JuniorsPage from "./pages/desktop/Juniors";
import ContactPage from "./pages/desktop/Contact";
import DesktopLayout from "./components/layout/DesktopLayout";
import DesktopOnly from "./components/layout/DesktopOnly";

function desktopPage(redirectTo: string, page: ReactNode) {
  return (
    <DesktopOnly redirectTo={redirectTo}>
      <DesktopLayout>{page}</DesktopLayout>
    </DesktopOnly>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: desktopPage("/#about-us", <AboutPage />),
  },
  {
    path: "/training",
    element: desktopPage("/#training", <TrainingPage />),
  },
  {
    path: "/races",
    element: desktopPage("/#races", <RacesPage />),
  },
  {
    path: "/races/liam-ball",
    element: desktopPage("/#races", <LiamBallPage />),
  },
  {
    path: "/races/buncrana",
    element: desktopPage("/#races", <BuncranaPage />),
  },
  {
    path: "/join",
    element: desktopPage("/#join", <JoinPage />),
  },
  {
    path: "/juniors",
    element: desktopPage("/#juniors", <JuniorsPage />),
  },
  {
    path: "/contact",
    element: desktopPage("/#join", <ContactPage />),
  },
  {
    path: "/hall-of-fame",
    element: <HallOfFame />,
  },
  {
    path: "/safeguarding",
    element: <Safeguarding />,
  },
]);

function App() {
  return (
    <main className="scroll-smooth bg-background antialiased">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
