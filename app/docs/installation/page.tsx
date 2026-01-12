
import Link from "next/link";
import { Terminal, Database, Server, Key } from "lucide-react";

export default function InstallationPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Installation</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                iProTraX can be deployed using standard Node.js for flexibility or Docker for production reliability. We recommend Docker for most shop floor deployments.
            </p>

            <div className="bg-slate-50 border rounded-xl p-6 mb-12 not-prose">
                <h2 className="text-xl font-bold text-slate-900 mt-0 mb-4">System Prerequisites</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <li className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100">
                        <div className="p-2 bg-green-50 rounded text-green-600"><Server className="w-5 h-5" /></div>
                        <span className="text-sm"><strong>Node.js 20.9+</strong> (for standard)</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100">
                        <div className="p-2 bg-blue-50 rounded text-blue-600"><Terminal className="w-5 h-5" /></div>
                        <span className="text-sm"><strong>Docker & Compose</strong> (for container)</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100">
                        <div className="p-2 bg-purple-50 rounded text-purple-600"><Key className="w-5 h-5" /></div>
                        <span className="text-sm"><strong>OpenAI / Ollama</strong> (for AI)</span>
                    </li>
                    <li className="flex items-center gap-3 bg-white p-3 rounded border border-slate-100">
                        <div className="p-2 bg-slate-100 rounded text-slate-600"><Database className="w-5 h-5" /></div>
                        <span className="text-sm"><strong>SQLite</strong> (No install needed)</span>
                    </li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6">Method 1: Standard Node.js</h2>
            <p className="mb-6">Ideal for local development or running on bare-metal Mac Mini / Windows servers.</p>

            <div className="space-y-8 border-l-2 border-slate-200 pl-6 ml-2">
                <div className="relative">
                    <span className="absolute -left-[33px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 font-bold text-slate-500 text-sm">1</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">Install Dependencies</h3>
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto not-prose">
                        <code>npm install</code>
                    </pre>
                </div>

                <div className="relative">
                    <span className="absolute -left-[33px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 font-bold text-slate-500 text-sm">2</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">Configure Environment</h3>
                    <p className="text-sm text-slate-600 mb-2">Create a <code>.env</code> file in the root directory.</p>
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto not-prose">
                        <code>OPENAI_API_KEY=sk-your-api-key-here</code>
                    </pre>
                </div>

                <div className="relative">
                    <span className="absolute -left-[33px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 font-bold text-slate-500 text-sm">3</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">Setup Database</h3>
                    <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto not-prose">
                        <code>
                            {`npx prisma generate
npx prisma db push`}
                        </code>
                    </pre>
                </div>

                <div className="relative">
                    <span className="absolute -left-[33px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 border-2 border-slate-200 font-bold text-slate-500 text-sm">4</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">Start Server</h3>
                    <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg overflow-x-auto mb-4 not-prose">
                        <code>
                            {`npm run dev  # Development
npm start    # Production`}
                        </code>
                    </pre>
                    <div className="inline-block px-4 py-2 bg-green-50 border border-green-200 rounded text-green-700 font-mono text-sm">
                        Running at: <Link href="http://localhost:3001" className="underline font-bold">http://localhost:3001</Link>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-16 mb-6">Method 2: Docker Compose (Recommended)</h2>
            <div className="p-6 bg-slate-900 text-slate-50 rounded-xl mb-12 not-prose">
                <p className="mb-4 text-slate-300">Run a single command to launch the App, Database, and Network.</p>
                <div className="relative">
                    <pre className="bg-black/50 p-4 rounded-lg border border-slate-700 overflow-x-auto font-mono text-sm m-0">
                        <code>docker-compose up -d --build</code>
                    </pre>
                </div>
            </div>

            <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
                <h3 className="text-lg font-bold text-yellow-900 mt-0 mb-4">🔑 Default Credentials</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                    <div>
                        <span className="text-xs text-yellow-700 uppercase font-bold tracking-wider">User ID</span>
                        <div className="font-mono text-slate-900 bg-white px-3 py-2 rounded border border-yellow-200 mt-1 select-all font-semibold">SUPER001</div>
                    </div>
                    <div>
                        <span className="text-xs text-yellow-700 uppercase font-bold tracking-wider">Password</span>
                        <div className="font-mono text-slate-900 bg-white px-3 py-2 rounded border border-yellow-200 mt-1 select-all font-semibold">superadmin123</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
