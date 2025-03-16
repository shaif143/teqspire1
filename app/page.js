import NavBar from "./components/navbar";
import Home from "./components/home";
import Project from "./components/projects";
import Services from "./components/services";
import About from "./components/about";
import Faq from "./components/faq";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="bg-[#e3eff4] text-black">
      {/* Sticky Navbar with Spacing Fix */}
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>

      {/* Prevent Overlapping */}
      <div className="pt-[80px]">
        <div id="home">
          <Home />
        </div>

        <div id="projects">
          <Project />
        </div>

        {/* Ensure Services Section is Positioned Correctly */}
        <div id="services" className="relative min-h-screen">
          <Services />
        </div>

        <div id="about">
          <About />
        </div>

        {/* Fix White Background */}
        <div id="faq" className="bg-white">
          <Faq />
        </div>

        <div id="pricing">
          <Pricing />
        </div>

        {/* Fix White Background */}
        <div className="bg-white text-black">
          <Footer />
        </div>
      </div>
    </div>
  );
}
