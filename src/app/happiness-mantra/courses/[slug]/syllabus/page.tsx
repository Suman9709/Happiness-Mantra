import Link from "next/link"

const courses = [
    { name: "React", slug: "react" },
    { name: "Python", slug: "python" },
    { name: "Node.js", slug: "nodejs" },
]

export default function CoursePage() {
    return (
        <div>
            <h1>All Courses</h1>

            {courses.map((course) => (
                <div key={course.slug}>
                    <Link href={`/course/${course.slug}`}>
                        {course.name}
                    </Link>
                </div>
            ))}
        </div>
    )
}