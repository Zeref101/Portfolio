"use client";

import React from "react";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider className="bg-background">
            <AppSidebar />
            <SidebarInset className="p-6 bg-background">
                <div className="md:hidden flex justify-end w-full z-50 sticky ">
                    <SidebarTrigger className="text-white w-8 h-8" />
                </div>

                {children}
            </SidebarInset>
        </SidebarProvider>
    );
};

export default Layout;
