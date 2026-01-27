import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FloatingSocials from "./components/FloatingSocials";

import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import FloatingLines from "./components/FloatingLines";

import ContactPage from "./pages/ContactPage";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();
  return (
    <div className="min-h-screen relative text-text-main dark:text-text-inverted overflow-x-hidden">
      <div className="fixed inset-0 -z-10 pointer-events-auto">
        <FloatingLines
          linesGradient={['#7c3aed', '#22d3ee', '#3b82f6']}
          backgroundColor="#030014"
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
        <MobileNavbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageWrapper>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </PageWrapper>
            } />
            <Route path="/about" element={
              <PageWrapper>
                <AboutPage />
              </PageWrapper>
            } />
            <Route path="/projects" element={
              <PageWrapper>
                <ProjectsPage />
              </PageWrapper>
            } />
            <Route path="/contact" element={
              <PageWrapper>
                <ContactPage />
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>

        <FloatingSocials />
      </div>
    </div>
  );
}

export default App;
