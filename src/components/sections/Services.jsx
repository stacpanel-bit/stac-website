export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100 px-6">
      <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-4">Internet Cafe</h4>
          <p>High-speed browsing, printing, scanning and online services.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-4">System Development</h4>
          <p>Custom POS systems, management software and automation tools.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-4">Tech Support</h4>
          <p>Computer repairs, networking, installation and IT consulting.</p>
        </div>
      </div>
    </section>
  );
}