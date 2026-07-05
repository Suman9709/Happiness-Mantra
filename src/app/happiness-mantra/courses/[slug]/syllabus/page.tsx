import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink, FileText, PlayCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { allHappinessCourses, getHappinessCourse, getModuleLectureCount, getModuleLectures } from "../../../course-data";
import SyllabusAccordion from "./SyllabusAccordion";

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
    const totalLectures = course.modules.reduce((total, module) => total + getModuleLectureCount(module), 0);

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
                    <div className="hm-syllabus-hero-stats" aria-label="Syllabus summary">
                        <span><PlayCircle /> {totalLectures} video lectures</span>
                        <span><FileText /> PDF notes included</span>
                        <span><CheckCircle2 /> Preview and verified access</span>
                    </div>
                    <div className="hm-course-actions">
                        <a className="hm-button hm-primary" href={firstLecture.videoUrl} target="_blank" rel="noreferrer">
                            Open first video <ExternalLink size={17} />
                        </a>
                        <Link className="hm-button hm-ghost" href={`/happiness-mantra/courses/${course.slug}#enroll`}>
                            Request enrollment
                        </Link>
                    </div>
                </div>
            </section>

            <section className="hm-course-body">
                <div className="hm-container hm-syllabus-list">
                    <div className="hm-course-section-title">
                        <p>Complete curriculum</p>
                        <h2>Modules, lectures and notes</h2>
                    </div>
                    <SyllabusAccordion courseTitle={course.title} topics={course.topics} modules={course.modules} />
                </div>
            </section>
        </main>
    );
}
