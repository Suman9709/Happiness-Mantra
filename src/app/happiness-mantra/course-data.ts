export type CourseModule = {
    key?: string;
    title: string;
    video: string;
    pdf: string;
    isDemo?: boolean;
    lectureCount?: number;
    description?: string;
    lectures?: CourseLectureSource[];
};

export type CourseLecture = {
    title: string;
    video: string;
    videoUrl: string;
    pdf: string;
    pdfUrl: string;
};

export type CourseLectureSource = {
    key?: string;
    title: string;
    video?: string;
    videoUrl?: string;
    pdf?: string;
    pdfUrl?: string;
};

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
    modules: CourseModule[];
};

export function getDrivePreviewUrl(url: string) {
    const match = url.match(/\/file\/d\/([^/]+)/);
    return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
}

function getReplaceableDriveUrl(prefix: string, lectureNumber: number, type: "video" | "pdf") {
    const id = `REPLACE_${prefix}_${lectureNumber}_${type}`.toUpperCase().replace(/[^A-Z0-9]+/g, "_");
    return `https://drive.google.com/file/d/${id}/view?usp=drive_link`;
}

function createLectureSyllabus(prefix: string, count = 10): CourseLectureSource[] {
    return Array.from({ length: count }, (_, index) => {
        const lectureNumber = index + 1;
        return {
            key: `lecture-${lectureNumber}`,
            title: `${prefix} - Lecture ${lectureNumber}`,
            video: `${prefix} Lec ${lectureNumber} Video`,
            videoUrl: getReplaceableDriveUrl(prefix, lectureNumber, "video"),
            pdf: `${prefix} Lec ${lectureNumber} PDF`,
            pdfUrl: getReplaceableDriveUrl(prefix, lectureNumber, "pdf"),
        };
    });
}

export function getModuleLectures(module: CourseModule): CourseLecture[] {
    if (module.lectures) {
        return module.lectures.map((lecture, index) => {
            const lectureNumber = index + 1;
            return {
                title: lecture.title,
                video: lecture.video ?? `${module.title} Lec ${lectureNumber} Video`,
                videoUrl: lecture.videoUrl ?? getReplaceableDriveUrl(module.title, lectureNumber, "video"),
                pdf: lecture.pdf ?? `${lecture.title} PDF notes`,
                pdfUrl: lecture.pdfUrl ?? getReplaceableDriveUrl(module.title, lectureNumber, "pdf"),
            };
        });
    }

    return Array.from({ length: module.lectureCount ?? 10 }, (_, index) => {
        const lectureNumber = index + 1;
        return {
            title: `${module.title} - Lecture ${lectureNumber}`,
            video: `${module.title} Lec ${lectureNumber} Video`,
            videoUrl: getReplaceableDriveUrl(module.title, lectureNumber, "video"),
            pdf: `${module.title} Lec ${lectureNumber} PDF`,
            pdfUrl: getReplaceableDriveUrl(module.title, lectureNumber, "pdf"),
        };
    });
}

export function getModuleLectureCount(module: CourseModule) {
    return module.lectures?.length ?? module.lectureCount ?? 10;
}

