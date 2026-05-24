import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../sections/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfd] overflow-x-hidden">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
