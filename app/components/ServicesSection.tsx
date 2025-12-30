import React from "react";

const services = [
  {
    title: "Full-Service Property Management",
    description:
      "Comprehensive management of your rental properties, including tenant placement, rent collection, maintenance coordination, and financial reporting.",
    icon: (
      <svg className="w-8 h-8 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" />
        <path stroke="currentColor" d="M9 21V13h6v8" />
        <path stroke="currentColor" d="M9 9h6" />
      </svg>
    ),
  },
  {
    title: "Tenant Screening & Leasing",
    description:
      "Thorough screening of prospective tenants, lease preparation, and move-in coordination to ensure peace of mind for property owners.",
    icon: (
      <svg className="w-8 h-8 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" stroke="currentColor" />
        <rect x="3" y="15" width="18" height="6" rx="2" stroke="currentColor" />
      </svg>
    ),
  },
  {
    title: "Property Maintenance & Repairs",
    description:
      "24/7 maintenance request handling, trusted vendor coordination, and proactive property inspections to protect your investment.",
    icon: (
      <svg className="w-8 h-8 text-orange-500 mb-3" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
        <path stroke="currentColor" d="M4 13v6a1 1 0 0 0 1 1h6M20 11V5a1 1 0 0 0-1-1h-6" />
        <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" />
      </svg>
    ),
  }
];

const ServicesSection = () => {
  return (
    <section className="py-16 px-6 bg-white" id="services">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          End-to-end <span className="text-orange-500">management services</span>
        </h2>
        <p className="text-gray-600">
          Everything you need to protect your properties, keep tenants happy, and
          grow long-term returns—handled by one experienced team.
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
