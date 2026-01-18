
'use client';

import { History, Zap, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function ChangelogPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <div className="flex items-center gap-3 mb-6">
                <History className="w-10 h-10 text-slate-400" />
                <h1 className="text-4xl font-extrabold tracking-tight m-0">{t('Changelog', '更新日志')}</h1>
            </div>
            <p className="lead text-lg text-slate-600 mb-10">
                {t(
                    'Latest updates, improvements, and fixes for the iProTraX platform.',
                    'iProTraX 平台的最新更新、改进和修复。'
                )}
            </p>

            <div className="relative border-l-2 border-slate-100 ml-4 space-y-12">
                {/* V8.1.0 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 ring-4 ring-white shadow-sm" />

                    <header className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 m-0">v8.1.0</h2>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wide">
                                {t('Productivity Engine', '生产力引擎')}
                            </span>
                        </div>
                        <time className="block text-sm text-slate-500">{t('January 18, 2026', '2026年1月18日')}</time>
                    </header>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                            <ShieldCheck className="w-4 h-4" /> {t('Highlights', '亮点')}
                        </h4>
                        <ul className="grid grid-cols-1 gap-3 not-prose">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong>{t('Free Tier:', '免费版：')}</strong> {t('Permanent free access for small teams (1 Line, 10 Users).', '小团队永久免费访问（1条产线，10个用户）。')}
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong>{t('Security Upgrade:', '安全升级：')}</strong> {t('Implemented ES256 hardware-backed signing (YubiKey) for maximum license security.', '实施了 ES256 硬件签名（YubiKey）以实现最高的许可证安全性。')}
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong>{t('Productivity Engine:', '生产力引擎：')}</strong> {t('Active Sessions card, Real-time Efficiency, and Quick Stop.', '活跃会话卡片、实时效率和快速停止。')}
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong>{t('DeepSeek Integration:', 'DeepSeek 集成：')}</strong> {t('Added support for DeepSeek AI for enhanced Chinese context.', '增加了对 DeepSeek AI 的支持，以增强中文语境。')}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* V8.0.0 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white shadow-sm" />

                    <header className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 m-0">v8.0.0</h2>
                            <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wide">
                                {t('Enterprise Release', '企业版发布')}
                            </span>
                        </div>
                        <time className="block text-sm text-slate-500">{t('January 12, 2026', '2026年1月12日')}</time>
                    </header>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                            <ShieldCheck className="w-4 h-4" /> {t('Highlights', '亮点')}
                        </h4>
                        <ul className="grid grid-cols-1 gap-3 not-prose">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong>{t('Enterprise Security:', '企业级安全：')}</strong> {t('Added Role-Based Access Control (RBAC) and session management tweaks for stricter compliance.', '增加了基于角色的访问控制 (RBAC) 和会话管理调整，以实现更严格的合规性。')}
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong>{t('Docker Native:', '原生 Docker：')}</strong> {t('Re-architected docker-compose for smoother production deployments.', '重构了 docker-compose 以实现更流畅的生产部署。')}
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-slate-700">
                                    <strong>{t('Context-Aware Chat:', '上下文感知聊天：')}</strong> {t('Unified the commenting system with the new Dashboard UI.', '统一了评论系统与新的仪表盘 UI。')}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* V7.0.0 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white shadow-sm" />

                    <header className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 m-0">v7.0.0</h2>
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide">
                                {t('Collaboration Update', '协作更新')}
                            </span>
                        </div>
                        <time className="block text-sm text-slate-500">{t('December 20, 2025', '2025年12月20日')}</time>
                    </header>

                    <ul className="space-y-2 text-slate-600 list-none pl-0 not-prose">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span><strong>{t('Smart Comments:', '智能评论：')}</strong> {t('Introduced step-level commenting functionality.', '引入了步骤级评论功能。')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span><strong>{t('AI Categories:', 'AI 分类：')}</strong> {t('Automatic tagging of comments (Quality, Material, etc.).', '评论自动标记（质量、材料等）。')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Zap className="w-5 h-5 text-amber-500 flex-shrink-0" />
                            <span><strong>{t('Excel Import:', 'Excel 导入：')}</strong> {t('Improved header detection logic.', '改进了标题检测逻辑。')}</span>
                        </li>
                    </ul>
                </div>

                {/* V6.5.0 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-200 ring-4 ring-white shadow-sm" />

                    <header className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 m-0">v6.5.0</h2>
                        </div>
                        <time className="block text-sm text-slate-500">{t('November 15, 2025', '2025年11月15日')}</time>
                    </header>

                    <p className="text-slate-600 mb-2">{t('Focused on Kiosk stability and "Secure Lock" mode.', '专注于 Kiosk 稳定性和“安全锁定”模式。')}</p>
                </div>
            </div>
        </div>
    );
}
