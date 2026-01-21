"use client";

import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

interface PricingPlan {
    id: string;
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    href: string;
    highlight?: boolean;
    priceDetail?: string; // e.g. "/ month", "one-time"
    maintenance?: string; // e.g. "$799 / year maintenance"
    badge?: string;
}

export function PricingSection() {
    const { t } = useLanguage();

    const plans: PricingPlan[] = [
        {
            id: "community",
            name: t("Community", "社区版"),
            price: t("Free", "免费"),
            priceDetail: t("forever", "永久"),
            description: t("Self-hosted for small teams. Open source core.", "适合小团队自托管。基于开源核心。"),
            features: [
                t("Self-Hosted (Docker)", "自托管部署 (Docker)"),
                t("1 Production Line", "1 条产线许可"),
                t("10 Users Included", "10 个用户许可"),
                t("Community Support", "社区支持"),
                t("Basic Report Export", "基础报表导出"),
            ],
            cta: t("Download on GitHub", "前往 GitHub 下载"),
            href: "https://github.com/Tropical8818/iProTraX",
        },
        {
            id: "starter",
            name: t("Starter (SaaS)", "入门订阅 (SaaS)"),
            price: "$288",
            priceDetail: t("/ month", "/ 月"),
            description: t("Full-featured cloud solution. Zero maintenance.", "全功能云托管方案。零维护费用。"),
            features: [
                t("Zero Deployment (Cloud Hosted)", "无需部署 (云托管)"),
                t("Advanced Productivity Engine", "高级生产力引擎"),
                t("AI Copilot (BYOK API Key)", "AI Copilot (需自备 Key)"),
                t("Real-time Kiosk Mode", "实时看板模式"),
                t("Up to 500 Users", "多达 500 用户"),
                t("Full Data Export", "完整数据导出"),
            ],
            cta: t("Contact Sales", "联系销售"),
            href: "mailto:contact@iprotrax.work",
        },
        {
            id: "pro",
            name: t("Pro License", "专业版买断"),
            price: "$1,999",
            priceDetail: t("one-time", "一次性"),
            description: t("Own your data. Perfect for single production lines.", "数据私有化。单产线最佳选择。"),
            maintenance: t("$799 / year maintenance from year 2", "次年起 $799/年 维护费"),
            features: [
                t("Perpetual License (Single Node)", "永久授权 (单节点)"),
                t("Deploy on your own hardware (Docker)", "私有化部署 (Docker)"),
                t("Data Sovereignty & Local AI", "数据主权 & 本地AI"),
                t("Unlimited Users", "无限用户"),
                t("AI Copilot (BYOK API Key)", "AI Copilot (需自备 Key)"),
                t("Advanced Productivity Engine", "高级生产力引擎"),
                t("1 Year Support Included", "首年包含技术支持"),
            ],
            cta: t("Contact Sales", "联系销售"),
            href: "mailto:contact@iprotrax.work",
            highlight: true,
            badge: t("BEST VALUE", "超值首选"),
        },
        {
            id: "enterprise",
            name: t("Enterprise", "企业版"),
            price: "$4,999",
            priceDetail: t("/ site", "/ 站点"),
            description: t("Scalable site license for large manufacturing plants.", "面向大型工厂的可扩展站点许可。"),
            maintenance: t("$1,499 / year SLA support", "次年起 $1,499/年 SLA 支持"),
            features: [
                t("Everything in Pro", "包含 Pro 版所有功能"),
                t("Multi-Node Site License", "多节点站点许可"),
                t("Priority SLA Support", "优先 SLA 支持"),
                t("Custom ERP Integrations", "自定义 ERP 集成"),
                t("Audit Logs & Security Compliance", "审计日志 & 安全合规"),
                t("Dedicated Success Manager", "专属成功经理"),
                t("On-Premise AI Model Fine-tuning", "私有 AI 模型微调"),
            ],
            cta: t("Contact Sales", "联系销售"),
            href: "mailto:contact@iprotrax.work",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-slate-950" id="pricing">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                        {t("Simple, Transparent Pricing", "简单、透明的定价")}
                    </h2>
                    <p className="mt-4 text-slate-400 text-lg">
                        {t(
                            "Choose the model that fits your factory. Start with SaaS agility or invest in long-term data sovereignty.",
                            "选择适合您工厂的模式。从 SaaS 的敏捷开始，或投资于长期的数据主权。"
                        )}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={cn(
                                "flex flex-col relative rounded-2xl border p-8 transition-all duration-300 hover:scale-[1.02] h-full",
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

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                                <p className="text-slate-400 text-sm min-h-[40px]">{plan.description}</p>
                            </div>

                            <div className="mb-6">
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
                                {!plan.maintenance && (
                                    <div className="mt-2 h-[22px]" aria-hidden="true" />
                                )}
                            </div>

                            <div className="space-y-4 mb-8 flex-grow">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="mt-0.5 rounded-full bg-blue-500/20 p-1 flex-shrink-0">
                                            <Check className="w-3 h-3 text-blue-400" />
                                        </div>
                                        <span className="text-sm text-slate-300 leading-tight">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-auto pt-4">
                                <Button
                                    className={cn(
                                        "w-full h-11 text-sm font-semibold transition-all",
                                        plan.highlight
                                            ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white shadow-lg shadow-blue-500/25 border-0"
                                            : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                                    )}
                                    asChild
                                >
                                    <Link href={plan.href} target={plan.href.startsWith("http") ? "_blank" : undefined}>
                                        {plan.cta}
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center text-slate-500 text-sm">
                    <p>
                        {t(
                            "Need a custom deployment or have specific security requirements?",
                            "需要定制部署或有特定安全需求？"
                        )}{" "}
                        <a href="mailto:contact@iprotrax.work" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
                            {t("Contact our sales team", "联系我们的销售团队")}
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
