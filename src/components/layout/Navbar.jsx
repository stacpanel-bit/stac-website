import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const linkBase = scrolled
    ? 'text-gray-700 hover:text-primary hover:bg-gray-100'
    : 'text-white hover:text-primary hover:bg-white/10';

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className={`container-wide px-6 py-3 flex items-center justify-between transition-colors duration-300 ${scrolled ? 'backdrop-blur bg-white/95 shadow-md rounded-xl' : 'bg-transparent'}`}>
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-baseline gap-2">
            <span className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>STAC</span>
            <span className="text-sm font-semibold px-2 py-0.5 rounded-md text-white bg-[#dc2626]">LTD</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`${linkBase} px-3 py-2 rounded-lg transition-colors duration-200`}>Home</Link>
          <Link to="/about" className={`${linkBase} px-3 py-2 rounded-lg transition-colors duration-200`}>About</Link>
          <Link to="/portfolio" className={`${linkBase} px-3 py-2 rounded-lg transition-colors duration-200`}>Portfolio</Link>
          <Link to="/contact" className={`${linkBase} px-3 py-2 rounded-lg transition-colors duration-200`}>Contact</Link>

          <span className={`${scrolled ? 'text-gray-600' : 'text-white'} hidden lg:inline ml-4`}>📞 Call Us</span>

          <a href="https://wa.me/265883431151" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-red-700 text-white font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.78 11.78 0 0012 .5 11.62 11.62 0 002.92 9.6c0 2.06.54 4 1.57 5.7L.5 23.5l8.48-3.01a11.7 11.7 0 005.02 1.05h.01a11.78 11.78 0 008.51-20.06zM12 21.5h-.01c-1.47 0-2.91-.34-4.21-.99l-.31-.16-5.03 1.78 1.7-4.89-.2-.32A9.2 9.2 0 012.9 9.6c0-5.04 4.12-9.15 9.2-9.15 2.46 0 4.77.96 6.52 2.71a9.12 9.12 0 01-6.62 15.34z"/></svg>
            WhatsApp
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className={`p-2 rounded-lg shadow-md ${scrolled ? 'bg-white/10 text-gray-800' : 'bg-white/20 text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden absolute left-6 right-6 top-20 bg-black/60 backdrop-blur rounded-xl p-4">
            <Link to="/" className="block py-2 font-medium text-white">Home</Link>
            <Link to="/about" className="block py-2 font-medium text-white">About</Link>
            <Link to="/portfolio" className="block py-2 font-medium text-white">Portfolio</Link>
            <Link to="/contact" className="block py-2 font-medium text-white">Contact</Link>
            <div className="flex items-center justify-between mt-4">
              <span className="text-white">📞 Call Us</span>
              <a href="https://wa.me/265883431151" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-red-700 text-white font-semibold shadow">WhatsApp</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}