"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Sidebar,
    SidebarContent,
} from "@/components/ui/sidebar";

const links = [
    { label: "Projects", href: "/home#project-1", type: "anchor" },
    { label: "Details", href: "/home#details", type: "anchor" },
    { label: "Skills", href: "/skills", type: "route" },
    { label: "Contact", href: "/contact", type: "route" },
];


export default function AppSidebar() {
    const pathname = usePathname();
    const [activeHref, setActiveHref] = useState("");

    useEffect(() => {
        const updateActive = () => {
            const hash = window.location.hash;
            setActiveHref(hash ? `${pathname}${hash}` : pathname);
        };

        updateActive();
        window.addEventListener("hashchange", updateActive);

        return () => window.removeEventListener("hashchange", updateActive);
    }, [pathname]);

    const isActive = (href: string) => activeHref === href;

    return (
        <Sidebar variant="sidebar" className="w-30 border-r-0">
            <div className="flex justify-center pt-8 bg-background">
                <Link href="/">
                    <Image
                        src="/no-bg-logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                </Link>
            </div>

            <SidebarContent className="flex-1 flex items-center justify-center bg-background ">
                <nav className="flex flex-col items-center justify-between h-[50%]">
                    {links.map((link) => {
                        const active = isActive(link.href);

                        const textClasses = `
  block -rotate-90 text-xs tracking-[0.3em] transition
  ${active ? "text-foreground" : "text-muted-foreground"}
  hover:text-foreground
`;



                        if (link.type === "anchor") {
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setActiveHref(link.href)}
                                    className="relative group"
                                >
                                    <span className={textClasses}>
                                        {link.label.toUpperCase()}
                                    </span>
                                </a>
                            );
                        }

                        return (
                            <Link
                                key={link.label}
                                href={link.href}
                                onClick={() => setActiveHref(link.href)}
                                className="relative group"
                            >
                                <span className={textClasses}>
                                    {link.label.toUpperCase()}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </SidebarContent>

            {/* Socials */}
            <div className="pb-8 flex justify-center bg-background">
                <div className="flex flex-col items-center gap-6">
                    {[
                        {
                            src: "/logos/linkedin.webp",
                            alt: "LinkedIn",
                            link: "https://www.linkedin.com/in/shreyas-mohanty-8a899524a/",
                        },
                        {
                            src: "/logos/x.png",
                            alt: "X",
                            link: "https://x.com/Shreyas_M0228",
                        },
                        {
                            src: "/logos/github-white.png",
                            alt: "GitHub",
                            link: "https://github.com/Zeref101",
                        },
                    ].map((icon) => (
                        <Link
                            key={icon.alt}
                            href={icon.link}
                            className="w-8 h-8 flex items-center justify-center rounded-full
                         text-muted-foreground hover:text-foreground transition"
                        >
                            <img
                                src={icon.src}
                                alt={icon.alt}
                                className="opacity-70 hover:opacity-100 transition w-5 h-5"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </Sidebar>
    );
}
