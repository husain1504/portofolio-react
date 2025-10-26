import React from 'react';
import { motion } from 'framer-motion';
// Pastikan file CSS ini ada di folder yang sama (src/components/)
import './Contact.css'; 

function Contact() {
  
  // Varian animasi (biarkan saja)
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        <motion.h2 
          className="contact-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Hubungi Saya
        </motion.h2>
        
        <motion.p 
          className="contact-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Punya pertanyaan atau tawaran kerja? Jangan ragu kirim pesan atau temukan saya di:
        </motion.p>

        {/* --- Bagian Sosial Media --- */}
        <motion.div 
          className="contact-social-links" // Class baru untuk styling
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4 }} // Muncul setelah subtitle
        >
          {/* Pastikan path ikon sudah benar menuju folder public */}
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" title="GitHub">
            <img src="b2c5e65384b1b0ea4cd351b6155e1b29.jpg" alt="GitHub Logo" className="social-icon" /> 
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <img src="4cea62557d3c8e345f51e9dd3e9347ad.jpg" alt="LinkedIn Logo" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/uchey_05?igsh=MXd0Nno0eWFsNGpqdQ==" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src="2a89fee1a635745cec680e88efa49bcc.jpg" alt="Instagram Logo" className="social-icon" />
          </a>
          <a href="https://www.tiktok.com/@project_156?_t=ZS-90rymmY68CF&_r=1" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src="a8373b784593f4eafe2e69b0f519a594.jpg" alt="Tiktok Logo" className="social-icon" />
          </a>
          <a href="https://lynk.id/ucey" target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src="04e7353923a3bdd8242276258bb54edd.jpg" alt="Lynk Logo" className="social-icon" />
          </a>
          {/* Tambahkan link media sosial lain jika perlu */}
        </motion.div>
        {/* --- Akhir Bagian Sosial Media --- */}

        <motion.form 
          className="contact-form"
          // action="URL_FORM_BACKEND" method="POST"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6 }} // Muncul setelah social links
        >
          <div className="form-group">
            <label htmlFor="name">Nama</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Pesan</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">
            Kirim Pesan
          </button>
        </motion.form>
        
      </div>
    </section>
  );
}

export default Contact;

