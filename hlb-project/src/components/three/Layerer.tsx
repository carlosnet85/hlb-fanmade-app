import * as THREE from 'three';
import React, { useContext, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { createParticleSystem } from './particleLayer';
import { UIContext } from '../context/UIContext';

const Container = styled.div<{ $visible: boolean }>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  opacity: ${p => (p.$visible ? 1 : 0)};
  transition: opacity 1.5s ease;
`;

const Layerer: React.FC = () => {
  const { isContentLoading, showParticles } = useContext(UIContext);

  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<ReturnType<typeof createParticleSystem> | null>(null);

  useEffect(() => {
    if (!containerRef.current || isContentLoading) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'low-power'
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', onResize);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }

      particlesRef.current?.dispose();
      particlesRef.current = null;

      renderer.dispose();
      scene.clear();

      window.removeEventListener('resize', onResize);
      containerRef.current!.innerHTML = '';
    };
  }, [isContentLoading]);

  useEffect(() => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current || isContentLoading) return;

      if (!showParticles) {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
        particlesRef.current?.dispose();
        particlesRef.current = null;
        return;
      }

      const loader = new THREE.TextureLoader();
      const particles = createParticleSystem(sceneRef.current, loader);
      particlesRef.current = particles;

      const animate = () => {
        rafRef.current = requestAnimationFrame(animate);
        const t = performance.now();
        particles.update(t);
        rendererRef.current!.render(
          sceneRef.current!,
          cameraRef.current!
        );
      };

      animate();

      return () => {
        if (rafRef.current) {
          cancelAnimationFrame(rafRef.current);
        }
        particlesRef.current?.dispose();
      };
    }, [showParticles, isContentLoading]);

  return (
    <Container
      ref={containerRef}
      $visible={!isContentLoading && showParticles}
    />
  );
};

export default Layerer;
