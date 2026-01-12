
import { Bot, LineChart, FileText, Sparkles } from "lucide-react";

export default function AIAnalysisPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">AI Analysis</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                iProTraX leverages Large Language Models (LLMs) to turn raw shop floor data into actionable insights, moving beyond simple tracking to intelligent assistance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-12">
                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                        <LineChart className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">1. Risk Analysis & Reporting</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        The AI scans all active orders to identify "Stuck" items or patterns of delay.
                    </p>
                    <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-600 border border-slate-100 italic">
                        "There are 3 orders stuck at 'Winding' for &gt;4 hours. This exceeds the average cycle time of 45 mins."
                    </div>
                </div>

                <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-sm">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                        <Bot className="w-6 h-6 text-pink-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">2. Smart Comments</h3>
                    <p className="text-slate-600 text-sm mb-4">
                        AI automatically tags free-text comments with categories (Quality, Material, Machine) to aggregate hidden issues.
                    </p>
                    <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-600 border border-slate-100 italic">
                        User: "No screws left"<br />
                        AI Tag: 🏷️ MATERIAL_SHORTAGE
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl mb-12">
                <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-emerald-700" />
                    <h3 className="text-lg font-bold text-emerald-900 m-0">3. Excel Intelligence</h3>
                </div>
                <p className="text-emerald-900/80 mb-4 text-sm">
                    Importing Excel files is notoriously brittle due to changing headers (e.g., "Part#" vs "Part No." vs "Material Number").
                </p>
                <div className="flex items-start gap-3 bg-white/60 p-4 rounded-lg border border-emerald-100/50">
                    <Sparkles className="w-5 h-5 text-emerald-500 mt-0.5" />
                    <p className="text-sm text-emerald-800 m-0">
                        <strong>Semantic Mapping:</strong> The AI reads the Excel headers and fuzzy-matches them to the database schema. You never need to manually re-map columns again.
                    </p>
                </div>
            </div>
        </div>
    );
}
