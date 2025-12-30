const testimonials = [
  {
    name: "Sarah M.",
    role: "Out-of-state owner",
    quote:
      "I went from constantly worrying about my rentals to barely thinking about them. The team is proactive, transparent, and always one step ahead.",
  },
  {
    name: "James & Priya K.",
    role: "First-time investors",
    quote:
      "They walked us through every detail, from pricing to tenant selection. Our property has been fully leased with great tenants since day one.",
  },
  {
    name: "Michael R.",
    role: "Portfolio investor",
    quote:
      "Reporting is clean, communication is fast, and maintenance is handled before it becomes a problem. Exactly what I expect from a management partner.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-gray-900 py-16 px-6" id="testimonials">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
              Owners who <span className="text-orange-400">trust us</span>
            </h2>
            <p className="text-gray-300 max-w-xl">
              Real stories from owners and investors who now enjoy predictable,
              stress-free property income.
            </p>
          </div>
          <p className="text-sm text-gray-400">
            Average owner satisfaction score{" "}
            <span className="font-semibold text-orange-300">4.9/5</span>
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <blockquote className="text-sm text-gray-100 mb-5 leading-relaxed">
                “{item.quote}”
              </blockquote>
              <figcaption className="text-sm text-gray-300">
                <div className="font-semibold">{item.name}</div>
                <div className="text-gray-400 text-xs">{item.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;


