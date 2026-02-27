import React from "react";
import Navbar from "../components/layout/Navbar.jsx";
import AboutSection from "../components/sections/AboutSection.jsx";
import Footer from "../components/layout/Footer.jsx";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="antialiased text-gray-900">
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        <AboutSection />
        <Footer />
      </motion.main>
    </div>
  );
}
