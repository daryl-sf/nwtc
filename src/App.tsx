import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HallOfFame from "./pages/HallOfFame";
import { Authenticator } from "@aws-amplify/ui-react";
import LogIn from "./pages/LogIn";
// import { geistMono, geistSans } from "./assets/fonts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hall-of-fame",
    element: <HallOfFame />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

function App() {
  return (
    <Authenticator.Provider>
      <main className={`scroll-smooth bg-background antialiased`}>
        <RouterProvider router={router} />
      </main>
    </Authenticator.Provider>
  );
}

export default App;
