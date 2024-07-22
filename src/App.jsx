import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

const App = () => {
  return (
    <>
      <main className="bg-primaryDark text-white relative mx-auto max-w-screen-xl">
        <Navbar />
        <main className="overflow-hidden px-3 md:px-4">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </main>
    </>
  );
};

export default App;
