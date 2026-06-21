'use client';

import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["700"],
});

export default function Hero() {
    return (
        <section className="relative flex items-center w-full overflow-hidden bg-black min-h-[500px] sm:min-h-[580px] md:min-h-[650px] lg:min-h-[620px]">
            <div className="absolute inset-0 bg-[#050505]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(120,0,0,0.9),_transparent_45%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#2a0000]/40 via-black/20 to-black" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(#c28a18_0.8px,transparent_0.8px)] [background-size:110px_110px] opacity-80" />
            <div className="absolute inset-0 bg-black/25" />

            {/* Right-side image (hidden on small screens) */}
            <div className="hidden md:block absolute right-0 top-0 h-full w-[42%] z-10 perspective-[1200px]">
                <div className="relative w-full h-full animate-mandalaRotate">
                    <Image
                        src="/herob1.png"
                        alt="Hero Background"
                        fill
                        priority
                        className="object-contain object-center"
                    />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 w-full px-4 sm:px-8 md:px-12">
                <div className="max-w-6xl ">
                    <div className="w-full max-w-3xl">
                        <h1
                            className={`${cormorant.className} text-luminous-gold font-bold leading-[1.1] text-[28px] sm:text-4xl md:text-5xl lg:text-6xl`}
                        >
                            RR World <br />
                            Siksha, Savalambam <br />
                            Sawrojgar
                        </h1>

                        <p className="mt-6 md:mt-8 max-w-full md:max-w-lg text-gray-400 text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed text-wrap">
                            Empowering lives through education, self-reliance, creativity,
                            and happiness. We bridge ancient wisdom with modern opportunity.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 mt-8 md:mt-12">
                            <button className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#f1d54f] text-black font-bold shadow-[0_0_40px_rgba(241,213,79,0.35)] hover:scale-105 transition duration-300">
                                EXPLORE NOW
                            </button>

                            <button className="px-8 md:px-10 py-3 md:py-4 rounded-full border border-yellow-500/30 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/10 transition">
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}