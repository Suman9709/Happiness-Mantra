

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Check, CirclePlay, Globe2, GraduationCap, Heart, Languages, Mail, MapPin, Menu, Music2, Phone, Sparkles, Star, Sun, TrendingUp, WalletCards } from "lucide-react";
import { FaFacebookF as Facebook, FaInstagram as Instagram, FaLinkedinIn as Linkedin, FaYoutube as Youtube } from "react-icons/fa";
import { siteLinks } from "@/lib/site-links";
import HappinessMantraActions from "./HappinessMantraActions";

const mantras = [
    { slug: "jyotish-mantra", n: "01", title: "Jyotish Mantra", hi: "ज्योतिष मंत्र", text: "Read life's patterns through the timeless sciences of light, numbers and space.", topics: ["Palmistry", "Astrology", "Numerology", "Kundli", "Gemology", "Vaastu"], icon: Sparkles, tone: "violet" },
    { slug: "happiness-mantra", n: "02", title: "Happiness Mantra", hi: "आनंद का मंत्र", text: "Move from momentary comfort to lasting joy through Eastern wisdom and self-awareness.", topics: ["Purpose", "Relationships", "Respect", "Inner joy"], icon: Heart, tone: "rose" },
    { slug: "success-mantra", n: "03", title: "Success Mantra", hi: "सफलता मंत्र", text: "Turn talent into meaningful progress with clear formulas, practice and purposeful action.", topics: ["3P Formula", "Talent", "Planning", "Change maker"], icon: TrendingUp, tone: "amber" },
    { slug: "money-mantra", n: "04", title: "Money Mantra", hi: "धन मंत्र", text: "Learn to earn, manage and increase wealth with practical, stable and ethical methods.", topics: ["Earn", "Manage", "Increase", "Debt freedom"], icon: WalletCards, tone: "emerald" },
    { slug: "music-mantra", n: "05", title: "Music Mantra", hi: "संगीत मंत्र", text: "Discover rhythm and expression through vocal and instrumental foundations.", topics: ["Vocal", "Harmonium", "Tabla", "Flute", "Guitar"], icon: Music2, tone: "blue" },
    { slug: "maths-mantra", n: "06", title: "Maths Mantra", hi: "गणित मंत्र", text: "Make numbers friendly with Vedic methods, daily maths and applied numerology.", topics: ["Vedic Maths", "Daily Maths", "Numerology"], icon: GraduationCap, tone: "cyan" },
    { slug: "bhasha-mantra", n: "07", title: "Bhasha Mantra", hi: "भाषा मंत्र", text: "Speak and write with clarity through linguistics, grammar, poetry, songs and ghazal.", topics: ["Grammar", "Spelling", "Poetry", "Songs", "Ghazal"], icon: Languages, tone: "orange" },
];

