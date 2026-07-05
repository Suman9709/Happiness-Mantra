import Link from "next/link";
import { ArrowRight, CirclePlay } from "lucide-react";
import type { Metadata } from "next";
import { allHappinessCourses } from "../course-data";

export const metadata: Metadata = {
    title: "All Mantra Courses",
    description: "Explore all 12 Happiness Mantra courses and open each course syllabus, videos and PDF notes.",
};

export default function CoursesPage() {
    return (
        <main className="hm-course-page">
            <section className="hm-course-hero violet">
                <div className="hm-container">
                    <p className="hm-course-kicker"><CirclePlay /> Happiness Mantra courses</p>
                    <h1>All mantra courses</h1>
                    <p>Choose a path and open its dedicated syllabus, Drive videos and PDF notes.</p>
                </div>
            </section>

            <section className="hm-course-related">
                <div className="hm-container hm-course-related-grid">
                    {allHappinessCourses.map((course) => (
                        <Link className={`hm-course-related-card ${course.tone}`} href={`/happiness-mantra/courses/${course.slug}`} key={course.slug}>
                            <span>{course.n}</span>
                            <h3>{course.title}</h3>
                            <p>{course.text}</p>
                            <b>View course <ArrowRight /></b>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
