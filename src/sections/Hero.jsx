import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code2, User, Mail, ArrowRight } from 'lucide-react';
import profilePhoto from '../assets/profile-photo.jpg';
import resumePdf from '../assets/Praveen-Kumar-Reddy-Resume.pdf';
import './Hero.css';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Background Layers */}
      <div className="hero-bg-layer hero-bg-base"></div>
      <div className="hero-bg-layer hero-bg-gradient"></div>
      <div className="hero-bg-layer hero-bg-grid"></div>
      
      <div className="hero-container section-container">
        {/* Left Column: Content */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="status-badge"
          >
            <span className="status-dot"></span>
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>
          
          <div className="hero-title-container">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="title-line">DHARMAVARAPU PRAVEEN</span>
              <span className="title-line">KUMAR REDDY</span>
            </motion.h1>
          </div>
          
          <motion.div 
            className="hero-education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="edu-tag">B.Tech</span>
            <span className="edu-desc">Artificial Intelligence & Data Science</span>
            <span className="edu-year">4th Year</span>
          </motion.div>
          
          <motion.p 
            className="hero-intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            4th-year B.Tech student focused on building practical solutions with AI, machine learning, data and software.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a 
              href={resumePdf} 
              download="Praveen-Kumar-Reddy-Resume.pdf" 
              className="btn-primary-new"
            >
              <span>DOWNLOAD RESUME</span>
              <ArrowRight size={16} className="btn-arrow" />
            </a>
          </motion.div>
        </div>
        
        {/* Right Column: Portrait */}
        <div className="hero-portrait-wrapper">
          <motion.div 
            className="portrait-container-outer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              rotateX: mousePosition.y * -5,
              rotateY: mousePosition.x * 5,
            }}
          >
            {/* Ambient glow behind portrait */}
            <div className="portrait-ambient-glow"></div>
            
            {/* Technical grid behind portrait */}
            <div className="portrait-tech-grid">
              <span className="grid-label">01</span>
              <span className="grid-label">AI / ML</span>
              <span className="grid-label">DATA</span>
              <span className="grid-label">DEV</span>
            </div>
            
            {/* The portrait frame itself */}
            <div className="portrait-frame">
              <img src={profilePhoto} alt="Dharmavarapu Praveen Kumar Reddy" className="portrait-image" />
              
              {/* Glass reflection overlay */}
              <div className="portrait-glass-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator-new"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <span className="scroll-text-new">SCROLL TO EXPLORE</span>
        <div className="scroll-line-container">
          <motion.div 
            className="scroll-line-fill"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
