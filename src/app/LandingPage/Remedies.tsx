'use client'

import { Compass, Sparkles, Hammer } from "lucide-react"
import { Cormorant_Garamond } from "next/font/google"
import Link from "next/link"

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["700"],
})

const remedies = [
    {
        title: "Yantra",
        desc: "Physical tools and structured frameworks designed for systemic transformation and operational excellence.",
        icon: Compass,
    },
    {
        title: "Mantra",
        desc: "Cognitive shifts and mindset coaching through wisdom traditions to unlock dormant intellectual potential.",
        icon: Sparkles,
    },
    {
        title: "Tantra",
        desc: "Practical application and hands-on methods to bridge theory with real-world results and self-reliance.",
        icon: Hammer,
    },
]

export const Remedies = () => {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden bg-black">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,10,10,0.35),transparent_40%),linear-gradient(to_bottom,#050505,#130707,#050505)]" />

            {/* Dot pattern */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto">
                    <p className="text-yellow-400 uppercase tracking-[5px] text-xs md:text-sm font-semibold">
                        Transformative Paths
                    </p>

                    <h2
                        className={`${cormorant.className} text-white text-4xl md:text-5xl mt-3`}
                    >
                        Our Remedies
                    </h2>

                    <p className="text-gray-400 text-base md:text-xl mt-6 leading-relaxed">
                        Discover the three pillars of spiritual and practical transformation
                        at RR World, aligned with cosmic wisdom.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-10 md:mt-16">
                    {remedies.map((item, index) => {
                        const Icon = item.icon

                        return (
                            <div
                                key={index}
                                className="
                    group rounded-3xl border border-white/10
                    bg-white/[0.03] backdrop-blur-sm
                    p-4 md:p-6 lg:p-8
                    min-h-[220px] md:min-h-[360px] lg:min-h-[360px]
                    flex flex-col items-center justify-start md:justify-center
                    text-center
                    transition-all duration-500
                    hover:-translate-y-2
                    hover:border-yellow-500/30
                    hover:shadow-[0_0_40px_rgba(255,180,0,0.08)]
                "
                            >
                                {/* Icon */}
                                <div className="mb-3 md:mb-5">
                                    <Icon
                                        size={32}
                                        className="text-yellow-400 mx-auto md:w-10 md:h-10"
                                        strokeWidth={1.8}
                                    />
                                </div>

                                {/* Title */}
                                <h3
                                    className={`${cormorant.className} text-2xl md:text-3xl lg:text-4xl text-yellow-400`}
                                >
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-300 text-sm md:text-base lg:text-lg leading-relaxed mt-3 md:mt-5 max-w-[320px]">
                                    {item.desc}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <Link href="/happiness-mantra" className="flex justify-center">
                    <button className="mt-8 bg-yellow-400 text-black font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition-colors duration-300">
                       Explore Remedies
                    </button>
                </Link>
            </div>
        </section>
    )
}