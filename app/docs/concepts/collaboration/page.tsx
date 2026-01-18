
'use client';

import { MessageSquareText, Tag, Users } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

export default function CollaborationPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Collaboration & Comments', '协作与评论')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'In a dynamic manufacturing environment, communication often happens in silos (WhatsApp, shouting across the floor). iProTraX brings this discussion directly into the production flow with Step-Level Smart Comments.',
                    '在动态的制造环境中，沟通往往是孤立的（WhatsApp、隔空喊话）。iProTraX 通过 **步骤级智能评论** 将讨论直接带入生产流程中。'
                )}
            </p>

            <h2 className="text-2xl font-bold mb-6">{t('Step-Level Communication', '步骤级沟通')}</h2>
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden mb-10 not-prose">
                <div className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                        <MessageSquareText className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-2">{t('Context-Aware Chat', '上下文感知聊天')}</h4>
                        <p className="text-slate-600">
                            {t(
                                'Every single step of a Work Order (e.g., "Winding", "Assembly") has its own dedicated discussion thread. This means problem-solving happens exactly where the problem is.',
                                '工单的每一步（例如，“绕线”、“组装”）都有其专用的讨论线程。这意味着问题解决发生在问题确切所在的位置。'
                            )}
                        </p>
                    </div>
                </div>
                <div className="bg-slate-50 px-6 py-4 border-t text-sm text-slate-500">
                    <em>{t('Allows teams to trace back exactly why a delay occurred at a specific station.', '允许团队追溯特定工位发生延误的确切原因。')}</em>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Smart Categories', '智能分类')}</h2>
            <p className="mb-6">
                {t(
                    'To help the AI understand why a conversation is happening, users check a "Category" when posting a comment.',
                    '为了帮助 AI 理解发生对话的原因，用户在发表评论时会选中一个“类别”。'
                )}
            </p>

            <div className="not-prose border rounded-xl overflow-hidden shadow-sm mb-12">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 text-slate-900">
                        <tr>
                            <th className="px-6 py-4 font-semibold border-b">{t('Category', '类别')}</th>
                            <th className="px-6 py-4 font-semibold border-b">{t('Intended Usage', '预期用途')}</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-slate-100 bg-white">
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-slate-400" /> {t('General', '常规')}</td>
                            <td className="px-6 py-4 text-slate-600">{t('Normal updates, shift handovers, or questions.', '正常的更新、交接班或提问。')}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-red-500" /> {t('QN (Quality)', 'QN (质量)')}</td>
                            <td className="px-6 py-4 text-slate-600">{t('Defects, scratches, or out-of-tolerance reports.', '缺陷、划痕或超差报告。')}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-orange-500" /> {t('Material', '物料')}</td>
                            <td className="px-6 py-4 text-slate-600">{t('Missing parts, wrong components, or inventory issues.', '缺件、错误组件或库存问题。')}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-blue-500" /> {t('Machine', '机器')}</td>
                            <td className="px-6 py-4 text-slate-600">{t('Equipment breakdown, tooling issues, or maintenance requests.', '设备故障、工装问题或维护请求。')}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-amber-500" /> {t('Hold', '暂停')}</td>
                            <td className="px-6 py-4 text-slate-600">{t('Process blockers requiring immediate supervisor attention.', '需要主管立即关注的流程阻碍。')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Workflow Example', '工作流示例')}</h2>
            <div className="space-y-4">
                <div className="flex gap-4 p-4 border rounded-lg bg-white shadow-sm hover:border-indigo-200 transition-colors">
                    <div className="flex-none w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">1</div>
                    <div>
                        <strong className="block text-slate-900 mb-1">{t('Flag an Issue', '标记问题')}</strong>
                        <p className="text-slate-600 text-sm m-0">
                            {t('Operator selects "Assembly" step, tags', '操作员选择“组装”步骤，标记')} <code>{t('Material', '物料')}</code>{t(', and types:', '，并输入：')} <em>"{t('Shortage of M5 screws.', 'M5 螺丝短缺。')}"</em>
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 border rounded-lg bg-white shadow-sm hover:border-indigo-200 transition-colors">
                    <div className="flex-none w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">2</div>
                    <div>
                        <strong className="block text-slate-900 mb-1">{t('Notify', '通知')}</strong>
                        <p className="text-slate-600 text-sm m-0">{t('Supervisor sees a red badge on the dashboard. Click-through reveals the context instantly.', '主管在仪表盘上看到红色徽章。点击即可立即查看上下文。')}</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 border rounded-lg bg-indigo-50 border-indigo-100 shadow-sm">
                    <div className="flex-none w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">3</div>
                    <div>
                        <strong className="block text-indigo-900 mb-1">{t('AI Insight', 'AI 洞察')}</strong>
                        <p className="text-indigo-800 text-sm m-0">
                            {t('At end of week, AI reports:', '周末，AI 报告：')} <em>"{t('Recursion detection: You have had 3 material shortages for M5 screws this week.', '递归检测：本周 M5 螺丝已发生 3 次缺料。')}"</em>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
