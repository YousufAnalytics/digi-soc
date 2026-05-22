const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="max-w-4xl">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            About DIGISOC
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Building Digital Growth for Modern Businesses
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            DIGISOC helps businesses establish a strong online presence through
            website development, search engine optimization, lead generation,
            social media marketing, and AI-powered digital solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>

              <p className="mt-6 text-gray-600 leading-8">
                We believe every business deserves a powerful digital presence.
                In today's competitive market, simply having a great product or
                service is not enough. Businesses need visibility, engagement,
                and a strategy that converts attention into growth.
              </p>

              <p className="mt-4 text-gray-600 leading-8">
                Our mission is to help businesses leverage modern technology,
                AI-driven solutions, and digital marketing strategies to reach
                more customers and achieve sustainable growth.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-500 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold">
                Why Businesses Choose DIGISOC
              </h3>

              <ul className="mt-8 space-y-4">
                <li>✓ Modern website experiences</li>
                <li>✓ Data-driven digital strategies</li>
                <li>✓ AI-powered marketing solutions</li>
                <li>✓ Transparent communication</li>
                <li>✓ Long-term growth focused approach</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">What We Do</h2>

            <p className="mt-4 text-gray-600">
              End-to-end digital growth solutions designed to help businesses
              attract, engage, and convert customers.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Website Development",
                description:
                  "Modern responsive websites designed to build trust and drive conversions.",
              },
              {
                title: "Search Engine Optimization",
                description:
                  "Improve search visibility and attract relevant organic traffic.",
              },
              {
                title: "Lead Generation",
                description:
                  "Generate high-quality business leads through targeted campaigns.",
              },
              {
                title: "Social Media Marketing",
                description:
                  "Build brand awareness and audience engagement across social platforms.",
              },
              {
                title: "Content Strategy",
                description:
                  "Create content that educates, engages, and converts potential customers.",
              },
              {
                title: "AI-Powered Solutions",
                description:
                  "Leverage AI tools and automation to improve marketing efficiency.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Our Vision</h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            To empower businesses of all sizes with innovative digital solutions
            that create meaningful customer experiences and drive sustainable
            business growth.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-500 p-12 text-center text-white shadow-xl">
            <h2 className="text-4xl font-bold">Ready to Grow Your Business?</h2>

            <p className="mt-4 text-lg text-indigo-100">
              Let's discuss your goals and build a digital strategy that
              delivers measurable results.
            </p>

            <button className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-indigo-600 transition hover:bg-gray-100">
              Book Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
