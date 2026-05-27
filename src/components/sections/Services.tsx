import {
  Globe,
  Search,
  Megaphone,
  PenTool,
  ChartNoAxesCombined,
} from "lucide-react";

import { Link } from "react-router-dom";

const services = [
  {
    title: "Website Design",
    description:
      "Modern, responsive websites crafted to build trust and convert visitors into customers.",
    icon: Globe,
    link: "website-design",
  },

  {
    title: "SEO Optimization",
    description:
      "Improve your visibility on Google and attract high-intent organic traffic.",
    icon: Search,
    link: "seo",
  },
  {
    title: "Content Writing",
    description:
      "SEO-focused content and persuasive copywriting tailored for your business growth.",
    icon: PenTool,
    link: "content-writing",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build brand awareness and engagement across Instagram, Facebook, and LinkedIn.",
    icon: Megaphone,
    link: "social-media-marketing",
  },
  {
    title: "Lead Generation",
    description:
      "Performance-driven campaigns designed to generate qualified business leads.",
    icon: ChartNoAxesCombined,
    link: "lead-generation",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            END-TO-END DIGITAL GROWTH SOLUTIONS
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            What We Do
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We help brands grow online through strategy, creativity, AI-powered
            marketing, and performance-focused digital solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-100 bg-[#fcfcfd] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-xl"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white shadow-md">
                  <Icon size={26} />
                </div>

                {/* Content */}
                <h3 className="mt-8 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                {/* Learn More */}
                <Link
                  to={`/services/${service.link}`}
                  className="mt-8 text-sm font-semibold text-indigo-600 transition hover:text-violet-500"
                >
                  Learn More →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
