
import { ClipboardList, AlertCircle, CheckCircle2, Clock, XCircle } from "lucide-react";

export default function OrdersPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Orders & Work Orders</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                A <strong>Work Order (WO)</strong> is the core entity tracked by iProTraX. It represents a specific quantity of a product to be manufactured.
            </p>

            <div className="flex items-center gap-4 p-4 bg-indigo-50 border border-indigo-100 rounded-xl mb-10 not-prose">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                    <ClipboardList className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                    <h3 className="font-bold text-indigo-900 text-lg">Unique Identification</h3>
                    <p className="text-sm text-indigo-800/80">
                        Every order is uniquely identified by the combination of <strong>Product Line</strong> + <strong>WO ID</strong>.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Status Codes</h2>
            <p className="mb-6">
                Each step in an order's lifecycle has a distinct status code, visualized by color:
            </p>

            <div className="rounded-xl border border-slate-200 overflow-hidden shadow-sm not-prose">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-900">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Symbol</th>
                            <th className="px-6 py-4 font-semibold">Status Name</th>
                            <th className="px-6 py-4 font-semibold">Meaning</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                        <tr>
                            <td className="px-6 py-4 font-mono font-bold text-slate-400">P</td>
                            <td className="px-6 py-4 font-medium text-slate-700">Planned</td>
                            <td className="px-6 py-4 text-slate-500">Order is scheduled but work hasn't started.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                    <Clock className="w-3 h-3 mr-1" /> WIP
                                </span>
                            </td>
                            <td className="px-6 py-4 font-medium text-amber-600">In Progress</td>
                            <td className="px-6 py-4 text-slate-500">Currently being worked on at this station.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                    <AlertCircle className="w-3 h-3 mr-1" /> HOLD
                                </span>
                            </td>
                            <td className="px-6 py-4 font-medium text-red-600">On Hold</td>
                            <td className="px-6 py-4 text-slate-500">production stopped due to material shortage or other blocker.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                                    <XCircle className="w-3 h-3 mr-1" /> QN
                                </span>
                            </td>
                            <td className="px-6 py-4 font-medium text-pink-600">Quality Note</td>
                            <td className="px-6 py-4 text-slate-500">Quality issue reported (defect, scratch).</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <CheckCircle2 className="w-3 h-3 mr-1" /> OK
                                </span>
                            </td>
                            <td className="px-6 py-4 font-medium text-green-600">Complete</td>
                            <td className="px-6 py-4 text-slate-500">Step finished successfully.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
