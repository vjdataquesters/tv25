import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import VjdqOrientation2023 from "./components/Events/VjdqOrientation2023";
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
            path: "events/vjdqOrientation2023",
            element: <VjdqOrientation2023 />,
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
