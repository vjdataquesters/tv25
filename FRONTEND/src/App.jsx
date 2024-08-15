import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Event from "./components/Events/Event";
import Team from "./components/Team/Team";
import Root from "./components/Root";
import Testimonials from "./components/About/Testimonials";
import Technovista from "./components/Events/Technovista";
import { Analytics } from "@vercel/analytics/react";

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
