import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fcfcfd]">
      <Header />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}
