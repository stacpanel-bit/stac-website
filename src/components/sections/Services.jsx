import React from "react";
import { Code, Database, Smartphone, Wrench, Wifi, Monitor } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-28 bg-gray-100 px-6">

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-bold text-gray-900">
          Our Services
        </h2>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          We offer comprehensive digital and technology solutions, combining
          innovation and technical excellence to help businesses grow,
          automate, and scale efficiently.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* TECHNOLOGY CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* TOP COLORED SECTION */}
          <div className="bg-red-600 text-white p-10">
            <div className="flex items-center gap-4 mb-4">
              <Code size={32} />
              <h3 className="text-2xl font-bold">Technology</h3>
            </div>
            <p className="text-red-100 leading-relaxed">
              Innovative technology solutions including custom software,
              mobile apps, and digital platforms that drive business growth
              and operational efficiency.
            </p>
          </div>

          {/* BOTTOM WHITE SECTION */}
          <div className="p-10 space-y-6">

            <div className="flex items-center gap-4">
              <Code className="text-red-600" />
              <span>Software Development</span>
            </div>

            <div className="flex items-center gap-4">
              <Smartphone className="text-red-600" />
              <span>Mobile Applications</span>
            </div>

            <div className="flex items-center gap-4">
              <Database className="text-red-600" />
              <span>Database Solutions</span>
            </div>

            <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Learn More →
            </button>

          </div>
        </div>

        {/* TECH SUPPORT CARD */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* TOP COLORED SECTION */}
          <div className="bg-gray-800 text-white p-10">
            <div className="flex items-center gap-4 mb-4">
              <Wrench size={32} />
              <h3 className="text-2xl font-bold">IT & Support</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Reliable IT services including hardware maintenance, networking,
              internet services and professional tech support tailored for
              businesses and individuals.
            </p>
          </div>

          {/* BOTTOM WHITE SECTION */}
          <div className="p-10 space-y-6">

            <div className="flex items-center gap-4">
              <Wifi className="text-gray-800" />
              <span>Internet Cafe Services</span>
            </div>

            <div className="flex items-center gap-4">
              <Monitor className="text-gray-800" />
              <span>System Installation</span>
            </div>

            <div className="flex items-center gap-4">
              <Wrench className="text-gray-800" />
              <span>Computer Repairs & Networking</span>
            </div>

            <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl hover:bg-gray-800 transition">
              Learn More →
            </button>

          </div>
        </div>

      </div>

    </section>
  );
}