'use client'

import Image from "next/image"
import {
    FaYoutube,
    FaInstagram,
    FaFacebook,
    FaLinkedin
} from "react-icons/fa"

export const About = () => {
    return (
        <section className="relative py-16 md:py-20 lg:py-24 bg-[#050505] overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(180,140,40,0.12),transparent_35%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(120,80,20,0.08),transparent_30%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-full max-w-[420px]">
                            <div className="absolute inset-0 bg-yellow-500/10 blur-3xl rounded-[32px]" />

                            <div className="relative rounded-[32px] overflow-hidden border border-yellow-500/20">
                                <Image
                                    src="/profile.png"
                                    width={500}
                                    height={550}
                                    alt="Dr Raja Ram Yadav"
                                    className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-contain"
                                />
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            {[FaYoutube, FaInstagram, FaFacebook, FaLinkedin].map((Icon, i) => (
                                <a key={i} href="#" className="group">
                                    <div className="w-11 h-11 md:w-12 md:h-12 rounded-full border border-yellow-500/20 bg-white/[0.03] backdrop-blur-md flex items-center justify-center text-yellow-400 text-lg transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-black group-hover:scale-110">
                                        <Icon />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div>
                        <p className="uppercase tracking-[5px] text-yellow-400 text-xs sm:text-sm mb-1">
                            OUR VISION
                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-2">
                            About RR World
                        </h1>

                        <p className="text-gray-300 leading-6 text-base md:text-lg">
                            Inspired by the vision of{" "}
                            <span className="text-yellow-400 font-semibold">
                                Dr. Raja Ram Yadav
                            </span>,
                            RR World is a transformative ecosystem built to empower
                            individuals through education, self-reliance, innovation,
                            and purposeful living.
                        </p>

                        <p className="text-gray-400 leading-6 mt-2 text-sm md:text-base">
                            Dr. Raja Ram Yadav is a distinguished physicist,
                            educator, researcher, and visionary leader whose mission
                            has been to bridge knowledge with real-world impact.
                        </p>

                        <p className="text-gray-400 leading-6 mt-2 text-sm md:text-base">
                            RR World continues this vision through four pillars —
                            <span className="text-yellow-400"> RR Foundation</span>,
                            <span className="text-yellow-400"> RR School</span>,
                            <span className="text-yellow-400"> Happiness Mantra</span>,
                            and
                            <span className="text-yellow-400"> RR Studio</span>.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-5 mt-2">
                            <div className="border-l border-yellow-500 pl-3">
                                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                                    10K+
                                </h3>
                                <p className="text-gray-400 mt-1 text-xs md:text-sm">
                                    Lives Impacted
                                </p>
                            </div>

                            <div className="border-l border-yellow-500 pl-3">
                                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                                    4
                                </h3>
                                <p className="text-gray-400 mt-1 text-xs md:text-sm">
                                    Core Pillars
                                </p>
                            </div>

                            <div className="border-l border-yellow-500 pl-3">
                                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                                    100+
                                </h3>
                                <p className="text-gray-400 mt-1 text-xs md:text-sm">
                                    Research Papers
                                </p>
                            </div>

                            <div className="border-l border-yellow-500 pl-3">
                                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                                    30+
                                </h3>
                                <p className="text-gray-400 mt-1 text-xs md:text-sm">
                                    Years Leadership
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <button className="mt-8 px-7 py-3 rounded-full border border-white/10 bg-white/[0.03] text-white text-base hover:border-yellow-500 hover:text-yellow-400 transition duration-300">
                            Explore Our Journey
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
        </section>
    )
}