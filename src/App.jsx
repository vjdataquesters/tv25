import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import router from "./pages";

import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import { PromoDiv } from "./components/PromoDiv";
import events from "./data/events";
import TechnovistaLayout from "./TechnovistaLayout";

function PromoSection({ pathname }) {
  if (
    pathname === "/hit" ||
    pathname === "/hitreloadedultrasecretendpoint" ||
    pathname === "/register"
  ) {
    return null;
  }

  return (
    <div className="fixed bottom-2 md:bottom-14 right-2 flex flex-col gap-2 z-10">
      {events.upcoming.map((e, i) => (
        <PromoDiv
          key={i}
          eventName={e.name}
          eventLink={e.link}
          eventStatus="upcoming"
        />
      ))}
    </div>
  );
}

function LayoutManager({ load }) {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <TechnovistaLayout />;
  }

  return (
    <>
      <Analytics />
      <Loading load={load} />
      <Header />
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
      <PromoSection pathname={pathname} />
      <Footer />
    </>
  );
}

function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <LayoutManager load={load} />
    </Router>
  );
}

export default App;
