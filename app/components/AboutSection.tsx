const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-white w-full" id="about">
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
        <div>
          <p className="text-sm font-semibold tracking-wide text-orange-500 uppercase mb-2">
            About our management
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            A partner focused on{" "}
            <span className="text-orange-500">protecting your assets</span>
          </h2>
          <p className="text-gray-700 text-base mb-5">
            We specialize in end-to-end property management for busy owners and
            investors. From tenant placement to maintenance and reporting, our
            systems are built to keep your rentals running smoothly and your
            income predictable.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-800">
            <ul className="space-y-2">
              <li>• Local market experts with years of experience</li>
              <li>• Data-driven pricing and tenant selection</li>
              <li>• Transparent reporting and owner communication</li>
            </ul>
            <ul className="space-y-2">
              <li>• 24/7 maintenance coordination</li>
              <li>• Compliance with local housing regulations</li>
              <li>• Portfolio-minded strategy for long-term growth</li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl bg-orange-50 border border-orange-100 p-6">
          <p className="text-xs font-semibold tracking-wide text-orange-600 uppercase mb-2">
            Snapshot
          </p>
          <dl className="space-y-3 text-sm text-gray-800">
            <div className="flex items-center justify-between">
              <dt>Properties under management</dt>
              <dd className="font-semibold text-gray-900">120+</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Average tenancy length</dt>
              <dd className="font-semibold text-gray-900">3.4 years</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt>Annual maintenance satisfaction</dt>
              <dd className="font-semibold text-gray-900">96%</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-gray-600">
            Figures are representative examples and can be customized for your
            actual business metrics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
