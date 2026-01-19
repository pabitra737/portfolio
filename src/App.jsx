import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingSocials from "./components/FloatingSocials";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import FloatingLines from "./components/FloatingLines";

function App() {
  return (
    <div className="min-h-screen relative text-text-main dark:text-text-inverted overflow-x-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-auto">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineCount={[5, 5, 5]}
          lineDistance={[7, 7, 7]}
          bendRadius={5}
          bendStrength={-1.2}
          interactive={true}
          parallax={true}
          mouseDamping={0.15}
          parallaxStrength={0.5}
        />
      </div>
      <div className="relative z-10 w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
        <FloatingSocials />
      </div>
    </div>
  );
}

export default App;
