import React from "react";
import Navbar from "../components/layout/Navbar.jsx";
import Portfolio from "../components/sections/Portfolio.jsx";
import Footer from "../components/layout/Footer.jsx";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <div className="antialiased text-gray-900">
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-20"
      >
        <Portfolio />
        <Footer />
      </motion.main>
    </div>
  );
}
