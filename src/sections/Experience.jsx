import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './Experience.css';

// Import certificates
import aiMlCert from '../assets/ai-ml-internship-2025.png';
import dataAnalyticsCert from '../assets/data-analytics-power-bi-internship-2026.png';

const experiences = [
  {
    id: 1,
    title: 'AI-ML VIRTUAL INTERNSHIP',
    period: 'APRIL – JUNE 2025 · 10 WEEKS',
    organization: 'AWS ACADEMY CURRICULUM',
    certificate: aiMlCert,
    fileName: 'ai-ml-internship-2025.png'
  },
  {
    id: 2,
    title: 'DATA ANALYTICS WITH PYTHON & POWER BI VIRTUAL INTERNSHIP',
    period: 'APRIL – JUNE 2026 · 8 WEEKS',
    organization: 'EDUSKILLS ACADEMY',
    certificate: dataAnalyticsCert,
    fileName: 'data-analytics-power-bi-internship-2026.png'
  }
];

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        
        <motion.div 
          className="section-header-compact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">04 / EXPERIENCE</span>
          <h2 className="section-title uppercase-title">INTERNSHIP EXPERIENCE</h2>
          <p className="experience-intro">
            Practical learning experience through AI, machine learning, data analytics, and real-world technology projects.
          </p>
        </motion.div>

        <motion.div 
          className="timeline-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="timeline-line"></div>
          
          {experiences.map((exp) => (
            <motion.div key={exp.id} className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot"></div>
              
              <div className="timeline-content">
                <h3 className="timeline-title">{exp.title}</h3>
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <div className="timeline-org">{exp.organization}</div>
                
                <a 
                  href={exp.certificate} 
                  download={exp.fileName}
                  className="btn-view-cert" 
                >
                  DOWNLOAD CERTIFICATE <Download size={16} className="btn-icon" />
                </a>
              </div>
            </motion.div>
          ))}
          
        </motion.div>
      </div>
    </section>
  );
}
