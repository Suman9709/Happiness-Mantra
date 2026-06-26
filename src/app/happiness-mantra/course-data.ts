export type HappinessCourse = {
    slug: string;
    n: string;
    title: string;
    hi: string;
    text: string;
    topics: string[];
    tone: string;
    duration: string;
    level: string;
    outcome: string;
    youtubeQuery: string;
    modules: string[];
};

const youtubeChannel = siteLinks.socials.youtube;

export const happinessCourses: HappinessCourse[] = [
    {
        slug: "jyotish-mantra",
        n: "01",
        title: "Jyotish Mantra",
        hi: "Jyotish Mantra",
        text: "Read life's patterns through the timeless sciences of light, numbers and space.",
        topics: ["Palmistry", "Astrology", "Numerology", "Kundli", "Gemology", "Vaastu"],
        tone: "violet",
        duration: "6 modules",
        level: "Beginner friendly",
        outcome: "Understand birth charts, signs, numbers and practical vastu basics with confidence.",
        youtubeQuery: "jyotish mantra astrology palmistry numerology kundli gemology vastu",
        modules: ["Palmistry foundations", "Astrology basics", "Numerology method", "Kundli reading", "Gemology guidance", "Vaastu for home and work"],
    },
    {
        slug: "happiness-mantra",
        n: "02",
        title: "Happiness Mantra",
        hi: "Anand Ka Mantra",
        text: "Move from momentary comfort to lasting joy through Eastern wisdom and self-awareness.",
        topics: ["Purpose", "Relationships", "Respect", "Inner joy"],
        tone: "rose",
        duration: "4 modules",
        level: "All learners",
        outcome: "Build daily practices for purpose, emotional balance and meaningful relationships.",
        youtubeQuery: "happiness mantra purpose relationships inner joy eastern wisdom",
        modules: ["Purpose and self-awareness", "Healthy relationships", "Respect and gratitude", "Inner joy practices"],
    },
    {
        slug: "success-mantra",
        n: "03",
        title: "Success Mantra",
        hi: "Safalta Mantra",
        text: "Turn talent into meaningful progress with clear formulas, practice and purposeful action.",
        topics: ["3P Formula", "Talent", "Planning", "Change maker"],
        tone: "amber",
        duration: "4 modules",
        level: "Action oriented",
        outcome: "Convert goals into consistent work using planning, practice and personal leadership.",
        youtubeQuery: "success mantra 3P formula talent planning change maker motivation",
        modules: ["The 3P formula", "Finding your talent", "Planning and discipline", "Becoming a change maker"],
    },
    {
        slug: "money-mantra",
        n: "04",
        title: "Money Mantra",
        hi: "Dhan Mantra",
        text: "Learn to earn, manage and increase wealth with practical, stable and ethical methods.",
        topics: ["Earn", "Manage", "Increase", "Debt freedom"],
        tone: "emerald",
        duration: "4 modules",
        level: "Practical finance",
        outcome: "Create a calm money system for earning, budgeting, saving and debt reduction.",
        youtubeQuery: "money mantra earn manage increase wealth debt freedom",
        modules: ["Earning mindset", "Money management", "Growth and savings", "Debt freedom plan"],
    },
    {
        slug: "music-mantra",
        n: "05",
        title: "Music Mantra",
        hi: "Sangeet Mantra",
        text: "Discover rhythm and expression through vocal and instrumental foundations.",
        topics: ["Vocal", "Harmonium", "Tabla", "Flute", "Guitar"],
        tone: "blue",
        duration: "5 modules",
        level: "Beginner practice",
        outcome: "Start a musical routine across voice, rhythm and melody with guided basics.",
        youtubeQuery: "music mantra vocal harmonium tabla flute guitar lessons",
        modules: ["Vocal basics", "Harmonium practice", "Tabla rhythm", "Flute foundations", "Guitar starter lessons"],
    },
    {
        slug: "maths-mantra",
        n: "06",
        title: "Maths Mantra",
        hi: "Ganit Mantra",
        text: "Make numbers friendly with Vedic methods, daily maths and applied numerology.",
        topics: ["Vedic Maths", "Daily Maths", "Numerology"],
        tone: "cyan",
        duration: "3 modules",
        level: "Student friendly",
        outcome: "Use faster mental methods and practical number sense in study and daily life.",
        youtubeQuery: "maths mantra vedic maths daily maths numerology",
        modules: ["Vedic maths shortcuts", "Daily maths confidence", "Applied numerology"],
    },
    {
        slug: "bhasha-mantra",
        n: "07",
        title: "Bhasha Mantra",
        hi: "Bhasha Mantra",
        text: "Speak and write with clarity through linguistics, grammar, poetry, songs and ghazal.",
        topics: ["Grammar", "Spelling", "Poetry", "Songs", "Ghazal"],
        tone: "orange",
        duration: "5 modules",
        level: "Creative language",
        outcome: "Improve language expression through grammar, pronunciation and creative writing.",
        youtubeQuery: "bhasha mantra grammar spelling poetry songs ghazal language learning",
        modules: ["Grammar clarity", "Spelling and pronunciation", "Poetry writing", "Songs as language", "Ghazal expression"],
    },
];

export const freeDemoCourse: HappinessCourse = {
    slug: "free-demo",
    n: "00",
    title: "Free Demo Course",
    hi: "Intro Mantra",
    text: "A free orientation that introduces all seven Happiness Mantra learning paths.",
    topics: happinessCourses.map((course) => course.title.replace(" Mantra", "")),
    tone: "violet",
    duration: "7 previews",
    level: "Free introduction",
    outcome: "Choose the mantra course that matches your current life goal.",
    youtubeQuery: "happiness mantra jyotish success money music maths bhasha introduction",
    modules: happinessCourses.map((course) => `${course.title} overview`),
};

export const allHappinessCourses = [freeDemoCourse, ...happinessCourses];

export function getHappinessCourse(slug: string) {
    return allHappinessCourses.find((course) => course.slug === slug);
}

export function getYoutubeSearchUrl(course: HappinessCourse) {
    return `${youtubeChannel}/search?query=${encodeURIComponent(course.youtubeQuery)}`;
}

export function getYoutubeEmbedUrl(course: HappinessCourse) {
    return `https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(`Dr Raja Ram Yadav ${course.youtubeQuery}`)}`;
}
import { siteLinks } from "@/lib/site-links";
