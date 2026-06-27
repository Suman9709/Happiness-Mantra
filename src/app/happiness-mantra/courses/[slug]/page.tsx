import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, Download, ExternalLink, Mail, MessageCircle, PlayCircle, ShieldCheck, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { allHappinessCourses, getDrivePreviewUrl, getHappinessCourse, getModuleLectureCount, getModuleLectures, happinessCourses } from "../../course-data";
import { siteLinks } from "@/lib/site-links";
import CourseEnrollmentForm from "./CourseEnrollmentForm";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return allHappinessCourses.map((course) => ({
        slug: course.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const course = getHappinessCourse(slug);

    if (!course) {
        return {
            title: "Course not found | Happiness Mantra",
        };
    }

    return {
        title: `${course.title} Course | Happiness Mantra`,
        description: course.text,
    };
}

export default async function HappinessCoursePage({ params }: Props) {
    const { slug } = await params;
    const course = getHappinessCourse(slug);

    if (!course) {
        notFound();
    }

    const relatedCourses = happinessCourses.filter((item) => item.slug !== course.slug).slice(0, 3);
    const whatsappHref = `https://wa.me/${siteLinks.phoneDisplay.replace(/\D/g, "")}?text=${encodeURIComponent(`Namaste, I would like to enroll in ${course.title}. Please share the payment and access process.`)}`;
    const previewLecture = getModuleLectures(course.modules[0])[0];

    return (
        <main className="hm-course-page">
            <section className={`hm-course-hero ${course.tone}`}>
                <div className="hm-container hm-course-hero-grid">
                    <div>
                        <Link className="hm-course-back" href="/happiness-mantra#mantras">
                            <ArrowLeft /> All mantras
                        </Link>
                        <p className="hm-course-kicker">
                            <Sparkles /> {course.hi} | {course.duration}
                        </p>
                        <h1>{course.title}</h1>
                        <p>{course.text}</p>
                        <div className="hm-course-actions">
                            <a className="hm-button hm-primary" href={previewLecture.videoUrl} target="_blank" rel="noreferrer">
                                Open Drive video <ExternalLink size={17} />
                            </a>
                            <Link className="hm-button hm-ghost" href={`/happiness-mantra/courses/${course.slug}/syllabus`}>
                                View syllabus <BookOpen size={17} />
                            </Link>
                            <Link className="hm-button hm-cream" href="#enroll">
                                Request enrollment <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                    <div className="hm-course-player">
                        <iframe
                            src={getDrivePreviewUrl(previewLecture.videoUrl)}
                            title={`${course.title} Drive video`}
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            <section className="hm-course-body">
                <div className="hm-container hm-course-body-grid">
                    <aside className="hm-course-panel">
                        <span>{course.n}</span>
                        <h2>Course snapshot</h2>
                        <p>{course.outcome}</p>
                        <div>
                            <small><Clock /> {course.duration}</small>
                            <small><PlayCircle /> Preview guided</small>
                            <small><CheckCircle2 /> {course.level}</small>
                        </div>
                    </aside>

                    <div className="hm-course-content">
                        <div className="hm-course-section-title">
                            <p>What you will learn</p>
                            <h2>Every lesson follows this mantra.</h2>
                        </div>
                        <div className="hm-course-modules">
                            {course.modules.map((module, index) => (
                                <details key={module.title} className="hm-module-accordion">
                                    <summary>
                                        <span>{String(index + 1).padStart(2, "0")}</span>
                                        <div>
                                            <h3>{module.title}</h3>
                                            <p>{module.description ?? (module.isDemo ? "Preview lessons available before enrollment." : "Private video lectures and PDF notes after enrollment verification.")}</p>
                                            <p>{getModuleLectureCount(module)} video lectures with PDF notes.</p>
                                        </div>
                                    </summary>
                                    <div className="hm-lecture-list">
                                        {getModuleLectures(module).map((lecture, lectureIndex) => (
                                            <article key={lecture.title}>
                                                <b>{String(lectureIndex + 1).padStart(2, "0")}</b>
                                                <div>
                                                    <h4>{lecture.title}</h4>
                                                    <p>{lecture.video}</p>
                                                </div>
                                                <div className="hm-lecture-actions">
                                                    <a href={lecture.videoUrl} target="_blank" rel="noreferrer">
                                                        <PlayCircle /> Watch video
                                                    </a>
                                                    <a href={lecture.pdfUrl} target="_blank" rel="noreferrer">
                                                        <Download /> PDF notes
                                                    </a>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="hm-course-enroll" id="enroll">
                <div className="hm-container hm-course-enroll-grid">
                    <div>
                        <p className="hm-course-kicker"><ShieldCheck /> Enrollment and access</p>
                        <h2>Start with the preview. Continue with verified course access.</h2>
                        <p>For now, this course can be delivered without a backend by using a managed Google Form, manual payment verification, and private Google Drive sharing. This keeps student data and course material under the organisation&apos;s direct control.</p>
                    </div>
                    <aside>
                        <ol>
                            <li>Watch the preview lessons and review the syllabus.</li>
                            <li>Submit the enrollment form below or contact the team directly.</li>
                            <li>Complete payment using the official payment link shared by the team.</li>
                            <li>Share the payment reference and screenshot for verification.</li>
                            <li>Receive private Google Drive access for videos and PDF notes.</li>
                        </ol>
                        <div>
                            <a className="hm-button hm-primary" href={whatsappHref} target="_blank" rel="noreferrer">
                                Request on WhatsApp <MessageCircle size={17} />
                            </a>
                            <a className="hm-button hm-ghost" href={siteLinks.emailHref}>
                                Email enrollment team <Mail size={17} />
                            </a>
                        </div>
                    </aside>
                    <CourseEnrollmentForm courseTitle={course.title} />
                </div>
            </section>

            <section className="hm-course-related">
                <div className="hm-container">
                    <div className="hm-course-section-title">
                        <p>Continue exploring</p>
                        <h2>Related mantra courses</h2>
                    </div>
                    <div className="hm-course-related-grid">
                        {relatedCourses.map((item) => (
                            <Link className={`hm-course-related-card ${item.tone}`} href={`/happiness-mantra/courses/${item.slug}`} key={item.slug}>
                                <span>{item.n}</span>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <b>View course <ArrowRight /></b>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
