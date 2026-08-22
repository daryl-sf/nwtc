import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Training from "./pages/Training";
import Races from "./pages/Races";
import LiamBall from "./pages/LiamBall";
import Buncrana from "./pages/Buncrana";
import Juniors from "./pages/Juniors";
import Join from "./pages/Join";
import HallOfFame from "./pages/HallOfFame";
import Safeguarding from "./pages/Safeguarding";

const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/training", element: <Training /> },
      { path: "/races", element: <Races /> },
      { path: "/races/liam-ball", element: <LiamBall /> },
      { path: "/races/buncrana", element: <Buncrana /> },
      { path: "/juniors", element: <Juniors /> },
      { path: "/join", element: <Join /> },
      { path: "/hall-of-fame", element: <HallOfFame /> },
      { path: "/safeguarding", element: <Safeguarding /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
