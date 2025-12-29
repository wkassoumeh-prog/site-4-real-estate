"use client";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    const { [e.target.name]: _, ...restErrors } = errors;
    setErrors(restErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <section className="py-14 px-4 bg-white w-full" id="get-started">
      <div className="max-w-md mx-auto bg-orange-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
          Contact Me
        </h2>
        <p className="text-gray-700 text-center mb-6">
          Ready to start? Questions? Send me a message!
        </p>
        {submitted ? (
          <div className="text-center text-green-600 font-semibold py-4">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-gray-700"
              >
                Name <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  errors.name
                    ? "border-red-400"
                    : "border-gray-300"
                }`}
                value={form.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <div className="text-red-500 text-sm mt-1">{errors.name}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-700"
              >
                Email <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  errors.email
                    ? "border-red-400"
                    : "border-gray-300"
                }`}
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-medium text-gray-700"
              >
                Message <span className="text-orange-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                  errors.message
                    ? "border-red-400"
                    : "border-gray-300"
                }`}
                value={form.message}
                onChange={handleChange}
                required
              />
              {errors.message && (
                <div className="text-red-500 text-sm mt-1">{errors.message}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-lg shadow transition-colors"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
