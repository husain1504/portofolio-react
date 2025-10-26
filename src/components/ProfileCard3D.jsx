import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Komponen 'internal' untuk card 3D-nya
function CardMesh({ imageUrl }) {
  // Ref untuk mengakses mesh 3D secara langsung
  const meshRef = useRef();

  // Memuat gambar Anda sebagai 'texture'
  const texture = useTexture(imageUrl);

  // useFrame dipanggil di setiap frame (seperti game loop)
  useFrame(({ clock, mouse }) => {
    // 1. Animasi floating (atas-bawah)
    meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.8) * 0.15;
    
    // 2. Animasi interaktif (mengikuti mouse)
    // 'lerp' adalah untuk gerakan yang lebih mulus
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y, 
      (mouse.x * Math.PI) / 10, // Seberapa miring
      0.05 // Seberapa cepat
    );
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x, 
      (-mouse.y * Math.PI) / 10,
      0.05
    );
  });

  return (
    // Ini adalah objek 3D-nya
    <mesh ref={meshRef}>
      {/* Bentuknya: bidang datar. Ukuran 3.5 x 3.5 (sesuaikan jika perlu) */}
      <planeGeometry args={[3.5, 3.5]} />
      
      {/* Bahannya: pakai gambar/texture yang sudah kita muat */}
      {/* 'transparent: true' penting jika gambar Anda PNG bulat */}
      <meshStandardMaterial map={texture} transparent={true} />
    </mesh>
  );
}

// Komponen utama yang akan kita ekspor
function ProfileCard3D({ imageUrl }) {
  return (
    // 'Canvas' adalah "panggung" 3D kita
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      {/* 1. Cahaya ambient (agar tidak gelap total) */}
      <ambientLight intensity={0.7} />
      
      {/* 2. Cahaya utama (seperti matahari) */}
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.5} 
        castShadow 
      />
      
      {/* Masukkan objek 3D kita ke panggung */}
      <CardMesh imageUrl={imageUrl} />
    </Canvas>
  );
}

export default ProfileCard3D;