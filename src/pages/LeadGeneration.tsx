const LeadGeneration = () => {
  const services = [
    {
      title: "Landing Page Strategy",
      description:
        "Conversion-focused landing pages designed to capture visitor information and generate inquiries.",
    },
    {
      title: "Paid Advertising Campaigns",
      description:
        "Targeted campaigns across Google and social platforms to reach potential customers.",
    },
    {
      title: "Lead Capture Forms",
      description:
        "Optimized forms and call-to-actions that encourage visitors to take action.",
    },
    {
      title: "Audience Targeting",
      description:
        "Identify and target the right audience based on demographics, interests, and behavior.",
    },
    {
      title: "Campaign Optimization",
      description:
        "Continuous monitoring and optimization to improve lead quality and conversion rates.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track campaign performance and measure the return on your marketing investment.",
    },
  ];

  const process = [
    "Business & Audience Analysis",
    "Campaign Strategy Planning",
    "Landing Page Development",
    "Lead Capture Setup",
    "Campaign Launch",
    "Optimization & Reporting",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="max-w-4xl">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Lead Generation
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Turn Website Visitors Into Qualified Business Leads
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Generating traffic is only the first step. Effective lead generation
            strategies help convert potential customers into inquiries,
            consultations, and business opportunities. We create campaigns
            designed to attract the right audience and drive measurable growth.
          </p>
        </div>
      </section>

      {/* Why Lead Generation Matters */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Why Lead Generation Matters
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                A website alone doesn't generate business growth unless visitors
                take action. Lead generation helps businesses identify, attract,
                and engage potential customers who are interested in their
                products or services.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                By combining strategic messaging, optimized landing pages, and
                targeted campaigns, businesses can consistently create new sales
                opportunities and build a healthy pipeline of prospects.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-500 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold">
                Benefits Of Lead Generation
              </h3>

              <ul className="mt-8 space-y-4">
                <li>✓ More customer inquiries</li>
                <li>✓ Increased sales opportunities</li>
                <li>✓ Better marketing ROI</li>
                <li>✓ Consistent business growth</li>
                <li>✓ Improved conversion rates</li>
                <li>✓ Qualified prospects</li>
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
              Our Lead Generation Services
            </h2>

            <p className="mt-4 text-gray-600">
              End-to-end lead generation solutions designed to attract, engage,
              and convert potential customers.
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
              Our Lead Generation Process
            </h2>

            <p className="mt-4 text-gray-600">
              A systematic approach focused on attracting quality leads and
              maximizing conversions.
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
              <h3 className="font-semibold text-gray-900">What is a lead?</h3>

              <p className="mt-2 text-gray-600">
                A lead is a potential customer who has shown interest in your
                business by submitting a form, requesting information, booking a
                consultation, or contacting your team.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">
                How quickly can lead generation campaigns produce results?
              </h3>

              <p className="mt-2 text-gray-600">
                Results vary depending on industry, competition, and campaign
                strategy. Some campaigns can begin generating inquiries within
                days, while others require optimization over time.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900">
                Can lead generation work for local businesses?
              </h3>

              <p className="mt-2 text-gray-600">
                Absolutely. Local businesses can use targeted campaigns to
                attract customers within specific cities, regions, or service
                areas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadGeneration;
