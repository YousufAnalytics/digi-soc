const SearchEngineOptimization = () => {
  const services = [
    {
      title: "Keyword Research",
      description:
        "Identify the search terms your potential customers use to find products and services like yours.",
    },
    {
      title: "On-Page SEO",
      description:
        "Optimize page titles, content, headings, URLs, and metadata to improve search visibility.",
    },
    {
      title: "Technical SEO",
      description:
        "Improve website performance, crawlability, mobile responsiveness, and overall search engine friendliness.",
    },
    {
      title: "Local SEO",
      description:
        "Help your business appear in local search results and Google Business Profile listings.",
    },
    {
      title: "Content Optimization",
      description:
        "Create and optimize valuable content that attracts organic traffic and builds authority.",
    },
    {
      title: "Performance Tracking",
      description:
        "Monitor rankings, traffic, and conversions to continuously improve SEO performance.",
    },
  ];

  const process = [
    "SEO Audit & Website Analysis",
    "Keyword & Competitor Research",
    "On-Page Optimization",
    "Technical Improvements",
    "Content Strategy",
    "Performance Monitoring & Reporting",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="max-w-4xl">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Search Engine Optimization
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Get Found By Customers Searching For Your Business
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Search Engine Optimization (SEO) helps your business appear in front
            of potential customers when they search online. Our SEO strategies
            focus on increasing visibility, driving organic traffic, and helping
            your business attract qualified leads.
          </p>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Why SEO Matters For Your Business
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Every day, customers search online for products, services, and
                solutions. If your website is not visible in search results,
                potential customers may never discover your business.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Effective SEO helps improve visibility, increase website
                traffic, strengthen brand credibility, and generate long-term
                business opportunities without relying entirely on paid
                advertising.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-500 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold">Benefits Of SEO</h3>

              <ul className="mt-8 space-y-4">
                <li>✓ Increased search visibility</li>
                <li>✓ Higher website traffic</li>
                <li>✓ Better brand credibility</li>
                <li>✓ More qualified leads</li>
                <li>✓ Long-term marketing value</li>
                <li>✓ Sustainable business growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Our SEO Services
            </h2>

            <p className="mt-4 text-gray-600">
              Comprehensive SEO solutions designed to improve rankings and drive
              measurable growth.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
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

      {/* Process */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Our SEO Process
            </h2>

            <p className="mt-4 text-gray-600">
              A structured approach focused on visibility, traffic, and growth.
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
                How long does SEO take to show results?
              </h3>

              <p className="mt-2 text-gray-600">
                SEO is a long-term strategy. While improvements can sometimes be
                seen within a few weeks, meaningful results typically take
                several months depending on competition and industry.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">
                Is SEO better than paid advertising?
              </h3>

              <p className="mt-2 text-gray-600">
                SEO and paid advertising serve different purposes. SEO focuses
                on long-term organic visibility, while paid ads provide
                immediate exposure. Many businesses benefit from both.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">
                Can local businesses benefit from SEO?
              </h3>

              <p className="mt-2 text-gray-600">
                Absolutely. Local SEO helps businesses appear in local search
                results and Google Maps listings, making it easier for nearby
                customers to find them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchEngineOptimization;
