'use client';

import { Activity, Calculator, BrainCircuit, GripVertical, Zap } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function SmartSchedulerPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Smart Scheduler (Autopilot)', '智能排程 (自动驾驶)')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'The Smart Scheduler (Autopilot) acts as an intelligent traffic controller for your production line. It ensures that the most critical orders automatically bubble up to the top of the dashboard.',
                    '智能排程（自动驾驶）就像生产线的智能交通指挥员。它确保最关键的订单自动浮动到仪表盘的顶部。'
                )}
            </p>

            <h2 className="text-2xl font-bold mb-6">{t('How it Works', '工作原理')}</h2>
            <p className="mb-6">
                {t(
                    'Unlike traditional "First-In-First-Out" systems, iProTraX uses a dynamic weighted scoring engine computed in real-time.',
                    '与传统的“先进先出”系统不同，iProTraX 使用实时计算的动态加权评分引擎。'
                )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Weighted Heuristics', '加权启发式')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'Assigns scores based on Due Date proximity (50%), Aging (time stagnant, 30%), and Flow Rate (20%).',
                            '根据截止日期临近度 (50%)、老化 (停滞时间, 30%) 和流转率 (20%) 分配分数。'
                        )}
                    </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                        <GripVertical className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Priority Override', '优先级覆盖')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'Marking an order as "High Priority" (Red Flag) instantly adds +1000 points, bypassing all other logic.',
                            '将订单标记为“高优先级”（红旗）会立即增加 +1000 分，绕过所有其他逻辑。'
                        )}
                    </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                        <BrainCircuit className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('AI Optimization', 'AI 优化')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'DeepSeek AI analyzes historical patterns to suggest optimal weights for your specific product mix.',
                            'DeepSeek AI 分析历史模式，为您特定的产品组合建议最佳权重。'
                        )}
                    </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Zero-Wait Auto-Flow', '零等待自动流转')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'Implements a "Pull System" where completing a step automatically schedules the next available step as "Planned", using atomic database transactions to prevent race conditions.',
                            '实施“拉动式生产”系统（Pull System），完工时自动规划下一步。采用原子数据库事务（Atomic Transaction）防止竞争条件，确保数据一致性。'
                        )}
                    </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Calculator className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Score Transparency', '评分透明度')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'Hover over any score in the dashboard to see the exact breakdown of how it was calculated.',
                            '将鼠标悬停在仪表盘中的任何分数上，即可查看其计算方式的详细明细。'
                        )}
                    </p>
                </div>
            </div>

            <div className="p-6 bg-slate-100 border border-slate-200 rounded-xl mb-12">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{t('Default Sorting Rule', '默认排序规则')}</h3>
                <code className="text-sm bg-slate-200 px-2 py-1 rounded">
                    High Priority (Red) &gt; Warnings (QN) &gt; Smart Score (Date/Aging)
                </code>
            </div>
        </div>
    );
}