const palmistryLectureSyllabus: CourseLectureSource[] = [
    {
        title: "हस्तरेखा-विज्ञान का उद्देश्य और सही दृष्टि",
        key: "lecture-1",
        video: "Palmistry Lec 1 Video",
        videoUrl: "https://drive.google.com/file/d/1e6tKrUuMd3jZcqszyEyjdQGIE2Vd3BDO/view?usp=drive_link",
        pdf: "Palmistry Lec 1 PDF",
        pdfUrl: "https://drive.google.com/file/d/1x5U83eKYEomRkoHWyYH_6K1av1oeDoX0/view?usp=drive_link",
    },
    {
        title: "हाथ देखने की मूल विधि और तैयारी",
        key: "lecture-2",
        video: "Palmistry Lec 2 Video",
        videoUrl: "https://drive.google.com/file/d/1NH-tukS5LqFZEhpQ48lBVK198pC_ajIx/view?usp=drive_link",
        pdf: "Palmistry Lec 2 PDF",
        pdfUrl: "https://drive.google.com/file/d/1ZAiz-ncXyWt1iPAskrUbxz_FUFIxWzek/view?usp=drive_link",
    },
    {
        title: "दायाँ और बायाँ हाथ: मूल अंतर",
        key: "lecture-3",
        video: "Palmistry Lec 3 Video",
        videoUrl: "https://drive.google.com/file/d/1KCCeHdkucZzqChUJ-LLRJ5tTpGlWGur_/view?usp=drive_link",
        pdf: "Palmistry Lec 3 PDF",
        pdfUrl: "https://drive.google.com/file/d/1NJZa3erPg9wAwQI7dX7VNn7bsn56NjVR/view?usp=drive_link",
    },
    {
        title: "हथेली की बनावट, आकार और प्राथमिक संकेत",
        key: "lecture-4",
        video: "Palmistry Lec 4 Video",
        videoUrl: "https://drive.google.com/file/d/1pnlA4U8se_EBktoaabVzceozl6X4QrW4/view?usp=drive_link",
        pdf: "Palmistry Lec 4 PDF",
        pdfUrl: "https://drive.google.com/file/d/1G--o_gh5E5lfuLwEKQo8IBjPTWZ-SZ8q/view?usp=drive_link",
    },
    {
        title: "नाखून, त्वचा, रंग और करपृष्ठ का अवलोकन",
        key: "lecture-5",
        video: "Palmistry Lec 5 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_5_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 5 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_5_PDF/view?usp=drive_link",
    },
    {
        title: "अंगूठा: इच्छाशक्ति और विवेक के संकेत",
        key: "lecture-6",
        video: "Palmistry Lec 6 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_6_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 6 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_6_PDF/view?usp=drive_link",
    },
    {
        title: "उँगलियाँ और उनके प्रारंभिक संकेत",
        key: "lecture-7",
        video: "Palmistry Lec 7 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_7_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 7 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_7_PDF/view?usp=drive_link",
    },
    {
        title: "ग्रह-पर्वतों का परिचय",
        key: "lecture-8",
        video: "Palmistry Lec 8 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_8_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 8 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_8_PDF/view?usp=drive_link",
    },
    {
        title: "जीवन रेखा का मूल अर्थ",
        key: "lecture-9",
        video: "Palmistry Lec 9 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_9_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 9 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_9_PDF/view?usp=drive_link",
    },
    {
        title: "मस्तिष्क रेखा का मूल अर्थ",
        key: "lecture-10",
        video: "Palmistry Lec 10 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_10_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 10 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_10_PDF/view?usp=drive_link",
    },
    {
        title: "हृदय रेखा का मूल अर्थ",
        key: "lecture-11",
        video: "Palmistry Lec 11 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_11_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 11 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_11_PDF/view?usp=drive_link",
    },
    {
        title: "भाग्य रेखा का मूल अर्थ",
        key: "lecture-12",
        video: "Palmistry Lec 12 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_12_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 12 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_12_PDF/view?usp=drive_link",
    },
    {
        title: "सूर्य रेखा का मूल अर्थ",
        key: "lecture-13",
        video: "Palmistry Lec 13 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_13_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 13 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_13_PDF/view?usp=drive_link",
    },
    {
        title: "स्वास्थ्य रेखा और जागरूकता संकेत",
        key: "lecture-14",
        video: "Palmistry Lec 14 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_14_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 14 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_14_PDF/view?usp=drive_link",
    },
    {
        title: "धन-संबंधी संकेतों की प्रारंभिक समझ",
        key: "lecture-15",
        video: "Palmistry Lec 15 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_15_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 15 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_15_PDF/view?usp=drive_link",
    },
    {
        title: "करियर और कार्यक्षेत्र के संकेत",
        key: "lecture-16",
        video: "Palmistry Lec 16 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_16_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 16 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_16_PDF/view?usp=drive_link",
    },
    {
        title: "विवाह और संबंध-संकेतों में सावधानी",
        key: "lecture-17",
        video: "Palmistry Lec 17 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_17_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 17 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_17_PDF/view?usp=drive_link",
    },
    {
        title: "त्रिताप: दैहिक, दैविक और भौतिक",
        key: "lecture-18",
        video: "Palmistry Lec 18 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_18_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 18 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_18_PDF/view?usp=drive_link",
    },
    {
        title: "रेखाओं, पर्वतों और चिह्नों को साथ पढ़ना",
        key: "lecture-19",
        video: "Palmistry Lec 19 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_19_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 19 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_19_PDF/view?usp=drive_link",
    },
    {
        title: "फलादेश की भाषा, मर्यादा और नैतिकता",
        key: "lecture-20",
        video: "Palmistry Lec 20 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_20_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 20 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_20_PDF/view?usp=drive_link",
    },
    {
        title: "Reflection assignment, basic quiz और संकल्प practice",
        key: "lecture-21",
        video: "Palmistry Lec 21 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_21_VIDEO/view?usp=drive_link",
        pdf: "Palmistry Lec 21 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_PALMISTRY_LEC_21_PDF/view?usp=drive_link",
    },
];

