const listings = [
  {
    title: "Modern Downtown Condo",
    price: "$2,150/mo",
    beds: "2 Bed",
    baths: "2 Bath",
    size: "1,100 sq ft",
    tag: "Fully Managed",
  },
  {
    title: "Family Home in Suburbs",
    price: "$3,400/mo",
    beds: "4 Bed",
    baths: "3 Bath",
    size: "2,000 sq ft",
    tag: "High Demand Area",
  },
  {
    title: "Luxury High-Rise Apartment",
    price: "$4,800/mo",
    beds: "3 Bed",
    baths: "3 Bath",
    size: "1,600 sq ft",
    tag: "Premium Tenants",
  },
];

const HouseIcon = () => (
  <svg
    className="w-full h-full text-orange-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 0l-1.5 1.774-1.5-1.773M6.75 7.364l-1.5.545M2.25 9h4.5m0 0v4.5m0-4.5h4.5m-4.5 0V9m0 0h4.5m0 0v4.5m0-4.5h4.5m-4.5 0V9"
    />
  </svg>
);

const FeaturedListings = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6" id="listings">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Featured <span className="text-orange-500">Properties</span>
            </h2>
            <p className="text-gray-600 max-w-xl">
              A snapshot of the types of homes we successfully manage for owners
              and investors across the city.
            </p>
          </div>
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full border border-orange-500 px-6 py-2 text-sm font-semibold text-orange-600 hover:bg-orange-500 hover:text-white transition-colors"
          >
            Request a free property assessment
          </a>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {listings.map((home) => (
            <article
              key={home.title}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="relative h-48 bg-gradient-to-tr from-orange-200 via-orange-100 to-white flex items-center justify-center">
                <div className="w-32 h-32 opacity-60">
                  <HouseIcon />
                </div>
                <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-orange-600 shadow-sm">
                  {home.tag}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {home.title}
                  </h3>
                  <p className="text-orange-600 font-bold text-sm">
                    {home.price}
                  </p>
                </div>
                <p className="text-gray-500 text-sm mb-4">
                  Professionally managed, thoroughly screened tenants, and
                  proactive maintenance.
                </p>
                <div className="mt-auto flex items-center justify-between text-xs text-gray-600 border-t border-gray-100 pt-3">
                  <span>{home.beds}</span>
                  <span>{home.baths}</span>
                  <span>{home.size}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;


