import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">Reach out to us for project enquiries, partnerships, or support. We respond quickly and professionally.</p>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-xl">📞</span>
              <div>
                <div className="font-semibold">Call Us</div>
                <div className="text-sm text-gray-600">+265 883431151</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-sm text-gray-600">stactechafrica@gmail.com</div>
              </div>
            </div>

            <a href="https://wa.me/" className="inline-flex items-center gap-3 bg-[#dc2626] text-white px-4 py-2 rounded-md mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.78 11.78 0 0012 .5 11.62 11.62 0 002.92 9.6c0 2.06.54 4 1.57 5.7L.5 23.5l8.48-3.01a11.7 11.7 0 005.02 1.05h.01a11.78 11.78 0 008.51-20.06zM12 21.5h-.01c-1.47 0-2.91-.34-4.21-.99l-.31-.16-5.03 1.78 1.7-4.89-.2-.32A9.2 9.2 0 012.9 9.6c0-5.04 4.12-9.15 9.2-9.15 2.46 0 4.77.96 6.52 2.71a9.12 9.12 0 01-6.62 15.34z"/></svg>
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up">
          <form className="bg-white p-6 rounded-2xl shadow-2xl border border-gray-100">
            <div className="grid gap-4">
              <input className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dc2626]" placeholder="Your name" />
              <input className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dc2626]" placeholder="Email address" />
              <input className="border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#dc2626]" placeholder="Phone" />
              <textarea className="border border-gray-200 rounded-md px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-[#dc2626]" placeholder="Message" />
              <div className="flex gap-4">
                <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md font-semibold shadow-lg hover:bg-red-700 transform hover:-translate-y-0.5 transition">Send Message</button>
                <button type="reset" className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
