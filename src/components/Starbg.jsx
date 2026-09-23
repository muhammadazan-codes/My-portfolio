import { useEffect, useRef } from "react";
import * as THREE from "three";

const StarBg = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    mountRef.current.appendChild(renderer.domElement);

    // Stars
    const starCount = 3000;

    const positions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] =
        (Math.random() - 0.5) * 100;

      positions[i * 3 + 1] =
        (Math.random() - 0.5) * 100;

      positions[i * 3 + 2] =
        -Math.random() * 100;
    }

    // Geometry
    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    // Material
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
    });

    // Stars
    const stars = new THREE.Points(
      geometry,
      material
    );

    scene.add(stars);

    // Animation
    let animationId;

    const animate = () => {
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;

      renderer.render(scene, camera);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Resize
    const handleResize = () => {
      camera.aspect =
        window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(
        window.innerWidth,
        window.innerHeight
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);

      window.removeEventListener(
        "resize",
        handleResize
      );

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (mountRef.current) {
        mountRef.current.removeChild(
          renderer.domElement
        );
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default StarBg;