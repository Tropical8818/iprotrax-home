'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, LayoutDashboard, BrainCircuit, TabletSmartphone } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function DocsPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">
                {t('Introduction', '介绍')}
            </h1>
            <p className="lead text-xl text-slate-600 mb-8">
                {t(
                    'iProTraX is the Agile Manufacturing Collaboration Platform that bridges the gap between rigid ERP systems and your dynamic shop floor.',
                    'iProTraX 是敏捷制造协作平台，填补了僵化的 ERP 系统与动态车间之间的空白。'
                )}
            </p>

            <div className="space-y-8 my-10">
                <div>
                    <h2 className="text-2xl font-bold mb-4">{t('🎯 The Problem', '🎯 问题痛点')}</h2>
                    <p className="mb-4">
                        {t(
                            'In modern high-mix manufacturing, relying solely on heavy ERP systems like SAP or ME POD creates critical operational gaps:',
                            '在现代多品种制造中，仅依赖像 SAP 或 ME POD 这样厚重的 ERP 系统会造成关键的运营缺口：'
                        )}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                        <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                            <h4 className="font-bold text-red-900 mb-1">{t('System Rigidity', '系统僵化')}</h4>
                            <p className="text-sm text-red-700">
                                {t(
                                    'SAP is powerful but inflexible. It fails when machines break down or plans change urgently.',
                                    'SAP 功能强大但不够灵活。当机器故障或计划紧急变更时，它往往无能为力。'
                                )}
                            </p>
                        </div>
                        <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
                            <h4 className="font-bold text-orange-900 mb-1">{t('Data Lag', '数据滞后')}</h4>
                            <p className="text-sm text-orange-700">
                                {t(
                                    'Reporting delays mean the "System Truth" is often hours behind the "Ground Truth".',
                                    '报告延迟意味着“系统真相”往往落后于“现场真相”数小时。'
                                )}
                            </p>
                        </div>
                        <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
                            <h4 className="font-bold text-slate-900 mb-1">{t('Black Box', '黑盒效应')}</h4>
                            <p className="text-sm text-slate-700">
                                {t(
                                    'Supervisors rely on spreadsheets and WhatsApp, creating invisible data silos.',
                                    '主管依赖电子表格和 WhatsApp，造成了看不见的数据孤岛。'
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">{t('💡 The Solution', '💡 解决方案')}</h2>
                    <p className="mb-6">
                        {t(
                            'iProTraX is not a replacement for SAP. It is the Agile Collaboration Layer that sits between your heavy ERP and your teams.',
                            'iProTraX 并非 SAP 的替代品。它是位于笨重 ERP 和团队之间的敏捷协作层。'
                        )}
                    </p>
                    <div className="p-6 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                        <p className="m-0 font-medium text-indigo-900 text-lg">
                            {t(
                                '"It visualizes the invisible, empowering supervisors to make instant corrections and providing AI-driven insights to optimize production."',
                                '“它将不可见变为可见，赋予主管即时修正的能力，并通过 AI 驱动的洞察来优化生产。”'
                            )}
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">{t('✨ Key Capabilities', '✨ 核心能力')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Monitor className="w-8 h-8 text-emerald-600 mb-3" />
                    <h3 className="text-lg font-bold mb-2">{t('Shop Floor Kiosk', '车间看板')}</h3>
                    <p className="text-slate-600 text-sm">
                        {t(
                            'Replaces social media updates with a passive, always-on monitor. Cycles through active orders based on priority.',
                            '用被动式、常亮的显示屏取代社交媒体更新。根据优先级循环展示活动订单。'
                        )}
                    </p>
                </div>
                <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <LayoutDashboard className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="text-lg font-bold mb-2">{t('Super Edit Mode', '超级编辑模式')}</h3>
                    <p className="text-slate-600 text-sm">
                        {t(
                            'Agile correction tool for Supervisors. Fix "SAP Lag" and missing steps instantly with a full audit trail.',
                            '主管的敏捷修正工具。即时修复“SAP 滞后”和缺失步骤，并保留完整的审计跟踪。'
                        )}
                    </p>
                </div>
                <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <BrainCircuit className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="text-lg font-bold mb-2">{t('AI Copilot', 'AI 副驾驶')}</h3>
                    <p className="text-slate-600 text-sm">
                        {t(
                            'Analyze risks, generate shift reports, and detect bottlenecks using smart category analysis on comments.',
                            '通过评论的智能分类分析，评估风险、生成轮班报告并检测瓶颈。'
                        )}
                    </p>
                </div>
                <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <TabletSmartphone className="w-8 h-8 text-amber-600 mb-3" />
                    <h3 className="text-lg font-bold mb-2">{t('Mobile First', '移动优先')}</h3>
                    <p className="text-slate-600 text-sm">
                        {t(
                            'Optimized interfaces for Frontline Workers (Operation View) and Supervisors (Dashboard) on any device.',
                            '为一线工人（操作视图）和主管（仪表盘）优化的多设备界面。'
                        )}
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Next Steps', '后续步骤')}</h2>
            <div className="flex gap-4 not-prose">
                <Button size="lg" asChild>
                    <Link href="/docs/installation">
                        {t('Installation Guide', '安装指南')} <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <Link href="/docs/architecture">
                        {t('View Architecture', '查看架构')}
                    </Link>
                </Button>
            </div>
        </div>
    );
}
