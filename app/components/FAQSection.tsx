const faqs = [
  {
    question: "What areas do you manage properties in?",
    answer:
      "We manage single-family homes, condos, and small multi-unit buildings across the greater metro area. Contact us to confirm coverage for your specific property.",
  },
  {
    question: "How do you screen tenants?",
    answer:
      "We review credit, income, rental history, references, and background checks where permitted by law. Our goal is to place reliable, long-term tenants.",
  },
  {
    question: "What are your management fees?",
    answer:
      "Fees depend on property type, number of units, and services required. After a quick call, we’ll provide a clear, no-surprise proposal.",
  },
  {
    question: "Can I access reports online?",
    answer:
      "Yes, you’ll have an owner portal with real-time access to statements, documents, and key updates.",
  },
];

const FAQSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 text-center">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
          Quick answers to common questions owners ask when exploring property
          management services.
        </p>
        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group border border-gray-200 rounded-2xl p-4 bg-gray-50"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <span className="font-medium text-gray-900 text-sm">
                  {item.question}
                </span>
                <span className="ml-4 h-6 w-6 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 text-xs group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


