const SocialMediaMarketing = () => {
  const services = [
    {
      title: "Content Strategy",
      description:
        "Develop a content plan aligned with your business goals and target audience.",
    },
    {
      title: "Creative Design",
      description:
        "Eye-catching graphics, posts, and visual assets that strengthen your brand identity.",
    },
    {
      title: "Social Media Management",
      description:
        "Consistent posting, scheduling, and profile management across major social platforms.",
    },
    {
      title: "Audience Engagement",
      description:
        "Build relationships with your audience through meaningful interactions and engagement.",
    },
    {
      title: "Campaign Management",
      description:
        "Promote products, services, events, and offers through targeted social campaigns.",
    },
    {
      title: "Performance Analytics",
      description:
        "Track engagement, reach, audience growth, and campaign effectiveness.",
    },
  ];

  const process = [
    "Business & Audience Discovery",
    "Content Strategy Planning",
    "Creative Design & Content Creation",
    "Publishing & Scheduling",
    "Audience Engagement",
    "Reporting & Optimization",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="max-w-4xl">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
            Social Media Marketing
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">
            Build Your Brand Where Your Customers Spend Their Time
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Social media has become one of the most effective ways for
            businesses to connect with customers, build trust, increase
            visibility, and grow their brand. We help businesses create
            meaningful content and maintain a strong presence across social
            platforms.
          </p>
        </div>
      </section>

      {/* Why Social Media Matters */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Why Social Media Matters
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Customers discover, evaluate, and engage with brands through
                social media every day. An active and professional social media
                presence helps businesses build credibility, increase awareness,
                and stay connected with their audience.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Consistent content and strategic engagement can help businesses
                create stronger customer relationships and remain top-of-mind
                when customers are ready to make a purchase decision.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-violet-500 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold">
                Benefits Of Social Media Marketing
              </h3>

              <ul className="mt-8 space-y-4">
                <li>✓ Increased brand awareness</li>
                <li>✓ Better customer engagement</li>
                <li>✓ Improved online visibility</li>
                <li>✓ Stronger customer trust</li>
                <li>✓ Increased website traffic</li>
                <li>✓ More business opportunities</li>
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
              Our Social Media Services
            </h2>

            <p className="mt-4 text-gray-600">
              Comprehensive social media solutions designed to help your brand
              grow and connect with the right audience.
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
              Our Social Media Process
            </h2>

            <p className="mt-4 text-gray-600">
              A structured approach to building visibility, engagement, and
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

      {/* Platforms */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900">
              Platforms We Support
            </h2>

            <p className="mt-4 text-gray-600">
              Reach your audience across the platforms that matter most.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Instagram", "Facebook", "LinkedIn", "YouTube"].map(
              (platform) => (
                <div
                  key={platform}
                  className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                >
                  <p className="font-semibold text-gray-900">{platform}</p>
                </div>
              ),
            )}
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
                How often should businesses post on social media?
              </h3>

              <p className="mt-2 text-gray-600">
                Posting frequency depends on the platform and audience.
                Consistency is generally more important than posting large
                volumes of content.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Can social media generate leads?
              </h3>

              <p className="mt-2 text-gray-600">
                Yes. Strategic content, audience targeting, and strong
                calls-to-action can help convert followers into potential
                customers.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900">
                Which platform is best for my business?
              </h3>

              <p className="mt-2 text-gray-600">
                The ideal platform depends on your audience, industry, and
                business objectives. We help identify the most effective
                channels for your goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