const astrologyLectureSyllabus: CourseLectureSource[] = [
    {
        title: "Astrology basics - Lecture 1",
        key: "lecture-1",
        video: "Astrology Lec 1 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_1_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 1 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_1_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 2",
        key: "lecture-2",
        video: "Astrology Lec 2 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_2_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 2 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_2_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 3",
        key: "lecture-3",
        video: "Astrology Lec 3 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_3_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 3 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_3_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 4",
        key: "lecture-4",
        video: "Astrology Lec 4 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_4_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 4 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_4_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 5",
        key: "lecture-5",
        video: "Astrology Lec 5 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_5_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 5 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_5_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 6",
        key: "lecture-6",
        video: "Astrology Lec 6 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_6_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 6 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_6_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 7",
        key: "lecture-7",
        video: "Astrology Lec 7 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_7_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 7 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_7_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 8",
        key: "lecture-8",
        video: "Astrology Lec 8 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_8_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 8 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_8_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 9",
        key: "lecture-9",
        video: "Astrology Lec 9 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_9_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 9 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_9_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 10",
        key: "lecture-10",
        video: "Astrology Lec 10 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_10_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 10 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_10_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 11",
        key: "lecture-11",
        video: "Astrology Lec 11 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_11_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 11 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_11_PDF/view?usp=drive_link",
    },
    {
        title: "Astrology basics - Lecture 12",
        key: "lecture-12",
        video: "Astrology Lec 12 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_12_VIDEO/view?usp=drive_link",
        pdf: "Astrology Lec 12 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_ASTROLOGY_LEC_12_PDF/view?usp=drive_link",
    },
];

const numerologyLectureSyllabus: CourseLectureSource[] = [
    {
        title: "Numerology method - Lecture 1",
        key: "lecture-1",
        video: "Numerology Lec 1 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_1_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 1 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_1_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 2",
        key: "lecture-2",
        video: "Numerology Lec 2 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_2_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 2 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_2_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 3",
        key: "lecture-3",
        video: "Numerology Lec 3 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_3_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 3 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_3_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 4",
        key: "lecture-4",
        video: "Numerology Lec 4 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_4_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 4 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_4_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 5",
        key: "lecture-5",
        video: "Numerology Lec 5 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_5_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 5 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_5_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 6",
        key: "lecture-6",
        video: "Numerology Lec 6 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_6_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 6 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_6_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 7",
        key: "lecture-7",
        video: "Numerology Lec 7 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_7_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 7 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_7_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 8",
        key: "lecture-8",
        video: "Numerology Lec 8 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_8_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 8 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_8_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 9",
        key: "lecture-9",
        video: "Numerology Lec 9 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_9_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 9 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_9_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 10",
        key: "lecture-10",
        video: "Numerology Lec 10 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_10_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 10 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_10_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 11",
        key: "lecture-11",
        video: "Numerology Lec 11 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_11_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 11 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_11_PDF/view?usp=drive_link",
    },
    {
        title: "Numerology method - Lecture 12",
        key: "lecture-12",
        video: "Numerology Lec 12 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_12_VIDEO/view?usp=drive_link",
        pdf: "Numerology Lec 12 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_NUMEROLOGY_LEC_12_PDF/view?usp=drive_link",
    },
];

