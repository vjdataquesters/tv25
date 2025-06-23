import Home from "./Home";
import About from "./About";
import Events from "./Events";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Event from "../components/Event";
import NewsLetter from "./NewsLetter";
import Gallery from "./Gallery";
import LandingTV from "./TvPages/LandingTV";
import Technovista from "./TvPages/Technovista";
import TechnovistaForm from "./TvPages/TechnovistaForm";
import EventsTV from "./TvPages/EventsTV";

const router = [
  { path: "/", component: LandingTV },
  { path: "/technovista", component: Technovista },
  { path: "/technovista/register", component: TechnovistaForm },
  { path: "/technovista/events", component: EventsTV },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/testimonials", component: Testimonials },
  { path: "/events", component: Events },
  { path: "/events/:eventname", component: Event },
  { path: "/team", component: Team },
  { path: "/newsletter", component: NewsLetter },
  { path: "/gallery", component: Gallery },
  { path: "*", component: LandingTV },
];

export default router;
