"use client";
import { Highlight, ImageHighlightReveal } from '@/components/ui/hero-highlight';
import Image from 'next/image';
import Link from 'next/link';
import { WobbleCard } from "@/components/ui/wobble-card";
import ArchitectureModal from '@/components/architectural-diagram';
import { useState } from 'react';
import { FocusCards } from '@/components/ui/focus-cards';

const cards = [
    {
        title: "System Architecture",
        src: "/rheoma-architecture.png",
    },
    {
        title: "Sequence Diagram",
        src: "/rheoma-sequence-diagram.png",
    }
];

export default function Page() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* ================= HERO ================= */}
            <section className="w-full grid place-items-center overflow-hidden items-start">
                <div className="z-20 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_300px] gap-16">
                    {/* Left */}
                    <div>
                        <h1 className="text-5xl font-semibold leading-tight mb-6 text-foreground">
                            Workflow<br />Automation Platform
                        </h1>

                        <p className="text-xl text-foreground/80 max-w-xl mb-6">
                            I designed and built a workflow automation system to eliminate manual,
                            repetitive operations by orchestrating APIs, databases, and AI services.
                        </p>

                        <Link
                            href="https://rheoma.vercel.app"
                            className="inline-flex items-center gap-2 text-cyan-400 hover:underline"
                        >
                            Visit website →
                        </Link>
                    </div>

                    {/* Right */}
                    <ul className="space-y-8 text-xl text-foreground/70">
                        {[
                            'System Design',
                            'Backend Development',
                            'Workflow Automation',
                            'API Integration',
                            'DevOps / Deployment',
                        ].map(item => (
                            <li
                                key={item}
                                className="border-b border-white/20 pb-2"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="w-full py-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">

                    {/* PROBLEM — wide card */}
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 bg-pink-800 min-h-[420px]"
                    >
                        <div className="max-w-md">
                            <h2 className="text-left text-balance text-2xl lg:text-4xl font-semibold text-white">
                                The Problem
                            </h2>

                            <p className="mt-4 text-lg text-white/70 leading-relaxed">
                                Teams relied on manual workflows for approvals, notifications,
                                data sync, and reporting. These processes were slow, error-prone,
                                and broke down as integrations and usage grew.
                            </p>
                        </div>

                        <Image
                            src="/workflow-chaos.png"
                            alt="Manual workflows illustration"
                            width={500}
                            height={500}
                            className="absolute -right-6 lg:-right-[35%] -bottom-10 opacity-80"
                        />
                    </WobbleCard>

                    {/* IMPACT — small card */}
                    <WobbleCard containerClassName="col-span-1 bg-indigo-900 min-h-[420px]">
                        <h3 className="text-balance text-xl lg:text-2xl font-semibold text-white">
                            Why it Mattered
                        </h3>

                        <p className="mt-4 text-white/70 leading-relaxed">
                            Manual operations slowed teams down, introduced silent failures,
                            and made scaling nearly impossible without adding headcount.
                        </p>
                    </WobbleCard>

                    {/* SOLUTION — full width */}
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-3 bg-cyan-900 min-h-[500px]"
                    >
                        <div className="max-w-xl">
                            <h2 className="text-balance text-2xl lg:text-4xl font-semibold text-white">
                                The Solution
                            </h2>

                            <p className="mt-4 text-lg text-white/80 leading-relaxed">
                                A configurable, event-driven workflow automation platform.
                                Users define triggers, conditions, and actions — workflows
                                react to events, schedules, or webhooks and execute reliably
                                across systems.
                            </p>
                        </div>

                        <Image
                            src="/rheoma-screen.jpg"
                            alt="Workflow automation"
                            width={600}
                            height={600}
                            className="absolute -right-10 md:-right-[40%] lg:-right-[10%] -bottom-2 object-contain rounded-2xl"
                        />
                    </WobbleCard>
                </div>
            </section>
            <section className="w-full px-32">
                <div className=" mx-auto px-6">
                    {/* Title */}
                    <h2 className="text-3xl font-semibold mb-6 text-foreground">
                        System design
                    </h2>

                    {/* Image previews */}
                    <FocusCards cards={cards} />

                </div>
            </section>
        </>
    );
}
