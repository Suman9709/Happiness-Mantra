
"use client"

import React, { useState } from "react"
import { Heart, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export function LandingPageNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full  border-slate-200 shadow-md bg-[#0e0e0c] backdrop-blur-md sticky top-0 z-50 transition-all duration-200">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* LEFT SIDE: LOGO */}
                <Link href="/" className="flex items-center gap-1 group">
                    <div className="h-14 w-14 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Image
                            src="/rrfoundationlogo.png"
                            alt="RR Foundation Logo"
                            width={56}
                            height={56}
                            className="h-12 w-auto object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold font-sans text-lg tracking-tight text-[#fede33] leading-none">
                            RR
                        </span>
                        <span className="text-[14px] font-sans text-[#fede33] font-semibold tracking-wider uppercase mt-0.5">
                            World
                        </span>
                    </div>
                </Link>

                {/* MIDDLE: 4 NAVIGATION LINKS */}
                <ul className="hidden md:flex items-center gap-8 antialiased">
                    <li>
                        <Link href="/" className="text-md font-sans font-semibold tracing-wide text-[#e7b653] hover:text-[#ffaa01] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#e7b653] hover:after:w-full after:transition-all">
                            Home
                        </Link>
                    </li>
                    <li>
                        <a href="#about" className="text-md font-sans font-semibold tracing-wide text-[#e7b653] hover:text-[#ffaa01] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#e7b653] hover:after:w-full after:transition-all">
                            About Us
                        </a>
                    </li>
                    <li>
                        <a href="#pillars" className="text-md font-sans font-semibold tracing-wide text-[#e7b653] hover:text-[#ffaa01] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#e7b653] hover:after:w-full after:transition-all">
                            Our Pillars
                        </a>
                    </li>
                    <li>
                        <a href="#pillars" className="text-md font-sans font-semibold tracing-wide text-[#e7b653] hover:text-[#ffaa01] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#e7b653] hover:after:w-full after:transition-all">
                            Remedies
                        </a>
                    </li>
                    <li>
                        <a href="#footer" className="text-md font-sans font-semibold tracing-wide text-[#e7b653] hover:text-[#ffaa01] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#e7b653] hover:after:w-full after:transition-all">
                            Contact Us
                        </a>
                    </li>
                </ul>

                {/* RIGHT SIDE: CORE CTA BUTTON & MOBILE HAMBURGER */}
                <div className="flex items-center gap-4">
                    {/* Donate CTA Button */}
                    <Link href="/#contact" className="hidden sm:flex items-center gap-2 border border-[#ffaa01] text-[#ffaa01] font-medium text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg shadow-[#ffaa01]/10 active:scale-95 transition-all cursor-pointer">
                        <Heart className="h-4 w-4 fill-current text-[#ffaa01]" />
                        Donate Now
                    </Link>

                    {/* Responsive Mobile Toggle Icon */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 -mr-2 text-[#e7b653] hover:text-[#ffaa01] md:hidden focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* MOBILE DRAWER DRAWDOWM */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white border-b border-slate-200 px-6 py-6 flex flex-col gap-5 md:hidden shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
                    <ul className="flex flex-col gap-4">
                        <li>
                            <Link onClick={() => setIsOpen(false)} href="/" className="text-md font-sans font-semibold tracking-wide text-[#e7b653] block py-1">Home</Link>
                        </li>
                        <li>
                            <a onClick={() => setIsOpen(false)} href="#about" className="text-md font-sans tracking-wide font-semibold text-[#e7b653] block py-1">About Us</a>
                        </li>
                        <li>
                            <a onClick={() => setIsOpen(false)} href="#pillars" className="text-md font-sans tracking-wide font-semibold text-[#e7b653] block py-1">Our Pillars</a>
                        </li>
                        <li>
                            <a onClick={() => setIsOpen(false)} href="#remedies" className="text-md font-sans tracking-wide font-semibold text-[#e7b653] block py-1">Remedies</a>
                        </li>
                        <li>
                            <a onClick={() => setIsOpen(false)} href="#involved" className="text-md font-sans tracking-wide font-semibold text-[#e7b653] block py-1">Get Involved</a>
                        </li>
                    </ul>
                    <hr className="border-slate-100" />
                    <Link href="/#contact" className="w-full flex items-center justify-center gap-2 bg-[#e7b653] text-[#ffaa01] font-semibold py-3 rounded-xl shadow-md">
                        <Heart className="h-4 w-4 fill-current text-[#ffaa01]" />
                        Donate Now
                    </Link>
                </div>
            )}
        </nav>
    )
}
