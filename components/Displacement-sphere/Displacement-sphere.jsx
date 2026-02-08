"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion, useSpring } from "framer-motion";
import {
  AmbientLight,
  DirectionalLight,
  LinearSRGBColorSpace,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
} from "three";
import { useWindowSize } from "@/hooks/useWindowSize";
const vertexShader = await fetch(
  "/shaders/displacement-sphere-vertex.glsl"
).then((r) => r.text());

const fragmentShader = await fetch(
  "/shaders/displacement-sphere-fragment.glsl"
).then((r) => r.text());

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2,
};

export function DisplacementSphere() {
  const canvasRef = useRef(null);
  const start = useRef(0);

  const renderer = useRef(null);
  const camera = useRef(null);
  const scene = useRef(null);
  const sphere = useRef(null);

  const uniforms = useRef(null);
  const mouse = useRef(new Vector2(0.8, 0.5));

  const reduceMotion = useReducedMotion();
  const isInView = useInView(canvasRef, { margin: "-100px" });
  const windowSize = useWindowSize();

  const rotationX = useSpring(0, springConfig);
  const rotationY = useSpring(0, springConfig);

  const [visible, setVisible] = useState(false);

  /* ---------------- Init time ---------------- */

  useEffect(() => {
    start.current = performance.now();
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { innerWidth, innerHeight } = window;

    renderer.current = new WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });

    renderer.current.setSize(innerWidth, innerHeight);
    renderer.current.setPixelRatio(1);
    renderer.current.outputColorSpace = LinearSRGBColorSpace;

    camera.current = new PerspectiveCamera(
      54,
      innerWidth / innerHeight,
      0.1,
      100
    );
    camera.current.position.z = 52;

    scene.current = new Scene();

    const material = new MeshPhongMaterial();
    material.onBeforeCompile = (shader) => {
      uniforms.current = UniformsUtils.merge([
        shader.uniforms,
        { time: { value: 0 } },
      ]);

      shader.uniforms = uniforms.current;
      shader.vertexShader = vertexShader;
      shader.fragmentShader = fragmentShader;
    };

    const geometry = new SphereGeometry(32, 128, 128);
    sphere.current = new Mesh(geometry, material);
    scene.current.add(sphere.current);

    setVisible(true);

    return () => {
      geometry.dispose();
      material.dispose();
      renderer.current?.dispose();
    };
  }, []);

  /* ---------------- Lights ---------------- */

  useEffect(() => {
    if (!scene.current) return;

    const dir = new DirectionalLight(0xffffff, 2.0);
    const amb = new AmbientLight(0xffffff, 0.4);

    dir.position.set(100, 100, 200);
    scene.current.add(dir, amb);

    return () => {
      scene.current.remove(dir, amb);
    };
  }, []);

  /* ---------------- Resize ---------------- */

  useEffect(() => {
    if (!renderer.current || !camera.current) return;

    const { width, height } = windowSize;
    if (!width || !height) return;

    const adjustedHeight = height * 1.3;
    renderer.current.setSize(width, adjustedHeight);
    camera.current.aspect = width / adjustedHeight;
    camera.current.updateProjectionMatrix();

    if (sphere.current) {
      sphere.current.position.set(
        width < 768 ? 14 : width < 1024 ? 18 : 22,
        width < 768 ? 10 : width < 1024 ? 14 : 16,
        0
      );
    }
  }, [windowSize]);

  /* ---------------- Mouse ---------------- */

  useEffect(() => {
    if (reduceMotion || !isInView) return;

    const onMove = (e) => {
      rotationX.set(e.clientY / window.innerHeight / 2);
      rotationY.set(e.clientX / window.innerWidth / 2);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduceMotion, isInView, rotationX, rotationY]);

  /* ---------------- Animation ---------------- */

  useEffect(() => {
    let raf;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      if (uniforms.current) {
        uniforms.current.time.value =
          0.00005 * (performance.now() - start.current);
      }

      if (sphere.current) {
        sphere.current.rotation.z += 0.001;
        sphere.current.rotation.x = rotationX.get();
        sphere.current.rotation.y = rotationY.get();
      }

      renderer.current?.render(scene.current, camera.current);
    };

    if (!reduceMotion && isInView) animate();
    else renderer.current?.render(scene.current, camera.current);

    return () => cancelAnimationFrame(raf);
  }, [isInView, reduceMotion, rotationX, rotationY]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      data-visible={visible}
      className="
  absolute inset-0
  w-full max-w-full
  opacity-0
  transition-opacity duration-3000
  ease-in-out
  data-[visible=true]:opacity-100
"
    />
  );
}
