
'use client';

import { Webhook, Code2, Globe2 } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function ApiOverviewPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('API Overview', 'API 概览')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'iProTraX uses Next.js API Routes to provide a RESTful interface for all data interactions. This allows for third-party integrations (e.g., SAP, Tableau) or custom client development.',
                    'iProTraX 使用 Next.js API 路由为所有数据交互提供 RESTful 接口。这允许第三方集成（例如 SAP、Tableau）或自定义客户端开发。'
                )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-12">
                <div className="p-6 bg-slate-50 border rounded-xl text-center">
                    <Globe2 className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-900">{t('RESTful Design', 'RESTful 设计')}</h3>
                    <p className="text-sm text-slate-500">{t('Standard HTTP verbs (GET, POST, PUT) and JSON payloads.', '标准 HTTP 动词（GET、POST、PUT）和 JSON 负载。')}</p>
                </div>
                <div className="p-6 bg-slate-50 border rounded-xl text-center">
                    <Code2 className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-900">{t('Type-Safe', '类型安全')}</h3>
                    <p className="text-sm text-slate-500">{t('Fully typed responses aligning with the Prisma schema.', '完全符合 Prisma 模式的类型化响应。')}</p>
                </div>
                <div className="p-6 bg-slate-50 border rounded-xl text-center">
                    <Webhook className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-900">{t('AI Enabled', 'AI以此赋能')}</h3>
                    <p className="text-sm text-slate-500">{t('Endpoints dealing with comments automatically trigger AI pipelines.', '处理评论的端点会自动触发 AI 管道。')}</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Base URL', '基本 URL')}</h2>
            <div className="bg-slate-900 p-4 rounded-lg font-mono text-slate-50 flex items-center justify-between mb-8">
                <span>http://localhost:3000/api</span>
                <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">GET</span>
            </div>

            <div className="space-y-4 mb-8">
                <p>
                    {t(
                        'iProTraX supports two primary authentication methods for API access:',
                        'iProTraX 支持两种主要的 API 访问身份验证方法：'
                    )}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                    <div className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-slate-900 mb-2">{t('Session (Browser)', '会话 (浏览器)')}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{t('Uses Secure HTTP-only cookies. Recommended for internal dashboard extensions and UI-heavy integrations.', '使用安全的 HTTP-only Cookie。推荐用于内部仪表盘扩展和高 UI 交互的集成。')}</p>
                    </div>
                    <div className="p-5 border border-indigo-200 rounded-xl bg-indigo-50/30 shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-indigo-900 mb-2">{t('API Token (v1)', 'API 令牌 (v1)')}</h4>
                        <p className="text-sm text-indigo-700 leading-relaxed">{t('Standard Bearer token authentication. Designed for ERP/MES synchronization, Python automation scripts, and cross-system webhooks.', '标准 Bearer 令牌身份验证。专为 ERP/MES 同步、Python 自动化脚本和跨系统 Webhook 设计。')}</p>
                    </div>
                </div>
            </div>

            <h3 className="text-xl font-bold mb-4">{t('v1 Architecture', 'v1 架构')}</h3>
            <p>
                {t(
                    'The v1 API is designed for enterprise-scale data synchronization. It provides consistent, versioned endpoints that ensure backward compatibility while allowing external systems to read real-time production status and update work order progress.',
                    'v1 API 专为企业级数据同步而设计。它提供一致的版本化端点，确保向后兼容，同时允许外部系统读取实时生产状态并更新工单进度。'
                )}
            </p>

            <h3 className="text-xl font-bold mb-4">{t('Using Bearer Tokens', '使用 Bearer 令牌')}</h3>
            <div className="bg-slate-900 p-4 rounded-lg font-mono text-sm text-slate-300 mb-8">
                Authorization: Bearer ipx_...
            </div>

            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <p className="m-0 text-amber-800 font-medium text-sm">
                    <strong>{t('Note:', '注意：')}</strong> {t('Internal APIs are subject to change. Please rely on the methods documented in the', '内部 API 可能会发生变化。请依赖于')} <a href="/docs/api/endpoints" className="underline hover:text-amber-900">{t('Endpoints Reference', '端点参考')}</a> {t('documented methods.', '中记录的方法。')}
                </p>
            </div>
        </div>
    );
}
