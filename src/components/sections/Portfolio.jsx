import React from "react";

export default function Portfolio() {
  const base = import.meta.env.BASE_URL;

  const items = [
    { src: `${base}Images/network.jpg`, title: "Network Solutions" },
    { src: `${base}Images/Cloud.jpg`, title: "Cloud Services" },
    { src: `${base}Images/POS.png`, title: "Custom Software" },
    { src: `${base}Images/Infrastructure.jpg`, title: "Infrastructure" },
    { src: `${base}Images/Cyber.jpg`, title: "Cyber Security" },
    { src: `${base}Images/IT.jpg`, title: "IT Consulting" },
  ];

  return (
    <section
      id="portfolio"
      className="py-28 px-6 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(
            110deg,
            rgba(2,6,23,0.94) 30%,
            rgba(15,23,42,0.92) 70%
          ), url(${base}Images/Hero.jpg)`,
        }}
      />

      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Our <span className="text-primary">Portfolio</span>
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto text-lg drop-shadow">
            Delivering innovative, scalable, and enterprise-grade technology
            solutions across multiple industries.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 700ms ease ${idx * 120}ms both`,
              }}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <div className="absolute inset-0 bg-white/6 backdrop-blur-sm border border-white/10 rounded-3xl pointer-events-none" />

                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-semibold mb-1 drop-shadow">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-200 opacity-95 drop-shadow">
                    Scalable, secure, and performance-driven solutions.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
}