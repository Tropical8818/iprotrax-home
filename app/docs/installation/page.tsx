
'use client';

import Link from "next/link";
import { Terminal, Database, Server, Key } from "lucide-react";
import { useLanguage } from '@/lib/language-context';

export default function InstallationPage() {
    const { t } = useLanguage();

    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">
                {t('Installation', '安装指南')}
            </h1>
            <p className="lead text-lg text-slate-600 mb-8">
                {t(
                    'iProTraX can be deployed using standard Node.js for flexibility or Docker for production reliability. We recommend Docker for most shop floor deployments.',
                    'iProTraX 可以使用标准 Node.js 部署以获得灵活性，也可以使用 Docker 部署以获得生产环境的可靠性。我们推荐在大多数车间部署中使用 Docker。'
                )}
            </p>

            <div className="bg-slate-50 border rounded-xl p-6 mb-12 not-prose">
                <h2 className="text-xl font-bold text-slate-900 mt-0 mb-4">{t('System Prerequisites', '系统要求')}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100">
                        <div className="p-2 bg-green-50 rounded text-green-600"><Server className="w-5 h-5" /></div>
                        <span className="text-sm"><strong>Node.js 20.9+</strong> {t('(for standard)', '（标准部署）')}</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100">
                        <div className="p-2 bg-blue-50 rounded text-blue-600"><Terminal className="w-5 h-5" /></div>
                        <span className="text-sm"><strong>Docker & Compose</strong> {t('(for container)', '（容器部署）')}</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100">
                        <div className="p-2 bg-purple-50 rounded text-purple-600"><Key className="w-5 h-5" /></div>
                        <span className="text-sm"><strong>OpenAI / Ollama</strong> {t('(for AI)', '（AI 支持）')}</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100">
                        <div className="p-2 bg-slate-100 rounded text-slate-600"><Database className="w-5 h-5" /></div>
                        <span className="text-sm"><strong>SQLite</strong> {t('(No install needed)', '（无需安装）')}</span>
                    </li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6">{t('Method 1: Standard Node.js', '方法 1：标准 Node.js')}</h2>
            <p className="mb-6">{t('Ideal for local development or running on bare-metal Mac Mini / Windows servers.', '非常适合本地开发或在裸机 Mac Mini / Windows 服务器上运行。')}</p>

            <div className="space-y-8 border-l-2 border-slate-200 pl-6 ml-2">
                <div className="relative">
                    <span className="absolute -left-[33px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 font-bold text-slate-500 text-sm">1</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">{t('Install Dependencies', '安装依赖')}</h3>
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto not-prose">
                        <code>npm install</code>
                    </pre>
                </div>

                <div className="relative">
                    <span className="absolute -left-[33px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 font-bold text-slate-500 text-sm">2</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">{t('Configure Environment', '配置环境')}</h3>
                    <p className="text-sm text-slate-600 mb-2">
                        {t('Create a', '在根目录创建一个')} <code>.env</code> {t('file in the root directory.', '文件。')}
                    </p>
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto not-prose">
                        <code>
                            {`OPENAI_API_KEY=sk-your-api-key-here
# Optional: Unlock Pro/Enterprise features
LICENSE_KEY=your-license-key`}
                        </code>
                    </pre>
                    <div className="mt-2 p-3 bg-blue-50 text-blue-800 text-sm rounded border border-blue-100 flex gap-2">
                        <span className="font-bold">ℹ️ {t('Note:', '注意：')}</span>
                        {t(
                            'Without a LICENSE_KEY, the system runs in "Free Tier" (1 Line, 10 Users) forever.',
                            '如果没有 LICENSE_KEY，系统将永久运行在“免费版”（1条产线，10个用户）模式下。'
                        )}
                    </div>
                </div>

                <div className="relative">
                    <span className="absolute -left-[33px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 font-bold text-slate-500 text-sm">3</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">{t('Setup Database', '设置数据库')}</h3>
                    <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto not-prose">
                        <code>
                            {`npx prisma generate
npx prisma db push`}
                        </code>
                    </pre>
                </div>

                <div className="relative">
                    <span className="absolute -left-[33px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 font-bold text-slate-500 text-sm">4</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">{t('Start Server', '启动服务器')}</h3>
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto mb-4 not-prose">
                        <code>
                            {`npm run dev  # ${t('Development', '开发模式')}
npm start    # ${t('Production', '生产模式')}`}
                        </code>
                    </pre>
                    <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded text-green-700 font-mono text-sm">
                        {t('Running at:', '运行地址：')} <Link href="http://localhost:3001" className="underline font-bold">http://localhost:3001</Link>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-16 mb-6">{t('Method 2: Docker Compose (Recommended)', '方法 2：Docker Compose (推荐)')}</h2>
            <div className="p-6 bg-slate-900 text-slate-50 rounded-xl mb-12 not-prose">
                <p className="mb-4 text-slate-300">
                    {t('Run a single command to launch the App, Database, and Network.', '运行一条命令即可启动应用、数据库和网络。')}
                </p>
                <div className="relative">
                    <pre className="bg-black/50 p-4 rounded-lg border border-slate-700 overflow-x-auto font-mono text-sm m-0">
                        <code>docker-compose up -d --build</code>
                    </pre>
                </div>
            </div>

            <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                <h3 className="text-lg font-bold text-yellow-900 mt-0 mb-4">{t('🔑 Default Credentials', '🔑 默认凭据')}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                    <div>
                        <span className="text-xs text-yellow-700 uppercase font-bold tracking-wider">{t('User ID', '用户名')}</span>
                        <div className="font-mono text-slate-900 bg-white px-3 py-2 rounded border border-yellow-200 mt-1 select-all font-semibold">SUPER001</div>
                    </div>
                    <div>
                        <span className="text-xs text-yellow-700 uppercase font-bold tracking-wider">{t('Password', '密码')}</span>
                        <div className="font-mono text-slate-900 bg-white px-3 py-2 rounded border border-yellow-200 mt-1 select-all font-semibold">superadmin123</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