const kundliLectureSyllabus: CourseLectureSource[] = [
    {
        title: "Kundli reading - Lecture 1",
        key: "lecture-1",
        video: "Kundli Lec 1 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_1_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 1 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_1_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 2",
        key: "lecture-2",
        video: "Kundli Lec 2 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_2_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 2 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_2_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 3",
        key: "lecture-3",
        video: "Kundli Lec 3 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_3_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 3 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_3_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 4",
        key: "lecture-4",
        video: "Kundli Lec 4 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_4_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 4 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_4_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 5",
        key: "lecture-5",
        video: "Kundli Lec 5 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_5_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 5 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_5_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 6",
        key: "lecture-6",
        video: "Kundli Lec 6 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_6_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 6 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_6_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 7",
        key: "lecture-7",
        video: "Kundli Lec 7 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_7_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 7 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_7_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 8",
        key: "lecture-8",
        video: "Kundli Lec 8 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_8_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 8 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_8_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 9",
        key: "lecture-9",
        video: "Kundli Lec 9 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_9_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 9 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_9_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 10",
        key: "lecture-10",
        video: "Kundli Lec 10 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_10_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 10 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_10_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 11",
        key: "lecture-11",
        video: "Kundli Lec 11 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_11_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 11 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_11_PDF/view?usp=drive_link",
    },
    {
        title: "Kundli reading - Lecture 12",
        key: "lecture-12",
        video: "Kundli Lec 12 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_12_VIDEO/view?usp=drive_link",
        pdf: "Kundli Lec 12 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_KUNDLI_LEC_12_PDF/view?usp=drive_link",
    },
];

const gemologyLectureSyllabus: CourseLectureSource[] = [
    {
        title: "Gemology guidance - Lecture 1",
        key: "lecture-1",
        video: "Gemology Lec 1 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_1_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 1 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_1_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 2",
        key: "lecture-2",
        video: "Gemology Lec 2 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_2_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 2 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_2_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 3",
        key: "lecture-3",
        video: "Gemology Lec 3 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_3_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 3 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_3_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 4",
        key: "lecture-4",
        video: "Gemology Lec 4 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_4_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 4 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_4_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 5",
        key: "lecture-5",
        video: "Gemology Lec 5 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_5_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 5 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_5_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 6",
        key: "lecture-6",
        video: "Gemology Lec 6 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_6_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 6 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_6_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 7",
        key: "lecture-7",
        video: "Gemology Lec 7 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_7_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 7 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_7_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 8",
        key: "lecture-8",
        video: "Gemology Lec 8 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_8_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 8 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_8_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 9",
        key: "lecture-9",
        video: "Gemology Lec 9 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_9_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 9 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_9_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 10",
        key: "lecture-10",
        video: "Gemology Lec 10 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_10_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 10 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_10_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 11",
        key: "lecture-11",
        video: "Gemology Lec 11 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_11_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 11 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_11_PDF/view?usp=drive_link",
    },
    {
        title: "Gemology guidance - Lecture 12",
        key: "lecture-12",
        video: "Gemology Lec 12 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_12_VIDEO/view?usp=drive_link",
        pdf: "Gemology Lec 12 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_GEMOLOGY_LEC_12_PDF/view?usp=drive_link",
    },
];

const vaastuLectureSyllabus: CourseLectureSource[] = [
    {
        title: "Vaastu for home and work - Lecture 1",
        key: "lecture-1",
        video: "Vaastu Lec 1 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_1_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 1 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_1_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 2",
        key: "lecture-2",
        video: "Vaastu Lec 2 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_2_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 2 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_2_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 3",
        key: "lecture-3",
        video: "Vaastu Lec 3 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_3_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 3 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_3_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 4",
        key: "lecture-4",
        video: "Vaastu Lec 4 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_4_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 4 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_4_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 5",
        key: "lecture-5",
        video: "Vaastu Lec 5 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_5_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 5 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_5_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 6",
        key: "lecture-6",
        video: "Vaastu Lec 6 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_6_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 6 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_6_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 7",
        key: "lecture-7",
        video: "Vaastu Lec 7 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_7_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 7 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_7_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 8",
        key: "lecture-8",
        video: "Vaastu Lec 8 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_8_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 8 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_8_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 9",
        key: "lecture-9",
        video: "Vaastu Lec 9 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_9_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 9 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_9_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 10",
        key: "lecture-10",
        video: "Vaastu Lec 10 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_10_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 10 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_10_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 11",
        key: "lecture-11",
        video: "Vaastu Lec 11 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_11_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 11 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_11_PDF/view?usp=drive_link",
    },
    {
        title: "Vaastu for home and work - Lecture 12",
        key: "lecture-12",
        video: "Vaastu Lec 12 Video",
        videoUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_12_VIDEO/view?usp=drive_link",
        pdf: "Vaastu Lec 12 PDF",
        pdfUrl: "https://drive.google.com/file/d/REPLACE_VAASTU_LEC_12_PDF/view?usp=drive_link",
    },
];

