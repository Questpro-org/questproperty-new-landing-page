import { useRoutes } from "react-router-dom";
import AboutUs from "../pages/about-us";
import LandingPage from "../pages/landing-page/landing-page";
import FaqQuestions from "../pages/faq";
import Terms from "../pages/terms";
import AgentVerification from "../pages/agent-verification";

export default function ThemeRoutes() {
    return useRoutes([
      {
        path: "/",
        element: <LandingPage />,
      },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/faqs", element: < FaqQuestions/> },
      { path: "/terms", element: < Terms/> },
      { path: "/verification", element: < AgentVerification/> },
    ]);
  }