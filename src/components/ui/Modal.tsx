import { X, ArrowUpRight } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      {/* Modal */}
      <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-500 shadow-sm transition hover:bg-gray-50 cursor-pointer"
        >
          <X size={18} />
        </button>

        <div className="grid md:grid-cols-[0.95fr_1.2fr]">
          {/* LEFT PANEL */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#faf7ff] to-[#f3f0ff] p-8">
            {/* Background Blur */}
            <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-violet-200/40 blur-3xl" />

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center rounded-full bg-violet-100 px-4 py-2">
                <span className="text-xs font-semibold tracking-wide text-violet-700">
                  ✨ FREE CONSULTATION
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-gray-900">
                Let’s Grow Your
                <span className="mt-1 block bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                  Business Together
                </span>
              </h2>

              {/* Description */}
              <p className="mt-5 text-[15px] leading-7 text-gray-600">
                Share your goals with us and our experts will create a
                personalized growth strategy for your business.
              </p>

              {/* Illustration */}
              <div className="mt-8 flex justify-center">
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-lg">
                  <span className="text-5xl">📅</span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                    💡
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Personalized Strategy
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-gray-600">
                      Tailored marketing plans aligned with your business goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                    🚀
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      Expert Guidance
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-gray-600">
                      Learn from experienced digital marketing professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm">
                    🤝
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      No Commitment
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-gray-600">
                      100% free consultation with no obligations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="p-8">
            {/* Heading */}
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-gray-900">
                Book Your Consultation
              </h3>

              <p className="mt-2 text-sm text-gray-600">
                Fill in the details below and we’ll get back to you shortly.
              </p>
            </div>

            {/* Form */}
            <form className="mt-7 space-y-4">
              {/* Row */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400"
                  />
                </div>
              </div>

              {/* Row */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Business Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your business name"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400"
                  />
                </div>
              </div>

              <div className="mb-2">
                <select
                  defaultValue=""
                  className="select w-full rounded-2xl border border-gray-200 bg-white px-6 py-3 text-sm outline-none transition focus:border-violet-400"
                >
                  <option value="" disabled>
                    Select a service
                  </option>

                  <option value="Website Design">Website Design</option>
                  <option value="SEO Optimization">SEO Optimization</option>
                  <option value="Lead Generation">Lead Generation</option>
                  <option value="Social Media Marketing">
                    Social Media Marketing
                  </option>
                  <option value="Content Writing">Content Writing</option>
                  <option value="AI Marketing Solutions">
                    AI Marketing Solutions
                  </option>
                </select>
              </div>

              {/* Textarea */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Business Goals
                </label>

                <textarea
                  rows={3}
                  placeholder="Tell us about your business goals..."
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-violet-400"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-gray-300"
                />

                <p className="text-xs leading-5 text-gray-500">
                  I agree to the Privacy Policy and Terms & Conditions.
                </p>
              </div>

              {/* CTA */}
              <button
                type="submit"
                className="group mt-2 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.01] cursor-pointer"
              >
                Book Free Consultation
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              {/* Bottom */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-300" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-400" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-500" />
                </div>

                <p className="text-xs text-gray-500">
                  Join 500+ businesses growing with DIGISOC
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
