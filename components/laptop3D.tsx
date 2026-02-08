'use client';

import { Canvas, useThree } from '@react-three/fiber';
import { Bounds } from '@react-three/drei';
import MacbookModel from './MacbookModel';

function ResponsiveScene({ screenshot }: { screenshot: string }) {
    const { size } = useThree();

    // Breakpoints
    const isMobile = size.width < 640;
    const isTablet = size.width >= 640 && size.width < 1024;

    // Tuned values
    const scale = isMobile ? 1.0 : isTablet ? 1.25 : 1.7;
    const fov = isMobile ? 20 : isTablet ? 17 : 14;
    const margin = isMobile ? 1.1 : isTablet ? 1.0 : 0.9;

    return (
        <>
            {/* Lighting */}
            <ambientLight intensity={1.1} />
            <directionalLight position={[2, 4, 6]} intensity={0.6} />
            <directionalLight position={[-2, 2, 4]} intensity={0.4} />

            <Bounds fit clip observe margin={margin}>
                <group scale={scale}>
                    <MacbookModel screenshot={screenshot} />
                </group>
            </Bounds>
        </>
    );
}

export default function Laptop3D({ screenshot }: { screenshot: string }) {
    return (
        <div
            className="
        relative
        w-full
        h-[420px]
        sm:h-[500px]
        lg:h-[600px]
        overflow-visible
      "
        >
            <Canvas
                style={{ position: 'relative' }}
                camera={{ fov: 14 }}
                gl={{ antialias: true, toneMappingExposure: 0.9 }}
            >

                <ResponsiveScene screenshot={screenshot} />
            </Canvas>
        </div>
    );
}
