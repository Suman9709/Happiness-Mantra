"use client"

import React, { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { siteLinks } from "@/lib/site-links"

export function HappinessMantraNavbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="w-full  border-b border-slate-200 bg-foreground backdrop-blur-md sticky top-0 z-50 transition-all duration-200 shadow-sm flex pt-8 pb-2">
            {/* TOP BAR - Contact & Login/Register */}
            <div className="block">
                <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-sm">
                    {/* Left side: Contact info */}
                    <Link href="/happiness-mantra" className="flex items-center gap-2 group shrink-0">
                        <div className="h-12 w-12 lg:h-14 lg:w-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <div className="h-24 w-24 lg:h-12 lg:w-12  flex items-center justify-center shadow-md">
                                <Image src="/rrfoundationlogo.png" alt="Logo" width={72} height={72} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold font-sans text-base lg:text-lg tracking-tight text-[#fe6f00] leading-none">
                                RR
                            </span>
                            <span className="text-[11px] lg:text-[14px] font-sans text-[#fe6f00] font-semibold tracking-wider uppercase mt-0.5">
                                Foundation
                            </span>
                        </div>
                    </Link>


                </div>
                <div className="border-r-2 border-white" />

            </div>

            {/* MAIN NAVBAR */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 lg:h-20 flex flex-col items-center justify-between w-full font-heading">
                {/* LEFT SIDE: LOGO */}


                <div className="hidden md:flex items-center justify-between max-w-3xl w-full">
                    <div className="flex items-center gap-2 text-font hover:text-[#fe6f00] transition-colors cursor-pointer group">
                        <Phone className="h-3.5 w-3.5 group-hover:scale-105 transition-transform" />
                        <p className="font-medium">Talk to our Astrogers -
                            <span className="text-[#fe6f00] font-semibold">
                                {" "} {siteLinks.phoneDisplay}
                            </span>
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-font hover:text-[#fe6f00] transition-colors cursor-pointer group">
                        <Mail className="h-3.5 w-3.5 group-hover:scale-105 transition-transform" />
                        <p className="font-medium">Talk to our Astrogers -
                            <span className="text-[#fe6f00] font-semibold">
                                {" "} {siteLinks.email}
                            </span>
                        </p>
                    </div>
                </div>
                <hr />
                {/* MIDDLE: ALL NAVIGATION LINKS (Desktop) */}
                <ul className="hidden lg:flex items-center gap-5 xl:gap-7 antialiased text-font">
                    <li>
                        <Link href="/happiness-mantra" className="text-sm font-medium hover:text-[#fe6f00] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#fe6f00] hover:after:w-full after:transition-all duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <a href="#about" className="text-sm font-medium  hover:text-[#fe6f00] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#fe6f00] hover:after:w-full after:transition-all duration-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="text-sm font-medium  hover:text-[#fe6f00] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#fe6f00] hover:after:w-full after:transition-all duration-300">
                            Services
                        </a>
                    </li>
                    <li>
                        <a href="#blog" className="text-sm font-medium  hover:text-[#fe6f00] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#fe6f00] hover:after:w-full after:transition-all duration-300">
                            Blog
                        </a>
                    </li>



                    <li>
                        <a href="#contact" className="text-sm font-medium  hover:text-[#fe6f00] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#fe6f00] hover:after:w-full after:transition-all duration-300">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* RIGHT SIDE: CTA BUTTON & MOBILE HAMBURGER */}
                <div className="flex items-center w-full">
                    <div className="ml-auto">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 lg:hidden focus:outline-none transition-colors hover:text-[#fe6f00]"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 text-font" />
                            ) : (
                                <Menu className="h-6 w-6 text-font" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* MOBILE DRAWER (Full menu with all items) */}
            {isOpen && (
                <div className="absolute top-24 lg:top-20 left-0 w-full bg-foreground border-t border-slate-200 px-5 py-5 flex flex-col gap-4 lg:hidden shadow-2xl animate-in slide-in-from-top-5 duration-300 max-h-[80vh] overflow-y-auto">
                    {/* Mobile Contact Info */}
                    <div className="flex flex-col gap-3 pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2 text-font">
                            <Phone className="h-4 w-4 text-[#fe6f00]" />
                            <span className="text-sm font-medium">{siteLinks.phoneDisplay}</span>
                        </div>
                        <div className="flex items-center gap-2 text-font">
                            <Mail className="h-4 w-4 text-[#fe6f00]" />
                            <span className="text-sm font-medium">{siteLinks.email}</span>
                        </div>

                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-col gap-3 text-font">
                        <li>
                            <Link onClick={() => setIsOpen(false)} href="/happiness-mantra" className="text-base font-medium  block py-2 hover:text-[#fe6f00] hover:pl-2 transition-all duration-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <a onClick={() => setIsOpen(false)} href="#about" className="text-base font-medium  block py-2 hover:text-[#fe6f00] hover:pl-2 transition-all duration-200">
                                About
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setIsOpen(false)} href="#services" className="text-base font-medium  block py-2 hover:text-[#fe6f00] hover:pl-2 transition-all duration-200">
                                Services
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setIsOpen(false)} href="#blog" className="text-base font-medium  block py-2 hover:text-[#fe6f00] hover:pl-2 transition-all duration-200">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a onClick={() => setIsOpen(false)} href="#contact" className="text-base font-medium  block py-2 hover:text-[#fe6f00] hover:pl-2 transition-all duration-200">
                                Contact
                            </a>
                        </li>
                    </ul>

                    <hr className="border-slate-100 my-1" />
                </div>
            )}
        </nav>
    )
}
