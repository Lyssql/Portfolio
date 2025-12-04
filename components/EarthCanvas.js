'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import styles from './EarthCanvas.module.css';
import { expeditions } from '@/data/expeditions';

// Convertit lat/lon → coordonnées 3D
function latLonToVector3(lat, lon, radius = 1) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

//  Sous-composant rendu DANS le Canvas → Hooks autorisés
function EarthModel({ onHover, onSelect, hoveredSlug }) {
  const [colorMap, bumpMap] = useTexture([
    '/textures/earth-map.jpg',
    '/textures/earth-bump.jpg'
  ]);

  return (
    <>
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial
          map={colorMap}
          bumpMap={bumpMap}
          bumpScale={0.2}
        />
      </Sphere>

      {/* Tracés rouges */}
      {expeditions.map(expedition => {
        const points = expedition.coordinates.map(([lat, lon]) =>
          latLonToVector3(lat, lon, 1.0005)
        );

        const isHovered = hoveredSlug === expedition.slug;

        return (
          <Line
            key={expedition.slug}
            points={points}
            color={isHovered ? "#ff7b7b" : "#ff3333"}
            lineWidth={isHovered ? 3 : 1.6}
            onPointerOver={() => onHover(expedition)}
            onPointerOut={() => onHover(null)}
            onClick={() => onSelect(expedition)}
          />
        );
      })}

      <OrbitControls enableZoom />
    </>
  );
}

export default function EarthCanvas() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  const label = hovered
    ? `Expédition : ${hovered.titre}`
    : selected
    ? `Expédition sélectionnée : ${selected.titre}`
    : "Survole un tracé pour afficher son nom.";

  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [4, 1, 1] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />

        {/* Le modèle 3D est dans un composant interne */}
        <EarthModel
          hoveredSlug={hovered?.slug}
          onHover={setHovered}
          onSelect={setSelected}
        />
      </Canvas>

      <div className={styles.tooltip}>{label}</div>
    </div>
  );
}
