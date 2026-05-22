const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="max-w-4xl">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Contact Us
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Let's Build Something Great Together
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you need a website, SEO strategy, lead generation campaign,
            or social media marketing support, we'd love to learn about your
            business and discuss how DIGISOC can help.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <p className="mt-3 text-gray-600">info@digisoc.in</p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              <p className="mt-3 text-gray-600">+91 7842416166</p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Service Areas
              </h3>
              <p className="mt-3 text-gray-600">
                Guntur
                <br />
                Vijayawada
                <br />
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">
                Business Hours
              </h3>
              <p className="mt-3 text-gray-600">
                Monday - Saturday
                <br />
                9:00 AM - 7:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact DIGISOC */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              How We Can Help
            </h2>

            <p className="mt-4 text-gray-600">
              We provide end-to-end digital growth solutions for businesses
              looking to strengthen their online presence.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Website Design & Development",
              "Search Engine Optimization (SEO)",
              "Lead Generation Campaigns",
              "Social Media Marketing",
              "Content Strategy & Creation",
              "AI-Powered Digital Solutions",
            ].map((service) => (
              <div key={service} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="font-medium text-gray-800">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">
                How much does a website cost?
              </h3>
              <p className="mt-2 text-gray-600">
                Pricing depends on the scope, design requirements, and
                functionality needed for your business.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">
                Do you provide SEO services?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes. We help businesses improve search visibility and attract
                relevant organic traffic.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">
                Can you help generate leads?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes. We create targeted lead generation strategies and campaigns
                focused on bringing qualified prospects to your business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
