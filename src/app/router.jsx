import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import PortfolioPage from "../pages/PortfolioPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/portfolio", element: <PortfolioPage /> },
  { path: "/contact", element: <ContactPage /> },
]);