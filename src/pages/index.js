import Home from "./Home";
import About from "./About";
import Events from "./Events";
import Team from "./Team";
import Testimonials from "./Testimonials";
import Event from "../components/Event";
import Technovista from "../components/Technovista";
import NewsLetter from "./NewsLetter";
import Gallery from "./Gallery";
import RegistrationForm from "./RegistrationForm";
import Technovistaform from '../components/TechnovistaForm.jsx'


const router = [
  { path: "/", component: Technovista },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/testimonials", component: Testimonials },
  { path: "/events", component: Events },
  { path: "/events/tv24", component: Technovista },
  { path: "/events/:eventname", component: Event },
  { path: "/team", component: Team },
  { path: "/newsletter", component: NewsLetter },
  { path: "/gallery", component: Gallery },
  { path: "/register", component: RegistrationForm },
  { path: "/TVForm", component: Technovistaform },
  { path: "*", component: Home },
];

export default router;
