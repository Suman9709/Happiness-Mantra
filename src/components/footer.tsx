"use client"

import Link from "next/link"


const Footer = () => {
    const Icons = {
        Youtube: () => (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.376.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.376-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
        Linkedin: () => (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.222 0 22.225 0z" />
            </svg>
        ),
        Instagram: () => (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
        ),
        Facebook: () => (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
        ),
      
   
    };
    return (
        <footer
            id="footer"
            className="bg-background text-font text-sm font-sans pt-16 pb-8 border-t border-white"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-8">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl flex items-center justify-center text-font shadow-lg overflow-hidden">
                                <img
                                    src="/rrfoundationlogo.png"
                                    alt="RR World Logo"
                                    className="w-8 h-8 object-contain"
                                />
                            </div>

                            <div>
                                <h3 className="text-[#fe6f00] font-bold text-lg">
                                    RR World
                                </h3>
                                <p className="text-xs text-[#fe6f00]">
                                    Organization
                                </p>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering lives through education, spiritual guidance,
                            and holistic wellness solutions.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://www.youtube.com/@dr.rajaramyadav"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-red-500 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110"
                            >
                                <Icons.Youtube />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/dr-raja-ram-yadav-astrologer-33a64821/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110"
                            >
                                <Icons.Linkedin />
                            </a>

                            <a
                                href="https://www.instagram.com/officialrry"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-pink-500 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110"
                            >
                                <Icons.Instagram />
                            </a>

                            <a
                                href="https://www.facebook.com/do.raja.rama.yadava"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-700 hover:text-white flex items-center justify-center text-slate-400 transition-all duration-300 hover:scale-110"
                            >
                                <Icons.Facebook />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-[#fe6f00] font-semibold text-base relative inline-block">
                            Quick Links
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-linear-to-r from-amber-400 to-emerald-500 rounded-full" />
                        </h4>

                        <ul className="space-y-2 text-slate-400">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#initiatives"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    Initiatives
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/#about"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    About Founder
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-[#fe6f00] font-semibold text-base relative inline-block">
                            Contact Info
                            <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-500 rounded-full" />
                        </h4>

                        <ul className="space-y-3 text-slate-400">
                            <li>📍 New Delhi, India</li>

                            <li>
                                <a
                                    href="mailto:contact@rrworld.org"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    contact@rrworld.org
                                </a>
                            </li>

                            <li>
                                <a
                                    href="tel:+919911894311"
                                    className="hover:text-amber-400 transition-colors"
                                >
                                    +91 9911894311
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <p className="text-slate-500 text-xs">
                            © {new Date().getFullYear()} RR World. All rights reserved.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/privacy-policy"
                                className="text-slate-500 hover:text-amber-400 text-xs"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/terms-of-service"
                                className="text-slate-500 hover:text-amber-400 text-xs"
                            >
                                Terms of Service
                            </Link>

                            <Link
                                href="/cookie-policy"
                                className="text-slate-500 hover:text-amber-400 text-xs"
                            >
                                Cookie Policy
                            </Link>

                            <Link
                                href="/contact"
                                className="text-slate-500 hover:text-amber-400 text-xs"
                            >
                                Contact
                            </Link>
                        </div>

                        
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer;