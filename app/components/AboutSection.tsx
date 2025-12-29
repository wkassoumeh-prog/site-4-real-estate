const AboutSection = () => {
  return (
    <section className="py-14 px-4 bg-white w-full">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
          About Me
        </h2>
        <p className="text-gray-700 text-base mb-6 text-center">
          I’m a certified personal trainer passionate about helping you achieve real, lasting results. With years of experience coaching all fitness levels, I make training simple, motivating, and tailored to you.
        </p>
        <ul className="list-disc list-inside space-y-2 max-w-md mx-auto text-gray-800">
          <li>Customized workout plans designed for your goals</li>
          <li>Supportive coaching and accountability every step</li>
          <li>Focus on sustainable, healthy habits for life</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
    