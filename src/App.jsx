import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import router from "./pages";
import ScrollToTop from "./components/ScrollToTop";

function LayoutWrapper() {

  return (
    <>
      <Analytics />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-blue-50/70">
        <Routes>
          {router.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
