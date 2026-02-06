"use client";

import React from "react";
import {
    Sidebar,
    SidebarBody,
    SidebarLink,
} from "@/components/ui/sidebar";
import { IconHome, IconUser } from "@tabler/icons-react";
import Image from "next/image";

interface Links {
    label: string;
    href: string;
    icon: React.ReactNode;
}


const links = [
    {
        label: "Projects",
        href: "#project-1",
    },
    {
        label: "Details",
        href: "#details",
    },
    {
        label: "Skills",
        href: "#skills",
    },
    {
        label: "Contact",
        href: "#contact",
    },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen w-full">
            <Sidebar>
                <SidebarBody className="dark:bg-background z-20 ">
                    <div className="flex flex-col gap-2 justify-start self-start mt-10 ml-10">
                        <Image src={"/no-bg-logo.png"} width={60} height={60} alt="logo" />
                        {links.map((link) => (
                            <SidebarLink
                                key={link.label}
                                link={{
                                    label: link.label,
                                    href: link.href,
                                    icon: null,
                                }}
                            />
                        ))}
                    </div>
                </SidebarBody>
            </Sidebar>

            <main className="flex-1 p-6 dark:bg-background">
                {children}
            </main>
        </div>
    );
};

export default Layout;
