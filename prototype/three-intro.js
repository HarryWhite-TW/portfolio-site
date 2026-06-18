import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let camera, scene, renderer;
let rings = [];
let beamLight, violetLight;
let floor;
let pmremGenerator;

let mouseX = 0;
let mouseY = 0;
let targetX = 0;
let targetY = 0;

let isPaused = false;
let animationFrameId;

init();
animate();

function init() {
  const container = document.getElementById('canvas-container');

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x030512);
  scene.fog = new THREE.FogExp2(0x030512, 0.025);

  pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();
  scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

  camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100);
  camera.position.set(0, 1.2, 14);

  // Offset ring center to the right
  const ringXOffset = window.innerWidth > 768 ? 4.5 : 0;

  const coreGroup = new THREE.Group();
  coreGroup.position.x = ringXOffset;
  coreGroup.position.y = 1.0;
  scene.add(coreGroup);

  // Materials
  const darkMetal = new THREE.MeshStandardMaterial({
    color: 0x070914,
    roughness: 0.25,
    metalness: 0.9,
  });

  const glassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0.05,
    transmission: 0.95,
    ior: 1.5,
    thickness: 0.5,
  });

  const accentCyan = new THREE.MeshStandardMaterial({
    color: 0x38f8ff,
    emissive: 0x11aaaa,
    roughness: 0.2,
    metalness: 0.8,
  });

  const accentMagenta = new THREE.MeshStandardMaterial({
    color: 0xff00ff,
    emissive: 0x660066,
    roughness: 0.4,
    metalness: 0.5,
  });

  // Ring 1: Thick structural base
  const r1Geo = new THREE.TorusGeometry(3.2, 0.4, 32, 128, Math.PI * 1.7);
  const r1 = new THREE.Mesh(r1Geo, darkMetal);
  r1.rotation.z = Math.PI * 0.15;
  rings.push(r1);
  coreGroup.add(r1);

  // Ring 2: Inner glass ring
  const r2Geo = new THREE.TorusGeometry(2.5, 0.15, 16, 100);
  const r2 = new THREE.Mesh(r2Geo, glassMaterial);
  rings.push(r2);
  coreGroup.add(r2);

  // Ring 3: Segmented cyan accent
  const r3Geo = new THREE.TorusGeometry(2.8, 0.05, 16, 64, Math.PI * 0.8);
  const r3 = new THREE.Mesh(r3Geo, accentCyan);
  r3.position.z = 0.3;
  r3.rotation.z = -Math.PI * 0.2;
  rings.push(r3);
  coreGroup.add(r3);

  // Ring 4: Inner magenta detail
  const r4Geo = new THREE.TorusGeometry(2.1, 0.03, 16, 64, Math.PI * 0.4);
  const r4 = new THREE.Mesh(r4Geo, accentMagenta);
  r4.position.z = -0.2;
  r4.rotation.z = Math.PI * 0.5;
  rings.push(r4);
  coreGroup.add(r4);

  // Vertical Beam Core (Emissive)
  const beamGeo = new THREE.CylinderGeometry(0.08, 0.08, 25, 16);
  const beamMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });
  const beamCore = new THREE.Mesh(beamGeo, beamMat);
  coreGroup.add(beamCore);

  // Glow cylinder
  const glowGeo = new THREE.CylinderGeometry(0.3, 0.3, 25, 16);
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x38f8ff,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const beamGlow = new THREE.Mesh(glowGeo, glowMat);
  coreGroup.add(beamGlow);

  // Scene Lighting
  beamLight = new THREE.PointLight(0x38f8ff, 0, 20); // Cyan beam light
  beamLight.position.set(0, 0, 0);
  coreGroup.add(beamLight);

  violetLight = new THREE.SpotLight(0xa855f7, 0, 30, Math.PI/3, 0.5, 1.5); // Violet accent from bottom
  violetLight.position.set(0, -5, 2);
  violetLight.target.position.set(0, 0, 0);
  coreGroup.add(violetLight);
  coreGroup.add(violetLight.target);

  const ambientLight = new THREE.AmbientLight(0x050714, 2.0); // Very dark ambient
  scene.add(ambientLight);

  // Physically lit reflective floor
  const floorGeo = new THREE.PlaneGeometry(150, 150);
  const floorMat = new THREE.MeshPhysicalMaterial({
    color: 0x010205,
    metalness: 0.85,
    roughness: 0.15,
    clearcoat: 0.2,
    clearcoatRoughness: 0.1
  });
  floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.5;
  scene.add(floor);

  // Ignition Animation
  if (!prefersReducedMotion) {
    let startTime = Date.now();
    const igniteDuration = 2500;
    
    const ignite = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / igniteDuration, 1.0);
      
      // Easing function (easeOutCubic)
      const ease = 1 - Math.pow(1 - progress, 3);
      
      beamLight.intensity = ease * 250;
      violetLight.intensity = ease * 150;
      
      if (progress < 1.0) {
        requestAnimationFrame(ignite);
      }
    };
    
    // Slight delay before ignition
    setTimeout(ignite, 400);
  } else {
    beamLight.intensity = 250;
    violetLight.intensity = 150;
  }

  window.addEventListener('resize', onWindowResize);
  document.addEventListener('mousemove', onDocumentMouseMove);
  document.addEventListener('visibilitychange', onVisibilityChange);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Update offset on resize
  const group = scene.children.find(c => c.type === 'Group');
  if (group) {
    group.position.x = window.innerWidth > 768 ? 4.5 : 0;
  }
}

function onDocumentMouseMove(event) {
  if (prefersReducedMotion) return;
  mouseX = (event.clientX - window.innerWidth / 2);
  mouseY = (event.clientY - window.innerHeight / 2);
}

function onVisibilityChange() {
  isPaused = document.hidden;
}

function animate() {
  animationFrameId = requestAnimationFrame(animate);
  if (!isPaused) {
    render();
  }
}

function render() {
  const time = Date.now() * 0.001;

  if (!prefersReducedMotion) {
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    // Smooth pointer parallax for camera
    camera.position.x += (targetX * 2.5 - camera.position.x) * 0.05;
    camera.position.y += (-targetY * 2.5 + 1.2 - camera.position.y) * 0.05;
    
    const group = scene.children.find(c => c.type === 'Group');
    camera.lookAt(new THREE.Vector3(group ? group.position.x : 0, 1.0, 0));

    // Restrained movement for rings
    rings[0].rotation.z += 0.0005;
    rings[1].rotation.x = Math.sin(time * 0.2) * 0.05;
    rings[1].rotation.y = Math.cos(time * 0.15) * 0.05;
    rings[2].rotation.z -= 0.001;
    rings[3].rotation.z += 0.0015;
  } else {
    const group = scene.children.find(c => c.type === 'Group');
    camera.lookAt(new THREE.Vector3(group ? group.position.x : 0, 1.0, 0));
  }

  renderer.render(scene, camera);
}

// Cleanup function for potential unmounting
export function dispose() {
  window.removeEventListener('resize', onWindowResize);
  document.removeEventListener('mousemove', onDocumentMouseMove);
  document.removeEventListener('visibilitychange', onVisibilityChange);
  cancelAnimationFrame(animationFrameId);
  
  scene.traverse(object => {
    if (object.geometry) object.geometry.dispose();
    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach(m => m.dispose());
      } else {
        object.material.dispose();
      }
    }
  });
  
  renderer.dispose();
  pmremGenerator.dispose();
}
