'use client';

import { Shield, Lock, AlertTriangle, CheckCircle, Smartphone } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function LicensePage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="flex items-center gap-3">
                <Shield className="w-9 h-9 text-indigo-600" />
                {t('License & Free Tier', '许可与免费版')}
            </h1>

            <p className="lead text-lg text-slate-600">
                {t(
                    'iProTraX uses a secure, hardware-backed licensing system that scales from small teams to large enterprises.',
                    'iProTraX 采用安全的硬件支持许可系统，可从小型团队扩展到大型企业。'
                )}
            </p>

            <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-xl p-6 mb-8 shadow-sm">
                <h3 className="flex items-center gap-2 text-indigo-900 mt-0">
                    ✨ {t('Free Tier (Forever)', '免费版（永久）')}
                </h3>
                <p className="text-indigo-700 mt-2 mb-4">
                    {t(
                        'Automatically activated if no license key is provided or if a license expires. Perfect for small workshops.',
                        '如果没有提供许可证密钥或许可证已过期，系统自动激活此模式。非常适合小型车间。'
                    )}
                </p>
                <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm text-center">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">∞</div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{t('Time Limit', '时间限制')}</div>
                        <div className="text-sm text-slate-700 mt-1">{t('None (Forever)', '无（永久）')}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm text-center">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">10</div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{t('Max Users', '最大用户数')}</div>
                        <div className="text-sm text-slate-700 mt-1">{t('Registration blocked > 10', '超过 10 人阻止注册')}</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-indigo-100 shadow-sm text-center">
                        <div className="text-2xl font-bold text-indigo-600 mb-1">1</div>
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-500">{t('Product Line', '产品线')}</div>
                        <div className="text-sm text-slate-700 mt-1">{t('Single Line Only', '仅单线')}</div>
                    </div>
                </div>
            </div>

            <h2>{t('License Tiers', '许可等级')}</h2>

            <div className="grid md:grid-cols-3 gap-6 not-prose my-8">
                {/* Free */}
                <div className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Free / Trial</h3>
                    <div className="text-sm text-slate-500 mb-4">{t('For small workshops', '适用于小型车间')}</div>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-slate-400" /> 1 {t('Line', '产线')}</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-slate-400" /> 10 {t('Users', '用户')}</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-slate-400" /> {t('Community Support', '社区支持')}</li>
                    </ul>
                </div>

                {/* Pro */}
                <div className="border-2 border-indigo-600 rounded-xl p-6 bg-white relative shadow-md">
                    <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                    <h3 className="text-lg font-semibold text-indigo-900 mb-2">Pro</h3>
                    <div className="text-sm text-slate-500 mb-4">{t('For growing factories', '适用于成长型工厂')}</div>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-indigo-600" /> 10 {t('Lines', '产线')}</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-indigo-600" /> 50 {t('Users', '用户')}</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-indigo-600" /> {t('Email Support', '邮件支持')}</li>
                        <li className="flex items-center gap-2"><Smartphone className="w-4 h-4 text-indigo-600" /> {t('Kiosk Included', '包含看板模式')}</li>
                    </ul>
                </div>

                {/* Enterprise */}
                <div className="border border-slate-200 rounded-xl p-6 bg-white">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Enterprise</h3>
                    <div className="text-sm text-slate-500 mb-4">{t('For large organizations', '适用于大型组织')}</div>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-slate-700" /> 100+ {t('Lines', '产线')}</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-slate-700" /> 1000+ {t('Users', '用户')}</li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-slate-700" /> {t('Priority Support', '优先支持')}</li>
                        <li className="flex items-center gap-2"><Lock className="w-4 h-4 text-slate-700" /> {t('Custom SLA', '定制 SLA')}</li>
                    </ul>
                </div>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
                <div className="text-sm text-amber-800">
                    <strong className="block mb-1 text-amber-900">{t('Limit Enforcement', '限制执行')}</strong>
                    {t(
                        'If you exceed the user limit (e.g. valid license expires), new user registrations will be blocked immediately. Existing users may log in, but system functionality may be restricted to read-only for excess users in future updates.',
                        '如果您超过用户限制（例如有效许可证过期），新用户注册将立即被阻止。'
                    )}
                </div>
            </div>
        </div>
    );
}
