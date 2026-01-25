
'use client';

import { ArrowLeftRight, Terminal } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function ApiEndpointsPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('API Endpoints', 'API 端点')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t('A comprehensive reference of available REST routes. All responses are in JSON format. Updated for v8.1.', '可用 REST 路由的综合参考。所有响应均为 JSON 格式。针对 v8.1 已更新。')}
            </p>

            <div className="space-y-12">

                {/* Orders Group */}
                <div>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b">
                        <ArrowLeftRight className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold text-slate-900 m-0">{t('Orders', '订单')}</h2>
                    </div>

                    <div className="grid gap-6 not-prose">
                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                                <code className="text-sm font-bold text-slate-700">GET /api/orders</code>
                                <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">READ</span>
                            </div>
                            <div className="p-4 text-sm text-slate-600">
                                {t('Retrieve a list of all active orders. Supports filtering by', '检索所有活动订单的列表。支持通过')} <code>productId</code> {t('query param.', '查询参数进行筛选。')}
                            </div>
                        </div>

                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                                <div className="flex items-center gap-2">
                                    <code className="text-sm font-bold text-slate-700">POST /api/orders</code>
                                </div>
                                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">CREATE</span>
                            </div>
                            <div className="p-4 text-sm text-slate-600">
                                {t('Bulk create new orders. Requires an array of order objects in the body.', '批量创建新订单。需要在请求体中包含订单对象数组。')}
                            </div>
                        </div>

                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                                <code className="text-sm font-bold text-slate-700">GET /api/orders/:id</code>
                                <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">READ</span>
                            </div>
                            <div className="p-4 text-sm text-slate-600">
                                {t('Get detailed information for a single order, including full history log.', '获取单个订单的详细信息，包括完整的历史日志。')}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* API v1 Group */}
            <div className="bg-indigo-50/30 p-8 rounded-2xl border border-indigo-100">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-indigo-200">
                    <Terminal className="w-6 h-6 text-indigo-600" />
                    <h2 className="text-2xl font-bold text-slate-900 m-0">{t('External API (v1)', '外部 API (v1)')}</h2>
                </div>

                <div className="grid gap-6 not-prose">
                    <div className="border border-indigo-200 bg-white rounded-lg overflow-hidden">
                        <div className="bg-indigo-50/50 px-4 py-3 flex items-center justify-between border-b border-indigo-100">
                            <code className="text-sm font-bold text-indigo-700">POST /api/v1/auth/verify</code>
                            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">AUTH</span>
                        </div>
                        <div className="p-4 text-sm text-slate-600">
                            {t('Verify an API key and retrieve permissions.', '验证 API 密钥并检索权限。')}
                        </div>
                    </div>

                    <div className="border border-indigo-200 bg-white rounded-lg overflow-hidden">
                        <div className="bg-indigo-50/50 px-4 py-3 flex items-center justify-between border-b border-indigo-100">
                            <code className="text-sm font-bold text-indigo-700">GET /api/v1/orders</code>
                            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">V1</span>
                        </div>
                        <div className="p-4 text-sm text-slate-600">
                            {t('Retrieve orders with optional pagination and product filtering.', '通过可选的分页和产品筛选检索订单。')}
                        </div>
                    </div>

                    <div className="border border-indigo-200 bg-white rounded-lg overflow-hidden">
                        <div className="bg-indigo-50/50 px-4 py-3 flex items-center justify-between border-b border-indigo-100">
                            <code className="text-sm font-bold text-indigo-700">GET /api/v1/products</code>
                            <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">V1</span>
                        </div>
                        <div className="p-4 text-sm text-slate-600">
                            {t('List all available product lines and their configurations.', '列出所有可用的产品线及其配置。')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
