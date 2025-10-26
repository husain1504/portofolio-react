import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard'; // Impor komponen card
import './Projects.css';

// --- DATABASE MINI PROYEK ANDA ---
// Ganti ini dengan data proyek Anda
const projectsData = [
  {
    id: 1,
    title: "Sistem Kasir Premium",
    description: "Website sistemkasir dan dashboard admin. Dibuat dengan laravel dan templating engine blade.",
    imageUrl: "proyek/kasir.png", // Ganti dengan path gambar Anda
    tags: ["Laravel", "Mysql", "Tailwind", "breeze"],
    projectUrl: "https://dodgerblue-manatee-959330.hostingersite.com", // Ganti dengan link proyek
  },
  {
    id: 2,
    title: "Aplikasi Absensi Karyawan berbasis Barcode",
    description: "Aplikasi absensi yang memanfaatkan barcode untuk mencatat kehadiran karyawan secara efisien.",
    imageUrl: "proyek/absensi.png", // Ganti dengan path gambar Anda
    tags: ["Laravel", "Mysql", "Tailwind", "breeze"],
    projectUrl: "https://github.com", // Ganti dengan link proyek
  },
  {
    id: 3,
    title: "Website jasa pembuatan website dan jasa pengerjaan tugas",
    description: "Portofolio pribadi yang sedang Anda lihat. Dibangun dengan React.",
    imageUrl: "proyek/jasa.png", // Ganti dengan path gambar Anda
    tags: ["React", "Vite", "Tailwind"],
    projectUrl: "https://lime-bee-306651.hostingersite.com/?fbclid=PAb21jcANp8dJleHRuA2FlbQIxMQABpyy2XopeStyt6-yGbKBcNRhL_KIDVj0t4r3JFEO6vjWSejCbn6XrpiWeuGEM_aem_zHa547mZiuMLRnLRNsEbzA", // Link ke halaman ini
  },
  {
    id: 4,
    title: "Website Sistem Informasi Dusun",
    description: "Website yang menjadi informasi yang digunakan didusun kiyran, Jetis, Bantul, Yogyakrta.",
    imageUrl: "proyek/sid_kiyaran.png", // Ganti dengan path gambar Anda
    tags: ["Laravel", "Mysql", "Tailwind", "breeze"],
    projectUrl: "https://padukuhankiyaran.my.id/", // Link ke halaman ini
  },
  {
    id: 5,
    title: "Website Sistem Informasi Dusun",
    description: "Website yang menjadi informasi yang digunakan didusun Lopati, Serandakan, Bantul, Yogyakrta.",
    imageUrl: "proyek/sid_lopati.png", // Ganti dengan path gambar Anda
    tags: ["Wordpress", "Elementor"],
    projectUrl: "https://lopati.my.id/", // Link ke halaman ini
  },
  {
    id: 5,
    title: "Desain landing page",
    description: "Pembuatan desain landing page penjualan tanaman bonsai.",
    imageUrl: "proyek/page.png", // Ganti dengan path gambar Anda
    tags: ["figma"],
    projectUrl: "https://www.figma.com/design/2QofWNJ3d0KSpMaqoBIrMn/Interactive-Portfolio-Website--Figma-UI-Design-Tutorial-for-Beginners-%7C-Step-by-Step-Guide--Community-?node-id=0-1&t=cKhz8ESgr1h4hqX5-1", // Link ke halaman ini
  },
];
// ----------------------------------

function Projects() {
  return (
    // 'id="projects"' penting untuk link Navbar
    <section className="projects-section" id="projects">
      <div className="container">
        
        <motion.h2 
          className="projects-title"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          Proyek Saya
        </motion.h2>

        <div className="project-grid">
          {/* Looping data proyek dan render sebagai ProjectCard */}
          {projectsData.map((project) => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              projectUrl={project.projectUrl}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Projects;