import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, PlayCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { allHappinessCourses, getHappinessCourse, getYoutubeSearchUrl } from "../../../course-data";

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

export default async function HappinessSyllabusPage({ params }: Props) {
    const { slug } = await params;
    const course = getHappinessCourse(slug);

    if (!course) {
        notFound();
    }

    return (
        <main className="hm-course-page hm-syllabus-page">
            <section className={`hm-course-hero ${course.tone}`}>
                <div className="hm-container">
                    <Link className="hm-course-back" href={`/happiness-mantra/courses/${course.slug}`}>
                        <ArrowLeft /> Back to course
                    </Link>
                    <p className="hm-course-kicker">{course.duration} | {course.level}</p>
                    <h1>{course.title} Syllabus</h1>
                    <p>{course.outcome}</p>
                    <div className="hm-course-actions">
                        <a className="hm-button hm-primary" href={getYoutubeSearchUrl(course)} target="_blank" rel="noreferrer">
                            Open YouTube playlist <ExternalLink size={17} />
                        </a>
                    </div>
                </div>
            </section>

            <section className="hm-course-body">
                <div className="hm-container hm-syllabus-list">
                    {course.modules.map((module, index) => (
                        <article key={module}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <div>
                                <h2>{module}</h2>
                                <p>{course.topics[index] ?? course.title} focused lesson with examples, reflection and practice.</p>
                            </div>
                            <small><PlayCircle /> Video lesson</small>
                            <small><CheckCircle2 /> Practice task</small>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    );
}
