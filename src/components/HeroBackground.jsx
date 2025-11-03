import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) positions[i] = (Math.random() - 0.5) * 2000;
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 1.1, transparent: true, opacity: 0.85 });
    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    const gradient = new THREE.Mesh(
      new THREE.PlaneGeometry(4000, 2000),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color(0x0d0d0d),
        transparent: true,
        opacity: 0.15,
      })
    );
    gradient.position.z = -900;
    scene.add(gradient);

    camera.position.z = 900;
    let mouseX = 0, mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - window.innerWidth / 2) * 0.002;
      mouseY = (e.clientY - window.innerHeight / 2) * 0.002;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0006;
      stars.rotation.x += 0.0003;
      scene.rotation.x = mouseY * 0.3;
      scene.rotation.y = mouseX * 0.3;
      renderer.render(scene, camera);
    };
    animate();

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", resize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", inset: 0, zIndex: 0 }} />;
}
