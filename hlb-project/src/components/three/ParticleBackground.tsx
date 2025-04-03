import * as THREE from 'three';
import React, { useContext, useEffect, useRef } from 'react';
import circle from '../../assets/circle.png';
import { LoadingContext } from '../context/LoadingContext';
import styled from 'styled-components';

const ParticleBackgroundContainer = styled.div<{ $onContentLoad: boolean, $showParticles: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;
  opacity: ${props => props.$onContentLoad && props.$showParticles ? 1 : 0};

  z-index: 696969;
  pointer-events: none;

  transition: opacity 1.2s;
`;

const ParticleBackground: React.FC = () => {

  const { isContentLoading, showParticles } = useContext(LoadingContext);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current?.appendChild(renderer.domElement);

    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions: number[] = [];
    const swaySpeeds: number[] = [];
    const ySpeeds: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 30, // x
        Math.random() * 30 - 15,    // y 
        (Math.random() - 0.5) * 20  // z
      );      
      swaySpeeds.push((Math.random() - 0.5) * 0.08); 
      ySpeeds.push(Math.random() * 0.04 + 0.01); 
    }

    particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const textureLoader = new THREE.TextureLoader();
    const circleTexture = textureLoader.load(circle); 

    const particleMaterial = new THREE.PointsMaterial({
      map: circleTexture,       
      transparent: true,        
      blending: THREE.AdditiveBlending,
      depthTest: false,
      size: 2.5,                
      sizeAttenuation: false,    
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);

    camera.position.z = 5;

    let elapsedTime = 0;
    const animateParticles = () => {
      elapsedTime += 0.01;
    
      const positions = particles.attributes.position.array;
    
      for (let i = 0; i < particleCount; i++) {
        const xIndex = i * 3;
        const yIndex = i * 3 + 1;
    
        positions[xIndex] += Math.sin(elapsedTime + i * 0.1) * swaySpeeds[i];
        positions[yIndex] += ySpeeds[i];
  
        if (positions[yIndex] > 15) {
          positions[yIndex] = -15;
        }
      }
    
      particles.attributes.position.needsUpdate = true; 
    };
    
    const animate = () => {
      requestAnimationFrame(animate);
      animateParticles();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isContentLoading]);

  return (
    <ParticleBackgroundContainer ref={containerRef} $onContentLoad={!isContentLoading} $showParticles={showParticles} />
  );
};

export default ParticleBackground;
