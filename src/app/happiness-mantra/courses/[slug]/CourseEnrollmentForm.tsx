"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send, ShieldCheck, Upload } from "lucide-react";
import { siteLinks } from "@/lib/site-links";

type Props = {
    courseTitle: string;
};

const formEndpoint = process.env.NEXT_PUBLIC_HAPPINESS_MANTRA_ENROLLMENT_FORM_URL;
const allowedProofTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

export default function CourseEnrollmentForm({ courseTitle }: Props) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("submitting");
        setMessage("");

        const form = event.currentTarget;
        const formData = new FormData(form);
        const screenshot = formData.get("paymentScreenshot");
        const website = formData.get("website");

        if (website) {
            setStatus("success");
            setMessage("Enrollment request submitted. Access will be shared after payment verification.");
            form.reset();
            return;
        }

        if (screenshot instanceof File && screenshot.size > 5 * 1024 * 1024) {
            setStatus("error");
            setMessage("Payment screenshot must be under 5 MB.");
            return;
        }

        if (screenshot instanceof File && !allowedProofTypes.includes(screenshot.type)) {
            setStatus("error");
            setMessage("Upload only JPG, PNG, WEBP or PDF payment proof.");
            return;
        }

        if (!formEndpoint) {
            setStatus("success");
            setMessage("Request checked successfully. Google Sheet submission is not connected yet, so this is ready for your later endpoint setup.");
            form.reset();
            return;
        }

        try {
            await fetch(formEndpoint, {
                method: "POST",
                body: formData,
                mode: "no-cors",
            });

            setStatus("success");
            setMessage("Enrollment request submitted. Access will be shared after payment verification.");
            form.reset();
        } catch {
            setStatus("error");
            setMessage("Submission failed. Please try again or contact the enrollment team.");
        }
    }

    return (
        <form className="hm-enrollment-form" onSubmit={handleSubmit}>
            <div>
                <p className="hm-course-kicker"><Send /> Enrollment form</p>
                <h3>Submit details for {courseTitle}</h3>
                <p>The form can be connected directly to Google Sheet through Google Apps Script.</p>
            </div>

            <input type="hidden" name="course" value={courseTitle} />
            <input className="hm-honeypot" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <label>
                Name
                <input name="name" type="text" placeholder="Full name" required />
            </label>
            <label>
                Email
                <input name="email" type="email" placeholder="student@example.com" required />
            </label>
            <label>
                Contact number
                <input name="contact" type="tel" placeholder={siteLinks.phoneDisplay} required />
            </label>
            <label>
                Address
                <textarea name="address" placeholder="Full address with city and PIN code" rows={3} required />
            </label>
            <label>
                Payment reference
                <input name="paymentReference" type="text" placeholder="UPI reference / transaction ID" required />
            </label>
            <label className="hm-file-input">
                Payment screenshot
                <span><Upload /> Upload JPG, PNG, WEBP or PDF under 5 MB</span>
                <input name="paymentScreenshot" type="file" accept="image/jpeg,image/png,image/webp,application/pdf" required />
            </label>
            <label className="hm-security-consent">
                <input name="verificationConsent" type="checkbox" required />
                <span>I understand course access is shared only after payment verification.</span>
            </label>
            <button type="submit" disabled={status === "submitting"}>
                {status === "submitting" ? "Submitting..." : "Submit enrollment"} <Send />
            </button>
            {message && (
                <p className={status === "success" ? "hm-request-success" : "hm-request-error"} aria-live="polite">
                    {status === "success" ? <CheckCircle2 /> : <ShieldCheck />} {message}
                </p>
            )}
        </form>
    );
}
