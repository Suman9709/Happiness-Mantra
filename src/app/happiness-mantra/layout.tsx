// src/app/happiness-mantra/layout.tsx
import { HappinessMantraNavbar } from "@/components/spiritual/happinessmantra-navbar";
import React from "react";

export default function HappinessMantraLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        // This class injects the gold/dark variables to all shadcn components inside this folder!
        <div>
            {/* You can drop your specific spiritual Navbar here later */}
            <main className="min-h-screen bg-background">
                <HappinessMantraNavbar />
                <div >
                    {children}
                </div>
            </main>
        </div>
    );
}