// src/app/happiness-mantra/layout.tsx
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import React from "react";
import "./happiness-mantra.css";

const display = Cormorant_Garamond({ subsets: ["latin"], variable: "--hm-display", weight: ["500", "600", "700"] });
const body = Manrope({ subsets: ["latin"], variable: "--hm-body" });

export const metadata: Metadata = {
  title: "Happiness Mantra | Ancient Wisdom for Modern Life",
  description: "Seven practical paths for astrology, happiness, success, money, music, maths and language.",
};

export default function HappinessMantraLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={`${display.variable} ${body.variable}`}>{children}</div>
    );
}
