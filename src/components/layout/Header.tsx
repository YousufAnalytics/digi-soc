import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import Modal from "../ui/Modal";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const services = [
  { name: "Website Design", link: "website-design" },
  { name: "SEO", link: "seo" },
  { name: "Lead Generation", link: "lead-generation" },
  { name: "Social Media Marketing", link: "social-media-marketing" },
  { name: "Content Writing", link: "content-writing" },
];

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [nofification, setNotification] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");
  return (
    <>
      <header className="fixed z-50 w-full border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-500 text-white font-bold text-xl">
                D
              </div>

              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">
                  DIGISOC
                </h1>

                <p className="text-xs text-gray-500">
                  AI-Powered Digital Growth
                </p>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`
              }
            >
              Home
            </NavLink>
            {/* Services Dropdown */}
            <div className="group relative cursor-pointer">
              <div
                className={`flex items-center gap-1 text-sm font-medium transition ${
                  isServicesActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`}
              >
                Services
                <ChevronDown size={18} className="relative top-[1px]" />
              </div>

              <div className="invisible absolute left-0 top-10 w-64 rounded-2xl border border-gray-100 bg-white p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={`/services/${service.link}`}
                    className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-indigo-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`
              }
            >
              About Us
            </NavLink>
            {/* <NavLink
              to="/case-studies"
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`
              }
            >
              Case Studies
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`
              }
            >
              Blog
            </NavLink> */}
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA Button */}
          <button
            onClick={() => setOpenModal(true)}
            className="hidden lg:flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg cursor-pointer"
          >
            Free Consultation
            <ArrowUpRight size={18} />
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bg-white z-40 shadow-lg lg:hidden">
          <nav className="flex flex-col py-4">
            {/* Home */}
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-gray-700 hover:bg-gray-50"
            >
              Home
            </NavLink>

            {/* Services */}
            <button
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`flex items-center justify-between px-6 py-4 text-left ${
                isServicesActive ? "text-indigo-600" : "text-gray-700"
              }`}
            >
              <span>Services</span>

              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Services submenu */}
            {servicesOpen && (
              <div className="bg-gray-50">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={`/services/${service.link}`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setServicesOpen(false);
                    }}
                    className="block px-10 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}

            {/* About */}
            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-gray-700 hover:bg-gray-50"
            >
              About Us
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-6 py-4 text-gray-700 hover:bg-gray-50"
            >
              Contact
            </NavLink>

            {/* CTA */}
            <div className="px-6 pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenModal(true);
                }}
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-500 px-4 py-3 font-medium text-white"
              >
                Free Consultation
              </button>
            </div>
          </nav>
        </div>
      )}
      <Modal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSuccess={() => {
          setNotification(true);
          toast("works");
        }}
      />
      {nofification && <ToastContainer />}
    </>
  );
}
