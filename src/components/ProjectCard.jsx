import React from 'react';
import { motion } from 'framer-motion';
import './ProjectCard.css';

// Komponen ini menerima 'props' (data) dari Projects.jsx
function ProjectCard({ title, description, imageUrl, tags, projectUrl }) {
  
  // Varian animasi untuk kartu
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    // 'whileInView' untuk animasi saat di-scroll
    <motion.div 
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
        <div className="card-image-container">
          <img src={imageUrl} alt={title} className="card-image" />
        </div>
        
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          
          <ul className="card-tags">
            {tags.map((tag) => (
              <li key={tag} className="card-tag">{tag}</li>
            ))}
          </ul>
        </div>
      </a>
    </motion.div>
  );
}

export default ProjectCard;