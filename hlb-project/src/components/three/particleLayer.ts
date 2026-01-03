import * as THREE from 'three';
import dot from '../../assets/three/dot.png';

const BASE_CFG = {
  count: 400,
  size: 0.05,

  rangeX: 25,
  rangeY: 14,
  rangeZ: 18,

  maxLife: 6000,
  fadeDuration: 300,

  swaySpeed: 0.010,

  speedX: { min: 0.02, max: 0.07 },
  speedY: { min: -0.004, max: 0.004 },
  swayFreq: { min: 0.0004, max: 0.0012 },

  saturation: { min: 0, max: 1 },
  baseColor: '#84845e'
};

function getLODMultiplier() {
  const w = window.innerWidth;
  if (w < 480) return 0.4;   // mobile
  if (w < 768) return 0.6;   // tablet
  return 1;                 // desktop
}

export function createParticleSystem(
  scene: THREE.Scene,
  textureLoader: THREE.TextureLoader
) {
  const LOD = getLODMultiplier();
  const COUNT = Math.floor(BASE_CFG.count * LOD);

  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 4);
  const lifespans = new Float32Array(COUNT);

  const baseColor = new THREE.Color(BASE_CFG.baseColor);
  const white = new THREE.Color(1, 1, 1);

  const speeds = Array.from({ length: COUNT }, () => {
    const sat = THREE.MathUtils.lerp(
      BASE_CFG.saturation.min,
      BASE_CFG.saturation.max,
      Math.random()
    );

    return {
      x: THREE.MathUtils.lerp(BASE_CFG.speedX.min, BASE_CFG.speedX.max, Math.random()),
      y: THREE.MathUtils.lerp(BASE_CFG.speedY.min, BASE_CFG.speedY.max, Math.random()),
      swayOffset: Math.random() * Math.PI * 2,
      swayFreq: THREE.MathUtils.lerp(
        BASE_CFG.swayFreq.min,
        BASE_CFG.swayFreq.max,
        Math.random()
      ),
      color: white.clone().lerp(baseColor, sat)
    };
  });

  for (let i = 0; i < COUNT; i++) {
    positions.set([
      (Math.random() - 0.5) * BASE_CFG.rangeX * 2, // x -25 ~ 25
      (Math.random() - 0.5) * BASE_CFG.rangeY * 2, // y -14 ~ 14
      (Math.random() - 0.5) * BASE_CFG.rangeZ // z -18 ~ 18
    ], i * 3);

    const c = speeds[i].color;
    colors.set([c.r, c.g, c.b, 1], i * 4);

    lifespans[i] = Math.random() * BASE_CFG.maxLife;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));

  const texture = textureLoader.load(dot);
  const material = new THREE.PointsMaterial({
    map: texture,
    transparent: true,
    size: BASE_CFG.size,
    vertexColors: true,
    depthTest: false
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  let lastFrame = 0;
  const FPS_LIMIT = 144;
  const FRAME_TIME = 1000 / FPS_LIMIT;

  function update(time: number) {
    if (!points.visible) return;
    if (time - lastFrame < FRAME_TIME) return;

    lastFrame = time;

    const pos = geometry.attributes.position.array as Float32Array;
    const col = geometry.attributes.color.array as Float32Array;

    for (let i = 0; i < COUNT; i++) {
      lifespans[i]--;

      const i3 = i * 3;
      const i4 = i * 4;

      let x = pos[i3];
      let y = pos[i3 + 1];

      if (lifespans[i] < 0 || x > BASE_CFG.rangeX) {
        x = -BASE_CFG.rangeX;
        y = (Math.random() - 0.5) * BASE_CFG.rangeY * 2;
        lifespans[i] = BASE_CFG.maxLife;
      }

      x += speeds[i].x;
      y += speeds[i].y +
        Math.sin(time * speeds[i].swayFreq + speeds[i].swayOffset) *
        BASE_CFG.swaySpeed;

      pos[i3] = x;
      pos[i3 + 1] = y;

      const age = BASE_CFG.maxLife - lifespans[i];
      col[i4 + 3] =
        age < BASE_CFG.fadeDuration
          ? age / BASE_CFG.fadeDuration
          : lifespans[i] < BASE_CFG.fadeDuration
          ? lifespans[i] / BASE_CFG.fadeDuration
          : 1;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
  }

  function setVisible(v: boolean) {
    points.visible = v;
  }

  function dispose() {
    scene.remove(points);
    geometry.dispose();
    material.dispose();
    texture.dispose();
  }

  return { update, setVisible, dispose };
}
