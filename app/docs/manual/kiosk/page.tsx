
'use client';

import { MonitorPlay, Lock, Eye, MousePointer2 } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function KioskModePage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Kiosk Mode', 'Kiosk 模式')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'Designed for large TV screens on the shop floor. It provides a passive, high-visibility display that keeps the team aligned without requiring interaction.',
                    '专为车间的大屏幕电视设计。它提供被动、高可见度的显示，使团队保持一致，而无需交互。'
                )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-12">
                <div className="p-6 bg-slate-900 rounded-xl text-white shadow-xl">
                    <MonitorPlay className="w-10 h-10 text-emerald-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{t('Auto-Scroll', '自动滚动')}</h3>
                    <p className="text-slate-400 text-sm">
                        {t('Automatically cycles through pages of orders. No mouse needed.', '自动循环播放订单页面。无需鼠标。')}
                    </p>
                </div>
                <div className="p-6 bg-white border rounded-xl shadow-sm">
                    <Eye className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Visual Priority', '视觉优先级')}</h3>
                    <p className="text-slate-600 text-sm">
                        {t('Rows are color-coded and sorted. Urgent items float to the top.', '行按颜色编码和排序。紧急项目浮动到顶部。')}
                    </p>
                </div>
                <div className="p-6 bg-white border rounded-xl shadow-sm">
                    <Lock className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{t('Secure Lock', '安全锁定')}</h3>
                    <p className="text-slate-600 text-sm">
                        {t('Read-only mode. prevents unauthorized edits from the floor terminal.', '只读模式。防止来自车间终端的未经授权的编辑。')}
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Setup Recommendations', '设置建议')}</h2>
            <div className="border rounded-2xl overflow-hidden shadow-sm not-prose">
                <table className="w-full text-left">
                    <tbody className="divide-y divide-slate-100">
                        <tr className="bg-slate-50/50">
                            <td className="px-6 py-4 font-semibold text-slate-900 w-1/3">{t('Hardware', '硬件')}</td>
                            <td className="px-6 py-4 text-slate-600">{t('Smart TV (Android) or Raspberry Pi + Monitor', '智能电视 (Android) 或树莓派 + 显示器')}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-semibold text-slate-900">{t('Browser', '浏览器')}</td>
                            <td className="px-6 py-4 text-slate-600">{t('Chrome / Edge (F11 for Fullscreen)', 'Chrome / Edge (F11 全屏)')}</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                            <td className="px-6 py-4 font-semibold text-slate-900">{t('Account', '帐户')}</td>
                            <td className="px-6 py-4 text-slate-600">{t('Create a dedicated "Viewer" user role.', '创建一个专用的“查看者”用户角色。')}</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-semibold text-slate-900">{t('Session', '会话')}</td>
                            <td className="px-6 py-4 text-slate-600">{t('Use a browser extension to auto-refresh every hour.', '使用浏览器扩展程序每小时自动刷新一次。')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex items-start gap-3 p-4 bg-indigo-50 border border-indigo-100 rounded-lg mt-10 text-sm text-indigo-800">
                <MousePointer2 className="w-5 h-5 mt-0.5 text-indigo-600" />
                <div>
                    <strong>{t('Note:', '注意：')}</strong> {t('To exit Kiosk Mode on a touch screen without a keyboard, tap the hidden detailed exit button in the top-right corner 5 times.', '要在没有键盘的触摸屏上退出 Kiosk 模式，请点击右上角隐藏的详细退出按钮 5 次。')}
                </div>
            </div>
        </div>
    );
}
