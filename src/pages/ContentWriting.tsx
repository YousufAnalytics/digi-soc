const ContentWriting = () => {
  const services = [
    {
      title: "Website Content",
      description:
        "Professional website copy that clearly communicates your value proposition and encourages visitors to take action.",
    },
    {
      title: "SEO Blog Writing",
      description:
        "Search-optimized blog articles designed to improve visibility, attract organic traffic, and establish authority.",
    },
    {
      title: "Social Media Content",
      description:
        "Engaging content tailored for social platforms to increase audience interaction and brand awareness.",
    },
    {
      title: "Product & Service Descriptions",
      description:
        "Clear and persuasive descriptions that highlight benefits and improve customer understanding.",
    },
    {
      title: "Email Marketing Content",
      description:
        "Targeted email campaigns that nurture leads, build relationships, and drive conversions.",
    },
    {
      title: "Content Strategy",
      description:
        "Planning and organizing content that aligns with business goals and customer needs.",
    },
  ];

  const process = [
    "Business & Audience Research",
    "Keyword & Topic Planning",
    "Content Strategy Development",
    "Writing & Optimization",
    "Review & Refinement",
    "Publishing & Performance Tracking",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="max-w-4xl">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Content Writing
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Content That Educates, Engages, And Converts
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Great content helps businesses attract customers, improve search
            visibility, build credibility, and generate leads. We create
            high-quality content tailored to your audience and business goals,
            helping you communicate effectively and stand out online.
          </p>
        </div>
      </section>

      {/* Why Content Matters */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Why Content Matters
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Content is often the first interaction customers have with your
                business. Whether through your website, blogs, social media, or
                emails, quality content helps build trust and demonstrates your
                expertise.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Consistent and strategic content can improve search engine
                rankings, strengthen customer relationships, and support every
                stage of the buyer journey.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-500 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold">
                Benefits Of Content Marketing
              </h3>

              <ul className="mt-8 space-y-4">
                <li>✓ Improved search visibility</li>
                <li>✓ Stronger brand authority</li>
                <li>✓ Better customer engagement</li>
                <li>✓ Increased website traffic</li>
                <li>✓ More qualified leads</li>
                <li>✓ Higher conversion potential</li>
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
              Our Content Writing Services
            </h2>

            <p className="mt-4 text-gray-600">
              Strategic content solutions designed to help your business connect
              with the right audience and achieve measurable results.
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
              Our Content Creation Process
            </h2>

            <p className="mt-4 text-gray-600">
              A structured workflow designed to produce content that supports
              business growth.
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

      {/* Content Types */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Content We Create
            </h2>

            <p className="mt-4 text-gray-600">
              Professional content tailored for different business objectives.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Website Pages",
              "Blog Articles",
              "Social Media Posts",
              "Email Campaigns",
              "Service Pages",
              "Landing Pages",
              "Case Studies",
              "Marketing Copy",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
              >
                <p className="font-semibold text-gray-900">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Why is content important for SEO?
              </h3>

              <p className="mt-2 text-gray-600">
                Search engines rely on quality content to understand what your
                website is about. Optimized content can help improve rankings
                and attract organic traffic.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Do you write content for websites?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes. We create website content designed to clearly communicate
                your services, strengthen credibility, and encourage inquiries.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Can content help generate leads?
              </h3>

              <p className="mt-2 text-gray-600">
                Absolutely. Valuable content can attract potential customers,
                answer their questions, and guide them toward taking action.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentWriting;
