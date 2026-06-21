'use client'

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Users, GraduationCap, Flower2, Video } from "lucide-react"
import { Cormorant_Garamond } from "next/font/google"
import Link from 'next/link'

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["700"],
})

const pillars = [
    {
        title: "RR Foundation",
        subtitle: "Creating the Creators",
        desc: [
            "Empowering creators globally",
            "Supporting innovators",
            "Building future leaders",
            "Nurturing creative excellence",
            "Fostering entrepreneurial spirit"
        ],
        icon: Users,
        active: false,
        link: "/foundation",
    },
    {
        title: "RR School",
        subtitle: "Sanskar se Siksha",
        desc: [
            "Value-based education",
            "Cultural wisdom integration",
            "Holistic growth approach",
            "Character development focus",
            "Excellence in academics"
        ],
        icon: GraduationCap,
        active: true,
        link: "https://rrworld.org/",
    },
    {
        title: "Happiness Mantra",
        subtitle: "Khush Rahiye, Khushiya Batiye",
        desc: [
            "Jyotish Mantra",
            "Success Mantra",
            "Money Mantra",
            "Maths Mantra",
            "Bhasha Mantra",
        ],
        icon: Flower2,
        active: true,
        link: "/happiness-mantra",
    },
    {
        title: "RR Studio",
        subtitle: "Creative Media Hub",
        desc: [
            "Content creation excellence",
            "Premium production quality",
            "Storytelling mastery",
            "Visual communication expertise",
            "Digital media innovation"
        ],
        icon: Video,
        active: false,
        link: "/studio",
    },
]

const Pillar = () => {
    return (
        <section className="py-14 md:py-16 bg-[#080808] bg-[radial-gradient(circle_at_right,_rgba(120,40,20,0.22),_transparent_45%),linear-gradient(to_right,_#080808,_#141010,_#1b120f)]">

            {/* Heading */}
            <div className="max-w-6xl mx-auto px-4 text-center">
                <p className="text-luminous-gold flex gap-2 items-center justify-center font-bold text-xs uppercase tracking-[3px]">
                    <span>OUR</span>
                    <span>ECOSYSTEM</span>
                </p>

                <h2 className={`${cormorant.className} text-white text-2xl md:text-4xl mt-2`}>
                    Foundations of Enlightenment
                </h2>
            </div>

            {/* Cards - Flex Wrap Layout */}
            <div className="max-w-6xl mx-auto mt-8 px-4">
                <div className="flex flex-wrap justify-center gap-4">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon

                        return (
                            <Card
                                key={index}
                                className={`
                                    w-full sm:w-[calc(50%-8px)] lg:w-[calc(25%-12px)]
                                    min-w-[200px] max-w-[280px]
                                    group bg-[#151413] border rounded-2xl
                                    transition-all duration-500
                                    hover:-translate-y-1
                                    hover:shadow-[0_0_20px_rgba(241,213,79,0.08)]
                                    ${pillar.active
                                        ? "border-yellow-400/40 shadow-[0_0_20px_rgba(241,213,79,0.08)]"
                                        : "border-yellow-500/20 hover:border-yellow-400/40"}
                                `}
                            >
                                <CardContent className="p-4 flex flex-col h-full">
                                    {/* Icon */}
                                    <div
                                        className={`
                                            w-10 h-10 rounded-full
                                            flex items-center justify-center border mb-3
                                            transition-all duration-500
                                            ${pillar.active
                                                ? "bg-yellow-400 border-yellow-300"
                                                : "bg-yellow-500/10 border-yellow-500/20 group-hover:border-yellow-400/40"}
                                        `}
                                    >
                                        <Icon
                                            size={18}
                                            className={pillar.active ? "text-black" : "text-yellow-400"}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className={`${cormorant.className} text-lg text-luminous-gold font-bold leading-tight`}>
                                        {pillar.title}
                                    </h3>

                                    {/* Subtitle */}
                                    <p className="mt-1 text-gray-400 italic text-xs">
                                        {pillar.subtitle}
                                    </p>

                                    {/* Description */}
                                    <div className="mt-3 flex-1">
                                        <ul className="space-y-1 text-gray-300 text-xs leading-relaxed">
                                            {pillar.desc.map((item, i) => (
                                                <li key={i} className="flex gap-2 items-start">
                                                    <span className="w-1 h-1 rounded-full bg-yellow-400 mt-1.5 shrink-0" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Button */}
                                    <div className="mt-3 pt-2 border-t border-white/5">
                                        {pillar.link.startsWith("https") ? (
                                            <a
                                                href={pillar.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block w-full text-center px-3 py-1.5 rounded-full bg-yellow-400 text-black font-semibold text-xs hover:bg-yellow-300 transition-colors"
                                            >
                                                Explore More →
                                            </a>
                                        ) : (
                                            <Link
                                                href={pillar.link}
                                                className="inline-block w-full text-center px-3 py-1.5 rounded-full bg-yellow-400 text-black font-semibold text-xs hover:bg-yellow-300 transition-colors"
                                            >
                                                Explore More →
                                            </Link>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Pillar