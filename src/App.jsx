// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; // 1. Impor komponen Hero
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // 2. State dan logika untuk Dark Mode (yang kita pindah ke sini)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedMode === 'dark' || (savedMode !== 'light' && prefersDark);
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      {/* 3. Kirim state dark mode ke Navbar */}
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleDarkMode={toggleDarkMode} 
      />
      
      {/* 4. Tampilkan komponen Hero di bawah Navbar */}
      <Hero />

      {/* 5. Hapus teks "Selamat Datang" dari <main> */}
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;