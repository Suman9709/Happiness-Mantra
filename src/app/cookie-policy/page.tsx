import Link from "next/link";

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
            <section className="mx-auto max-w-3xl space-y-6">
                <Link href="/" className="text-sm font-semibold text-orange-600">Back to RR World</Link>
                <h1 className="text-4xl font-bold">Cookie Policy</h1>
                <p className="leading-7 text-slate-600">
                    RR World may use basic browser storage or third-party embeds, such as YouTube, to improve website functionality.
                    External platforms may apply their own cookie policies when you open or play embedded content.
                </p>
                <p className="leading-7 text-slate-600">
                    You can manage cookies through your browser settings at any time.
                </p>
            </section>
        </main>
    );
}
