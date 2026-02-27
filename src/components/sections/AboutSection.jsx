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
        "We ensure reliable, secure, and scalable solutions for every project we deliver.",
      icon: `${base}Images/Quality.png`,
    },
    {
      title: "Client Focus",
      description:
        "Tailored digital solutions designed to meet your business needs and exceed expectations.",
      icon: `${base}Images/User.png`,
    },
  ];

  const founders = [
    {
      img: `${base}Images/Founder.png`,
      name: "Samson Rashid",
      title: "Co-Founder & CEO",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-100 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_top_right,#ef4444,transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CARD */}
        <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition duration-300 space-y-8">

          <h2 className="text-5xl font-bold tracking-tight text-center bg-gradient-to-r from-red-600 to-gray-900 bg-clip-text text-transparent">
            Who We Are
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            STAC Ltd (Sammy Technology Access Company) is a premier technology and digital solutions company headquartered in Malawi,
            committed to empowering organisations through innovation, connectivity, and transformation. We specialise in delivering
            cutting-edge systems, internet services, and business technology solutions that drive growth, efficiency, and sustainability across industries.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            In addition to enterprise systems and digital platforms, STAC Ltd also provides trusted antivirus solutions and software packages,
            ensuring businesses and individuals have secure and future-ready tools.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Founded by Samson Rashid, a visionary entrepreneur and full-stack developer passionate about bridging Africa’s digital divide.
            His expertise spans fintech, cloud infrastructure, and scalable mobile systems.
          </p>

          {/* FEATURES */}
          <div className="grid gap-6">

            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group flex gap-6 p-6 rounded-2xl border border-gray-200 bg-white/60 backdrop-blur-md hover:-translate-y-1 hover:shadow-xl transition duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-red-50 flex items-center justify-center shrink-0 group-hover:bg-red-100 transition">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h4>

                  <p className="text-gray-600 mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <a
            href="#about"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition shadow-lg"
          >
            Learn More About Us
          </a>

        </div>

        {/* RIGHT CARD */}
        <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-3xl p-10 shadow-2xl space-y-8 hover:shadow-3xl transition duration-300">

          <h3 className="text-2xl font-bold text-gray-900 text-center">
            Meet Our Founder
          </h3>

          {founders.map((founder, idx) => (
            <div key={idx} className="text-center space-y-5">

              <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={founder.img}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  {founder.name}
                </h4>

                <p className="text-sm text-red-600 font-medium">
                  {founder.title}
                </p>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                Samson leads both the strategic vision and the technological innovation of the company, driving secure, scalable solutions that empower businesses and communities.
              </p>

            </div>
          ))}

          <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-600 text-sm">
            "Together, we are building innovative digital systems that empower businesses and transform communities."
          </blockquote>

        </div>

      </div>
    </section>
  );
}