import LandingTV from "./TvPages/LandingTV";
import Technovista from "./TvPages/Technovista";
import TechnovistaForm from "./TvPages/TechnovistaForm";
import EventsTV from "./TvPages/EventsTV";
import TvDevs from "./TvPages/TvDevs";

const router = [
  { path: "/", component: LandingTV },
  { path: "/technovista", component: Technovista },
  { path: "/technovista/register", component: TechnovistaForm },
  { path: "/technovista/events", component: EventsTV },
  { path: "/technovista/devs", component: TvDevs },
  { path: "*", component: LandingTV },
];

export default router;
