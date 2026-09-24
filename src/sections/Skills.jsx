import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiPython, 
  SiHtml5, 
  SiPandas, 
  SiNumpy, 
  SiTensorflow, 
  SiKeras, 
  SiReact, 
  SiVite, 
  SiGit, 
  SiGithub 
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { BrainCircuit, Network, Cpu, MessageSquareText, Code2, Boxes, FileSpreadsheet, BarChart3 } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    id: '01',
    title: 'PROGRAMMING',
    skills: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'HTML', icon: <SiHtml5 /> }
    ]
  },
  {
    id: '02',
    title: 'DATA & ANALYTICS',
    skills: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Excel', icon: <FileSpreadsheet /> },
      { name: 'Power BI', icon: <BarChart3 /> }
    ]
  },
  {
    id: '03',
    title: 'AI & MACHINE LEARNING',
    skills: [
      { name: 'Machine Learning', icon: <BrainCircuit /> },
      { name: 'Deep Learning', icon: <Network /> },
      { name: 'Artificial Intelligence', icon: <Cpu /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Keras', icon: <SiKeras /> },
      { name: 'NLP', icon: <MessageSquareText /> }
    ]
  },
  {
    id: '04',
    title: 'SOFTWARE DEVELOPMENT',
    skills: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Vite', icon: <SiVite /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> }
    ]
  },
  {
    id: '05',
    title: 'PROBLEM SOLVING',
    skills: [
      { name: 'Data Structures & Algorithms', icon: <Boxes /> },
      { name: 'DSA with Python', icon: <Code2 /> }
    ]
  }
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="skills" className="skills-section">
      {/* Background ambient lighting */}
      <div className="skills-ambient-glow"></div>
      
      <div className="section-container">
        <motion.div 
          className="skills-layout"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column: Sticky Header */}
          <div className="skills-header-col">
            <motion.div variants={itemVariants} className="skills-header-sticky">
              <span className="section-label">02 / SKILLS</span>
              <h2 className="section-title uppercase-title">
                TECHNICAL<br />
                <span className="text-highlight">EXPERTISE</span>
              </h2>
              <p className="skills-intro">
                Technologies and tools I use to build practical AI, data, and software solutions.
              </p>
            </motion.div>
          </div>
          
          {/* Right Column: Skill Groups */}
          <div className="skills-content-col">
            {skillCategories.map((category) => (
              <motion.div 
                key={category.id} 
                className="skill-category"
                variants={itemVariants}
              >
                <div className="category-header">
                  <span className="category-id">{category.id}</span>
                  <h3 className="category-title">{category.title}</h3>
                </div>
                
                <div className="skills-grid">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-icon-wrapper">
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
