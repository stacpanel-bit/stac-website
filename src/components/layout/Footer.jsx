import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-extrabold text-white">STAC</span>
            <span className="text-sm font-semibold px-2 py-0.5 rounded-md text-white bg-primary">LTD</span>
          </div>
          <p className="text-gray-400 text-sm">STAC Ltd is committed to driving growth and digital transformation by providing innovative technology and internet solutions tailored to the needs of businesses, institutions, 
            and communities. Our mission is to empower Malawi with scalable, secure, and performance-driven services that enhance connectivity, 
            streamline operations, and unlock new opportunities for progress..</p>
        </div>

        <div className="flex justify-between md:justify-center">
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#portfolio" className="hover:text-white">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="text-sm text-gray-400">
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <div className="space-y-2">
            <div>+265 883431151</div>
            <div>+265 985442890</div>
            <div>stacpanel@gmail.com</div>
            <div className="flex items-center gap-3 mt-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group transition">
                <FaFacebookF className="text-white text-xs group-hover:text-[#1877F3] transition-colors duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group transition">
                <FaTwitter className="text-white text-xs group-hover:text-[#1DA1F2] transition-colors duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group transition">
                <FaInstagram className="text-white text-xs group-hover:text-[#E1306C] transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-8 border-t border-white/5 pt-6 text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} STAC Ltd. All rights reserved.
      </div>
    </footer>
  );
}
 