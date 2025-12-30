import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/Contact.Section";
import FeaturedListings from "./components/FeaturedListings";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import SiteFooter from "./components/SiteFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-gray-50 to-gray-200 font-sans">
      <header className="w-full border-b border-orange-100/60 bg-white/70 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-orange-500 flex items-center justify-center text-white text-lg font-bold">
              RM
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 leading-tight">
                Realty Management Co.
              </p>
              <p className="text-[11px] text-gray-500">
                Professional property management
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#services" className="hover:text-orange-600">
              Services
            </a>
            <a href="#listings" className="hover:text-orange-600">
              Properties
            </a>
            <a href="#how-it-works" className="hover:text-orange-600">
              How it works
            </a>
            <a href="#about" className="hover:text-orange-600">
              About
            </a>
            <a href="#testimonials" className="hover:text-orange-600">
              Stories
            </a>
            <a href="#faq" className="hover:text-orange-600">
              FAQ
            </a>
          </nav>
          <a
            href="#get-started"
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-orange-600 transition-colors"
          >
            Get a free assessment
          </a>
        </div>
      </header>

      <main className="flex-1 w-full">
        <section className="w-full">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20 grid gap-10 md:grid-cols-[1.4fr,1fr] items-center">
            <div>
              <p className="inline-flex items-center rounded-full bg-white/80 border border-orange-100 px-3 py-1 text-[11px] font-medium text-orange-700 mb-4 shadow-sm">
                Trusted property management for owners & investors
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Stress-free
                <span className="text-orange-500"> property management</span>{" "}
                that protects your investment.
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-6">
                We handle tenant screening, leasing, maintenance, and reporting
                so you can enjoy predictable income and fewer calls about
                clogged drains.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a
                  href="#get-started"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-orange-600 transition-colors"
                >
                  Talk to our team
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2 text-xs font-semibold text-gray-800 bg-white hover:border-gray-400 transition-colors"
                >
                  See how it works
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-xs text-gray-500">
                <div>
                  <p className="font-semibold text-gray-800">
                    120+ properties
                  </p>
                  <p>actively managed</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    4.9/5 owner rating
                  </p>
                  <p>for service & reporting</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">
                    24/7 maintenance
                  </p>
                  <p>coordinated on your behalf</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-orange-200/70 via-orange-100/60 to-transparent rounded-3xl blur-2xl -z-10" />
              <div className="relative rounded-3xl bg-white shadow-xl border border-orange-100 p-6 flex flex-col gap-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Portfolio snapshot
                  </p>
                  <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-[11px] font-medium text-green-700 border border-green-100">
                    • Low vacancy
                  </span>
                </div>
                <div className="space-y-3 text-xs text-gray-700">
                  <div className="flex items-center justify-between">
                    <span>Occupancy rate</span>
                    <span className="font-semibold text-gray-900">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Average days to lease</span>
                    <span className="font-semibold text-gray-900">14 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>On-time rent collection</span>
                    <span className="font-semibold text-gray-900">97%</span>
                  </div>
                </div>
                <div className="mt-3 rounded-2xl bg-orange-50 border border-orange-100 p-3">
                  <p className="text-[11px] text-gray-700 mb-1">
                    “They turned our rentals from a constant headache into a
                    predictable, well-run portfolio.”
                  </p>
                  <p className="text-[11px] font-semibold text-gray-900">
                    — Portfolio owner, 8 doors
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-gray-500">
                  <p>See sample metrics — customize with your own numbers.</p>
                  <svg
                    width="38"
                    height="38"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-60 text-orange-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13l4-4 4 4M3 21V5a2 2 0 012-2h14a2 2 0 012 2v16M7 13h10M11 17h6M9 9h8"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 21V13h6v8"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />
        <FeaturedListings />
        <ProcessSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
