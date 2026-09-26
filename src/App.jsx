import Hero from "./components/Hero";
import About from "./components/About";
import StarBg from "./components/Starbg";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

const App = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">

      <Loader />

      <StarBg />

      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>

    </div>
  );
};

export default App;