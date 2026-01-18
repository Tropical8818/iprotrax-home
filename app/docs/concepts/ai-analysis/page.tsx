
'use client';

import { Bot, LineChart, FileText, Sparkles } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function AIAnalysisPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('AI Analysis', 'AI 分析')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'iProTraX leverages Large Language Models (LLMs) to turn raw shop floor data into actionable insights, moving beyond simple tracking to intelligent assistance.',
                    'iProTraX 利用大型语言模型 (LLM) 将原始车间数据转化为可行的见解，超越简单的跟踪，实现智能辅助。'
                )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-12">
                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <LineChart className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('1. Risk Analysis & Reporting', '1. 风险分析与报告')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'The AI scans all active orders to identify "Stuck" items or patterns of delay.',
                            'AI 扫描所有活动订单，以识别“卡住”的特定项目或延迟模式。'
                        )}
                    </p>
                    <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-600 border border-slate-100 italic">
                        {t(
                            '"There are 3 orders stuck at \'Winding\' for >4 hours. This exceeds the average cycle time of 45 mins."',
                            '“有 3 个订单在‘绕线’处卡住了超过 4 小时。这超过了 45 分钟的平均周期时间。”'
                        )}
                    </div>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                        <Bot className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('2. Smart Comments', '2. 智能评论')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'AI automatically tags free-text comments with categories (Quality, Material, Machine) to aggregate hidden issues.',
                            'AI 自动用类别（质量、材料、机器）标记自由文本评论，以汇总隐藏的问题。'
                        )}
                    </p>
                    <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-600 border border-slate-100 italic">
                        {t('User: "No screws left"', '用户：“没有螺丝了”')}<br />
                        {t('AI Tag: 🏷️ MATERIAL_SHORTAGE', 'AI 标记：🏷️ 物料短缺')}
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-emerald-700" />
                    <h3 className="text-lg font-bold text-emerald-900 m-0">{t('3. Excel Intelligence', '3. Excel 智能')}</h3>
                </div>
                <p className="text-emerald-900/80 mb-4 text-sm">
                    {t(
                        'Importing Excel files is notoriously brittle due to changing headers (e.g., "Part#" vs "Part No." vs "Material Number").',
                        '由于标题不断变化（例如，“Part#” vs “Part No.” vs “Material Number”），导入 Excel 文件通常非常脆弱。'
                    )}
                </p>
                <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg border border-emerald-100/50">
                    <Sparkles className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <p className="text-sm text-emerald-800 m-0">
                        <strong>{t('Semantic Mapping:', '语义映射：')}</strong> {t(
                            'The AI reads the Excel headers and fuzzy-matches them to the database schema. You never need to manually re-map columns again.',
                            'AI 读取 Excel 标题并将其与数据库模式进行模糊匹配。您无需再次手动重新映射列。'
                        )}
                    </p>
                </div>
            </div>
        </div>
    );
}
