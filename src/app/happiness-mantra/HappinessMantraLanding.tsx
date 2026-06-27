

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Check, CirclePlay, Globe2, Heart, Mail, MapPin, Menu, Phone, Sparkles, Star, Sun, Users } from "lucide-react";
import { FaFacebookF as Facebook, FaInstagram as Instagram, FaLinkedinIn as Linkedin, FaYoutube as Youtube } from "react-icons/fa";
import { siteLinks } from "@/lib/site-links";
import HappinessMantraActions from "./HappinessMantraActions";

const mantras = [
    { slug: "jyotish-mantra", n: "01", title: "Jyotish Mantra", hi: "ज्योतिष मंत्र", text: "Read life's patterns through the timeless sciences of light, numbers and space.", topics: ["Palmistry", "Astrology", "Numerology", "Kundli", "Gemology", "Vaastu"], logo: "/jyotishMantraLogo.png", tone: "violet" },
    { slug: "health-mantra", n: "02", title: "Health Mantra", hi: "स्वास्थ्य मंत्र", text: "Build physical, mental and social well-being through simple habits and inner balance.", topics: ["Body", "Mind", "Routine", "Well-being"], logo: "/healthMantraLogo.png", tone: "rose" },
    { slug: "success-mantra", n: "03", title: "Success Mantra", hi: "सफलता मंत्र", text: "Turn talent into meaningful progress with clear formulas, practice and purposeful action.", topics: ["3P Formula", "Talent", "Planning", "Change maker"], logo: "/successMantraLogo.png", tone: "amber" },
    { slug: "money-mantra", n: "04", title: "Money Mantra", hi: "धन मंत्र", text: "Learn to earn, manage and increase wealth with practical, stable and ethical methods.", topics: ["Earn", "Manage", "Increase", "Debt freedom"], logo: "/moneyMantraLogo.png", tone: "emerald" },
    { slug: "music-mantra", n: "05", title: "Music Mantra", hi: "संगीत मंत्र", text: "Discover rhythm and expression through vocal and instrumental foundations.", topics: ["Vocal", "Harmonium", "Tabla", "Flute", "Guitar"], logo: "/musicmantraLogo.png", tone: "blue" },
    { slug: "maths-mantra", n: "06", title: "Maths Mantra", hi: "गणित मंत्र", text: "Make numbers friendly with Vedic methods, daily maths and applied numerology.", topics: ["Vedic Maths", "Daily Maths", "Numerology"], logo: "/mathsmantraLogo.png", tone: "cyan" },
    { slug: "bhasha-mantra", n: "07", title: "Bhasha Mantra", hi: "भाषा मंत्र", text: "Speak and write with clarity through linguistics, grammar, poetry, songs and ghazal.", topics: ["Grammar", "Spelling", "Poetry", "Songs", "Ghazal"], logo: "/bhasaMantraLogo.png", tone: "orange" },
    { slug: "love-mantra", n: "08", title: "Love Mantra", hi: "प्रेम मंत्र", text: "Develop harmony in marriage, family and daily relationships.", topics: ["Marriage", "Family", "Respect", "Communication"], logo: "/relationshipMantraLogo.png", tone: "rose" },
    { slug: "career-mantra", n: "09", title: "Career Mantra", hi: "करियर मंत्र", text: "Prepare for study, jobs, exams and professional growth with clarity.", topics: ["Students", "Jobs", "Exams", "Growth"], logo: "/careerMantraLogo.png", tone: "cyan" },
    { slug: "business-mantra", n: "10", title: "Business Mantra", hi: "व्यापार मंत्र", text: "Learn startup thinking, marketing, branding and ethical leadership.", topics: ["Startup", "Marketing", "Branding", "Leadership"], logo: "/businessMantraLogo.png", tone: "emerald" },
    { slug: "spiritual-mantra", n: "11", title: "Spiritual Mantra", hi: "अध्यात्म मंत्र", text: "Explore meditation, Gita, Vedanta and consciousness for inner steadiness.", topics: ["Meditation", "Gita", "Vedanta", "Consciousness"], logo: "/spiritualityMantraLogo.png", tone: "violet" },
    { slug: "humanity-mantra", n: "12", title: "Humanity Mantra", hi: "मानवता मंत्र", text: "Connect service, culture, environment and nation building into daily action.", topics: ["Service", "Culture", "Environment", "Nation"], logo: null, tone: "orange" },
];

