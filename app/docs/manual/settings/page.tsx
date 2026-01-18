
'use client';

import { Users, LayoutList, Database, DatabaseBackup } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function SettingsManualPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Settings', '设置')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'Configure the system environment, manage user roles, and define product line behaviors.',
                    '配置系统环境、管理用户角色并定义生产线行为。'
                )}
            </p>

            <div className="space-y-10">
                {/* User Mgmt */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold m-0 text-slate-900">{t('User Management', '用户管理')}</h2>
                    </div>
                    <div className="border rounded-xl bg-white shadow-sm p-6">
                        <p className="text-slate-600 mb-4">{t('Admins can create, edit, or remove user accounts. There are 3 role levels:', '管理员可以创建、编辑或删除用户帐户。有 3 个角色级别：')}</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose p-0 m-0 list-none">
                            <li className="p-4 bg-indigo-50 rounded-lg text-center">
                                <strong className="block text-indigo-900">{t('Admin', '管理员')}</strong>
                                <span className="text-xs text-indigo-700">{t('Full system control', '完全的系统控制权')}</span>
                            </li>
                            <li className="p-4 bg-slate-50 rounded-lg text-center">
                                <strong className="block text-slate-900">{t('Supervisor', '主管')}</strong>
                                <span className="text-xs text-slate-600">{t('Can edit orders & users', '可以编辑订单和用户')}</span>
                            </li>
                            <li className="p-4 bg-white border rounded-lg text-center">
                                <strong className="block text-slate-700">{t('User', '用户')}</strong>
                                <span className="text-xs text-slate-500">{t('Read-only view', '只读查看')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Product Line */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <LayoutList className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold m-0 text-slate-900">{t('Product Line Config', '生产线配置')}</h2>
                    </div>
                    <p className="text-slate-600 mb-4">
                        {t(
                            'Define the columns and steps for each production line. This is where you map Excel headers to database fields.',
                            '定义每个生产线的列和步骤。这是您将 Excel 标题映射到数据库字段的地方。'
                        )}
                    </p>
                    <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300">
                        {t('JSON Editor provided in UI for advanced configuration.', 'UI 中提供了 JSON 编辑器用于高级配置。')}
                    </div>
                </div>

                {/* Data Mgmt */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Database className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold m-0 text-slate-900">{t('Data Management', '数据管理')}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                        <div className="border p-5 rounded-xl hover:border-indigo-300 transition-colors">
                            <div className="font-bold text-slate-900 mb-2">{t('Clean Data', '清理数据')}</div>
                            <p className="text-sm text-slate-500 mb-3">{t('Clear all test data before going live.', '上线前清除所有测试数据。')}</p>
                            <button className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">{t('Dangerous', '危险操作')}</button>
                        </div>
                        <div className="border p-5 rounded-xl hover:border-indigo-300 transition-colors">
                            <div className="font-bold text-slate-900 mb-2">{t('Export DB', '导出数据库')}</div>
                            <p className="text-sm text-slate-500 mb-3">{t('Download a full SQLite snapshot.', '下载完整的 SQLite 快照。')}</p>
                            <div className="flex items-center gap-1 text-xs text-indigo-600 font-medium">
                                <DatabaseBackup className="w-3 h-3" /> {t('Backup', '备份')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
