import Link from "next/link";
import { ArrowLeft, CheckCircle2, Download, ExternalLink, PlayCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { allHappinessCourses, getHappinessCourse, getModuleLectureCount, getModuleLectures } from "../../../course-data";

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

    const firstLecture = getModuleLectures(course.modules[0])[0];

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
                        <a className="hm-button hm-primary" href={firstLecture.videoUrl} target="_blank" rel="noreferrer">
                            Open Drive video <ExternalLink size={17} />
                        </a>
                    </div>
                </div>
            </section>

            <section className="hm-course-body">
                <div className="hm-container hm-syllabus-list">
                    {course.modules.map((module, index) => (
                        <details className="hm-syllabus-module" key={module.title}>
                            <summary>
                                <span>{String(index + 1).padStart(2, "0")}</span>
                                <div>
                                    <h2>{module.title}</h2>
                                    <p>{module.description ?? `${course.topics[index] ?? course.title} focused lesson with examples, reflection and practice.`}</p>
                                </div>
                                <small><PlayCircle /> {getModuleLectureCount(module)} video lectures</small>
                                <small><CheckCircle2 /> {module.isDemo ? "Preview access" : "Verified access"}</small>
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
            </section>
        </main>
    );
}
