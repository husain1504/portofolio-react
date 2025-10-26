import React from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-scroll'; // Komponen Link dari react-scroll sudah diganti ke <a>
import './Hero.css'; // Pastikan file Hero.css ada di folder yang sama (src/components/)

// Impor komponen 3D Anda
import ProfileCard3D from './ProfileCard3D'; // Pastikan file ProfileCard3D.jsx ada di folder yang sama (src/components/)

function Hero() {
  return (
    <motion.section
      className="hero-section"
      id="home"
      // Animasi fade-in untuk seluruh section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <motion.h1
            className="hero-title"
            // Tambahkan data-text untuk efek glow dari CSS
            data-text="Halo, saya [Nama Anda]"
            // Animasi slide-up yang lebih halus
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Halo, saya Muhammad Said Al-Husain
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            // Animasi slide-up yang lebih halus
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }} // Delay sedikit lebih lama
          >
            Saya seorang Web Developer dengan fokus pada Front-End & Back-End.
            Membangun aplikasi web yang responsif dan user-friendly.
            Saya akan selalu update portfolio saya dengan tren terbaru dalam pengembangan web.
          </motion.p>

          <motion.div
            className="hero-buttons"
            // Animasi slide-up yang lebih halus
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }} // Delay sedikit lebih lama
          >
            {/* Tombol "Unduh CV" */}
            <a
              href="/my_cv.pdf" // GANTI DENGAN PATH CV ANDA DI FOLDER PUBLIC
              download="Nama_Anda_CV.pdf"
              className="btn btn-primary"
            >
              Unduh CV
            </a>

            {/* Tombol "Sertifikat" (link ke GDrive, menggunakan <a>) */}
            <a
              href="https://drive.google.com/drive/folders/1dwM_wGjygFPAIaYNrpdthBGvSPRMtPcq?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Sertifikat
            </a>
          </motion.div>
        </div>

        {/* Gambar 3D */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9, type: "spring", stiffness: 100 }}
        >
          {/* Panggil komponen 3D */}
          <ProfileCard3D imageUrl="/husain.jpg" />
          {/* Pastikan file 'profile.png' ada di folder 'public' */}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Hero;

