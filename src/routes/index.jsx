import { useRoutes } from "react-router-dom";
import AboutUs from "../pages/about-us";
import LandingPage from "../pages/landing-page/landing-page";

export default function ThemeRoutes() {
    return useRoutes([
      {
        path: "/",
        element: <LandingPage />,
      },
      { path: "/about-us", element: <AboutUs /> },
      
    ]);
  }