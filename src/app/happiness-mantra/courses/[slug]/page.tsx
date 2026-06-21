type Props = {
    params: {
        slug: string
    }
}

export default function SyllabusPage({ params }: Props) {
    return (
        <div>
            <h1>{params.slug} Syllabus</h1>
        </div>
    )
}