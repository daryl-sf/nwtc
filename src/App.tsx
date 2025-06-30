import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import HallOfFame from "./pages/HallOfFame";
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
]);

function App() {
  return (
    <main className={`scroll-smooth bg-background antialiased`}>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
