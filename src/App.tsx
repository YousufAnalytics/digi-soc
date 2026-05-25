import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import WebsiteDesign from "./pages/WebsiteDesign";
import LeadGeneration from "./pages/LeadGeneration";
import SocialMediaMarketing from "./pages/SocialMediaMarketing";
import ContentWriting from "./pages/ContentWriting";
import SearchEngineOptimization from "./pages/SearchEngineOptimization";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="services/website-design" element={<WebsiteDesign />} />
            <Route
              path="services/lead-generation"
              element={<LeadGeneration />}
            />
            <Route
              path="services/social-media-marketing"
              element={<SocialMediaMarketing />}
            />
            <Route
              path="services/content-writing"
              element={<ContentWriting />}
            />
            <Route path="services/seo" element={<SearchEngineOptimization />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
