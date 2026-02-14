"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    Sidebar,
    SidebarContent,
    useSidebar
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
    const { isMobile, setOpenMobile } = useSidebar();

    useEffect(() => {
        const updateActive = () => {
            const hash = window.location.hash;
            setActiveHref(hash ? `${pathname}${hash}` : pathname);
        };

        updateActive();
        window.addEventListener("hashchange", updateActive);
        return () => window.removeEventListener("hashchange", updateActive);
    }, [pathname]);

    const handleClick = (href: string) => {
        setActiveHref(href);

        if (isMobile) {
            setOpenMobile(false);
        }
    };


    const isActive = (href: string) => activeHref === href;

    return (
        <Sidebar
            variant="sidebar"
            className="
        border-r-0
        w-full md:w-20
        h-screen
        bg-background
      "
        >
            {/* Logo */}
            <div className="flex justify-center pt-8">
                <Link href="/">
                    <Image
                        src="/no-bg-logo.png"
                        alt="Logo"
                        width={32}
                        height={32}
                    />
                </Link>
            </div>

            {/* Links */}
            <SidebarContent
                className="
          flex-1
          flex
          items-center
          justify-center

          /* MOBILE */
          flex-col md:flex-col
        "
            >
                <nav
                    className="
            flex

            /* MOBILE */
            flex-col
            gap-12
            items-center
         justify-center
            flex-wrap

            /* DESKTOP */
            md:flex-col
            md:h-[50%]
            md:gap-12
          "
                >
                    {links.map((link) => {
                        const active = isActive(link.href);

                        const textClasses = `
              transition tracking-[0.3em]

              /* MOBILE */
              text-sm rotate-0

              /* DESKTOP */
              md:-rotate-90 md:text-xs

              ${active
                                ? "text-foreground"
                                : "text-muted-foreground"
                            }

              hover:text-foreground
            `;

                        if (link.type === "anchor") {
                            return (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => handleClick(link.href)}
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
                                onClick={() => handleClick(link.href)}

                            >
                                <span className={textClasses}>
                                    {link.label.toUpperCase()}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
            </SidebarContent>

            {/* Social icons */}
            <div className="pb-8 flex justify-center">
                <div
                    className="
            flex

            /* MOBILE */
            flex-row gap-6

            /* DESKTOP */
            md:flex-col
          "
                >
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
                        <Link key={icon.alt} href={icon.link}>
                            <img
                                src={icon.src}
                                alt={icon.alt}
                                className="w-5 h-5 opacity-70 hover:opacity-100 transition"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </Sidebar>
    );
}
