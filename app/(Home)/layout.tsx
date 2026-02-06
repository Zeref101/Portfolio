"use client";

import React from "react";
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider className="bg-background">
            <AppSidebar />
            <SidebarInset className="p-6 bg-background">
                {children}
            </SidebarInset>
        </SidebarProvider>
    );
};

export default Layout;