const jyotishMantraModules: CourseModule[] = [
    {
        key: "palmistry-basic",
        title: "Palmistry Basic",
        video: "21 recorded video lectures",
        pdf: "Short PDF notes for each lecture",
        isDemo: true,
        description: "हाथों में छिपे संकेतों को समझने का प्रारंभिक पाठ्यक्रम। रेखाएँ संकेत देती हैं, पुरुषार्थ जीवन बदलता है।",
        lectures: palmistryLectureSyllabus,
    },
    {
        key: "astrology-basic",
        title: "Astrology basics",
        video: "Astrology Lec 1 Video",
        pdf: "Astrology Lec 1 PDF",
        isDemo: true,
        lectures: astrologyLectureSyllabus
    },
    {
        key: "numerology-method",
        title: "Numerology method",
        video: "Numerology Lec 1 Video",
        pdf: "Numerology Lec 1 PDF",
        lectures: numerologyLectureSyllabus
    },

    {
        key: "kundli-reading",
        title: "Kundli reading",
        video: "Kundli Lec 1 Video",
        pdf: "Kundli Lec 1 PDF",
        lectures: kundliLectureSyllabus
    },
    {
        key: "gemology-guidance",
        title: "Gemology guidance",
        video: "Gemology Lec 1 Video",
        pdf: "Gemology Lec 1 PDF",
        lectures: gemologyLectureSyllabus
    },
    {
        key: "vaastu-home-work",
        title: "Vaastu for home and work",
        video: "Vaastu Lec 1 Video",
        pdf: "Vaastu Lec 1 PDF",
        lectures: vaastuLectureSyllabus
    },
];

const healthMantraModules: CourseModule[] = [
    {
        key: "body-awareness-routine",
        title: "Body awareness and daily routine",
        video: "Health Body Lec 1 Video",
        pdf: "Health Body Lec 1 PDF",
        isDemo: true,
        lectures: createLectureSyllabus("Health Body")
    },
    { key: "mental-balance-stress", title: "Mental balance and stress control", video: "Health Mind Lec 1 Video", pdf: "Health Mind Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Health Mind") },
    { key: "food-sleep-energy", title: "Food, sleep and energy discipline", video: "Health Routine Lec 1 Video", pdf: "Health Routine Lec 1 PDF", lectures: createLectureSyllabus("Health Routine") },
    { key: "social-wellbeing-service", title: "Social well-being and service", video: "Health Wellbeing Lec 1 Video", pdf: "Health Wellbeing Lec 1 PDF", lectures: createLectureSyllabus("Health Wellbeing") },
];

const successMantraModules: CourseModule[] = [
    { key: "three-p-formula", title: "The 3P formula", video: "Success 3P Lec 1 Video", pdf: "Success 3P Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Success 3P Formula") },
    { key: "finding-talent", title: "Finding your talent", video: "Success Talent Lec 1 Video", pdf: "Success Talent Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Success Talent") },
    { key: "planning-discipline", title: "Planning and discipline", video: "Success Planning Lec 1 Video", pdf: "Success Planning Lec 1 PDF", lectures: createLectureSyllabus("Success Planning") },
    { key: "change-maker", title: "Becoming a change maker", video: "Success Change Maker Lec 1 Video", pdf: "Success Change Maker Lec 1 PDF", lectures: createLectureSyllabus("Success Change Maker") },
];

