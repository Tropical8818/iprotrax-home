
import { LayoutGrid, MousePointerClick, Filter } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Dashboard Manual</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                The Dashboard is the Command Center of iProTraX. It provides a real-time, bird's-eye view of all active production orders and their current status.
            </p>

            <div className="bg-white border rounded-xl shadow-sm p-6 mb-10 not-prose space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b">
                    <LayoutGrid className="w-5 h-5 text-indigo-600" />
                    <h2 className="text-xl font-bold text-slate-900 m-0">Navigation Bar</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <strong className="block text-slate-900 mb-1">Home</strong>
                        <span className="text-sm text-slate-500">Return to the main live view.</span>
                    </div>
                    <div>
                        <strong className="block text-slate-900 mb-1">Log History</strong>
                        <span className="text-sm text-slate-500">Full audit trail of all changes.</span>
                    </div>
                    <div>
                        <strong className="block text-slate-900 mb-1">Import</strong>
                        <span className="text-sm text-slate-500">Upload Excel files (Admin/Supervisor).</span>
                    </div>
                    <div>
                        <strong className="block text-slate-900 mb-1">Product Selector</strong>
                        <span className="text-sm text-slate-500">Switch lines (e.g., "Motor" vs "Controller").</span>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">The Order Grid</h2>
            <p className="mb-6">The main table is the heart of the system, divided into two distinct sections:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                <div className="p-5 bg-slate-50 rounded-lg border">
                    <h4 className="font-bold text-slate-900 mb-2">1. Detail Columns (Left)</h4>
                    <p className="text-sm text-slate-600">Fixed information imported from Excel, such as <code>WO ID</code>, <code>Part Number</code>, <code>qty</code>, and <code>Due Date</code>.</p>
                </div>
                <div className="p-5 bg-indigo-50 rounded-lg border border-indigo-100">
                    <h4 className="font-bold text-indigo-900 mb-2">2. Step Columns (Right)</h4>
                    <p className="text-sm text-indigo-800">Dynamic production stages. These cells are interactive - click to change status or add comments.</p>
                </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800 text-sm mb-12">
                <MousePointerClick className="w-5 h-5 mt-0.5" />
                <div>
                    <strong>Interactive Tip:</strong> You can resize any column by dragging the header edge. The system will remember your preferred layout for next time.
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Batch Operations</h2>
            <p className="mb-6">
                Supervisors access a special "Edit Mode" which reveals batch operation tools in the header:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 not-prose">
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-100 text-center">
                    <span className="block font-bold text-blue-700 mb-1">P Mode</span>
                    <span className="text-xs text-blue-600/80">Planned</span>
                </div>
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-100 text-center">
                    <span className="block font-bold text-amber-700 mb-1">WIP Mode</span>
                    <span className="text-xs text-amber-600/80">In Progress</span>
                </div>
                <div className="p-4 rounded-lg bg-red-50 border border-red-100 text-center">
                    <span className="block font-bold text-red-700 mb-1">QN Mode</span>
                    <span className="text-xs text-red-600/80">Issue Report</span>
                </div>
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100 text-center">
                    <span className="block font-bold text-emerald-700 mb-1">Complete</span>
                    <span className="text-xs text-emerald-600/80">Mark Done</span>
                </div>
            </div>
        </div>
    );
}
