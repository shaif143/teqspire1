import NavBar from "./components/navbar";
import Home from "./components/home";
import Project from "./components/projects";
import Services from "./components/services";
import About from "./components/about";
import Faq from "./components/faq";
import Pricing from "./components/pricing";
import Footer from "./components/footer";
import Particles from "./components/Particles";

export default function App() {
  return (
    <>
      <div className="bg-[#e3eff4] text-black">
        <div className="sticky top-0 z-50">
          <NavBar></NavBar>
        </div>
        <div id="home">
          <Home />
        </div>
        <div id="projects">
          <Project />
        </div>
        <div id="services" >

          <div className="bg-[#0000]">
            <Particles
              particleColors={['#ffffff', '#ffffff']}
              particleCount={200}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={100}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
            <Services />
          </div>
          
        
        </div> 
        

        

        <div id="about">
          <About />
        </div>
        <div id="faq" className="bg-[#FFFF]">
          <Faq />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div className="bg-[#FFFF] text-black">
          <Footer />
        </div>
      </div>
    </>
  );
}
