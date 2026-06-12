"use client"

import React from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Sparkles } from "lucide-react"
import { LandingPageNavbar } from "@/components/ngo-navbar"

const CAROUSEL_IMAGES = [
  { src: "/ngo.jpg", alt: "NGO Community Work", title: "Empowering Communities Worldwide", subtitle: "Creating lasting impact through education and healthcare" },
  { src: "/school.jpg", alt: "School Classroom", title: "Enriching Young Minds For Tomorrow", subtitle: "Building foundations for a brighter future" },
]

// Custom SVG Icons
const Icons = {
  School: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10L12 5 2 10l10 5 10-5z" />
      <path d="M6 12v5c0 2 3 3.5 6 3.5s6-1.5 6-3.5v-5" />
    </svg>
  ),
  Sparkles: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v1m0 16v1M3 12h1m16 0h1M5.6 5.6l.7.7m12.1 12.1l.7.7M5.6 18.4l.7-.7m12.1-12.1l.7-.7" />
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8z" />
      <path d="M12 10v2m0 2h.01" />
    </svg>
  ),
  ArrowUpRight: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  ),
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
  Calendar: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  MapPin: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Home: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Clock: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Users: () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  ),
  Target: () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  TrendingUp: () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Gem: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  Star: () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Heart: () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  ),
  Award: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </svg>
  ),
  Zap: () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Globe: () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  CheckCircle: () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Mic: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  ),
  Feather: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17" y1="15" x2="9" y2="23" />
    </svg>
  ),
  Music: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  ),
  Quote: () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 11h-4v-4h4v4zm8 0h-4v-4h4v4zm-8 6h-4v-4h4v4zm8 0h-4v-4h4v4z" />
      <path d="M21 3h-18v18h18v-18zm-2 16h-14v-14h14v14z" />
    </svg>
  ),
  GraduationCap: () => (
    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10l-10-5L2 10l10 5 10-5z" />
      <path d="M6 12v5c0 2 3 3.5 6 3.5s6-1.5 6-3.5v-5" />
    </svg>
  )
}

