
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

            <h2 className="text-2xl font-bold mb-6">{t('Authentication', '身份验证')}</h2>
            <p className="mb-6">
                {t(
                    'Most endpoints require a valid session. We use HTTP-only cookies for security. For external scripts, you can pass an API token (coming soon in v8.1).',
                    '大多数端点需要有效的会话。为了安全起见，我们使用 HTTP-only Cookie。对于外部脚本，您可以传递 API 令牌（即将于 v8.1 推出）。'
                )}
            </p>

            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <p className="m-0 text-amber-800 font-medium text-sm">
                    <strong>{t('Note:', '注意：')}</strong> {t('Internal APIs are subject to change. Please rely on the methods documented in the', '内部 API 可能会发生变化。请依赖于')} <a href="/docs/api/endpoints" className="underline hover:text-amber-900">{t('Endpoints Reference', '端点参考')}</a> {t('documented methods.', '中记录的方法。')}
                </p>
            </div>
        </div>
    );
}
