
import { MessageSquareText, Tag, Users } from 'lucide-react';

export default function CollaborationPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Collaboration & Comments</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                In a dynamic manufacturing environment, communication often happens in silos (WhatsApp, shouting across the floor). iProTraX brings this discussion directly into the production flow with **Step-Level Smart Comments**.
            </p>

            <h2 className="text-2xl font-bold mb-6">Step-Level Communication</h2>
            <div className="bg-white border rounded-xl shadow-sm overflow-hidden mb-10 not-prose">
                <div className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                        <MessageSquareText className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Context-Aware Chat</h4>
                        <p className="text-slate-600">
                            Every single step of a Work Order (e.g., "Winding", "Assembly") has its own dedicated discussion thread. This means problem-solving happens exactly where the problem is.
                        </p>
                    </div>
                </div>
                <div className="bg-slate-50 px-6 py-4 border-t text-sm text-slate-500">
                    <em>Allows teams to trace back exactly why a delay occurred at a specific station.</em>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Smart Categories</h2>
            <p className="mb-6">
                To help the AI understand <em>why</em> a conversation is happening, users check a "Category" when posting a comment.
            </p>

            <div className="not-prose border rounded-xl overflow-hidden shadow-sm mb-12">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-50 text-slate-900">
                        <tr>
                            <th className="px-6 py-4 font-semibold border-b">Category</th>
                            <th className="px-6 py-4 font-semibold border-b">Intended Usage</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-slate-100 bg-white">
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-slate-400" /> General</td>
                            <td className="px-6 py-4 text-slate-600">Normal updates, shift handovers, or questions.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-red-500" /> QN (Quality)</td>
                            <td className="px-6 py-4 text-slate-600">Defects, scratches, or out-of-tolerance reports.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-orange-500" /> Material</td>
                            <td className="px-6 py-4 text-slate-600">Missing parts, wrong components, or inventory issues.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-blue-500" /> Machine</td>
                            <td className="px-6 py-4 text-slate-600">Equipment breakdown, tooling issues, or maintenance requests.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-medium flex items-center gap-2"><Tag className="w-4 h-4 text-amber-500" /> Hold</td>
                            <td className="px-6 py-4 text-slate-600">Process blockers requiring immediate supervisor attention.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="text-2xl font-bold mb-6">Workflow Example</h2>
            <div className="space-y-4">
                <div className="flex gap-4 p-4 border rounded-lg bg-white shadow-sm hover:border-indigo-200 transition-colors">
                    <div className="flex-none w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">1</div>
                    <div>
                        <strong className="block text-slate-900 mb-1">Flag an Issue</strong>
                        <p className="text-slate-600 text-sm m-0">Operator selects "Assembly" step, tags <code>Material</code>, and types: <em>"Shortage of M5 screws."</em></p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 border rounded-lg bg-white shadow-sm hover:border-indigo-200 transition-colors">
                    <div className="flex-none w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">2</div>
                    <div>
                        <strong className="block text-slate-900 mb-1">Notify</strong>
                        <p className="text-slate-600 text-sm m-0">Supervisor sees a red badge on the dashboard. Click-through reveals the context instantly.</p>
                    </div>
                </div>
                <div className="flex gap-4 p-4 border rounded-lg bg-indigo-50 border-indigo-100 shadow-sm">
                    <div className="flex-none w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">3</div>
                    <div>
                        <strong className="block text-indigo-900 mb-1">AI Insight</strong>
                        <p className="text-indigo-800 text-sm m-0">At end of week, AI reports: <em>"Recursion detection: You have had 3 material shortages for M5 screws this week."</em></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
