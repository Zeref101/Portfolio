import Image from 'next/image'
import {
    Sidebar,
    SidebarContent,
} from "@/components/ui/sidebar";

const links = [
    { label: "Projects", href: "#project-1" },
    { label: "Details", href: "#details" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];


const AppSidebar = () => {
    return (
        <Sidebar variant="sidebar" className='border-r-0'>
            <SidebarContent className="flex flex-col gap-4 p-6 bg-background">
                <Image
                    src="/no-bg-logo.png"
                    width={60}
                    height={60}
                    alt="logo"
                />

                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="text-sm tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar
