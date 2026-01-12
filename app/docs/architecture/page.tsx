
import { Database, Server, Smartphone, Cpu } from "lucide-react";

export default function ArchitecturePage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">System Architecture</h1>
            <p className="lead text-lg text-slate-600 mb-10">
                iProTraX is built on a modern, monolithic architecture optimized for ease of deployment, low latency, and real-time performance on the shop floor.
            </p>

            <h2 className="text-2xl font-bold mb-6">Technology Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-12">
                <div className="flex flex-col h-full p-6 border rounded-xl bg-gradient-to-br from-slate-50 to-white shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg border shadow-sm"><Smartphone className="w-5 h-5 text-indigo-600" /></div>
                        <h3 className="text-lg font-bold text-slate-900">Frontend (Client)</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-slate-600 flex-1">
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Next.js 16:</strong> Utilizing React Server Components (RSC) for performance and SEO.</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>React 19:</strong> The core UI library with concurrent rendering features.</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Tailwind CSS v4:</strong>  Utility-first CSS engine for rapid, consistent styling.</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Recharts:</strong>  Responsive charting library for Dashboard metrics.</span></li>
                    </ul>
                </div>

                <div className="flex flex-col h-full p-6 border rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white rounded-lg border shadow-sm"><Server className="w-5 h-5 text-indigo-600" /></div>
                        <h3 className="text-lg font-bold text-indigo-900">Backend (Services)</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-indigo-900/80 flex-1">
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Next.js API Routes:</strong>  Serverless functions handling business logic and AI requests.</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Prisma ORM:</strong>  Type-safe database client ensuring data integrity.</span></li>
                        <li className="flex items-start"><span className="mr-2">•</span><span><strong>Chokidar:</strong>  Robust file watcher system for reliable Excel auto-imports.</span></li>
                    </ul>
                </div>
            </div>

            <div className="space-y-8">
                <div className="p-6 bg-white border rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-slate-100 rounded-lg"><Database className="w-5 h-5 text-slate-700" /></div>
                        <h3 className="text-xl font-bold m-0">Data Persistence</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-semibold text-slate-900">SQLite (Primary)</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                Zero-configuration, file-based storage. Perfect for on-premise deployments as it allows for trivial backup/restore by simply copying a file.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-slate-900">Excel Files (Input)</h4>
                            <p className="text-sm text-slate-600 mt-1">
                                Acts as the "Universal Interface". The system watches hot folders and automatically parses <code>.xlsx</code> files into the database.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-purple-50 to-white border border-purple-100 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-purple-100 rounded-lg"><Cpu className="w-5 h-5 text-purple-700" /></div>
                        <h3 className="text-xl font-bold m-0 text-purple-900">Artificial Intelligence</h3>
                    </div>
                    <p className="text-purple-900/80 mb-4">
                        The <strong>AI Copilot</strong> is not just a chatbot, it's deeply integrated into the data pipeline:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                        <li className="bg-white p-3 rounded border border-purple-100 text-sm">
                            <strong>Context Injection:</strong> Automatically feeds relevant order status, delays, and comments into the LLM context window.
                        </li>
                        <li className="bg-white p-3 rounded border border-purple-100 text-sm">
                            <strong>Dual Providers:</strong> Supports <strong>OpenAI</strong> (Cloud) for power and <strong>Ollama</strong> (Local) for privacy and offline capability.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