const moneyMantraModules: CourseModule[] = [
    { key: "earning-mindset", title: "Earning mindset", video: "Money Earn Lec 1 Video", pdf: "Money Earn Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Money Earn") },
    { key: "money-management", title: "Money management", video: "Money Manage Lec 1 Video", pdf: "Money Manage Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Money Manage") },
    { key: "growth-savings", title: "Growth and savings", video: "Money Growth Lec 1 Video", pdf: "Money Growth Lec 1 PDF", lectures: createLectureSyllabus("Money Growth") },
    { key: "debt-freedom", title: "Debt freedom plan", video: "Money Debt Freedom Lec 1 Video", pdf: "Money Debt Freedom Lec 1 PDF", lectures: createLectureSyllabus("Money Debt Freedom") },
];

const musicMantraModules: CourseModule[] = [
    { key: "vocal-basics", title: "Vocal basics", video: "Music Vocal Lec 1 Video", pdf: "Music Vocal Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Music Vocal") },
    { key: "harmonium-practice", title: "Harmonium practice", video: "Music Harmonium Lec 1 Video", pdf: "Music Harmonium Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Music Harmonium") },
    { key: "tabla-rhythm", title: "Tabla rhythm", video: "Music Tabla Lec 1 Video", pdf: "Music Tabla Lec 1 PDF", lectures: createLectureSyllabus("Music Tabla") },
    { key: "flute-foundations", title: "Flute foundations", video: "Music Flute Lec 1 Video", pdf: "Music Flute Lec 1 PDF", lectures: createLectureSyllabus("Music Flute") },
    { key: "guitar-starter", title: "Guitar starter lessons", video: "Music Guitar Lec 1 Video", pdf: "Music Guitar Lec 1 PDF", lectures: createLectureSyllabus("Music Guitar") },
];

const mathsMantraModules: CourseModule[] = [
    { key: "vedic-maths", title: "Vedic maths shortcuts", video: "Maths Vedic Lec 1 Video", pdf: "Maths Vedic Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Maths Vedic") },
    { key: "daily-maths", title: "Daily maths confidence", video: "Maths Daily Lec 1 Video", pdf: "Maths Daily Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Maths Daily") },
    { key: "applied-numerology", title: "Applied numerology", video: "Maths Numerology Lec 1 Video", pdf: "Maths Numerology Lec 1 PDF", lectures: createLectureSyllabus("Maths Numerology") },
];

const bhashaMantraModules: CourseModule[] = [
    { key: "grammar-clarity", title: "Grammar clarity", video: "Bhasha Grammar Lec 1 Video", pdf: "Bhasha Grammar Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Bhasha Grammar") },
    { key: "spelling-pronunciation", title: "Spelling and pronunciation", video: "Bhasha Spelling Lec 1 Video", pdf: "Bhasha Spelling Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Bhasha Spelling") },
    { key: "poetry-writing", title: "Poetry writing", video: "Bhasha Poetry Lec 1 Video", pdf: "Bhasha Poetry Lec 1 PDF", lectures: createLectureSyllabus("Bhasha Poetry") },
    { key: "songs-language", title: "Songs as language", video: "Bhasha Songs Lec 1 Video", pdf: "Bhasha Songs Lec 1 PDF", lectures: createLectureSyllabus("Bhasha Songs") },
    { key: "ghazal-expression", title: "Ghazal expression", video: "Bhasha Ghazal Lec 1 Video", pdf: "Bhasha Ghazal Lec 1 PDF", lectures: createLectureSyllabus("Bhasha Ghazal") },
];

const loveMantraModules: CourseModule[] = [
    { key: "love-respect", title: "Understanding love and respect", video: "Love Respect Lec 1 Video", pdf: "Love Respect Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Love Respect") },
    { key: "marriage-family", title: "Marriage and family harmony", video: "Love Marriage Lec 1 Video", pdf: "Love Marriage Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Love Marriage") },
    { key: "conflict-trust", title: "Conflict, apology and trust", video: "Love Trust Lec 1 Video", pdf: "Love Trust Lec 1 PDF", lectures: createLectureSyllabus("Love Trust") },
    { key: "daily-relationship", title: "Daily relationship practice", video: "Love Practice Lec 1 Video", pdf: "Love Practice Lec 1 PDF", lectures: createLectureSyllabus("Love Practice") },
];

