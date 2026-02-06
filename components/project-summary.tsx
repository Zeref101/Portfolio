'use client';

import Link from 'next/link';
import Laptop3D from './laptop3D';

export default function ProjectSummary({
    title,
    description,
    slug,
    screenshot,
}) {
    return (
        <section className="min-h-screen w-full text-white px-24 flex items-center overflow-visible">
            <div className="flex flex-row gap-16 w-full items-center">

                {/* LEFT */}
                <div>
                    <span className="text-cyan-400 tracking-widest font-semibold">
                        03
                    </span>

                    <h2 className="text-5xl font-semibold mt-4 leading-tight">
                        {title}
                    </h2>

                    <p className="text-white/70 mt-6 max-w-md">
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

                {/* RIGHT */}
                <div className="relative flex-1 overflow-visible">
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
  "
                    >

                        प्रोजैक्ट
                    </span>

                    <Laptop3D screenshot={screenshot} />
                </div>

            </div>
        </section>
    );
}
