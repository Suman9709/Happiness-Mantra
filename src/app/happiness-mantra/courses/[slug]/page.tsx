import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Clock, ExternalLink, PlayCircle, Sparkles } from "lucide-react";
import { notFound } from "next/navigation";
import { allHappinessCourses, getHappinessCourse, getYoutubeEmbedUrl, getYoutubeSearchUrl, happinessCourses } from "../../course-data";

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
                            <a className="hm-button hm-primary" href={getYoutubeSearchUrl(course)} target="_blank" rel="noreferrer">
                                Open YouTube lessons <ExternalLink size={17} />
                            </a>
                            <Link className="hm-button hm-ghost" href={`/happiness-mantra/courses/${course.slug}/syllabus`}>
                                View syllabus <BookOpen size={17} />
                            </Link>
                        </div>
                    </div>
                    <div className="hm-course-player">
                        <iframe
                            src={getYoutubeEmbedUrl(course)}
                            title={`${course.title} YouTube lessons`}
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
                            <small><PlayCircle /> YouTube guided</small>
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
                                <article key={module}>
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <h3>{module}</h3>
                                    <p>Watch the related YouTube lesson, note the key idea, then apply it through a simple daily practice.</p>
                                </article>
                            ))}
                        </div>
                    </div>
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
