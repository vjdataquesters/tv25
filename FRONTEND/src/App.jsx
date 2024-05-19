import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Event from "./components/Events/Event";
import Team from "./components/Team/Team";
import Root from "./components/Root";


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
          path: "events",
          element: <Events />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "events/:eventname",
          element: <Event/>
        }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
