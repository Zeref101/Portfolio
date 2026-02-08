'use client';

import Link from 'next/link';
import Laptop3D from './laptop3D';

interface Props {
    title: string;
    description: string;
    slug: string;
    screenshot: string;
}

export default function ProjectSummary({
    title,
    description,
    slug,
    screenshot,
}: Props) {
    return (
        <section id='project-1' className="relative min-h-screen w-full text-white px-6 lg:px-24 flex items-center overflow-visible">
            <div className="flex flex-col lg:flex-row gap-16 w-full items-center">

                <div className="relative flex-1 overflow-visible order-1 lg:order-2 isolate">
                    <span
                        className="
              absolute
              right-[5%]
              bottom-[-10%]
              text-[15rem]
              font-black
              text-white
              select-none
              pointer-events-none
              leading-none
              z-0
              hidden lg:block
            "
                    >
                        प्रोजैक्ट
                    </span>
                    <div className="relative z-10 -translate-x-8 lg:-translate-x-16">
                        <Laptop3D screenshot={screenshot} />
                    </div>

                </div>

                <div className="order-2 lg:order-1 max-w-md">

                    <h2 className=" text-lg lg:text-3xl font-semibold mt-4 leading-tight">
                        {title}
                    </h2>

                    <p className="text-white/70 mt-6">
                        {description}
                    </p>

                    <Link
                        href={`/projects/${slug}`}
                        className="
              inline-flex items-center gap-2 mt-10
              bg-cyan-400 text-black px-6 py-3 rounded-md
              font-semibold hover:-translate-y-1 transition
            "
                    >
                        View project →
                    </Link>
                </div>

            </div>
        </section>
    );
}