const careerMantraModules: CourseModule[] = [
    { key: "career-direction", title: "Career direction and self-audit", video: "Career Direction Lec 1 Video", pdf: "Career Direction Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Career Direction") },
    { key: "study-planning", title: "Study planning and exam focus", video: "Career Study Lec 1 Video", pdf: "Career Study Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Career Study") },
    { key: "job-readiness", title: "Job readiness and interviews", video: "Career Job Lec 1 Video", pdf: "Career Job Lec 1 PDF", lectures: createLectureSyllabus("Career Job") },
    { key: "professional-growth", title: "Professional growth habits", video: "Career Growth Lec 1 Video", pdf: "Career Growth Lec 1 PDF", lectures: createLectureSyllabus("Career Growth") },
];

const businessMantraModules: CourseModule[] = [
    { key: "business-idea", title: "Business idea and customer problem", video: "Business Idea Lec 1 Video", pdf: "Business Idea Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Business Idea") },
    { key: "offer-pricing-sales", title: "Offer, pricing and sales basics", video: "Business Sales Lec 1 Video", pdf: "Business Sales Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Business Sales") },
    { key: "marketing-branding", title: "Marketing and branding system", video: "Business Marketing Lec 1 Video", pdf: "Business Marketing Lec 1 PDF", lectures: createLectureSyllabus("Business Marketing") },
    { key: "leadership-operations", title: "Leadership and operations", video: "Business Leadership Lec 1 Video", pdf: "Business Leadership Lec 1 PDF", lectures: createLectureSyllabus("Business Leadership") },
];

const spiritualMantraModules: CourseModule[] = [
    { key: "meditation-foundations", title: "Meditation foundations", video: "Spiritual Meditation Lec 1 Video", pdf: "Spiritual Meditation Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Spiritual Meditation") },
    { key: "gita-daily-life", title: "Gita for daily life", video: "Spiritual Gita Lec 1 Video", pdf: "Spiritual Gita Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Spiritual Gita") },
    { key: "vedanta-concepts", title: "Vedanta concepts", video: "Spiritual Vedanta Lec 1 Video", pdf: "Spiritual Vedanta Lec 1 PDF", lectures: createLectureSyllabus("Spiritual Vedanta") },
    { key: "conscious-living", title: "Conscious living practice", video: "Spiritual Consciousness Lec 1 Video", pdf: "Spiritual Consciousness Lec 1 PDF", lectures: createLectureSyllabus("Spiritual Consciousness") },
];

const humanityMantraModules: CourseModule[] = [
    { key: "service-compassion", title: "Service and compassion", video: "Humanity Service Lec 1 Video", pdf: "Humanity Service Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Humanity Service") },
    { key: "culture-responsibility", title: "Culture and social responsibility", video: "Humanity Culture Lec 1 Video", pdf: "Humanity Culture Lec 1 PDF", isDemo: true, lectures: createLectureSyllabus("Humanity Culture") },
    { key: "environment-discipline", title: "Environment and daily discipline", video: "Humanity Environment Lec 1 Video", pdf: "Humanity Environment Lec 1 PDF", lectures: createLectureSyllabus("Humanity Environment") },
    { key: "nation-building", title: "Nation building mindset", video: "Humanity Nation Lec 1 Video", pdf: "Humanity Nation Lec 1 PDF", lectures: createLectureSyllabus("Humanity Nation") },
];

