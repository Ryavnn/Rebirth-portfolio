import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import Services from "./components/Services";
import { Analytics } from "@vercel/analytics/react";



function App() {


  return (
    <div className="bg-[#0a192f] ">
      <Analytics />
      <Hero />
      <Services />
      <About />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App
