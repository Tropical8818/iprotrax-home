
import { History, Zap, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ChangelogPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <div className="flex items-center gap-3 mb-6">
                <History className="w-10 h-10 text-slate-400" />
                <h1 className="text-4xl font-extrabold tracking-tight m-0">Changelog</h1>
            </div>
            <p className="lead text-lg text-slate-600 mb-10">
                Latest updates, improvements, and fixes for the iProTraX platform.
            </p>

            <div className="relative border-l-2 border-slate-100 ml-4 space-y-12">
                {/* V8.0.0 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-white shadow-sm" />

                    <header className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 m-0">v8.0.0</h2>
                            <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wide">Enterprise Release</span>
                        </div>
                        <time className="block text-sm text-slate-500">January 12, 2026</time>
                    </header>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">
                            <ShieldCheck className="w-4 h-4" /> Highlights
                        </h4>
                        <ul className="grid grid-cols-1 gap-3 not-prose">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Enterprise Security:</strong> Added Role-Based Access Control (RBAC) and session management tweaks for stricter compliance.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Docker Native:</strong> Re-architected `docker-compose` for smoother production deployments.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                                <span className="text-slate-700"><strong>Context-Aware Chat:</strong> Unified the commenting system with the new Dashboard UI.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* V7.0.0 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-300 ring-4 ring-white shadow-sm" />

                    <header className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 m-0">v7.0.0</h2>
                            <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide">Collaboration Update</span>
                        </div>
                        <time className="block text-sm text-slate-500">December 20, 2025</time>
                    </header>

                    <ul className="space-y-2 text-slate-600 list-none pl-0 not-prose">
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span><strong>Smart Comments:</strong> Introduced step-level commenting functionality.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span><strong>AI Categories:</strong> Automatic tagging of comments (Quality, Material, etc.).</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <Zap className="w-5 h-5 text-amber-500 flex-shrink-0" />
                            <span><strong>Excel Import:</strong> Improved header detection logic.</span>
                        </li>
                    </ul>
                </div>

                {/* V6.5.0 */}
                <div className="relative pl-8">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-200 ring-4 ring-white shadow-sm" />

                    <header className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-1">
                            <h2 className="text-2xl font-bold text-slate-900 m-0">v6.5.0</h2>
                        </div>
                        <time className="block text-sm text-slate-500">November 15, 2025</time>
                    </header>

                    <p className="text-slate-600 mb-2">Focused on Kiosk stability and "Secure Lock" mode.</p>
                </div>
            </div>
        </div>
    );
}
