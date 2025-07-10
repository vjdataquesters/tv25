import LandingTV from "./LandingTV";
import Technovista from "./Technovista";
import TechnovistaForm from "./TechnovistaForm";
import EventsTV from "./EventsTV";
import TvDevs from "./TvDevs";
import Hackathon from "./Hackathon";
import TermsAndConditions from "./TermsAndConditions";

const router = [
  { path: "/", component: LandingTV },
  { path: "/technovista", component: Technovista },
  { path: "/technovista/register", component: TechnovistaForm },
  { path: "/technovista/events", component: EventsTV },
  {path: "/technovista/events/hackathon", component: Hackathon},
  { path: "/technovista/terms-and-conditions", component: TermsAndConditions },
  { path: "/technovista/devs", component: TvDevs },
  { path: "*", component: LandingTV },
];

export default router;
