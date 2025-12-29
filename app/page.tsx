import Image from "next/image";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/Contact.Section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 via-gray-50 to-gray-200 font-sans">
      <main className="w-full max-w-2xl px-6 py-24 flex flex-col items-center text-center mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Become Your Strongest Self
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-xl mb-8">
          Personal training tailored for your goals. Simple plans, expert support, and motivation every step of the way.
        </p>
        <a
          href="#get-started"
          className="inline-block rounded-full bg-orange-500 px-8 py-3 text-white font-semibold text-base shadow-lg hover:bg-orange-600 transition-colors"
        >
          Get Started
        </a>
      </main>
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
