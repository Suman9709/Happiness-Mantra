import Link from "next/link";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
            <section className="mx-auto max-w-3xl space-y-6">
                <Link href="/" className="text-sm font-semibold text-orange-600">Back to RR World</Link>
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
                <p className="leading-7 text-slate-600">
                    RR World uses contact details shared through the website only to respond to enquiries, course requests,
                    consultations and product orders. We do not sell personal information.
                </p>
                <p className="leading-7 text-slate-600">
                    For privacy questions, contact us through the official email or phone number listed on the website.
                </p>
            </section>
        </main>
    );
}
