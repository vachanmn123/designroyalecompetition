import "./App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import Services from "../components/Services";
import Contact from "../components/Contact";

function App() {
  return (
    <>
      <Header />
      <div className="mt-24 font-[Bodoni] overflow-hidden">
        <Hero />
        <Offerings />
        <Services />
        <Contact />
      </div>
    </>
  );
}

export default App;
