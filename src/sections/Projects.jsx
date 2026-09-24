import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import './Projects.css';
import neuroscanImg from '../assets/neuroscan-ai.png';
import ambulanceImg from '../assets/smart-ambulance.png';
import weatherImg from '../assets/weather-ai.png';
import solarImg from '../assets/solar-cleaning-robot.png';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const otherProjects = [
    {
      id: '02',
      title: 'SMART AMBULANCE MANAGEMENT SYSTEM',
      desc: 'A software solution designed to improve ambulance coordination and emergency-response management through technology-driven workflows.',
      tags: [],
      image: ambulanceImg
    },
    {
      id: '03',
      title: 'WEATHER FORECASTING AI',
      desc: 'An AI-based forecasting project that applies machine-learning techniques to analyze weather data and predict weather conditions.',
      tags: [],
      image: weatherImg
    },
    {
      id: '04',
      title: 'SOLAR-BASED PLATFORM CLEANING ROBOT',
      desc: 'A solar-powered robotic solution designed to automate platform cleaning and reduce manual effort.',
      tags: [],
      image: solarImg
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        
        {/* Featured Project */}
        <motion.div 
          className="featured-project"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="featured-image-col">
            <motion.div variants={itemVariants} className="featured-image-wrapper">
              <div className="featured-image-overlay"></div>
              <img src={neuroscanImg} alt="NeuroScan AI Brain Tumor Classification" className="featured-image" />
            </motion.div>
          </div>
          
          <div className="featured-content-col">
            <motion.div variants={itemVariants} className="project-label-wrapper">
              <span className="project-label">01 / FEATURED PROJECT</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="featured-title uppercase-title">
              NEUROSCAN AI
            </motion.h2>
            
            <motion.h3 variants={itemVariants} className="featured-subtitle">
              MULTI-MODAL BRAIN TUMOR CLASSIFICATION
            </motion.h3>
            
            <motion.p variants={itemVariants} className="featured-desc">
              An AI-powered web application that analyzes CT and MRI brain images and uses multi-modal deep learning to classify cases as Healthy or Tumor.
            </motion.p>
            
            <motion.div variants={itemVariants} className="featured-tech-stack">
              <span className="tech-stack-label">TECHNOLOGY STACK</span>
              <div className="featured-tags">
                <span className="featured-tag">React</span>
                <span className="featured-tag">Vite</span>
                <span className="featured-tag">FastAPI</span>
                <span className="featured-tag">Python</span>
                <span className="featured-tag">PyTorch</span>
                <span className="featured-tag">EfficientNet-B0</span>
                <span className="featured-tag">Late Fusion</span>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="featured-actions">
              <a 
                href="https://multimodelbraintumorclassification.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-live-project"
              >
                VIEW LIVE PROJECT <ArrowUpRight size={18} className="btn-icon" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div 
          className="other-projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {otherProjects.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants} className="project-card">
              <div className="project-card-header">
                <span className="project-number">{project.id}</span>
                <div className="project-visual-wrapper">
                  <div className="project-visual-overlay"></div>
                  <img src={project.image} alt={project.title} className="project-visual-image" />
                </div>
              </div>
              
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-desc">{project.desc}</p>
              
              {project.tags && project.tags.length > 0 && (
                <div className="project-card-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-card-tag">{tag}</span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
