import { ArrowUpRight } from "lucide-react";
import Modal from "../ui/Modal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const [nofification, setNotification] = useState(false);
  return (
    <>
      <section className="relative bg-[#fcfcfd]">
        {/* Background Gradient */}
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-100 blur-3xl opacity-40" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 pb-14  lg:min-h-[75vh]">
          {/* Badge */}
          <div className="mb-2 inline-flex w-fit items-center rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2">
            <span className="text-sm font-semibold text-indigo-600">
              AI-Powered Digital Marketing Agency
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-7xl">
            We Build Brands.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
              We Drive Growth.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            From stunning websites to AI-powered marketing strategies, we help
            businesses generate leads, increase visibility, and convert visitors
            into loyal customers.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            {/* Primary CTA */}
            <button
              onClick={() => setOpenModal(true)}
              className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500 px-7 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              Book Free Consultation
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>

            {/* Secondary CTA */}
            {/* <button className="rounded-2xl border border-gray-200 bg-white px-7 py-4 text-sm font-semibold text-gray-800 transition hover:border-indigo-200 hover:text-indigo-600">
              Explore Services
            </button> */}
          </div>
        </div>
      </section>
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
