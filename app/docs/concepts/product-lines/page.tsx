
'use client';

import { Settings, FileSpreadsheet, Target } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function ProductLinesPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Product Lines', '生产线')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'In iProTraX, a Product Line is the fundamental unit of organization. Each line represents a distinct manufacturing process, product family, or physical assembly line.',
                    '在 iProTraX 中，生产线是组织的基本单位。每条线代表一个独特的制造流程、产品系列或物理装配线。'
                )}
            </p>

            <div className="p-6 bg-slate-50 border rounded-xl mb-10">
                <h3 className="text-lg font-bold text-slate-900 mt-0 mb-4">{t('Why Separate Product Lines?', '为什么要区分生产线？')}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose list-none p-0 m-0">
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2" />
                        <span className="text-sm text-slate-600">{t('Different products have different Production Steps.', '不同的产品有不同的生产步骤。')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2" />
                        <span className="text-sm text-slate-600">
                            {t('Requires unique Data Fields (e.g., "Motor ID" vs "PCB Serial").', '需要独特的数据字段（例如，“电机 ID”与“PCB 序列号”）。')}
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2" />
                        <span className="text-sm text-slate-600">{t('Managed by different Supervisor Teams.', '由不同的主管团队管理。')}</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2" />
                        <span className="text-sm text-slate-600">{t('Independent Monthly Targets and KPI tracking.', '独立的月度目标和 KPI 跟踪。')}</span>
                    </li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Configuration Components', '配置组件')}</h2>
            <div className="space-y-8">
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 p-4 border-b flex items-center gap-2">
                        <Settings className="w-5 h-5 text-slate-500" />
                        <h3 className="text-base font-bold m-0">{t('1. Production Steps', '1. 生产步骤')}</h3>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-slate-600 mb-4">
                            {t(
                                'Define the sequence of operations. Each step becomes a column in the dashboard where status is tracked.',
                                '定义操作顺序。每个步骤都会成为仪表盘中的一列，用于跟踪状态。'
                            )}
                        </p>
                        <div className="bg-slate-900 rounded-lg p-4 text-xs font-mono text-slate-300 overflow-x-auto">
                            ["Winding", "Insertion", "Varnish", "Assembly", "Testing", "Packing"]
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 p-4 border-b flex items-center gap-2">
                        <FileSpreadsheet className="w-5 h-5 text-slate-500" />
                        <h3 className="text-base font-bold m-0">{t('2. Detail Columns', '2. 详细列')}</h3>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-slate-600 mb-4">
                            {t(
                                'Map specific Excel headers to dashboard columns. This tells the importer which data to grab.',
                                '将特定的 Excel 标题映射到仪表盘列。这告诉导入器要抓取哪些数据。'
                            )}
                        </p>
                        <div className="bg-slate-900 rounded-lg p-4 text-xs font-mono text-slate-300 overflow-x-auto">
                            {`{
  "Part No": "material_number",
  "Target Qty": "quantity",
  "Due Date": "delivery_date"
}`}
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 p-4 border-b flex items-center gap-2">
                        <Target className="w-5 h-5 text-slate-500" />
                        <h3 className="text-base font-bold m-0">{t('3. Monthly Targets', '3. 月度目标')}</h3>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-slate-600 m-0">
                            {t('Set a numeric output goal (e.g., 500 units) for the Kiosk to display progress against.', '设置数字产量目标（例如，500 台），以便 Kiosk 显示进度。')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
