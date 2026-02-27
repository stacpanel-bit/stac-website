import React, { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  const nameRef = useRef(null);
  const modalRef = useRef(null);

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition";

  // Auto-focus the first input when modal opens
  useEffect(() => {
    if (showModal && nameRef.current) {
      nameRef.current.focus();
    }
  }, [showModal]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && setShowModal(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Trap focus inside modal
  useEffect(() => {
    if (!showModal) return;

    const focusableEls = modalRef.current.querySelectorAll(
      'a[href], button, textarea, input, select'
    );
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    const handleTab = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        // shift + tab
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        // tab
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => window.removeEventListener("keydown", handleTab);
  }, [showModal]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-950"
    >
      {/* Premium Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(2,6,23,0.97) 30%, rgba(15,23,42,0.92) 70%), url('/Images/Hero.jpg')",
        }}
      />

      {/* Accent Glows */}
      <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* LEFT SIDE */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-8">
              Sammy Technology
              <span className="block text-primary">Access Company</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-xl leading-relaxed mb-6">
              Your All-in-One Technology Partner
            </p>

            <p className="text-base text-slate-400 max-w-lg mb-10 leading-relaxed">
              We design and deliver smart, scalable IT solutions that power
              businesses, institutions, and communities. From education to
              finance, retail to healthcare, our systems are built to simplify
              operations, strengthen security, and accelerate growth.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button
                onClick={() => setShowModal(true)}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Book For A Free Consultation
              </button>

              <a
                href="#services"
                className="px-8 py-4 border border-white/20 text-white rounded-xl backdrop-blur-md hover:bg-white/5 hover:border-white/40 transition-all duration-300"
              >
                View Solutions
              </a>
            </div>

            {/* Trust Row */}
            <div className="mt-14 flex flex-wrap gap-10 text-sm text-slate-400 border-t border-white/10 pt-8">
              <span className="tracking-wide">Enterprise Security</span>
              <span className="tracking-wide">Cloud-Ready Systems</span>
              <span className="tracking-wide">Dedicated Support</span>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            id="services"
            style={{ scrollMarginTop: "96px" }}
            className="hidden lg:block"
          >
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)]">
              <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />

              <h3 className="text-white text-xl font-semibold mb-10 tracking-wide">
                Core Solutions
              </h3>

              <div className="space-y-10">
                <div>
                  <h4 className="text-primary font-semibold mb-2">
                    🎓 Education & Institutions
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    School Management Systems – streamline admissions, academics,
                    finance, communication, and reporting in one unified platform.
                  </p>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-2">
                    🛍️ Retail & Commerce
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Shop & POS Management – modern retail tools for sales,
                    inventory, and customer engagement.
                  </p>
                </div>

                <div>
                  <h4 className="text-primary font-semibold mb-2">
                    🏥 Healthcare & Weighbridge Systems
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Reliable digital infrastructure for hospitals and industrial
                    automation environments.
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <a
                  href="#contact"
                  className="block text-center px-6 py-3 bg-white text-slate-900 font-semibold rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg"
                >
                  Start Your Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />

          <div
            ref={modalRef}
            className="relative z-10 w-full max-w-lg animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <form
              className="bg-slate-900/95 border border-white/10 rounded-3xl p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                console.log(
                  "Consultation request",
                  Object.fromEntries(data.entries())
                );
                setShowModal(false);
              }}
            >
              <h3 className="text-2xl font-semibold text-white mb-2">
                Book Your Free Strategy Call
              </h3>

              <p className="text-slate-400 text-sm mb-8">
                Share your requirements and our team will respond within 24
                hours.
              </p>

              <div className="space-y-5">
                <input
                  ref={nameRef}
                  name="name"
                  required
                  placeholder="Full Name"
                  className={inputClass}
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email Address"
                  className={inputClass}
                />

                <input
                  name="company"
                  placeholder="Organization Name"
                  className={inputClass}
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Briefly describe your requirements"
                  className={inputClass}
                />
              </div>

              <div className="mt-10 flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2 text-slate-400 hover:text-white transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition shadow-lg"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.25s ease-out forwards;
          }
        `}
      </style>
    </section>
  );
}