import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';
import './Certificates.css';

// Import technical certificates
import mlPythonCert from '../assets/certificates/machine-learning-using-python.png';
import introAiCert from '../assets/certificates/introduction-to-artificial-intelligence.png';
import pythonBeginnersCert from '../assets/certificates/python-for-beginners.png';

// Import sports certificates
import mandalKarateCert from '../assets/certificates/mandal-karate.jpg';
import districtKarateCert from '../assets/certificates/district-karate.jpg';
import schoolGamesCert from '../assets/certificates/school-games.jpg';
import districtSportsCert from '../assets/certificates/district-sports.jpg';

// Import internship certificates
import aiMlInternshipCert from '../assets/certificates/ai-ml-virtual-internship-new.png';
import dataAnalyticsInternshipCert from '../assets/certificates/data-analytics-power-bi-internship-new.png';

const certificatesData = [
  {
    id: 1,
    title: 'MACHINE LEARNING USING PYTHON',
    issuer: 'SIMPLILEARN / SKILLUP',
    date: '2026',
    category: 'TECHNICAL',
    certificate: mlPythonCert,
    fileName: 'Praveen_Kumar_Reddy_Machine_Learning_Using_Python.png'
  },
  {
    id: 2,
    title: 'INTRODUCTION TO ARTIFICIAL INTELLIGENCE',
    issuer: 'SIMPLILEARN / SKILLUP',
    date: '2026',
    category: 'TECHNICAL',
    certificate: introAiCert,
    fileName: 'Praveen_Kumar_Reddy_Introduction_to_Artificial_Intelligence.png'
  },
  {
    id: 3,
    title: 'PYTHON FOR BEGINNERS',
    issuer: 'SIMPLILEARN / SKILLUP',
    date: '2026',
    category: 'TECHNICAL',
    certificate: pythonBeginnersCert,
    fileName: 'Praveen_Kumar_Reddy_Python_for_Beginners.png'
  },
  {
    id: 8,
    title: 'AI-ML VIRTUAL INTERNSHIP',
    issuer: '10 WEEKS · AWS ACADEMY CURRICULUM',
    date: 'APRIL – JUNE 2025',
    category: 'INTERNSHIPS',
    certificate: aiMlInternshipCert,
    fileName: 'Praveen_Kumar_Reddy_AI_ML_Virtual_Internship.png'
  },
  {
    id: 9,
    title: 'DATA ANALYTICS WITH PYTHON & POWER BI VIRTUAL INTERNSHIP',
    issuer: '8 WEEKS · EDUSKILLS ACADEMY',
    date: 'APRIL – JUNE 2026',
    category: 'INTERNSHIPS',
    certificate: dataAnalyticsInternshipCert,
    fileName: 'Praveen_Kumar_Reddy_Data_Analytics_Power_BI.png'
  },
  {
    id: 4,
    title: 'MANDAL KARATE CHAMPIONSHIP',
    issuer: '1ST PRIZE (GOLD) · SENIOR KUMITE',
    date: '15 JAN 2023',
    category: 'SPORTS',
    certificate: mandalKarateCert,
    fileName: 'Praveen_Kumar_Reddy_Mandal_Karate_Championship.jpg'
  },
  {
    id: 5,
    title: 'DISTRICT KARATE CHAMPIONSHIP',
    issuer: '1ST PRIZE (GOLD) · SENIOR KUMITE',
    date: '25 JAN 2023',
    category: 'SPORTS',
    certificate: districtKarateCert,
    fileName: 'Praveen_Kumar_Reddy_District_Karate_Championship.jpg'
  },
  {
    id: 6,
    title: 'SCHOOL GAMES FEDERATION OF A.P.',
    issuer: 'SCHOOL GAMES KARATE',
    date: '2022–2023',
    category: 'SPORTS',
    certificate: schoolGamesCert,
    fileName: 'Praveen_Kumar_Reddy_School_Games_Federation.jpg'
  },
  {
    id: 7,
    title: 'DISTRICT LEVEL SPORTS MEET 2025–26',
    issuer: '3RD POSITION · 100 MTS',
    date: '3 MAR 2026',
    category: 'SPORTS',
    certificate: districtSportsCert,
    fileName: 'Praveen_Kumar_Reddy_District_Sports_Meet.jpg'
  }
];

const categories = ['ALL', 'TECHNICAL', 'INTERNSHIPS', 'SPORTS'];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredCertificates = certificatesData.filter(cert => {
    if (activeCategory === 'ALL') return true;
    return cert.category === activeCategory;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <section id="certificates" className="certificates-section">
      <div className="section-container">
        
        <motion.div 
          className="section-header-compact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">05 / CERTIFICATES</span>
          <h2 className="section-title uppercase-title">CERTIFICATES</h2>
          <p className="experience-intro">
            Professional learning and technical certifications developed through continuous learning.
          </p>
        </motion.div>

        <div className="cert-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`cert-filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map(cert => (
              <motion.div 
                key={cert.id} 
                className="cert-card"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <div className="cert-card-image-wrapper">
                  <div className="cert-card-image-overlay"></div>
                  <img src={cert.certificate} alt={cert.title} className="cert-card-image" />
                </div>
                
                <div className="cert-card-content">
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <div className="cert-card-meta">
                    <span>{cert.issuer}</span>
                    <span className="cert-meta-dot">•</span>
                    <span>{cert.date}</span>
                  </div>
                  
                  <a 
                    href={cert.certificate} 
                    download={cert.fileName}
                    className="btn-view-cert-small"
                  >
                    DOWNLOAD CERTIFICATE <Download size={14} className="btn-icon" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredCertificates.length === 0 && (
            <motion.div 
              className="cert-empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>No certificates available in this category yet.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
