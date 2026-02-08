import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import Image from 'next/image';
import React from 'react'
const skills = [
    {
        title: "Frontend",
        description:
            "Building accessible, performant interfaces with modern frameworks.",
        items: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "React Native",
        ],
    },
    {
        title: "Backend",
        description:
            "Designing APIs and services with a focus on correctness and scalability.",
        items: [
            "Node.js",
            "Express.js",
            "tRPC",
            "Java",
            "REST APIs",
            "Authentication & Authorization",
        ],
    },
    {
        title: "Databases",
        description:
            "Data modeling, query optimization, and consistency trade-offs.",
        items: [
            "SQL",
            "Relational Databases",
            "Schema Design",
            "Indexes & Transactions",
            "ORMs & Migrations",
        ],
    },
    {
        title: "Architecture & System Design",
        description:
            "Designing modular, event-driven systems that scale.",
        items: [
            "Low-Level Design (LLD)",
            "Event-Driven Architecture",
            "Workflow Automation",
            "API Contracts & Versioning",
            "Fault Isolation",
            "Scalability Patterns",
        ],
    },
];

const techStack = [
    {
        name: "React",
        logo: "/logos/react.png",
    },
    {
        name: "Next.js",
        logo: "/logos/nextjs.webp",
    },
    {
        name: "TypeScript",
        logo: "/logos/typescript.png",
    },
    {
        name: "Node.js",
        logo: "/logos/nodejs.png",
    },
    {
        name: "Java",
        logo: "/logos/java.svg",
    },
    {
        name: "PostgreSQL",
        logo: "/logos/postgresql.png",
    },
    {
        name: "Docker",
        logo: "/logos/docker.png",
    },
    {
        name: "Tailwind CSS",
        logo: "/logos/tailwindcss.png",
    },
];


const page = () => {
    return (
        <section className="w-full py-32">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-20 max-w-3xl">
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed">
                        A structured overview of the tools, technologies, and system design
                        concepts I use to build reliable, scalable software.
                    </p>
                </div>
                <InfiniteMovingCards
                    items={techStack}
                    direction="right"
                // speed="fast"
                />


                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    {skills.map((section) => (
                        <div
                            key={section.title}
                            className="
                rounded-2xl
                border border-white/10
                bg-neutral-900/50
                p-8
                hover:border-white/20
                transition
              "
                        >
                            <h3 className="text-2xl font-semibold text-white mb-2">
                                {section.title}
                            </h3>

                            <p className="text-white/60 mb-6">
                                {section.description}
                            </p>

                            <ul className="space-y-3">
                                {section.items.map((item) => (
                                    <li
                                        key={item}
                                        className="
                      text-white/80
                      flex items-start
                      gap-3
                    "
                                    >
                                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/40 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default page
