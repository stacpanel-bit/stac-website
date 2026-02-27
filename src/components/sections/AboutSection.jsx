import React from "react";

export default function AboutSection() {
  // Reusable icon wrapper (brighter background for image icons)
  const iconWrapper = "flex-shrink-0 w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-md ring-1 ring-gray-100";
  const iconClass = "h-8 w-8 text-red-600";

  // Features data
  const features = [
    {
      title: "Expert Team",
      description:
        "Skilled professionals with deep experience in technology, networking, and software development.",
      icon: (
        <img src="/Images/Expert.png" alt="Expert team" className="w-10 h-10 object-contain" />
      ),
    },
    {
      title: "Quality Assurance",
      description:
        "We ensure reliable, secure, and scalable solutions for every project we deliver.",
      icon: (
        <img src="/Images/Quality.png" alt="Quality assurance" className="w-10 h-10 object-contain" />
      ),
    },
    {
      title: "Client Focus",
      description:
        "Tailored digital solutions designed to meet your business needs and exceed expectations.",
      icon: (
        <img src="/Images/User.png" alt="Client focus" className="w-10 h-10 object-contain" />
      ),
    },
  ];

  // Founders data (single founder)
  const founders = [
    { img: "/Images/Founder.png", name: "Samson Rashid", title: "Co-Founder & CEO" },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE */}
        <div className="animate-fade-in-up space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight">
            Who We Are
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            STAC Ltd (Sammy Technology Access Company) is a premier technology and digital solutions company headquartered in Malawi,
            committed to empowering organisations through innovation, connectivity, and transformation. We specialise in delivering
            cutting-edge systems, internet services, and business technology solutions that drive growth, efficiency, and sustainability
            across diverse industries.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            In addition to enterprise systems and digital platforms, STAC Ltd also provides trusted antivirus solutions and a wide range of software packages, 
            ensuring that businesses and individuals have access to secure, reliable, and future-ready tools for their operations.
          </p>
        
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded by Samson Rashid, a visionary entrepreneur and full-stack developer, STAC Ltd was built on a passion for technology and a mission
            to bridge Africa’s digital divide. Samson’s journey began at the age of 11, mastering programming languages such as Kotlin, JavaScript,
            React, Node.js, and Flutter, evolving into a solution architect with expertise in fintech, cloud infrastructure, and scalable mobile
            applications. His leadership ensures that STAC Ltd remains at the forefront of innovation, offering secure, user-friendly, and
            future-ready platforms.
          </p>

          {/* Features */}
          <div className="grid gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group flex gap-5 items-start transition transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ animationDelay: `${idx * 120}ms` }}
              >
                <div className={`${iconWrapper} group-hover:bg-red-50`}>
                  {feature.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="#about"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition shadow-md inline-block font-medium"
            >
              Learn More About Us
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="bg-gradient-to-br from-white/80 to-red-50/60 backdrop-blur-sm hover:shadow-2xl transform transition duration-300 hover:-translate-y-1 rounded-3xl p-10 animate-fade-in-up space-y-8 ring-1 ring-gray-100"
          style={{ animationDelay: `360ms` }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center">Meet Our Founders</h3>

          <div className="flex justify-center">
            {founders.map((founder, idx) => (
              <div key={idx} className="text-center max-w-xs">
                <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-2 border-gray-100 shadow-2xl bg-white transition-transform duration-300">
                  <img
                    src={founder.img}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mt-4">{founder.name}</h4>
                <p className="text-sm text-gray-600">{founder.title}</p>
                <p className="mt-3 text-sm text-gray-600">Samson leads both the strategic vision and the technological innovation of the company, driving secure, scalable solutions that empower businesses and communities.</p>
              </div>
            ))}
          </div>

          <blockquote className="text-gray-600 italic border-l-4 border-red-600 pl-4">
            "Together, we are building innovative digital systems that empower businesses and transform communities."
          </blockquote>
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fadeInUp 0.7s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}