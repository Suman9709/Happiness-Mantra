'use client'

import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Herosection = () => {
    return (
        <div
            className="w-full min-h-screen bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: "url('/bg1.jpg')" }}
        >

            <div className="max-w-7xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Left side */}
                <div className="space-y-4">
                    <p className="text-4xl font-bold text-font">
                        Transform Your Life with Ancient Wisdom
                    </p>
                    <p className="text-lg mt-2 font-bold text-font">Learn from 30+ years of experience in <br />
                        Jyotish, Vedic Maths, Music, Success Science & Spiritual Guidance</p>

                    <div className="text-sm md:text-lg flex flex-wrap gap-3 md:gap-6 text-[#fe6f00]">
                        <p><span className="font-bold text-font">•</span> Astrology</p>
                        <p><span className="font-bold text-font">•</span> Wealth</p>
                        <p><span className="font-bold text-font">•</span> Success</p>
                        <p><span className="font-bold text-font">•</span> Happiness</p>
                        <p><span className="font-bold text-font" >•</span> Vedic Learning</p>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <Button className="bg-[#fe6f00] hover:bg-[#e55d00] text-font px-4 py-6" >Get Started</Button>
                        <Button className="bg-[#fe6f00] hover:bg-[#e55d00] text-font px-4 py-6">Book Consultation</Button>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex justify-center">
                    <Image
                        src="/banner_image.png"
                        alt="zodiac"
                        width={350}
                        height={350}
                        className="rotate-slow w-55 sm:w-70 md:w-87.5 h-auto"
                    />
                </div>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-0">
                <div className="p-4 rounded-xl shadow-md">
                    <CountingNumber 
                    className="text-[#fe6f00] text-4xl"
                    number={1000}  />
                    <p className="text-font">Students</p>
                </div>

                <div className="p-4 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-[#fe6f00]">500+</h2>
                    <p className="text-font">Consultations</p>
                </div>

                <div className="p-4 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-[#fe6f00]">30+</h2>
                    <p className="text-font">Years Experience</p>
                </div>

                <div className="p-4 rounded-xl shadow-md">
                    <h2 className="text-3xl font-bold text-[#fe6f00]">7</h2>
                    <p className="text-font">Core Disciplines</p>
                </div>
            </div>
        </div>
    )
}

export default Herosection