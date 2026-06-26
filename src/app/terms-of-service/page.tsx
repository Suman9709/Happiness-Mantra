import Link from "next/link";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
            <section className="mx-auto max-w-3xl space-y-6">
                <Link href="/" className="text-sm font-semibold text-orange-600">Back to RR World</Link>
                <h1 className="text-4xl font-bold">Terms of Service</h1>
                <p className="leading-7 text-slate-600">
                    Website content, course descriptions and product details are provided for information and learning.
                    Final availability, pricing, scheduling and consultation details are confirmed directly by the RR World team.
                </p>
                <p className="leading-7 text-slate-600">
                    By contacting RR World through this website, you agree to respectful communication and accurate information sharing.
                </p>
            </section>
        </main>
    );
}
