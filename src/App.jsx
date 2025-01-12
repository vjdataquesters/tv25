import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Event from "./components/Events/Event";
import Team from "./pages/Team";
import Testimonials from "./pages/Testimonials";
import Technovista from "./components/Events/Technovista";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

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
      <Analytics />
      <Loading load={load} />
      <Header />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/tv24" element={<Technovista />} />
          <Route path="/events/:eventname" element={<Event />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
