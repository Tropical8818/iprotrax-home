'use client';

import { Timer, Zap, BarChart3, StopCircle } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function ProductivityPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Productivity Engine', '生产力引擎')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'iProTraX v8.1.0 introduces the Productivity Engine to quantify worker output and efficiency, eliminating guesswork and empowering the frontline.',
                    'iProTraX v8.1.0 引入了生产力引擎，以量化工人产出和效率，消除猜测并赋能一线员工。'
                )}
            </p>

            <h2 className="text-2xl font-bold mb-6">{t('Core Components', '核心组件')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <Timer className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Active Session Cards', '活跃会话卡片')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'Integrated view for workers with live timer, progress bar, and standard time (Std) reference.',
                            '为工人提供的集成视图，包含实时计时器、进度条和标准时间 (Std) 参考。'
                        )}
                    </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                        <StopCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Compact Stop', '快速停止')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'One-click quick stop with strict quantity validation to ensure data accuracy.',
                            '一键快速停止，具有严格的数量验证，以确保数据准确性。'
                        )}
                    </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Efficiency Logic', '效率逻辑')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'Efficiency = Standard Time / Actual Time. >100% means faster than target.',
                            '效率 = 标准时间 / 实际时间。>100% 意味着比目标更快。'
                        )}
                    </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                        <BarChart3 className="w-6 h-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Visual Analytics', '可视化分析')}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t(
                            'Supervisor dashboard showing daily output heatmaps and efficiency rankings.',
                            '显示每日产量热图和效率排名的主管仪表盘。'
                        )}
                    </p>
                </div>
            </div>

            <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-xl mb-12">
                <h3 className="text-lg font-bold text-indigo-900 mb-2">{t('Why it matters?', '为什么重要？')}</h3>
                <p className="text-indigo-900/80 text-sm">
                    {t(
                        'Moving from "Did you finish?" to "How efficiently did you finish?" transforms shop floor management from reactive to proactive.',
                        '从“你完成了吗？”转变为“你完成得有多高效？”将车间管理从被动转变为主动。'
                    )}
                </p>
            </div>
        </div>
    );
}
