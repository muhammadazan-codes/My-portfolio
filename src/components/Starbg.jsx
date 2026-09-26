import { useEffect, useRef } from "react";
import * as THREE from "three";

const StarBg = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // -------------------------
    // Scene
    // -------------------------
    const scene = new THREE.Scene();

    // -------------------------
    // Camera
    // -------------------------
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );

    camera.position.z = 5;

    // -------------------------
    // Renderer
    // -------------------------
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(
      window.innerWidth,
      window.innerHeight
    );

    renderer.setPixelRatio(
      Math.min(window.devicePixelRatio, 2)
    );

    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";

    mount.appendChild(renderer.domElement);

    // -------------------------
    // Stars
    // -------------------------
    const starCount = 2500;

    const positions = new Float32Array(
      starCount * 3
    );

    // Original X/Y positions
    // These help stars return to their
    // normal position after cursor moves away
    const originalX = new Float32Array(starCount);
    const originalY = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {

      const x =
        (Math.random() - 0.5) * 100;

      const y =
        (Math.random() - 0.5) * 100;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;

      originalX[i] = x;
      originalY[i] = y;

      positions[i * 3 + 2] =
        -10 - Math.random() * 110;
    }

    // -------------------------
    // Geometry
    // -------------------------
    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(
        positions,
        3
      )
    );

    // -------------------------
    // Material
    // -------------------------
    const material = new THREE.PointsMaterial({
      color: 0xffffff,

      // Small stars
      size: 1,

      // Keep stars same size
      sizeAttenuation: false,
    });

    // -------------------------
    // Star Object
    // -------------------------
    const stars = new THREE.Points(
      geometry,
      material
    );

    scene.add(stars);

    // -------------------------
    // Cursor
    // -------------------------
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {

      // Convert cursor position
      // into -1 to +1 range
      mouseX =
        (event.clientX / window.innerWidth) * 2 - 1;

      mouseY =
        -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Only listen for mouse movement
    // on devices that actually have a mouse
    const hasMouse =
      window.matchMedia("(pointer: fine)").matches;

    if (hasMouse) {
      window.addEventListener(
        "mousemove",
        handleMouseMove
      );
    }

    // -------------------------
    // Animation
    // -------------------------
    let animationId;

    const animate = () => {

      const positionArray =
        geometry.attributes.position.array;

      for (let i = 0; i < starCount; i++) {

        // -------------------------
        // Forward movement
        // -------------------------
        positionArray[i * 3 + 2] += 0.025;

        // -------------------------
        // Cursor interaction
        // -------------------------
        if (hasMouse) {

          const z =
            positionArray[i * 3 + 2];

          // Distance from camera
          const distance =
            camera.position.z - z;

          // Convert cursor position
          // into approximate world position
          const visibleHeight =
            2 *
            Math.tan(
              THREE.MathUtils.degToRad(75 / 2)
            ) *
            distance;

          const visibleWidth =
            visibleHeight *
            camera.aspect;

          const targetX =
            mouseX * visibleWidth * 0.5;

          const targetY =
            mouseY * visibleHeight * 0.5;

          const dx =
            targetX - positionArray[i * 3];

          const dy =
            targetY - positionArray[i * 3 + 1];

          const distanceFromCursor =
            Math.sqrt(
              dx * dx + dy * dy
            );

          // Only nearby stars react
          const cursorRadius = 3.5;

          if (
            distanceFromCursor < cursorRadius
          ) {

            // Stronger effect when star
            // is closer to cursor
            const strength =
              (1 -
                distanceFromCursor /
                  cursorRadius) *
              0.025;

            positionArray[i * 3] +=
              dx * strength;

            positionArray[i * 3 + 1] +=
              dy * strength;

          } else {

            // Slowly return to original position
            positionArray[i * 3] +=
              (originalX[i] -
                positionArray[i * 3]) *
              0.003;

            positionArray[i * 3 + 1] +=
              (originalY[i] -
                positionArray[i * 3 + 1]) *
              0.003;
          }
        }

        // -------------------------
        // Reset star
        // -------------------------
        if (
          positionArray[i * 3 + 2] > 5
        ) {

          const newX =
            (Math.random() - 0.5) * 100;

          const newY =
            (Math.random() - 0.5) * 100;

          positionArray[i * 3] = newX;
          positionArray[i * 3 + 1] = newY;

          originalX[i] = newX;
          originalY[i] = newY;

          positionArray[i * 3 + 2] = -120;
        }
      }

      geometry.attributes.position.needsUpdate = true;

      renderer.render(
        scene,
        camera
      );

      animationId =
        requestAnimationFrame(animate);
    };

    animate();

    // -------------------------
    // Resize
    // -------------------------
    const handleResize = () => {

      const width =
        window.innerWidth;

      const height =
        window.innerHeight;

      camera.aspect =
        width / height;

      camera.updateProjectionMatrix();

      renderer.setSize(
        width,
        height
      );

      renderer.setPixelRatio(
        Math.min(
          window.devicePixelRatio,
          2
        )
      );
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    // -------------------------
    // Cleanup
    // -------------------------
    return () => {

      cancelAnimationFrame(
        animationId
      );

      window.removeEventListener(
        "resize",
        handleResize
      );

      if (hasMouse) {
        window.removeEventListener(
          "mousemove",
          handleMouseMove
        );
      }

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (
        mount &&
        renderer.domElement.parentNode === mount
      ) {
        mount.removeChild(
          renderer.domElement
        );
      }
    };

  }, []);

  return (
    <div
      ref={mountRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        h-screen
        w-screen
      "
    />
  );
};

export default StarBg;