export default function HappinessMantraLanding(): React.JSX.Element {
    return (
        <main className="hm-page">
            <header className="hm-nav">
                <div className="hm-nav-inner">
                    <Link className="hm-brand" href="/happiness-mantra">
                        <Image src="/rrfoundationlogo.png" alt="RR World logo" width={46} height={46} />
                        <span><strong>Happiness Mantra</strong><small>Knowledge · Joy · Wellbeing</small></span></Link><Link className="hm-back-home" href="/"><ArrowLeft /> RR World</Link>
                    <nav><a href="#about">About</a><a href="#mantras">Mantras</a>
                        <a href="#demo">Free demo</a>
                        <a href="#shop">Shop</a>
                        <a className="hm-nav-cta" href="#consult">Consult now</a>
                    </nav>
                    <a className="hm-menu" href="#mantras" aria-label="Open courses">
                        <Menu />
                    </a>
                </div>
            </header>
            <section className="hm-hero">
                <div className="hm-stars" />
                <div className="hm-container hm-hero-grid">
                    <div className="hm-hero-copy">
                        <div className="hm-kicker">
                            <Sun size={15} /> Ancient wisdom for modern life</div>
                        <h1>Find your path.<br /><em>Live your mantra.</em></h1>
                        <p className="hm-lead">A guided learning platform with 12 focused mantra courses, free preview lessons, structured syllabus modules, and private access to course videos and PDF study material.</p>
                        <div className="hm-actions"><a className="hm-button hm-primary" href="#demo">Watch free demo <CirclePlay size={18} /></a>
                            <a className="hm-button hm-ghost" href="#mantras">Explore mantras <ArrowRight size={18} /></a>
                        </div><div className="hm-trust">
                            <div className="hm-avatars">
                                <span>Om</span><span>Shri</span><span>Ram</span></div>
                            <div>
                                <div className="hm-rating">{[1, 2, 3, 4, 5].map(n => <Star key={n} size={14} fill="currentColor" />)}
                                </div>
                                <small>Wisdom shaped by 30+ years of study</small>
                            </div>
                        </div>
                    </div>
                    <div className="hm-orbit">
                        <div className="hm-aura" />
                        <Image className="hm-zodiac" src="/banner_image.png" alt="Zodiac wheel" width={550} height={550} priority />
                        <div className="hm-orbit-center">
                            <span>Om</span><small>Happiness<br />Mantra</small>
                        </div>
                        <i className="one">Jyotish</i>
                        <i className="two">Success</i>
                        <i className="three">Money</i></div>
                </div>
                <div className="hm-container hm-stats">
                    <div><strong>12</strong><span>Mantra course paths</span>
                    </div>
                    <div>
                        <strong>30+</strong><span>Years of wisdom</span>
                    </div>
                    <div>
                        <strong>100+</strong><span>Practical lessons</span>
                    </div>
                    <div>
                        <strong>2</strong><span>Hindi + English</span>
                    </div>
                </div>
            </section>
            <section className="hm-section hm-intro" id="about">
                <div className="hm-container hm-intro-grid">
                    <div>
                        <div className="hm-eyebrow">One platform · 12 guided course paths</div>
                        <h2>More than learning.<br /><em>A way of living.</em></h2>
                    </div>
                    <div className="hm-intro-copy">
                        <p>Happiness Mantra brings Eastern wisdom into a clear, practical learning experience. Move beyond material success toward balance in health, wealth, relationships, self-expression and inner joy.</p>
                        <div className="hm-principles">
                            <span><Check /> Practice with purpose</span><span>
                                <Check /> Learn with clarity</span><span>
                                <Check /> Grow with balance</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hm-section hm-mantras" id="mantras"><div className="hm-container"><Heading eyebrow="Choose your journey" title={<>The 12 <em>mantras</em></>} text="Each course includes preview lessons, a focused syllabus, guided video modules, and supporting PDF study material." /><div className="hm-card-grid">{mantras.map(m => <article className={`hm-card ${m.tone}`} key={m.slug}><div className="hm-card-top"><b>{m.logo ? <Image src={m.logo} alt={`${m.title} logo`} width={38} height={38} /> : <Users />}</b><div><h3>{m.title}</h3><p className="hm-hindi">{m.hi}</p></div></div><p>{m.text}</p><div className="hm-topics">{m.topics.map(t => <span key={t}>{t}</span>)}</div><Link href={`/happiness-mantra/courses/${m.slug}`}>View course <ArrowRight /></Link></article>)}</div></div></section>
            <section className="hm-section hm-demo" id="demo"><div className="hm-container hm-demo-card"><div className="hm-video"><Image src="/bg5.jpg" alt="Happiness Mantra course preview" fill sizes="(max-width:800px) 100vw,50vw" /><div /><Link href="/happiness-mantra/courses/free-demo" aria-label="Play free preview"><CirclePlay /></Link><span>12 mantras · free preview lessons</span></div><div className="hm-demo-copy"><div className="hm-kicker"><Sparkles /> Preview before enrollment</div><h2>Watch the previews.<br /><em>Choose your course.</em></h2><p>Explore selected preview lessons for each mantra before requesting access to the full course material.</p><ul><li><Check /> Curated preview lessons for every mantra</li><li><Check /> Full courses include video modules and PDF notes</li><li><Check /> Access is shared after enrollment verification</li></ul><Link className="hm-button hm-cream" href="/happiness-mantra/courses/free-demo">Start free demo <ArrowRight /></Link></div></div></section>
            <section className="hm-section hm-founder"><div className="hm-container hm-founder-grid"><div className="hm-portrait"><div className="hm-ring" /><Image src="/profile.png" alt="Dr. Raja Ram Yadav" width={460} height={620} /><div className="hm-experience"><strong>30+</strong><span>years of<br />teaching</span></div></div><div className="hm-founder-copy"><div className="hm-eyebrow">Your guide on this journey</div><h2>Wisdom, made<br /><em>human.</em></h2><blockquote>&quot;Knowledge becomes powerful when it helps us live with greater clarity, prosperity and compassion.&quot;</blockquote><p>Dr. Raja Ram Yadav brings decades of learning across astrology, Vedic studies, education, language, music and life guidance into one accessible platform.</p><div className="hm-founder-points"><span><Globe2 /> Holistic perspective</span><span><BookOpen /> Practical curriculum</span><span><Heart /> People-first teaching</span></div><a className="hm-text-link" href="#contact">Know your mentor <ArrowRight /></a></div></div></section>
            <HappinessMantraActions />
            <footer className="hm-footer" id="contact">
                <div className="hm-footer-mandala">
                    Om
                </div>
                <div className="hm-container">
                    <div className="hm-footer-callout">
                        <div>
                            <span>Your journey can begin today</span>
                            <h2>One small mantra.<br /><em>One meaningful shift.</em></h2>
                        </div>
                        <a href="#demo">Begin with the free lesson <CirclePlay /></a>
                    </div>
                    <div className="hm-footer-main">
                        <div className="hm-footer-brand">
                            <Image src="/rrfoundationlogo.png" alt="RR World" width={64} height={64} />
                            <div>
                                <strong>Happiness Mantra</strong><span>An RR World initiative</span>
                            </div>
                            <p>Ancient wisdom, practical learning and soulful living made accessible for the modern world.</p>
                            <div className="hm-footer-social ">
                                <a href={siteLinks.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <Youtube />
                                </a>

                                <a href={siteLinks.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram />
                                </a>

                                <a href={siteLinks.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <Linkedin />
                                </a>

                                <a href={siteLinks.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                        <div className="hm-footer-column">
                            <h4>Explore</h4>
                            <a href="#about">Our philosophy</a>
                            <a href="#mantras">All 12 mantras</a>
                            <a href="#demo">Free demo</a>
                            <a href="#shop">Mantra shop</a>
                        </div>
                        <div className="hm-footer-column">
                            <h4>Popular paths</h4>
                            <Link href="/happiness-mantra/courses/jyotish-mantra">Jyotish Mantra</Link>
                            <Link href="/happiness-mantra/courses/success-mantra">Success Mantra</Link>
                            <Link href="/happiness-mantra/courses/money-mantra">Money Mantra</Link>
                            <Link href="/happiness-mantra/courses/bhasha-mantra">Bhasha Mantra</Link>
                        </div>
                        <div className="hm-footer-column contact">
                            <h4>Speak with us</h4><a href={siteLinks.phoneHref}>
                                <Phone /> {siteLinks.phoneDisplay}</a>
                            <a href={siteLinks.emailHref}>
                                <Mail /> {siteLinks.email}
                            </a>
                            <span>
                                <MapPin /> New Delhi, India
                            </span>
                        </div>
                    </div>
                    <div className="hm-footer-bottom">
                        <span>© 2026 RR World. All rights reserved.</span><strong>Knowledge · Joy · Wellbeing</strong>
                        <div>
                            <Link href="/privacy-policy">Privacy</Link>
                            <Link href="/terms-of-service">Terms</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}

function Heading({ eyebrow, title, text }: { eyebrow: string; title: React.ReactNode; text: string }) { return <div className="hm-heading"><div><div className="hm-eyebrow">{eyebrow}</div><h2>{title}</h2></div><p>{text}</p></div> }