export default function HappinessMantraLanding(): React.JSX.Element {
    return (
        <main className="hm-page">
            <header className="hm-nav">
                <div className="hm-nav-inner">
                    <Link className="hm-brand" href="/happiness-mantra">
                        <Image src="/rrfoundationlogo.png" alt="RR World logo" width={46} height={46} />
                        <span><strong>Happiness Mantra</strong><small>ज्ञान · आनंद · कल्याण</small></span></Link><Link className="hm-back-home" href="/"><ArrowLeft /> RR World</Link>
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
                        <p className="hm-lead">A guided universe of astrology, happiness, success, money, music, maths and language—created to bring knowledge, purpose and आनंद into everyday life.</p>
                        <div className="hm-actions"><a className="hm-button hm-primary" href="#demo">Watch free demo <CirclePlay size={18} /></a>
                            <a className="hm-button hm-ghost" href="#mantras">Explore mantras <ArrowRight size={18} /></a>
                        </div><div className="hm-trust">
                            <div className="hm-avatars">
                                <span>ॐ</span><span>श्री</span><span>ह्रीं</span></div>
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
                            <span>ॐ</span><small>Happiness<br />Mantra</small>
                        </div>
                        <i className="one">Jyotish</i>
                        <i className="two">Success</i>
                        <i className="three">Money</i></div>
                </div>
                <div className="hm-container hm-stats">
                    <div><strong>7</strong><span>Transformative paths</span>
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
                        <div className="hm-eyebrow">One philosophy · seven dimensions</div>
                        <h2>More than learning.<br /><em>A way of living.</em></h2>
                    </div>
                    <div className="hm-intro-copy">
                        <p>Happiness Mantra brings <strong>प्राच्य प्रज्ञान</strong>—Eastern wisdom—into a clear, practical learning experience. Move beyond material success toward balance in health, wealth, relationships, self-expression and inner joy.</p>
                        <div className="hm-principles">
                            <span><Check /> साधन से साधना</span><span>
                                <Check /> सुख से आनंद</span><span>
                                <Check /> ज्ञान से कल्याण</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hm-section hm-mantras" id="mantras"><div className="hm-container"><Heading eyebrow="Choose your journey" title={<>The seven <em>mantras</em></>} text="Begin with the free overview, then go deeper with a complete guided course and syllabus for every path." /><div className="hm-card-grid">{mantras.map(m => { const Icon = m.icon; return <article className={`hm-card ${m.tone}`} key={m.slug}><div className="hm-card-top"><span>{m.n}</span><b><Icon /></b></div><p className="hm-hindi">{m.hi}</p><h3>{m.title}</h3><p>{m.text}</p><div className="hm-topics">{m.topics.map(t => <span key={t}>{t}</span>)}</div><Link href={`/happiness-mantra/courses/${m.slug}`}>View course <ArrowRight /></Link></article> })}</div></div></section>
            <section className="hm-section hm-demo" id="demo"><div className="hm-container hm-demo-card"><div className="hm-video"><Image src="/bg5.jpg" alt="Happiness Mantra course preview" fill sizes="(max-width:800px) 100vw,50vw" /><div /><Link href="/happiness-mantra/courses/free-demo" aria-label="Play free preview"><CirclePlay /></Link><span>7 mantras · one free introduction</span></div><div className="hm-demo-copy"><div className="hm-kicker"><Sparkles /> Your first lesson is on us</div><h2>Meet every mantra.<br /><em>Choose what calls you.</em></h2><p>Watch the complete orientation to understand all seven learning paths before choosing a paid course.</p><ul><li><Check /> Overview of all seven disciplines</li><li><Check /> Bilingual teaching in Hindi and English</li><li><Check /> No payment or commitment required</li></ul><Link className="hm-button hm-cream" href="/happiness-mantra/courses/free-demo">Start free demo <ArrowRight /></Link></div></div></section>
            <section className="hm-section hm-founder"><div className="hm-container hm-founder-grid"><div className="hm-portrait"><div className="hm-ring" /><Image src="/profile.png" alt="Dr. Raja Ram Yadav" width={460} height={620} /><div className="hm-experience"><strong>30+</strong><span>years of<br />teaching</span></div></div><div className="hm-founder-copy"><div className="hm-eyebrow">Your guide on this journey</div><h2>Wisdom, made<br /><em>human.</em></h2><blockquote>“Knowledge becomes powerful when it helps us live with greater clarity, prosperity and compassion.”</blockquote><p>Dr. Raja Ram Yadav brings decades of learning across astrology, Vedic studies, education, language, music and life guidance into one accessible platform.</p><div className="hm-founder-points"><span><Globe2 /> Holistic perspective</span><span><BookOpen /> Practical curriculum</span><span><Heart /> People-first teaching</span></div><a className="hm-text-link" href="#contact">Know your mentor <ArrowRight /></a></div></div></section>
            <HappinessMantraActions />
            <footer className="hm-footer" id="contact">
                <div className="hm-footer-mandala">
                    ॐ
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
                            <p>Ancient wisdom, practical learning and soulful living—made accessible for the modern world.</p>
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
                            <a href="#mantras">All seven mantras</a>
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
                        <span>© 2026 RR World. All rights reserved.</span><strong>ज्ञान · आनंद · कल्याण</strong>
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
