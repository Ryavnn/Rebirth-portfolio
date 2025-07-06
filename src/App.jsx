import About from "./components/About";
import ContactUs from "./components/ContactUs";
import CursorGlow from "./components/CursorGlow"
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import Services from "./components/Services";



function App() {


  return (
    <div className="bg-[#0a192f] ">
      <Hero />
      <Services />
      <About />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App
