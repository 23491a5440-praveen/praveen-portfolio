import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import resumePdf from '../assets/Praveen-Kumar-Reddy-Resume.pdf';
import './About.css';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-bg-grid"></div>
      
      <div className="section-container">
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="section-header-compact">
            <span className="section-label">01 / ABOUT</span>
            <h2 className="section-title uppercase-title">ABOUT ME</h2>
          </motion.div>
          
          <motion.p variants={itemVariants} className="about-description">
            I am a 4th-year B.Tech student specializing in Artificial Intelligence & Data Science, with a strong interest in Python, AI/ML, Data Analytics, Web Development, and Software Development. I enjoy turning ideas into practical technology solutions and building projects that solve real-world problems.
          </motion.p>
          
          <motion.div variants={itemVariants} className="focus-area">
            <div className="focus-tags">
              <span className="focus-tag">PYTHON</span>
              <span className="focus-tag">AI / MACHINE LEARNING</span>
              <span className="focus-tag">DATA ANALYTICS</span>
              <span className="focus-tag">WEB DEVELOPMENT</span>
              <span className="focus-tag">SOFTWARE DEVELOPMENT</span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="profile-links-row">
            <a 
              href="https://www.linkedin.com/in/praveen-kumar-reddy-dharmavarapu-168792324/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              <FaLinkedin className="profile-icon" />
              <span className="profile-name">LINKEDIN</span>
            </a>
            
            <a 
              href="https://github.com/23491a5440-praveen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              <FaGithub className="profile-icon" />
              <span className="profile-name">GITHUB</span>
            </a>
            
            <a 
              href="https://leetcode.com/u/praveen9010/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="profile-link"
            >
              <SiLeetcode className="profile-icon" />
              <span className="profile-name">LEETCODE</span>
            </a>
            
            <a 
              href={resumePdf} 
              download="Praveen-Kumar-Reddy-Resume.pdf"
              className="profile-link"
            >
              <span className="profile-name" style={{ color: 'var(--accent-cyan)' }}>DOWNLOAD RESUME</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
