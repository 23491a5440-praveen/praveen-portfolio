import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import './App.css';

// Placeholder Sections Component Template
const SectionPlaceholder = ({ id, index, title }) => (
  <section id={id} className="section">
    <div className="section-container">
      <motion.div 
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">{String(index).padStart(2, '0')} / {id.toUpperCase()}</span>
        <h2 className="section-title">{title}</h2>
      </motion.div>
      
      <motion.div 
        className="glass-panel"
        style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          {title} content will be populated in later steps.
        </p>
      </motion.div>
    </div>
  </section>
);

function App() {
  useEffect(() => {
    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add preloader removal logic if we add one later
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Real Sections */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      
      <footer className="footer">
        <div className="section-container">
          <p>© {new Date().getFullYear()} Dharmavarapu Praveen Kumar Reddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
