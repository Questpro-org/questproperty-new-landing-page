import { useRoutes } from "react-router-dom";
import AboutUs from "../pages/about-us";
import LandingPage from "../pages/landing-page/landing-page";
import FaqQuestions from "../pages/faq";

export default function ThemeRoutes() {
    return useRoutes([
      {
        path: "/",
        element: <LandingPage />,
      },
      { path: "/about-us", element: <AboutUs /> },
      { path: "/faqs", element: < FaqQuestions/> },
      
    ]);
  }