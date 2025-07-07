import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import Services from "./components/Services";
import { SpeedInsights } from "@vercel/speed-insights/react";



function App() {


  return (
    <div className="bg-[#0a192f] ">
      <SpeedInsights/>
      <Hero />
      <Services />
      <About />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App
