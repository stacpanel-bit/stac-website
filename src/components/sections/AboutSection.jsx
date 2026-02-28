import React from "react";

export default function AboutSection() {
  const base = import.meta.env.BASE_URL;

  const features = [
    {
      title: "Expert Team",
      description:
        "Skilled professionals with deep experience in technology, networking, and software development.",
      icon: `${base}Images/Expert.png`,
    },
    {
      title: "Quality Assurance",
      description:
        "Reliable, secure, and scalable systems built with strict quality standards.",
      icon: `${base}Images/Quality.png`,
    },
    {
      title: "Client Focus",
      description:
        "Solutions tailored to meet business objectives and exceed expectations.",
      icon: `${base}Images/User.png`,
    },
  ];

  const founders = [
    {
      img: `${base}Images/Founder.png`,
      name: "Samson Rashid",
      title: "Co-Founder & CTO",
      description:
        "Samson leads STAC Ltd’s strategic direction and technological innovation. Combining executive leadership with deep technical expertise, he architects scalable, secure systems that empower businesses across Africa.",
    },
    {
      img: `${base}Images/MIS.png`,
      name: "Gift Kang'oma",
      title: "MIS Specialist",
      description:
        "Gift specializes in Management Information Systems, ensuring data integrity, system optimization, and actionable digital insights that strengthen operational performance.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_top_right,#ef4444,transparent_60%)]" />

      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-red-600 to-gray-900 bg-clip-text text-transparent">
          About STAC Ltd
        </h2>
        <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          STAC Ltd (Sammy Technology Access Company) is a premier technology and digital solutions company headquartered in Malawi. We empower organisations through innovation, connectivity, and digital transformation.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE - COMPANY OVERVIEW */}
        <div className="space-y-8 bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-300">
          <p className="text-gray-700 leading-relaxed text-lg">
            We specialise in delivering cutting-edge systems, internet services, and business technology solutions that drive growth, efficiency, and sustainability across industries.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            In addition to enterprise systems and digital platforms, STAC Ltd provides trusted antivirus solutions and professional software packages, ensuring businesses operate with secure, future-ready technology.
          </p>
          {/* FEATURES GRID */}
          <div className="grid sm:grid-cols-2 gap-8 pt-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 items-start animate-fadeInUp" style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center shadow-lg">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* RIGHT SIDE - TEAM */}
        <div className="grid sm:grid-cols-2 gap-10">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition duration-300 animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.3 + 0.5}s` }}
            >
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl">
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                {founder.name}
              </h4>
              <p className="text-red-600 text-sm font-medium mt-1">
                {founder.title}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {founder.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* QUOTE */}
      <div className="max-w-3xl mx-auto mt-20 text-center">
        <blockquote className="text-2xl italic text-gray-700 border-l-4 border-red-600 pl-6 font-medium">
          "Together, we are building innovative digital systems that empower businesses and transform communities."
        </blockquote>
      </div>
      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(.23,1.01,.32,1) both;
        }
      `}</style>
    </section>
  );
}