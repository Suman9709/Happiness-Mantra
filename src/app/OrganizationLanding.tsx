import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Building2, Check, Globe2, GraduationCap, HeartHandshake, Mail, MapPin, Menu, Music2, Phone, Play, Quote, Rocket, Sparkles, Users } from "lucide-react";
import { FaInstagram as Instagram, FaLinkedinIn as Linkedin, FaYoutube as Youtube } from "react-icons/fa";
import "./organization.css";

const pillars = [
    { number: "01", title: "RR Foundation", tag: "Serve", text: "Building stronger communities through education, care and opportunity.", image: "/ngo.jpg", icon: HeartHandshake, color: "coral" },
    { number: "02", title: "RR School", tag: "Learn", text: "Practical, inclusive learning that prepares young minds for the real world.", image: "/school.jpg", icon: GraduationCap, color: "teal" },
    { number: "03", title: "Happiness Mantra", tag: "Transform", text: "Ancient wisdom translated into modern guidance for a balanced life.", image: "/zodiac.png", icon: Sparkles, color: "violet", href: "/happiness-mantra" },
    { number: "04", title: "RR Studio", tag: "Create", text: "A creative home for music, storytelling, ideas and meaningful expression.", image: "/hero2.png", icon: Music2, color: "amber" },
];

export default function OrganizationLanding() {
    return <div className="org-page">
        <header className="org-nav"><div className="org-container"><Link href="/" className="org-brand"><Image src="/rrfoundationlogo.png" alt="RR World" width={48} height={48} /><span><strong>RR World</strong><small>Ideas into impact</small></span></Link><nav><a href="#about">Our story</a><a href="#initiatives">Initiatives</a><a href="#impact">Impact</a><a href="#contact">Contact</a></nav><Link href="/happiness-mantra" className="org-nav-cta">Happiness Mantra <ArrowRight /></Link><a className="org-mobile-menu" href="#initiatives" aria-label="Explore initiatives"><Menu /></a></div></header>

        <main>
            <section className="org-hero"><div className="org-noise" /><div className="org-glow glow-one" /><div className="org-glow glow-two" /><div className="org-container org-hero-grid"><div className="org-hero-copy"><div className="org-pill"><span /> Education · Self-reliance · Well-being</div><h1>Where purpose<br />becomes <em>progress.</em></h1><p>RR World is a human-first ecosystem turning knowledge, creativity and ancient wisdom into opportunity for every generation.</p><div className="org-actions"><a className="org-button primary" href="#initiatives">Explore our world <ArrowRight /></a><a className="org-button secondary" href="#about"><Play fill="currentColor" /> Our story</a></div><div className="org-proof"><div><strong>10K+</strong><span>Lives reached</span></div><div><strong>4</strong><span>Impact pillars</span></div><div><strong>30+</strong><span>Years of vision</span></div></div></div>
                <div className="org-hero-visual"><div className="org-visual-card main"><Image src="/profile.png" alt="Dr. Raja Ram Yadav, founder of RR World" fill sizes="(max-width:900px) 90vw, 42vw" priority /><div className="org-card-caption"><span>Founder & visionary</span><strong>Dr. Raja Ram Yadav</strong></div></div><div className="org-float-card top"><Globe2 /><div><strong>One connected world</strong><span>Learning without limits</span></div></div><div className="org-float-card bottom"><Rocket /><div><strong>Ideas into action</strong><span>Purposeful progress</span></div></div><div className="org-orbit orbit-a" /><div className="org-orbit orbit-b" /></div>
            </div><div className="org-marquee"><div><span>शिक्षा</span><i>✦</i><span>SELF-RELIANCE</span><i>✦</i><span>CREATIVITY</span><i>✦</i><span>HAPPINESS</span><i>✦</i><span>स्वरोजगार</span></div></div></section>

            <section className="org-section org-intro" id="about"><div className="org-container org-intro-grid"><div><div className="org-eyebrow">Our reason for being</div><h2>Many paths.<br /><em>One shared future.</em></h2></div><div className="org-intro-copy"><p>We believe meaningful change begins when education meets dignity, creativity meets opportunity, and personal growth serves the wider community.</p><div className="org-values"><span><Check /> Learn with curiosity</span><span><Check /> Build with courage</span><span><Check /> Serve with compassion</span></div></div></div></section>

            <section className="org-section org-pillars" id="initiatives"><div className="org-container"><SectionTitle eyebrow="One ecosystem · four expressions" title={<>Explore the <em>RR World</em></>} text="Four distinct initiatives, united by one promise: help people learn, grow, create and thrive." /><div className="org-pillar-grid">{pillars.map(p => { const Icon = p.icon; return <Link href={p.href ?? "#contact"} className={`org-pillar ${p.color}`} key={p.title}><div className="org-pillar-image"><Image src={p.image} alt="" fill sizes="(max-width:700px) 100vw, 25vw" /><div /></div><div className="org-pillar-body"><div className="org-pillar-meta"><span>{p.number}</span><b><Icon /></b></div><small>{p.tag}</small><h3>{p.title}</h3><p>{p.text}</p><span className="org-discover">Discover <ArrowRight /></span></div></Link> })}</div></div></section>

            <section className="org-section org-story"><div className="org-container org-story-grid"><div className="org-story-art"><div className="org-story-image"><Image src="/about1.jpg" alt="Education and community at RR World" fill sizes="(max-width:900px) 100vw, 48vw" /></div><div className="org-story-badge"><strong>Since</strong><span>1994</span></div></div><div className="org-story-copy"><div className="org-eyebrow">The vision behind the work</div><h2>Knowledge should<br /><em>move lives forward.</em></h2><p>Inspired by Dr. Raja Ram Yadav’s journey as an educator, physicist, researcher and guide, RR World connects deep scholarship with practical action.</p><blockquote><Quote />“True education does not simply inform a person. It gives them the confidence to shape their own future.”</blockquote><a href="#contact" className="org-text-link">Meet our founder <ArrowRight /></a></div></div></section>

            <section className="org-section org-impact" id="impact"><div className="org-container"><SectionTitle eyebrow="Progress you can feel" title={<>Impact with <em>intention</em></>} text="Every program is designed around useful knowledge, personal agency and long-term community value." /><div className="org-impact-grid"><article><Users /><strong>10,000+</strong><h3>Lives touched</h3><p>Across education, guidance and community programs.</p></article><article><BookOpen /><strong>100+</strong><h3>Research works</h3><p>Ideas built on study, experience and real-world relevance.</p></article><article><Building2 /><strong>4</strong><h3>Connected initiatives</h3><p>One ecosystem supporting the whole human journey.</p></article></div><div className="org-impact-banner"><div><span>Ready to create meaningful change?</span><h3>There is a place for your energy here.</h3></div><a href="mailto:contact@rrworld.org">Collaborate with us <ArrowRight /></a></div></div></section>
        </main>

        <footer className="org-footer" id="contact">
            <div className="org-footer-orb" /><div className="org-container"><div className="org-footer-top"><div><div className="org-eyebrow">Stay close to the work</div><h2>Good ideas grow<br />when we <em>share them.</em></h2></div><a className="org-footer-mail" href="mailto:contact@rrworld.org"><span>Start a conversation</span><strong>contact@rrworld.org</strong><ArrowRight /></a></div><div className="org-footer-main"><div className="org-footer-brand"><Image src="/rrfoundationlogo.png" alt="RR World" width={64} height={64} /><p>Education, self-reliance, creativity and happiness—woven into one world of possibility.</p>
                <div className="org-socials">
                    <a href="https://www.youtube.com/@dr.rajaramyadav" aria-label="YouTube" className="flex items-center">
                        <Youtube />
                    </a>
                    <a href="https://www.instagram.com/officialrry" aria-label="Instagram">
                        <Instagram />
                    </a>
                    <a href="https://www.linkedin.com/in/dr-raja-ram-yadav-astrologer-33a64821/" aria-label="LinkedIn">
                        <Linkedin />
                    </a>
                </div>
            </div>
                <div>
                    <h4>Explore</h4>
                    <a href="#about">Our story</a>
                    <a href="#initiatives">Initiatives</a>
                    <Link href="/happiness-mantra">Happiness Mantra</Link>
                </div>
                <div>
                    <h4>Connect</h4>
                    <a href="tel:+919911894311">
                        <Phone /> +91 99118 94311</a>
                    <a href="mailto:contact@rrworld.org">
                        <Mail /> contact@rrworld.org</a>
                    <span>
                        <MapPin /> New Delhi, India</span>
                </div>
            </div>
                <div className="org-footer-bottom">
                    <span>© 2026 RR World. Built for a brighter, kinder future.</span>
                    <div>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                        <span>शिक्षा · स्वावलंबन · स्वरोजगार</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) { return <div className="org-section-title"><div><div className="org-eyebrow">{eyebrow}</div><h2>{title}</h2></div><p>{text}</p></div> }
