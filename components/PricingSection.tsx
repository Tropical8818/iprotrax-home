"use client";

import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface PricingPlan {
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    highlight?: boolean;
    priceDetail?: string; // e.g. "/ month", "one-time"
    maintenance?: string; // e.g. "$799 / year maintenance"
    badge?: string;
}

const plans: PricingPlan[] = [
    {
        id: "starter",
        name: "Starter (SaaS)",
        price: "$288",
        priceDetail: "/ month",
        description: "Cloud-hosted solution for agile teams getting started.",
        features: [
            "Zero Deployment (Cloud Hosted)",
            "Standard Dashboard",
            "Real-time Kiosk Mode",
            "5 Users Included",
            "Basic Analytics",
        ],
        cta: "Start Subscription",
    },
    {
        id: "pro",
        name: "Pro License",
        price: "$1,999",
        priceDetail: "one-time",
        description: "Own your data. Perfect for single production lines.",
        maintenance: "$799 / year maintenance from year 2",
        features: [
            "Perpetual License (Single Node)",
            "Deploy on your own hardware (Docker)",
            "Full Data Sovereignty",
            "Unlimited Users",
            "AI Copilot Integration",
            "Advanced Productivity Engine",
            "1 Year Support Included",
        ],
        cta: "Buy Pro License",
        highlight: true,
        badge: "BEST VALUE",
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "$4,999",
        priceDetail: "/ site",
        description: "Scalable site license for large manufacturing plants.",
        maintenance: "$1,499 / year SLA support",
        features: [
            "Everything in Pro",
            "Multi-Node Site License",
            "Priority SLA Support",
            "Custom ERP Integrations",
            "Audit Logs & Security Compliance",
            "Dedicated Success Manager",
            "On-Premise AI Model Fine-tuning",
        ],
        cta: "Contact Sales",
    },
];

export function PricingSection() {
    return (
        <section className="py-24 relative overflow-hidden bg-slate-950" id="pricing">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="mt-4 text-slate-400 text-lg">
                        Choose the model that fits your factory. Start with SaaS agility or invest in long-term data sovereignty.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={cn(
                                "relative rounded-2xl border p-8 transition-all duration-300 hover:scale-[1.02]",
                                plan.highlight
                                    ? "bg-gradient-to-b from-slate-900 via-slate-900 to-slate-900 border-blue-500/50 shadow-2xl shadow-blue-500/10"
                                    : "bg-slate-950/50 border-slate-800 hover:border-slate-700"
                            )}
                        >
                            {plan.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {plan.badge}
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white tracking-tight">
                                        {plan.price}
                                    </span>
                                    <span className="text-slate-500 font-medium">
                                        {plan.priceDetail}
                                    </span>
                                </div>
                                {plan.maintenance && (
                                    <div className="mt-2 flex items-center gap-1.5 text-xs text-blue-400 font-medium bg-blue-500/10 w-fit px-2 py-1 rounded">
                                        <Info className="w-3 h-3" />
                                        {plan.maintenance}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-0.5 rounded-full bg-blue-500/20 p-1">
                                            <Check className="w-3 h-3 text-blue-400" />
                                        </div>
                                        <span className="text-sm text-slate-300">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                className={cn(
                                    "w-full h-11 text-sm font-semibold transition-all",
                                    plan.highlight
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25 border-0"
                                        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                                )}
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-slate-500 text-sm">
                    <p>
                        Need a custom deployment or have specific security requirements?{" "}
                        <a href="#" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                            Contact our sales team
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
