
'use client';

import { Database, Server, Smartphone, Cpu } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function ArchitecturePage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">{t('System Architecture', '系统架构')}</h1>
            <p className="lead text-lg text-slate-600 mb-10">
                {t(
                    'iProTraX is built on a modern, monolithic architecture optimized for ease of deployment, low latency, and real-time performance on the shop floor.',
                    'iProTraX 基于优化了部署便捷性、低延迟和车间实时性能的现代单体架构构建。'
                )}
            </p>

            <h2 className="text-2xl font-bold mb-6">{t('Technology Stack', '技术栈')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-12">
                <div className="flex flex-col h-full p-6 border rounded-xl bg-gradient-to-br from-slate-50 to-white shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg border shadow-sm"><Smartphone className="w-5 h-5 text-indigo-600" /></div>
                        <h3 className="text-lg font-bold text-slate-900">{t('Frontend (Client)', '前端 (客户端)')}</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600 flex-1">
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Next.js 16:</strong> {t('Utilizing React Server Components (RSC) for performance and SEO.', '利用 React 服务端组件 (RSC) 提升性能和 SEO。')}</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>React 19:</strong> {t('The core UI library with concurrent rendering features.', '具有并发渲染特性的核心 UI 库。')}</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Tailwind CSS v4:</strong>  {t('Utility-first CSS engine for rapid, consistent styling.', '用户优先的 CSS 引擎，用于快速一致的样式设计。')}</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Recharts:</strong>  {t('Responsive charting library for Dashboard metrics.', '用于仪表盘指标的响应式图表库。')}</span></li>
                    </ul>
                </div>

                <div className="flex flex-col h-full p-6 border rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg border shadow-sm"><Server className="w-5 h-5 text-indigo-600" /></div>
                        <h3 className="text-lg font-bold text-indigo-900">{t('Backend (Services)', '后端 (服务)')}</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-indigo-900/80 flex-1">
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Next.js API Routes:</strong>  {t('Serverless functions handling business logic and AI requests.', '处理业务逻辑和 AI 请求的无服务器函数。')}</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Prisma ORM:</strong>  {t('Type-safe database client ensuring data integrity.', '确保数据完整性的类型安全数据库客户端。')}</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Chokidar:</strong>  {t('Robust file watcher system for reliable Excel auto-imports.', '由于可靠 Excel 自动导入的稳健文件监控系统。')}</span></li>
                    </ul>
                </div>
            </div>

            <div className="space-y-8">
                <div className="p-6 bg-white border rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-slate-100 rounded-lg"><Database className="w-5 h-5 text-slate-700" /></div>
                        <h3 className="text-xl font-bold m-0">{t('Data Persistence', '数据持久化')}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-slate-900">{t('SQLite (Primary)', 'SQLite (主要)')}</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                {t(
                                    'Zero-configuration, file-based storage. Perfect for on-premise deployments as it allows for trivial backup/restore by simply copying a file.',
                                    '零配置、基于文件的存储。无需复杂的安装，只需复制文件即可实现备份/恢复，非常适合本地部署。'
                                )}
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">{t('Excel Files (Input)', 'Excel 文件 (输入)')}</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                {t(
                                    'Acts as the "Universal Interface". The system watches hot folders and automatically parses .xlsx files into the database.',
                                    '充当“通用接口”。系统监控热文件夹，并自动将 .xlsx 文件解析到数据库中。'
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg"><Cpu className="w-5 h-5 text-purple-700" /></div>
                        <h3 className="text-xl font-bold m-0 text-purple-900">{t('Artificial Intelligence', '人工智能')}</h3>
                    </div>
                    <p className="text-purple-900/80 mb-4">
                        {t(
                            "The AI Copilot is not just a chatbot, it's deeply integrated into the data pipeline:",
                            "AI Copilot 不仅仅是一个聊天机器人，它深度集成在数据管道中："
                        )}
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                        <li className="bg-white p-3 rounded border border-purple-100 text-sm">
                            {t('Context Injection:', '上下文注入：')} {t('Automatically feeds relevant order status, delays, and comments into the LLM context window.', '自动将相关订单状态、延迟和评论输入 LLM 上下文窗口。')}
                        </li>
                        <li className="bg-white p-3 rounded border border-purple-100 text-sm">
                            {t('Dual Providers:', '双模支持：')} {t('Supports OpenAI (Cloud) for power and Ollama (Local) for privacy and offline capability.', '同时支持 OpenAI（云端增强）和 Ollama（本地隐私与离线能力）。')}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
