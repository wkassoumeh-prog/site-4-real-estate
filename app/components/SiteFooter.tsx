const SiteFooter = () => {
  return (
    <footer className="w-full bg-gray-950 text-gray-300 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-8 md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-wide text-orange-400 uppercase">
            Real Estate Management
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Professional property management for owners and investors. No
            guesswork, just consistent results.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-xs text-gray-400">
          <a href="#listings" className="hover:text-orange-300">
            Properties
          </a>
          <a href="#how-it-works" className="hover:text-orange-300">
            How it works
          </a>
          <a href="#testimonials" className="hover:text-orange-300">
            Testimonials
          </a>
          <a href="#faq" className="hover:text-orange-300">
            FAQ
          </a>
          <a href="#get-started" className="hover:text-orange-300">
            Contact
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Your Realty Management Co. All rights reserved.</p>
          <p>Website template customized in Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;


