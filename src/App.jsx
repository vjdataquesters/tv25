import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Event from "./components/Events/Event";
import Team from "./pages/Team";
import Root from "./components/Root";
import Testimonials from "./pages/Testimonials";
import Technovista from "./components/Events/Technovista";
import { Analytics } from "@vercel/analytics/react";
import Redirect from "./components/Redirect";

function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "testimonials",
          element: <Testimonials />,
        },
        {
          path: "events",
          element: <Events />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "events/:eventname",
          element: <Event />,
        },
        {
          path: "events/TECHNOVISTA",
          element: <Technovista />,
        },
        {
          path: "haildq",
          element: <Redirect to="https://dq-domains.vercel.app/" />,
        },
      ],
    },
  ]);

  return (
    <>
      <Analytics />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
