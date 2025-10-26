import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const skills = [
  { name: 'JavaScript', iconUrl: '/icons/js.svg' },
  { name: 'React', iconUrl: '/icons/react.svg' },
  { name: 'Laravel', iconUrl: '/icons/Laravel.svg.png' },
  { name: 'PHP', iconUrl: '/icons/php.svg' },
  { name: 'Node.js', iconUrl: '/icons/node-js.svg' },
  { name: 'Tailwind CSS', iconUrl: '/icons/tailwind.png' },
  { name: 'MySQL', iconUrl: '/icons/mysql-logo.svg' },
  { name: 'HTML5', iconUrl: '/icons/html-5-svgrepo-com.svg' },
  { name: 'CSS3', iconUrl: '/icons/css-3.svg' },
  { name: 'Figma', iconUrl: '/icons/figma.svg' },
  { name: 'Git', iconUrl: '/icons/git.svg' },
  { name: 'Wordpress', iconUrl: '/icons/wordpress.svg' },
  { name: 'Canva', iconUrl: '/icons/canva.jpg' },
  { name: 'Python', iconUrl: '/icons/python.svg' },
];

function About() {
  // Varian animasi
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="about-section" id="about">
      <div className="container"> 
        
        <motion.h2 
          className="about-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Tentang Saya
        </motion.h2>

        <div className="about-content-wrapper">
          
          {/* --- BLOK DESKRIPSI SUDAH DIHAPUS DARI SINI --- */}

          {/* Sisi Kanan: Daftar Skill */}
          <div className="about-skills">
            <h3 className="skills-title">Keahlian Saya</h3>
            
            <div className="skills-list-container">
              
              <motion.ul 
                className="skills-marquee"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Render daftarnya DUA KALI */}
                {[...skills, ...skills].map((skill, index) => (
                  <motion.li 
                    key={`${skill.name}-${index}`} 
                    className="skill-item"
                    variants={itemVariants}
                    title={skill.name} 
                  >
                    <img 
                      src={skill.iconUrl} 
                      alt={skill.name} 
                      className="skill-icon"
                    />
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;