const WebsiteDesign = () => {
  const features = [
    {
      title: "Responsive Design",
      description:
        "Websites that look great and work flawlessly across desktop, tablet, and mobile devices.",
    },
    {
      title: "Fast Performance",
      description:
        "Optimized pages that load quickly to improve user experience and search rankings.",
    },
    {
      title: "SEO Friendly",
      description:
        "Built with search engine best practices to improve online visibility.",
    },
    {
      title: "Lead Generation",
      description:
        "Strategically designed layouts that encourage visitors to contact your business.",
    },
    {
      title: "Modern UI/UX",
      description:
        "Clean and professional user experiences that build trust with customers.",
    },
    {
      title: "Scalable Architecture",
      description:
        "Built to support future growth and additional features as your business expands.",
    },
  ];

  const process = [
    "Discovery & Business Understanding",
    "Wireframes & Design Planning",
    "UI Design & Branding",
    "Development & Integration",
    "Testing & Optimization",
    "Launch & Ongoing Support",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="max-w-4xl">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Website Design & Development
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Websites Designed To Grow Your Business
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your website is often the first impression customers have of your
            business. We create modern, responsive, and conversion-focused
            websites that help businesses establish credibility, attract
            customers, and generate leads.
          </p>
        </div>
      </section>

      {/* Why Website Matters */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Why Does Your Business Need A Professional Website?
              </h2>

              <p className="mt-6 text-gray-600 leading-8">
                Today, customers search online before making purchasing
                decisions. A professional website builds trust, showcases your
                services, and makes it easier for potential customers to connect
                with your business.
              </p>

              <p className="mt-4 text-gray-600 leading-8">
                Whether you're a startup, local business, healthcare provider,
                consultant, or growing enterprise, a well-designed website can
                become your most effective marketing asset.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-500 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold">What You Gain</h3>

              <ul className="mt-8 space-y-4">
                <li>✓ Strong online presence</li>
                <li>✓ More customer inquiries</li>
                <li>✓ Better brand credibility</li>
                <li>✓ Improved search visibility</li>
                <li>✓ Mobile-friendly experience</li>
                <li>✓ Higher conversion potential</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              What We Deliver
            </h2>

            <p className="mt-4 text-gray-600">
              Every website is built with performance, usability, and business
              growth in mind.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Our Website Development Process
            </h2>

            <p className="mt-4 text-gray-600">
              A structured approach that ensures quality and business alignment.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {process.map((step, index) => (
              <div key={step} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white">
                    {index + 1}
                  </div>

                  <h3 className="font-semibold text-gray-900">{step}</h3>
                </div>
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
                How long does it take to build a website?
              </h3>
              <p className="mt-2 text-gray-600">
                Most business websites can be completed within 1–3 weeks,
                depending on complexity and requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">
                Will my website work on mobile devices?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes. Every website we build is fully responsive and optimized
                for desktops, tablets, and smartphones.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">
                Can you redesign an existing website?
              </h3>
              <p className="mt-2 text-gray-600">
                Absolutely. We can modernize your current website while
                improving usability, performance, and visual appeal.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesign;
