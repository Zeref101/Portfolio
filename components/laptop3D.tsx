'use client';

import { Canvas } from '@react-three/fiber';
import { Bounds } from '@react-three/drei';
import MacbookModel from './MacbookModel';

export default function Laptop3D({ screenshot }: { screenshot: string }) {
    return (
        <div className="relative w-full h-[600px] overflow-visible">
            <Canvas
                camera={{ fov: 14 }}
                gl={{ antialias: true, toneMappingExposure: 0.9 }}
            >
                {/* Lighting */}
                <ambientLight intensity={1.1} />
                <directionalLight position={[2, 4, 6]} intensity={0.6} />
                <directionalLight position={[-2, 2, 4]} intensity={0.4} />

                <Bounds fit clip observe margin={0.85}>
                    <group scale={1.3}>
                        <MacbookModel screenshot={screenshot} />
                    </group>
                </Bounds>
            </Canvas>
        </div>
    );
}
