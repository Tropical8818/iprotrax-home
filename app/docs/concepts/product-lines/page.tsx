
import { Settings, FileSpreadsheet, Target } from "lucide-react";

export default function ProductLinesPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Product Lines</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                In iProTraX, a <strong>Product Line</strong> is the fundamental unit of organization. Each line represents a distinct manufacturing process, product family, or physical assembly line.
            </p>

            <div className="p-6 bg-slate-50 border rounded-xl mb-10">
                <h3 className="text-lg font-bold text-slate-900 mt-0 mb-4">Why Separate Product Lines?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose list-none p-0 m-0">
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2" />
                        <span className="text-sm text-slate-600">Different products have different <strong>Production Steps</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2" />
                        <span className="text-sm text-slate-600">Requires unique <strong>Data Fields</strong> (e.g., "Motor ID" vs "PCB Serial").</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2" />
                        <span className="text-sm text-slate-600">Managed by different <strong>Supervisor Teams</strong>.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2" />
                        <span className="text-sm text-slate-600">Independent <strong>Monthly Targets</strong> and KPI tracking.</span>
                    </li>
                </ul>
            </div>

            <h2 className="text-2xl font-bold mb-6">Configuration Components</h2>
            <div className="space-y-8">
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 p-4 border-b flex items-center gap-2">
                        <Settings className="w-5 h-5 text-slate-500" />
                        <h3 className="text-base font-bold m-0">1. Production Steps</h3>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-slate-600 mb-4">
                            Define the sequence of operations. Each step becomes a column in the dashboard where status is tracked.
                        </p>
                        <div className="bg-slate-900 rounded-lg p-4 text-xs font-mono text-slate-300 overflow-x-auto">
                            ["Winding", "Insertion", "Varnish", "Assembly", "Testing", "Packing"]
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 p-4 border-b flex items-center gap-2">
                        <FileSpreadsheet className="w-5 h-5 text-slate-500" />
                        <h3 className="text-base font-bold m-0">2. Detail Columns</h3>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-slate-600 mb-4">
                            Map specific Excel headers to dashboard columns. This tells the importer which data to grab.
                        </p>
                        <div className="bg-slate-900 rounded-lg p-4 text-xs font-mono text-slate-300 overflow-x-auto">
                            {`{
  "Part No": "material_number",
  "Target Qty": "quantity",
  "Due Date": "delivery_date"
}`}
                        </div>
                    </div>
                </div>

                <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 p-4 border-b flex items-center gap-2">
                        <Target className="w-5 h-5 text-slate-500" />
                        <h3 className="text-base font-bold m-0">3. Monthly Targets</h3>
                    </div>
                    <div className="p-6">
                        <p className="text-sm text-slate-600 m-0">
                            Set a numeric output goal (e.g., <code>500 units</code>) for the Kiosk to display progress against.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
