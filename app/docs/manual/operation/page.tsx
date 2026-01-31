'use client';

import { Scan, MessageSquarePlus, Play, StopCircle } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function OperationManualPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Operation View', '操作视图')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'The Operation View is optimized for production floor workers using tablets or mobile devices. It focuses on large buttons, quick actions, and clear visual feedback.',
                    '操作视图专为使用平板电脑或移动设备的生产车间工人而优化。它专注于大按钮、快速操作和清晰的视觉反馈。'
                )}
            </p>

            <h2 className="text-2xl font-bold mb-6">{t('Key Actions', '关键操作')}</h2>

            <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-4 border rounded-lg bg-white shadow-sm">
                    <div className="p-2 bg-slate-100 rounded text-slate-600">
                        <Scan className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mt-0">{t('Barcode Scanning', '条码扫描')}</h3>
                        <p className="text-slate-600 text-sm m-0">
                            {t(
                                'Click the Scan button and point your camera at the WO ID. The system validates the code and jumps to the order instantly.',
                                '点击扫描按钮并将相机对准工单 ID。系统验证代码并立即跳转到该订单。'
                            )}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg bg-white shadow-sm">
                    <div className="p-2 bg-emerald-100 rounded text-emerald-600">
                        <Play className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mt-0">{t('Start Step', '开始步骤')}</h3>
                        <p className="text-slate-600 text-sm m-0">
                            {t(
                                'Click "Track Progress" to begin a task. The Target Quantity is now displayed in the header for easy reference.',
                                '点击“跟踪进度”开始任务。目标数量现在显示在页眉中，方便参考。'
                            )}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg bg-white shadow-sm">
                    <div className="p-2 bg-red-100 rounded text-red-600">
                        <StopCircle className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mt-0">{t('Stop & Submit', '停止与提交')}</h3>
                        <p className="text-slate-600 text-sm m-0">
                            {t(
                                'Click the Stop button. Enter the quantity produced. The system allows submitting partial quantities multiple times.',
                                '点击停止按钮。输入生产数量。系统允许多次提交部分数量。'
                            )}
                        </p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg bg-white shadow-sm">
                    <div className="p-2 bg-indigo-100 rounded text-indigo-600">
                        <MessageSquarePlus className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mt-0">{t('Smart Comments', '智能评论')}</h3>
                        <p className="text-slate-600 text-sm m-0">
                            {t(
                                'Tap the comment icon to report issues. Tag "QN", "Machine", or "Material" to alert supervisors immediately.',
                                '点击评论图标报告问题。标记“QN”、“机器”或“材料”以立即提醒主管。'
                            )}
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Quick Status Updates', '快速状态更新')}</h2>
            <p className="mb-4">
                {t(
                    'For steps that do not require time tracking, you can simply tap the status cell to cycle through:',
                    '对于不需要时间跟踪的步骤，您只需点击状态单元格即可循环切换：'
                )}
            </p>
            <ul className="not-prose grid gap-2">
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-slate-200"></span> {t('Pending (Gray)', '待处理 (灰色)')}</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-amber-400"></span> {t('WIP (Yellow)', '进行中 (黄色)')}</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-emerald-500"></span> {t('Completed (Green Date)', '已完成 (绿色日期)')}</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-red-500"></span> {t('Issue/QN (Red)', '问题/QN (红色)')}</li>
            </ul>
        </div>
    );
}
