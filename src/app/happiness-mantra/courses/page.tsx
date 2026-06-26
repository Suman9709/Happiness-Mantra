import Link from "next/link";
import { ArrowRight, CirclePlay } from "lucide-react";
import { allHappinessCourses } from "../course-data";

export default function CoursesPage() {
    return (
        <main className="hm-course-page">
            <section className="hm-course-hero violet">
                <div className="hm-container">
                    <p className="hm-course-kicker"><CirclePlay /> Happiness Mantra courses</p>
                    <h1>All mantra courses</h1>
                    <p>Choose a path and open its dedicated syllabus, modules and YouTube lessons.</p>
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
