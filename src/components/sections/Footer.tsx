import { ArrowUpRight } from "lucide-react";

import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      {/* CTA SECTION */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 px-6 py-24 lg:flex-row lg:items-center">
          {/* Left Content */}
          <div className="max-w-3xl">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-300">
              LET’S GROW YOUR BUSINESS
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Ready to scale your
              <br />
              digital presence?
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              From websites to AI-powered marketing campaigns, we help
              businesses generate leads, improve visibility, and drive
              measurable growth.
            </p>
          </div>

          {/* CTA Button */}
          <button className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-8 py-5 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02]">
            Book Free Consultation
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>
      </div>

      {/* FOOTER CONTENT */}
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-xl font-bold">
              D
            </div>

            <div>
              <h3 className="text-2xl font-bold">DIGISOC</h3>

              <p className="text-sm text-gray-400">AI-Powered Digital Growth</p>
            </div>
          </div>

          <p className="mt-6 leading-7 text-gray-400">
            Helping businesses grow through modern websites, AI-driven marketing
            strategies, and scalable digital solutions.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold">Services</h4>

          <ul className="mt-6 space-y-4 text-gray-400">
            <li>
              <a href="#" className="transition hover:text-white">
                Website Design
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white">
                SEO Optimization
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white">
                Lead Generation
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white">
                Social Media Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold">Company</h4>

          <ul className="mt-6 space-y-4 text-gray-400">
            <li>
              <a href="#" className="transition hover:text-white">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white">
                Case Studies
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white">
                Blog
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold">Contact</h4>

          <div className="mt-6 space-y-4 text-gray-400">
            <p>info@digisoc.in</p>

            <p>+91 78424 16166</p>

            <p>Guntur & Vijayawada, India</p>
          </div>

          {/* Socials */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 transition hover:border-indigo-400 hover:bg-white/5"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 transition hover:border-indigo-400 hover:bg-white/5"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 transition hover:border-indigo-400 hover:bg-white/5"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">
          <p>© 2026 DIGISOC. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-white">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-white">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
