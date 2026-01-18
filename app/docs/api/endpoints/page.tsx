
'use client';

import { ArrowLeftRight, Terminal } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function ApiEndpointsPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('API Endpoints', 'API 端点')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t('A comprehensive reference of available REST routes. All responses are in JSON format.', '可用 REST 路由的综合参考。所有响应均为 JSON 格式。')}
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

                {/* Users Group */}
                <div>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b">
                        <Terminal className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold text-slate-900 m-0">{t('Users', '用户')}</h2>
                    </div>

                    <div className="grid gap-6 not-prose">
                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                                <code className="text-sm font-bold text-slate-700">GET /api/users</code>
                                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">ADMIN</span>
                            </div>
                            <div className="p-4 text-sm text-slate-600">
                                {t('List all registered users and their current status.', '列出所有注册用户及其当前状态。')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
