'use client';

import { useEffect, useState } from 'react';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { EncryptedText } from '@/components/ui/encrypted-text';
import { AnimatePresence } from 'motion/react';
import { DisplacementSphere } from '@/components/Displacement-sphere/Displacement-sphere';

const roles = ["Curious Mind", "Explorer", "Question Asker"];

export default function Intro() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((i) => (i + 1) % roles.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);

    const currentRole = roles[currentIndex];

    return (
        <>
            <DisplacementSphere />
            <div
                className="
          max-w-5xl
          px-6 md:px-20
          text-center md:text-left self-start z-20
        "
            >
                <EncryptedText
                    text="SHREYAS MOHANTY"
                    className="
            mb-6
            text-xl
            uppercase
            tracking-[0.35em]
            text-white/60
          "
                />

                <h1
                    className="
            font-semibold
            leading-[1.05]
            text-white
            text-5xl
            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
                >
                    Engineer
                    <br />

                    <span className="inline-flex items-center gap-4">
                        <span className="text-white/40 font-light">+</span>

                        <AnimatePresence mode="wait">
                            <Highlight key={currentRole}>
                                {currentRole}
                            </Highlight>
                        </AnimatePresence>

                    </span>
                </h1>
            </div>
        </>
    );
}