export const happinessCourses: HappinessCourse[] = [
    {
        slug: "jyotish-mantra",
        n: "01",
        title: "Jyotish Mantra",
        hi: "Jyotish Mantra",
        text: "Learn palmistry, astrology, numerology and allied Jyotish subjects as guidance sciences rooted in awareness, ethics and personal effort.",
        topics: ["Palmistry", "Astrology", "Numerology", "Kundli", "Gemology", "Vaastu"],
        tone: "violet",
        duration: "6 modules | Palmistry: 21 lectures",
        level: "Beginner friendly",
        outcome: "Understand hand signs, charts, numbers and practical vastu basics with careful language, ethical limits and confidence.",
        modules: jyotishMantraModules,
    },
    {
        slug: "health-mantra",
        n: "02",
        title: "Health Mantra",
        hi: "Swasthya Mantra",
        text: "Build physical, mental and social well-being through simple habits and inner balance.",
        topics: ["Body", "Mind", "Routine", "Well-being"],
        tone: "rose",
        duration: "4 modules",
        level: "All learners",
        outcome: "Create a daily rhythm for health, energy, emotional balance and self-care.",
        modules: healthMantraModules,
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
        modules: successMantraModules,
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
        modules: moneyMantraModules,
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
        modules: musicMantraModules,
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
        modules: mathsMantraModules,
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
        modules: bhashaMantraModules,
    },
    {
        slug: "love-mantra",
        n: "08",
        title: "Love Mantra",
        hi: "Prem Mantra",
        text: "Develop harmony in marriage, family, friendship and daily relationships.",
        topics: ["Marriage", "Family", "Respect", "Communication"],
        tone: "rose",
        duration: "4 modules",
        level: "All learners",
        outcome: "Learn practical relationship habits for listening, respect and emotional maturity.",
        modules: loveMantraModules,
    },
    {
        slug: "career-mantra",
        n: "09",
        title: "Career Mantra",
        hi: "Career Mantra",
        text: "Prepare for study, exams, jobs and professional growth with clarity.",
        topics: ["Students", "Jobs", "Exams", "Growth"],
        tone: "cyan",
        duration: "4 modules",
        level: "Student friendly",
        outcome: "Build a study and career plan with skill, confidence and interview readiness.",
        modules: careerMantraModules,
    },
    {
        slug: "business-mantra",
        n: "10",
        title: "Business Mantra",
        hi: "Vyapar Mantra",
        text: "Learn startup thinking, marketing, branding and ethical leadership.",
        topics: ["Startup", "Marketing", "Branding", "Leadership"],
        tone: "emerald",
        duration: "4 modules",
        level: "Entrepreneur friendly",
        outcome: "Shape a simple business plan and customer-first selling approach.",
        modules: businessMantraModules,
    },
    {
        slug: "spiritual-mantra",
        n: "11",
        title: "Spiritual Mantra",
        hi: "Adhyatma Mantra",
        text: "Explore meditation, Gita, Vedanta and consciousness for inner steadiness.",
        topics: ["Meditation", "Gita", "Vedanta", "Consciousness"],
        tone: "violet",
        duration: "4 modules",
        level: "Reflective practice",
        outcome: "Develop a grounded spiritual routine with study, reflection and meditation.",
        modules: spiritualMantraModules,
    },
    {
        slug: "humanity-mantra",
        n: "12",
        title: "Humanity Mantra",
        hi: "Manavta Mantra",
        text: "Connect service, culture, environment and nation building into daily action.",
        topics: ["Service", "Culture", "Environment", "Nation"],
        tone: "orange",
        duration: "4 modules",
        level: "Community focused",
        outcome: "Turn values into small, practical actions for family, society and nature.",
        modules: humanityMantraModules,
    },
];

export const freeDemoCourse: HappinessCourse = {
    slug: "free-demo",
    n: "00",
    title: "Free Demo Course",
    hi: "Intro Mantra",
    text: "A free orientation that introduces all 12 Happiness Mantra learning paths.",
    topics: happinessCourses.map((course) => course.title.replace(" Mantra", "")),
    tone: "violet",
    duration: "12 previews",
    level: "Free introduction",
    outcome: "Choose the mantra course that matches your current life goal.",
    modules: happinessCourses.map((course) => ({
        key: `${course.slug}-overview`,
        title: `${course.title} overview`,
        video: `${course.title} Overview Lec 1 Video`,
        pdf: `${course.title} Overview Lec 1 PDF`,
        isDemo: true,
        lectures: createLectureSyllabus(`${course.title} Overview`),
    })),
};

export const allHappinessCourses = [freeDemoCourse, ...happinessCourses];

export function getHappinessCourse(slug: string) {
    return allHappinessCourses.find((course) => course.slug === slug);
}









