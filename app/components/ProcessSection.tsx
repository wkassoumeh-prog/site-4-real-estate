const steps = [
  {
    label: "Step 1",
    title: "Schedule a consultation",
    description:
      "We review your property, goals, and current challenges to design the right management plan.",
  },
  {
    label: "Step 2",
    title: "Prepare & list your property",
    description:
      "We coordinate photos, listing copy, pricing strategy, and marketing to attract quality tenants.",
  },
  {
    label: "Step 3",
    title: "Manage & optimize",
    description:
      "We handle day-to-day operations, reporting, and strategic improvements to maximize returns.",
  },
];

const ProcessSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6" id="how-it-works">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
          How <span className="text-orange-500">It Works</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          A simple, transparent process from onboarding to long-term
          management—so you always know what to expect.
        </p>

        <ol className="space-y-6">
          {steps.map((step) => (
            <li
              key={step.label}
              className="relative flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-semibold">
                  {step.label}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;


