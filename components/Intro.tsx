"use client";

import { useEffect, useState } from "react";
import { Highlight } from "@/components/ui/hero-highlight";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { AnimatePresence } from "motion/react";
import { DisplacementSphere } from "@/components/Displacement-sphere/Displacement-sphere";
import { FlipWords } from "./ui/flip-words";

const roles = ["Curious Mind", "Explorer", "Question Asker"];

export default function Intro() {
    const [showSphere, setShowSphere] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((i) => (i + 1) % roles.length);
        }, 3500);

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSphere(true);
        }, 1400);

        return () => clearTimeout(timer);
    }, []);


    return (
        <>
            {showSphere && <DisplacementSphere />}

            <div
                className="
    max-w-5xl
    px-6 md:px-20
    min-h-screen
    flex
    flex-col
    justify-center self-start
    text-center md:text-left
    z-20
  "
            >
                <EncryptedText
                    revealDelayMs={80}
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

                        <FlipWords words={roles} duration={1000} />

                    </span>
                </h1>
            </div>
        </>
    );
}
