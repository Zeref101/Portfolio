"use client";

import { useGLTF, useTexture, Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

export default function MacbookModel({ screenshot }) {
  const gltf = useGLTF("/models/macbook-pro.glb");
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  const texture = useTexture(screenshot);

  const group = useRef(null);
  const { mouse } = useThree();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.flipY = false;
    texture.anisotropy = 16;

    const laptopBodyMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#4f5157"),
      metalness: 0.35, // 🔑 NOT 1
      roughness: 0.95, // 🔑 very matte
    });
    const screenMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      // emissive: new THREE.Color("#ffffff"),
      emissiveIntensity: 0.6,
      metalness: 0,
      roughness: 0.9, // 🔑 kills glass look
    });

    scene.traverse((child) => {
      if (!child.isMesh) return;

      child.castShadow = true;
      child.receiveShadow = true;

      if (child.name.toLowerCase().includes("screen")) {
        child.material = screenMaterial;
      } else {
        child.material = laptopBodyMaterial;
      }
    });
  }, [scene, texture]);

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouse.x * 0.35,
      0.08
    );

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -0.15 - mouse.y * 0.2,
      0.08
    );
  });

  return (
    <group ref={group}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
}

useGLTF.preload("/models/macbook-pro.glb");
