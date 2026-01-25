
'use client';

import { Webhook, Zap, Send, Bell } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function WebhooksPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('Webhooks', 'Webhook')}</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'iProTraX can push real-time notifications to your external services whenever production events occur. This is ideal for integrating with Slack, Teams, DingTalk, or internal monitoring systems.',
                    '当发生生产事件时，iProTraX 可以向您的外部服务推送实时通知。这非常适合与 Slack、Teams、钉钉或内部监控系统集成。'
                )}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                <div className="p-6 bg-rose-50 border border-rose-100 rounded-xl">
                    <Zap className="w-8 h-8 text-rose-500 mb-3" />
                    <h3 className="text-lg font-bold text-rose-900">{t('Real-time Triggers', '实时触发')}</h3>
                    <p className="text-sm text-rose-700">{t('Events are sent the moment an operator updates a work order step.', '操作员更新工单步骤的瞬间即可发送事件。')}</p>
                </div>
                <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl">
                    <Send className="w-8 h-8 text-blue-500 mb-3" />
                    <h3 className="text-lg font-bold text-blue-900">{t('Flexible Payloads', '灵活负载')}</h3>
                    <p className="text-sm text-blue-700">{t('Standard JSON format compatible with most automation platforms.', '标准 JSON 格式，兼容大多数自动化平台。')}</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Supported Events', '支持的事件')}</h2>
            <div className="space-y-4 mb-10">
                <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-mono font-bold text-slate-900 text-sm">on_hold</span>
                        <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full font-bold">URGENT</span>
                    </div>
                    <p className="text-sm text-slate-600 m-0">{t('Triggered when a work order step is marked as HOLD (Production blocker).', '当工单步骤被标记为 HOLD（生产阻塞）时触发。')}</p>
                </div>
                <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-mono font-bold text-slate-900 text-sm">on_qn</span>
                        <span className="text-xs px-2 py-0.5 bg-red-100 text-red-700 rounded-full font-bold">QUALITY</span>
                    </div>
                    <p className="text-sm text-slate-600 m-0">{t('Triggered when a quality issue (QN/DIFA) is reported on a step.', '当步骤报告质量问题（QN/DIFA）时触发。')}</p>
                </div>
                <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-mono font-bold text-slate-900 text-sm">on_done</span>
                        <span className="text-xs px-2 py-0.5 bg-emerald-100 text-emerald-700 rounded-full font-bold">PROGRESS</span>
                    </div>
                    <p className="text-sm text-slate-600 m-0">{t('Triggered when a work order step is completed.', '当工单步骤完成时触发。')}</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Supported Providers', '支持的服务商')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 not-prose mb-10">
                {['DingTalk', 'Feishu', 'WeCom', 'Bark', 'Gotify', 'Telegram', 'Slack', 'Discord', 'Custom'].map(p => (
                    <div key={p} className="p-3 border rounded-lg text-center bg-white shadow-sm font-medium text-slate-700">
                        {p}
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Available Variables', '可用变量')}</h2>
            <div className="bg-slate-50 border rounded-xl overflow-hidden mb-10 not-prose">
                <table className="w-full text-sm">
                    <thead className="bg-slate-100 border-b">
                        <tr>
                            <th className="px-4 py-2 text-left">{t('Variable', '变量')}</th>
                            <th className="px-4 py-2 text-left">{t('Description', '说明')}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y">
                        <tr><td className="px-4 py-2 font-mono text-indigo-600">{"{{orderId}}"}</td><td className="px-4 py-2">{t('The unique work order ID.', '唯一的工单 ID。')}</td></tr>
                        <tr><td className="px-4 py-2 font-mono text-indigo-600">{"{{step}}"}</td><td className="px-4 py-2">{t('Current production step name.', '当前生产步骤名称。')}</td></tr>
                        <tr><td className="px-4 py-2 font-mono text-indigo-600">{"{{status}}"}</td><td className="px-4 py-2">{t('Target status (Done, Hold, QN).', '目标状态（Done、Hold、QN）。')}</td></tr>
                        <tr><td className="px-4 py-2 font-mono text-indigo-600">{"{{productName}}"}</td><td className="px-4 py-2">{t('Product line or part name.', '产线或零件名称。')}</td></tr>
                        <tr><td className="px-4 py-2 font-mono text-indigo-600">{"{{operator}}"}</td><td className="px-4 py-2">{t('The user who triggered the update.', '触发更新的用户。')}</td></tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Payload Example', '负载示例')}</h2>
            <div className="bg-slate-900 p-6 rounded-xl mt-4 not-prose">
                <pre className="text-sm text-slate-300 font-mono overflow-x-auto m-0 leading-relaxed">
                    {`{
  "event": "on_hold",
  "data": {
    "orderId": "WO-12345",
    "productName": "Controller Module A",
    "step": "Final Assembly",
    "operator": "John Doe",
    "status": "Hold",
    "timestamp": "2026-01-25T11:20:45Z"
  }
}`}
                </pre>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-6">{t('Configuration', '配置方式')}</h2>
            <div className="flex items-start gap-4 p-6 bg-slate-50 border rounded-xl not-prose">
                <div className="p-3 bg-white border rounded-lg shadow-sm">
                    <Bell className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 mb-1">{t('Enable Webhooks', '启用 Webhook')}</h4>
                    <p className="text-sm text-slate-600 mb-0">
                        {t('Go to ', '前往')} <strong>{t('Settings > Product Line Config', '设置 > 生产线配置')}</strong> {t(' and edit the JSON configuration to add one or more destination URLs.', '并编辑 JSON 配置以添加一个或多个目标 URL。')}
                    </p>
                </div>
            </div>
        </div>
    );
}
