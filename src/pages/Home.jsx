import React from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../components/sections/Hero.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import Portfolio from "../components/sections/Portfolio.jsx";
import Services from "../components/sections/Services.jsx";
import Contact from "../components/sections/Contact.jsx";
import Footer from "../components/layout/Footer.jsx";

export default function Home() {
  return (
    <div className="antialiased text-gray-900">
      <Navbar />

      <main className="pt-20">
        <Hero />
        <Services />
        <AboutSection />
        <Portfolio />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
