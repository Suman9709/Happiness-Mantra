"use client";

import { CheckCircle2, Download, FileText, LockKeyhole, PlayCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CourseModule, getModuleLectureCount, getModuleLectures } from "../../../course-data";

type Props = {
    courseTitle: string;
    topics: string[];
    modules: CourseModule[];
};

export default function SyllabusAccordion({ courseTitle, topics, modules }: Props) {
    return (
        <Accordion type="single" collapsible defaultValue={modules[0]?.title} className="hm-syllabus-accordion">
            {modules.map((module, index) => {
                const lectures = getModuleLectures(module);
                const moduleNumber = String(index + 1).padStart(2, "0");

                return (
                    <AccordionItem className="hm-syllabus-module" value={module.title} key={module.title}>
                        <AccordionTrigger className="hm-syllabus-trigger">
                            <span className="hm-syllabus-number">{moduleNumber}</span>
                            <span className="hm-syllabus-trigger-copy">
                                <span className="hm-syllabus-label">{module.isDemo ? "Preview module" : "Locked module"}</span>
                                <strong>{module.title}</strong>
                                <span>{module.description ?? `${topics[index] ?? courseTitle} focused lesson with examples, reflection and practice.`}</span>
                            </span>
                            <span className="hm-syllabus-meta">
                                <span><PlayCircle /> {getModuleLectureCount(module)} videos</span>
                                <span><FileText /> PDF notes</span>
                                <span>{module.isDemo ? <CheckCircle2 /> : <LockKeyhole />} {module.isDemo ? "Open preview" : "Manual approval"}</span>
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="hm-syllabus-content">
                            <div className="hm-lecture-list">
                                {lectures.map((lecture, lectureIndex) => (
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
                        </AccordionContent>
                    </AccordionItem>
                );
            })}
        </Accordion>
    );
}