export default function RRWorldPortal() {
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: false })
  )

  return (

    <>
      <LandingPageNavbar />
      <div className="min-h-screen  text-slate-900 flex flex-col justify-between ">
      
        <main className="flex-1 pb-24">


          {/* 1. HERO CAROUSEL SECTION - Responsive Height */}
          <section className="w-full h-[60vh] md:h-[70vh] lg:h-[85vh] relative overflow-hidden">
            <Carousel
              className="w-full h-full relative group"
              plugins={[autoplayPlugin.current]}
            >
              <CarouselContent className="h-full ml-0">
                {CAROUSEL_IMAGES.map((image, index) => (
                  <CarouselItem key={index} className="relative w-full h-[60vh] md:h-[70vh] lg:h-[85vh] pl-0">
                    <div className="absolute inset-0 bg-linear-to-r from-slate-900/70 via-slate-900/40 to-transparent z-10" />
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-10000"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-center items-start pb-16 md:pb-24 lg:pb-32 pt-16 md:pt-24 lg:pt-32 z-20">
                      <div className="max-w-5xl mx-auto w-full px-4 md:px-6 lg:px-8">
                        <div className="animate-fade-in-up">
                          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-amber-500/20 backdrop-blur-sm text-amber-200 text-[10px] md:text-xs font-semibold tracking-wide mb-3 md:mb-4 border border-amber-400/30">
                            {index === 0 ? "🌍 Global Initiative" : "📚 Education First"}
                          </span>
                          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight drop-shadow-2xl leading-tight">
                            {image.title}
                          </h2>
                          <p className="text-white/80 text-sm md:text-base lg:text-lg xl:text-xl mt-2 md:mt-3 lg:mt-4 max-w-2xl">
                            {image.subtitle}
                          </p>
                          <Button className="mt-4 md:mt-6 lg:mt-8 bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold rounded-full px-6 py-3 md:px-8 md:py-4 lg:px-8 lg:py-6 text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-300 group">
                            Learn More <Icons.ArrowUpRight />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Scroll indicator - hide on mobile */}
            <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden sm:block">
              <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-white/50 flex justify-center">
                <div className="w-1 h-1.5 md:w-1 md:h-2 bg-white/70 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </section>

          {/* 2. CORE INITIATIVES GATEWAY */}
          <section id="pillars" className="max-w-6xl mx-auto px-6 md:px-8 -mt-20 relative z-10 grid md:grid-cols-2 gap-8 items-stretch">


            {/* card 1st RR world */}
            <Card className="group relative overflow-hidden bg-white/95 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl rounded-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-linear-to-br from-emerald-500/5 via-transparent to-teal-500/5" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-emerald-500 via-teal-500 to-transparent" />

              <CardHeader className="pt-8 px-6 md:px-8 relative">
                <div className="h-14 w-14 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 text-white">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 10L12 5 2 10l10 5 10-5z" />
                    <path d="M6 12v5c0 2 3 3.5 6 3.5s6-1.5 6-3.5v-5" />
                  </svg>
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold tracking-tight bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  RRWorld Academy
                </CardTitle>
                <CardDescription className="text-xs text-slate-500 mt-1">
                  Empowering young minds through quality education
                </CardDescription>
              </CardHeader>

              <CardContent className="px-6 md:px-8 relative">
                <div className="space-y-3 border-t border-slate-100 pt-4">
                  {[
                    { icon: "📚", text: "Quality Education Infrastructure" },
                    { icon: "📖", text: "Standard Curriculum Development" },
                    { icon: "🎯", text: "95% Student Success Rate" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 group/item">
                      <div className="h-7 w-7 rounded-full bg-emerald-50 flex items-center justify-center group-hover/item:bg-emerald-100 transition-colors text-sm">
                        {item.icon}
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pb-6 px-6 md:px-8 pt-4 relative z-999">
                <Button asChild className="w-full bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl py-5 shadow-lg shadow-emerald-500/20 hover:shadow-xl transition-all duration-300">
                  <a href="https://rrworld.org/" target="_blank" rel="noopener noreferrer">
                    Access Portal <Icons.ArrowUpRight />
                  </a>
                </Button>
              </CardFooter>
            </Card>


            {/* 2nd card Happiness Mantra */}
            <Card className="group relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 border-0 shadow-xl hover:shadow-2xl rounded-3xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-linear-to-br from-amber-500/10 via-purple-500/5 to-transparent" />
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-amber-500/10 to-transparent" />
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-amber-500 via-orange-500 to-transparent" />

              {/* Sacred symbol */}
              <div className="absolute top-3 right-4 text-amber-500/30 text-2xl font-serif">ॐ</div>

              <CardHeader className="pt-8 px-6 md:px-8 relative">
                <div className="h-14 w-14 bg-linear-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-300 text-white">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>

                <div>
                  <CardTitle className="text-2xl md:text-3xl font-bold tracking-wide bg-linear-to-r from-amber-200 via-yellow-100 to-white bg-clip-text text-transparent">
                    HAPPINESS MANTRA
                  </CardTitle>
                  <p className="text-xs text-amber-400/70 mt-1 font-serif">खुश रहिये, खुशियाँ बाँटिये</p>
                </div>
              </CardHeader>

              <CardContent className="px-6 md:px-8 relative">
                <div className="space-y-3 border-t border-slate-700/50 pt-4">
                  {/* Palmistry & Vedic Math preview */}
                  <div className="grid grid-cols-2 gap-3 mb-2">
                    <div className="bg-slate-800/50 rounded-lg p-2 text-center">
                      <div className="text-amber-400 font-bold text-xs mb-1">PALMISTRY</div>
                      <div className="text-slate-300 text-[10px] font-mono">123² + 456² = 567²</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-2 text-center">
                      <div className="text-amber-400 font-bold text-xs mb-1">VEDIC MATH</div>
                      <div className="text-slate-300 text-[10px]">987654321 × 9 = 8888888889</div>
                    </div>
                  </div>

                  {/* Key offerings - simplified */}
                  {[
                    { icon: "🔮", text: "Palmistry & Astrology" },
                    { icon: "🎵", text: "Music & Spiritual Healing" },
                    { icon: "💰", text: "Wealth & Success Guidance" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 group/item">
                      <div className="h-7 w-7 rounded-full bg-amber-500/20 flex items-center justify-center group-hover/item:bg-amber-500/30 transition-colors text-sm">
                        {item.icon}
                      </div>
                      <span className="text-slate-200 text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pb-6 px-6 md:px-8 pt-4 relative z-999">
                <Button asChild className="w-full bg-linear-to-r from-amber-400 via-orange-500 to-amber-600 hover:from-amber-500 hover:to-orange-600 text-slate-950 font-bold rounded-xl py-5 shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all duration-300">
                  <Link href="/happiness-mantra">
                    <span className="flex items-center justify-center gap-2 text-sm">
                      <span>ॐ</span>
                      <span>Enter Portal</span>
                      <Sparkles className="h-4 w-4 stroke-[2.5]" />
                    </span>
                  </Link>
                </Button>
              </CardFooter>
            </Card>


          </section>

          {/* 3. ABOUT SECTION - FOUNDER PROFILE */}
          <section id="about" className="w-full py-24 md:py-32 bg-white relative overflow-hidden ">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold tracking-wide mb-4 border border-amber-200">
                  <Icons.Award />
                  Meet the Founder
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                  Visionary Behind <span className="bg-linear-to-r from-amber-600 to-emerald-600 bg-clip-text text-transparent">RRWorld</span>
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-amber-400 to-emerald-400 mx-auto mt-6 rounded-full" />
                <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                  A polymath blending ancient wisdom with modern science to transform lives
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">

                {/* LEFT COLUMN - Image & Social Icons */}
                <div className="lg:w-1/3 bg-linear-to-br from-amber-50/50 via-white to-slate-50 rounded-3xl p-4 border border-slate-100 shadow-xl flex flex-col items-center justify-center text-center relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-amber-100/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Centered Image */}
                  <div className="relative flex justify-center w-full">
                    <div className="absolute inset-0 bg-linear-to-tr from-amber-200 to-emerald-200 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute -inset-1 bg-linear-to-r from-amber-200 to-emerald-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none" />
                    <img
                      src="/profile.png"
                      alt="Dr. Raja Ram Yadav"
                      className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
                    />
                  </div>

                  {/* Social Icons - All Clickable */}
                  <div className="flex gap-3 mt-6 justify-center">
                    <a
                      href="https://www.youtube.com/@dr.rajaramyadav"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-red-500 hover:text-white flex items-center justify-center text-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                      aria-label="YouTube"
                    >
                      <Icons.Youtube />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/dr-raja-ram-yadav-astrologer-33a64821/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                      aria-label="LinkedIn"
                    >
                      <Icons.Linkedin />
                    </a>
                    <a
                      href="https://www.instagram.com/officialrry"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-pink-500 hover:text-white flex items-center justify-center text-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                      aria-label="Instagram"
                    >
                      <Icons.Instagram />
                    </a>
                    <a
                      href="https://www.facebook.com/do.raja.rama.yadava?rdid=Bc8QtEqGiDscRxpl&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CSVNW47Bx%2F#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-slate-100 hover:bg-blue-700 hover:text-white flex items-center justify-center text-slate-600 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer"
                      aria-label="Facebook"
                    >
                      <Icons.Facebook />
                    </a>
                  </div>
                </div>

                {/* MIDDLE COLUMN - Personal Info */}
                <div className="lg:w-1/3 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <h3 className="text-2xl font-bold text-slate-800">Dr. Raja Ram Yadav</h3>
                    <span className="inline-flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full">
                      <Icons.CheckCircle />
                      Verified
                    </span>
                  </div>
                  <p className="text-amber-600 font-semibold text-sm mb-6 flex items-center gap-2">
                    <Icons.Star />
                    Founder & Chief Astrologer
                    <Icons.Star />
                  </p>

                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-center gap-3 group">
                      <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors text-amber-500">
                        <Icons.Calendar />
                      </div>
                      <span>Born: 07 December 1975</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors text-amber-500">
                        <Icons.MapPin />
                      </div>
                      <span>Samastipur, Bihar, India</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors text-amber-500">
                        <Icons.Home />
                      </div>
                      <span>Residence: New Delhi, India</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="h-8 w-8 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors text-amber-500">
                        <Icons.Clock />
                      </div>
                      <span>34+ Years of Experience</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-500 font-medium mb-2 flex items-center gap-1">
                      <Icons.Zap />
                      Core Specializations
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Predictive Astrology", "Numerology", "Palmistry", "Vaastu", "Gemology"].map((skill, idx) => (
                        <span key={idx} className="text-xs bg-linear-to-r from-slate-100 to-slate-50 px-3 py-1.5 rounded-full text-slate-700 font-medium shadow-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN - About & Expertise */}
                <div className="lg:w-1/3 bg-white rounded-3xl p-8 border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="mb-5">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                      <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <Icons.Users />
                      </div>
                      About
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Indian astrologer, motivational speaker, poet, linguist, engineer, and musician.
                      Integrates engineering logic with Vedic mathematics for predictive astrology.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                      <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <Icons.Award />
                      </div>
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Jyotish", "Karmakand", "Vaastu Shastra", "Ratna Vigyan"].map((expertise, idx) => (
                        <span key={idx} className="text-xs bg-amber-50 text-amber-700 px-3 py-1.5 rounded-full font-medium">
                          {expertise}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-3">
                      <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                        <Icons.GraduationCap />
                      </div>
                      Credentials
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      B.E. (Mechanical), MBA, M.A. Hindi, M.Phil, PhD, PG Diploma in Translation, UGC-NET.
                      Deputy General Manager (Hindi) at a Govt. organization.
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex gap-3 justify-around">
                    <div className="text-center">
                      <div className="text-amber-500 mx-auto mb-1"><Icons.Mic /></div>
                      <p className="text-xs text-slate-500">Motivational<br />Speaker</p>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-500 mx-auto mb-1"><Icons.Feather /></div>
                      <p className="text-xs text-slate-500">Poet &<br />Writer</p>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-500 mx-auto mb-1"><Icons.Music /></div>
                      <p className="text-xs text-slate-500">Musician &<br />Singer</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote Section */}
              <div className="mt-16 text-center bg-linear-to-r from-slate-50 via-amber-50/30 to-slate-50 rounded-3xl p-8 border border-slate-100 shadow-lg relative overflow-hidden">
                <div className="absolute top-4 left-4 text-amber-200 opacity-50 pointer-events-none"><Icons.Quote /></div>
                <div className="absolute bottom-4 right-4 text-amber-200 opacity-50 rotate-180 pointer-events-none"><Icons.Quote /></div>
                <p className="text-slate-700 text-base md:text-lg italic max-w-3xl mx-auto leading-relaxed relative z-10">
                  "Integrating analytical thinking from engineering with Vedic mathematical principles to interpret astrological calculations and predictions —
                  over three decades of service to spiritual and educational upliftment."
                </p>
                <div className="flex items-center justify-center gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <div key={i} className="w-1 h-1 rounded-full bg-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        


        <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
      </div>
    </>
  )
}

