import Image from 'next/image';
import React from 'react'
import { EncryptedText } from './ui/encrypted-text';
import Link from 'next/link';

function HindiDecorativeText() {
    return (
        <div
            className="
        hidden
        md:block
        absolute
        top-1/2
        right-[23%]
        -translate-y-1/2
        translate-x-1/2
        rotate-90
        text-white
        opacity-90
        pointer-events-none
        select-none
      "
        >
            <span
                className="
          font-bold
          tracking-widest
          text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
        "
            >
                नमस्ते
            </span>
        </div>
    );
}


const AboutMe = () => {
    return (
        <section id='details' className="relative w-full py-32">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* LEFT CONTENT */}
                <div>
                    <EncryptedText text='Hi there' className="text-4xl font-semibold mb-6 text-white" revealDelayMs={80} />
                    <p className="text-lg text-white/80 leading-relaxed mb-6">
                        I&apos;m Shreyas, a final-year student at Vellore Institute of Technology, Chennai,
                        pursuing a B.Tech in Computer Science and Engineering. I began my journey in tech
                        during my freshman year, and over time my curiosity for learning kept growing.
                        I genuinely enjoy the process, which is why I push myself every day.
                        <br /><br />
                        I&apos;ve developed and collaborated with many people, and I particularly enjoy
                        research, implementation, and system design discussions and hate to fix error, I will go insane someday because of it. Recently, I built a
                        workflow automation system — an event-driven platform designed to automate
                        manual tasks that are time-consuming and error-prone.
                        <br /><br />
                        If you find my work interesting or would like to connect, feel free to drop me a line.
                    </p>


                    <Link
                        href={'/contact'}
                        className="inline-flex items-center gap-2 text-cyan-400 hover:underline"
                    >
                        Send me a message →
                    </Link>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative md:mt-32">
                    <Image
                        src="/profile-pic.jpg"
                        alt="Profile"
                        className="rounded-lg"
                        width={400}
                        height={600}
                    />

                </div>
                <HindiDecorativeText />
            </div>
        </section>

    )
}

export default AboutMe;
