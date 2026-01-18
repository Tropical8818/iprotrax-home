'use client';

import { BarChart3, TrendingUp, Calendar, Filter } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function AnalyticsPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Unified Analytics', '统一分析')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'The Analytics Dashboard replaces the old "Production Insights" with a powerful report builder to answer specific questions.',
                    '分析仪表盘取代了旧的“生产洞察”，提供强大的报告构建器来回答特定问题。'
                )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                <div className="p-6 bg-white border rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                        <TrendingUp className="w-5 h-5 text-indigo-600" />
                        {t('Overview Tab', '概览标签页')}
                    </h3>
                    <ul className="space-y-3 text-slate-600 text-sm">
                        <li className="flex justify-between border-b pb-2">
                            <span>{t('Daily Output', '日产量')}</span>
                            <span className="font-medium text-slate-900">{t('Production count trends', '生产数量趋势')}</span>
                        </li>
                        <li className="flex justify-between border-b pb-2">
                            <span>{t('Productivity', '生产力')}</span>
                            <span className="font-medium text-slate-900">{t('Operator efficiency ranking', '操作员效率排名')}</span>
                        </li>
                        <li className="flex justify-between">
                            <span>{t('Step Duration', '步骤时长')}</span>
                            <span className="font-medium text-slate-900">{t('Avg time per station', '每个工位的平均时间')}</span>
                        </li>
                    </ul>
                </div>

                <div className="p-6 bg-slate-50 border rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                        <BarChart3 className="w-5 h-5 text-emerald-600" />
                        {t('Custom Builder', '自定义构建器')}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                        {t('Create your own reports by combining filters and metrics.', '通过组合筛选器和指标创建您自己的报告。')}
                    </p>
                    <div className="flex gap-2 text-xs flex-wrap">
                        <span className="px-2 py-1 bg-white border rounded text-slate-500">{t('Group By: Operator', '按操作员分组')}</span>
                        <span className="px-2 py-1 bg-white border rounded text-slate-500">{t('Source: Operation Logs', '来源：操作日志')}</span>
                        <span className="px-2 py-1 bg-white border rounded text-slate-500">{t('Action: QN', '动作：QN')}</span>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('How to Build a Report', '如何构建报告')}</h2>
            <div className="space-y-4">
                <div className="flex gap-4">
                    <div className="flex-none w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">1</div>
                    <div>
                        <strong className="block text-slate-900">{t('Select Data Source', '选择数据源')}</strong>
                        <p className="text-slate-600 text-sm">
                            {t('`Work Orders` for live snapshot, or `Operation Logs` for historical analysis.', '`工单` 用于实时快照，或 `操作日志` 用于历史分析。')}
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-none w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">2</div>
                    <div>
                        <strong className="block text-slate-900">{t('Group By', '分组依据')}</strong>
                        <p className="text-slate-600 text-sm">
                            {t('Choose a dimension e.g., `Status`, `Operator`, `Step`.', '选择一个维度，例如 `状态`、`操作员`、`步骤`。')}
                        </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-none w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">3</div>
                    <div>
                        <strong className="block text-slate-900">{t('Metrics & Time', '指标与时间')}</strong>
                        <p className="text-slate-600 text-sm">
                            {t('Filter by Today, Last 7 Days, or All Time. View Count, Sum, or Average.', '筛选今天、过去7天或所有时间。查看计数、总和或平均值。')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
