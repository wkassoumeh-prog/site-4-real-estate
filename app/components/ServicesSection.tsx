import React from "react";

const services = [
  {
    title: "1:1 Personal Training",
    description:
      "Customized workout programs, hands-on guidance, and progress tracking to help you reach your unique fitness goals.",
    icon: (
      <svg className="w-8 h-8 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" stroke="currentColor" />
        <rect x="6" y="16" width="12" height="5" rx="2.5" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Nutrition Coaching",
    description:
      "Personalized meal plans and guidance to fuel your body with the right nutrition for peak performance and recovery.",
    icon: (
      <svg className="w-8 h-8 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path stroke="currentColor" d="M3 17s2-4 9-4 9 4 9 4" />
        <circle cx="12" cy="7" r="4" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Online Coaching",
    description:
      "Flexible remote training sessions, accountability check-ins, and full support wherever you are.",
    icon: (
      <svg className="w-8 h-8 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" />
        <path stroke="currentColor" d="M8 12h8" />
      </svg>
    ),
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          <span className="text-orange-500">Services</span> I Offer
        </h2>
        <p className="text-gray-600">
          Achieve your fitness goals with tailored plans, expert guidance, and full support.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white border border-orange-100 rounded-xl shadow-sm p-8 hover:shadow-lg transition-shadow flex flex-col items-center text-center"
          >
            {service.icon}
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
