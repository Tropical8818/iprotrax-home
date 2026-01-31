
'use client';

import { LayoutGrid, MousePointerClick } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function DashboardPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Dashboard Manual', '仪表盘手册')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'The Dashboard is the Command Center of iProTraX. It provides a real-time, bird\'s-eye view of all active production orders and their current status.',
                    '仪表盘是 iProTraX 的指挥中心。它提供了所有活动生产订单及其当前状态的实时鸟瞰图。'
                )}
            </p>

            <div className="bg-white border rounded-xl shadow-sm p-6 mb-10 not-prose space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b">
                    <LayoutGrid className="w-5 h-5 text-indigo-600" />
                    <h2 className="text-xl font-bold text-slate-900 m-0">{t('Navigation Bar', '导航栏')}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <strong className="block text-slate-900 mb-1">{t('Home', '首页')}</strong>
                        <span className="text-sm text-slate-500">{t('Return to the main live view.', '返回主实时视图。')}</span>
                    </div>
                    <div>
                        <strong className="block text-slate-900 mb-1">{t('Log History', '日志历史')}</strong>
                        <span className="text-sm text-slate-500">{t('Full audit trail of all changes.', '所有更改的完整审计跟踪。')}</span>
                    </div>
                    <div>
                        <strong className="block text-slate-900 mb-1">{t('Import', '导入')}</strong>
                        <span className="text-sm text-slate-500">{t('Upload Excel files (Admin/Supervisor).', '上传 Excel 文件（管理员/主管）。')}</span>
                    </div>
                    <div>
                        <strong className="block text-slate-900 mb-1">{t('Product Selector', '产品选择器')}</strong>
                        <span className="text-sm text-slate-500">{t('Switch lines (e.g., "Motor" vs "Controller").', '切换生产线（例如，“电机”与“控制器”）。')}</span>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('The Order Grid', '订单网格')}</h2>
            <p className="mb-6">{t('The main table is the heart of the system, divided into two distinct sections:', '主表是系统的核心，分为两个不同的部分：')}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                <div className="p-5 bg-slate-50 rounded-lg border">
                    <h4 className="font-bold text-slate-900 mb-2">{t('1. Detail Columns (Left)', '1. 详细列（左侧）')}</h4>
                    <p className="text-sm text-slate-600">
                        {t('Fixed information imported from Excel, such as', '从 Excel 导入的固定信息，例如')} <code>WO ID</code>, <code>{t('Part Number', '零件号')}</code>, <code>{t('qty', '数量')}</code>, {t('and', '和')} <code>{t('Due Date', '截止日期')}</code>. <br />
                        <span className="text-xs font-semibold text-slate-500 block mt-2">{t('Default Sorting: High Priority > Warning (QN) > Earliest Due Date', '默认排序：高优先级 > 警告 (QN) > 最早交期')}</span>
                    </p>
                </div>
                <div className="p-5 bg-indigo-50 rounded-lg border border-indigo-100">
                    <h4 className="font-bold text-indigo-900 mb-2">{t('2. Step Columns (Right)', '2. 步骤列（右侧）')}</h4>
                    <p className="text-sm text-indigo-800">{t('Dynamic production stages. These cells are interactive - click to change status or add comments.', '动态生产阶段。这些单元格是交互式的 - 点击以更改状态或添加评论。')}</p>
                </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm mb-12">
                <MousePointerClick className="w-5 h-5 mt-0.5" />
                <div>
                    <strong>{t('Interactive Tip:', '交互提示：')}</strong> {t('You can resize any column by dragging the header edge. The system will remember your preferred layout for next time.', '您可以拖动标题边缘来调整任何列的大小。系统将记住您下次的首选布局。')}
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Batch Operations', '批量操作')}</h2>
            <p className="mb-6">
                {t('Supervisors access a special "Edit Mode" which reveals batch operation tools in the header:', '主管可以访问特殊的“编辑模式”，该模式在标题中显示批量操作工具：')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 not-prose">
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-100 text-center">
                    <span className="block font-bold text-blue-700 mb-1">{t('P Mode', 'P 模式')}</span>
                    <span className="text-xs text-blue-600/80">{t('Planned', '已计划')}</span>
                </div>
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-100 text-center">
                    <span className="block font-bold text-amber-700 mb-1">{t('WIP Mode', 'WIP 模式')}</span>
                    <span className="text-xs text-amber-600/80">{t('In Progress', '进行中')}</span>
                </div>
                <div className="p-4 rounded-lg bg-red-50 border border-red-100 text-center">
                    <span className="block font-bold text-red-700 mb-1">{t('QN Mode', 'QN 模式')}</span>
                    <span className="text-xs text-red-600/80">{t('Issue Report', '问题报告')}</span>
                </div>
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100 text-center">
                    <span className="block font-bold text-emerald-700 mb-1">{t('Complete', '完成')}</span>
                    <span className="text-xs text-emerald-600/80">{t('Mark Done', '标记完成')}</span>
                </div>
            </div>
        </div>
    );
}
