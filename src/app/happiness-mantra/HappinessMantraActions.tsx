"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowRight, BookOpen, CheckCircle2, Gem, PackageCheck, Phone, Send, ShieldCheck, ShoppingBag, Sparkles, Sun, Upload, X } from "lucide-react";
import { siteLinks } from "@/lib/site-links";

type Product = {
    name: string;
    type: string;
    price: string;
    icon: typeof Gem;
    color: string;
};

type RequestMode = "consult" | "order";

const products: Product[] = [
    { name: "Energised Rudraksha", type: "Spiritual essential", price: "Rs. 1,499", icon: Gem, color: "saffron" },
    { name: "Happiness Mantra Tee", type: "Premium cotton", price: "Rs. 799", icon: Sparkles, color: "indigo" },
    { name: "Mantra Journal", type: "Guided practice", price: "Rs. 499", icon: BookOpen, color: "plum" },
    { name: "Jeevan Sanjeevni Yantra", type: "Sacred yantra", price: "Rs. 2,100", icon: Sun, color: "gold" },
];

export { products as happinessProducts };

export default function HappinessMantraActions({ showAllProducts = false }: { showAllProducts?: boolean }) {
    const visibleProducts = useMemo(() => showAllProducts ? products : products.slice(0, 3), [showAllProducts]);
    const [mode, setMode] = useState<RequestMode>("consult");
    const [selectedProduct, setSelectedProduct] = useState(products[0].name);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isDialogOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isDialogOpen]);

    useEffect(() => {
        function openConsultFromHash() {
            if (window.location.hash === "#consult") {
                openForm("consult");
                history.replaceState(null, "", window.location.pathname + window.location.search);
            }
        }

        openConsultFromHash();
        window.addEventListener("hashchange", openConsultFromHash);
        return () => window.removeEventListener("hashchange", openConsultFromHash);
    }, []);

    function openForm(nextMode: RequestMode, productName?: string) {
        setMode(nextMode);
        setSubmitted(false);
        setError("");
        if (productName) {
            setSelectedProduct(productName);
        }
        setIsDialogOpen(true);
    }

    function closeForm() {
        setIsDialogOpen(false);
        setSubmitted(false);
        setError("");
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const screenshot = formData.get("paymentScreenshot");

        if (mode === "order" && screenshot instanceof File) {
            const allowedTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
            if (!allowedTypes.includes(screenshot.type)) {
                setError("Upload only JPG, PNG, WEBP or PDF payment proof.");
                return;
            }
            if (screenshot.size > 5 * 1024 * 1024) {
                setError("Payment screenshot must be under 5 MB.");
                return;
            }
        }

        const payload = Object.fromEntries(formData.entries());

        // TODO: Add a protected API call only when backend storage is available.
        // Example: await fetch("/api/happiness-mantra-requests", { method: "POST", body: formData });
        // Until then, use an official Google Form for payment proof and private Google Drive access review.
        console.log("Happiness Mantra request payload", payload);

        setSubmitted(true);
        setError("");
        event.currentTarget.reset();
    }

    const isOrder = mode === "order";

    return (
        <>
            <section className="hm-section hm-shop" id="shop">
                <div className="hm-container">
                    <div className="hm-heading">
                        <div>
                            <div className="hm-eyebrow">Carry the intention with you</div>
                            <h2>The mantra <em>shop</em></h2>
                        </div>
                        <p>Thoughtfully selected spiritual and lifestyle essentials, prepared and dispatched with care.</p>
                    </div>
                    <div className={`hm-products ${showAllProducts ? "hm-products-all" : ""}`}>
                        {visibleProducts.map((product) => {
                            const Icon = product.icon;
                            return (
                                <article className={product.color} key={product.name}>
                                    <div className="hm-product-art">
                                        <div />
                                        <Icon />
                                        <span>Om</span>
                                    </div>
                                    <section>
                                        <div>
                                            <small>{product.type}</small>
                                            <h3>{product.name}</h3>
                                        </div>
                                        <strong>{product.price}</strong>
                                    </section>
                                    <button type="button" onClick={() => openForm("order", product.name)}>
                                        Buy product <ShoppingBag />
                                    </button>
                                </article>
                            );
                        })}
                    </div>
                    <div className="hm-shop-note">
                        <ShieldCheck />
                        <span><strong>Simple & secure ordering.</strong> Share delivery details; our team confirms availability and dispatches your order.</span>
                        <PackageCheck />
                    </div>
                    {!showAllProducts && (
                        <div className="hm-shop-more">
                            <Link className="hm-button hm-primary" href="/happiness-mantra/products">
                                View more products <ArrowRight size={17} />
                            </Link>
                        </div>
                    )}
                </div>
            </section>

            {!showAllProducts && (
                <section className="hm-order" id="order">
                    <div className="hm-container">
                        <div>
                            <div className="hm-eyebrow">Ready when you are</div>
                            <h2>Begin your<br /><em>happier journey.</em></h2>
                            <p>Explore a course, request a product, or speak with the RR World team for personal guidance.</p>
                        </div>
                        <aside>
                            <a className="hm-button hm-primary" href="#mantras">Explore courses <ArrowRight /></a>
                            <button className="hm-button hm-ghost" type="button" onClick={() => openForm("consult")}>
                                Consult now <Phone size={17} />
                            </button>
                        </aside>
                    </div>
                </section>
            )}

            {isDialogOpen && (
                <div className="hm-dialog" role="dialog" aria-modal="true" aria-labelledby="hm-dialog-title">
                    <button className="hm-dialog-backdrop" type="button" aria-label="Close form" onClick={closeForm} />
                    <div className="hm-dialog-card">
                        <button className="hm-dialog-close" type="button" aria-label="Close form" onClick={closeForm}>
                            <X />
                        </button>
                        <div className="hm-dialog-copy">
                            <div className="hm-eyebrow">Send request</div>
                            <h2 id="hm-dialog-title">{isOrder ? "Buy product" : "Book consultation"}</h2>
                            <p>{isOrder ? "Share your contact details and payment proof. Our team will verify the request before dispatch." : "Share your contact details and the RR World team will follow up with you."}</p>
                        </div>

                        <form className="hm-request-form" onSubmit={handleSubmit}>
                            <input type="hidden" name="requestType" value={mode} />
                            <label>
                                Name
                                <input name="name" type="text" placeholder="Your full name" required />
                            </label>
                            <label>
                                Email
                                <input name="email" type="email" placeholder="you@example.com" required />
                            </label>
                            <label>
                                Contact
                                <input name="contact" type="tel" placeholder={siteLinks.phoneDisplay} required />
                            </label>
                            <label>
                                Address
                                <textarea name="address" placeholder="Full address with city and PIN code" rows={4} required />
                            </label>
                            {isOrder && (
                                <>
                                    <label>
                                        Product
                                        <select name="product" value={selectedProduct} onChange={(event) => setSelectedProduct(event.target.value)} required>
                                            {products.map((product) => (
                                                <option key={product.name} value={product.name}>{product.name} - {product.price}</option>
                                            ))}
                                        </select>
                                    </label>
                                </>
                            )}
                            {isOrder && (
                                <label className="hm-file-input">
                                    Payment screenshot
                                    <span><Upload /> Upload JPG, PNG, WEBP or PDF under 5 MB</span>
                                    <input name="paymentScreenshot" type="file" accept="image/jpeg,image/png,image/webp,application/pdf" required />
                                </label>
                            )}
                            <label className="hm-security-consent">
                                <input name="verificationConsent" type="checkbox" required />
                                <span>I confirm that the details shared above are accurate.</span>
                            </label>
                            <button type="submit">
                                Submit request <Send />
                            </button>
                            {error && (
                                <p className="hm-request-error" aria-live="polite">
                                    <ShieldCheck /> {error}
                                </p>
                            )}
                            {submitted && (
                                <p className="hm-request-success" aria-live="polite">
                                    <CheckCircle2 /> Request captured. For production, connect this form to an official Google Form or protected API.
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
