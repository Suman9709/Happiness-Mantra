import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import HappinessMantraActions from "../HappinessMantraActions";

export const metadata = {
    title: "Mantra Products | Happiness Mantra",
    description: "Shop Happiness Mantra spiritual and lifestyle products.",
};

export default function HappinessMantraProductsPage() {
    return (
        <main className="hm-course-page hm-products-page">
            <section className="hm-course-hero violet">
                <div className="hm-container">
                    <Link className="hm-course-back" href="/happiness-mantra#shop">
                        <ArrowLeft /> Back to Happiness Mantra
                    </Link>
                    <p className="hm-course-kicker">Mantra shop</p>
                    <h1>All mantra products</h1>
                    <p>Choose a product and buy through the secure request form popup.</p>
                </div>
            </section>
            <HappinessMantraActions showAllProducts />
        </main>
    );
}
