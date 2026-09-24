import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'dharmavarapupraveenkumarreddy@gmaile.com',
      link: 'mailto:dharmavarapupraveenkumarreddy@gmaile.com',
      isClickable: true
    },
    {
      icon: <Phone size={24} />,
      title: 'Mobile',
      value: '+91 9010919165',
      link: 'tel:+919010919165',
      isClickable: true
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Veluru Village, Maripudi Mandal, Prakasam District, Andhra Pradesh, India',
      link: null,
      isClickable: false
    }
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">07 / CONTACT</span>
          <h2 className="section-title">CONTACT DETAILS</h2>
        </motion.div>

        <div className="contact-grid">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={info.title}
              className="contact-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              <div className="contact-icon-wrapper">
                {info.icon}
              </div>
              <div className="contact-details">
                <h3 className="contact-card-title">{info.title}</h3>
                {info.isClickable ? (
                  <a href={info.link} className="contact-value-link">
                    <span>{info.value}</span>
                    <ArrowUpRight size={14} className="link-arrow" />
                  </a>
                ) : (
                  <p className="contact-value">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
