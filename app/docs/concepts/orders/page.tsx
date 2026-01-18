
'use client';

import { ClipboardList, AlertCircle, CheckCircle2, Clock, XCircle } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function OrdersPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Orders & Work Orders', '订单与工单')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'A Work Order (WO) is the core entity tracked by iProTraX. It represents a specific quantity of a product to be manufactured.',
                    '工单 (WO) 是 iProTraX 跟踪的核心实体。它代表要制造的特定数量的产品。'
                )}
            </p>

            <div className="flex items-center gap-4 p-4 bg-indigo-50 border border-indigo-100 rounded-xl mb-10 not-prose">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                    <ClipboardList className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                    <h3 className="font-bold text-indigo-900 text-lg">{t('Unique Identification', '唯一标识')}</h3>
                    <p className="text-sm text-indigo-800/80">
                        {t(
                            'Every order is uniquely identified by the combination of Product Line + WO ID.',
                            '每个订单都通过 生产线 + 工单 ID 的组合进行唯一标识。'
                        )}
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Status Codes', '状态代码')}</h2>
            <p className="mb-6">
                {t('Each step in an order\'s lifecycle has a distinct status code, visualized by color:', '订单生命周期的每个步骤都有一个独特的状态代码，通过颜色进行可视化：')}
            </p>

            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm not-prose">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-900">
                        <tr>
                            <th className="px-6 py-4 font-semibold">{t('Symbol', '符号')}</th>
                            <th className="px-6 py-4 font-semibold">{t('Status Name', '状态名称')}</th>
                            <th className="px-6 py-4 font-semibold">{t('Meaning', '含义')}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                        <tr>
                            <td className="px-6 py-4 font-mono font-bold text-slate-400">P</td>
                            <td className="px-6 py-4 font-medium text-slate-700">{t('Planned', '已计划')}</td>
                            <td className="px-6 py-4 text-slate-500">{t('Order is scheduled but work has not started.', '订单已安排，但工作尚未开始。')}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                    <Clock className="w-3 h-3 mr-1" /> WIP
                                </span>
                            </td>
                            <td className="px-6 py-4 font-medium text-amber-600">{t('In Progress', '进行中')}</td>
                            <td className="px-6 py-4 text-slate-500">{t('Currently being worked on at this station.', '目前正在此工位进行工作。')}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    <AlertCircle className="w-3 h-3 mr-1" /> HOLD
                                </span>
                            </td>
                            <td className="px-6 py-4 font-medium text-red-600">{t('On Hold', '暂停')}</td>
                            <td className="px-6 py-4 text-slate-500">{t('Production stopped due to material shortage or other blocker.', '由于缺料或其他阻碍导致生产停止。')}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                                    <XCircle className="w-3 h-3 mr-1" /> QN
                                </span>
                            </td>
                            <td className="px-6 py-4 font-medium text-pink-600">{t('Quality Note', '质量备注')}</td>
                            <td className="px-6 py-4 text-slate-500">{t('Quality issue reported (defect, scratch).', '报告了质量问题（缺陷、划痕）。')}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <CheckCircle2 className="w-3 h-3 mr-1" /> OK
                                </span>
                            </td>
                            <td className="px-6 py-4 font-medium text-green-600">{t('Complete', '完成')}</td>
                            <td className="px-6 py-4 text-slate-500">{t('Step finished successfully.', '步骤成功完成。')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
