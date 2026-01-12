
import { ArrowLeftRight, Terminal } from "lucide-react";

export default function ApiEndpointsPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">API Endpoints</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                A comprehensive reference of available REST routes. All responses are in JSON format.
            </p>

            <div className="space-y-12">

                {/* Orders Group */}
                <div>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b">
                        <ArrowLeftRight className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold text-slate-900 m-0">Orders</h2>
                    </div>

                    <div className="grid gap-6 not-prose">
                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                                <code className="text-sm font-bold text-slate-700">GET /api/orders</code>
                                <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">READ</span>
                            </div>
                            <div className="p-4 text-sm text-slate-600">
                                Retrieve a list of all active orders. Supports filtering by <code>productId</code> query param.
                            </div>
                        </div>

                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                                <div className="flex items-center gap-2">
                                    <code className="text-sm font-bold text-slate-700">POST /api/orders</code>
                                </div>
                                <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">CREATE</span>
                            </div>
                            <div className="p-4 text-sm text-slate-600">
                                Bulk create new orders. Requires an array of order objects in the body.
                            </div>
                        </div>

                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                                <code className="text-sm font-bold text-slate-700">GET /api/orders/:id</code>
                                <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">READ</span>
                            </div>
                            <div className="p-4 text-sm text-slate-600">
                                Get detailed information for a single order, including full history log.
                            </div>
                        </div>
                    </div>
                </div>

                {/* Users Group */}
                <div>
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b">
                        <Terminal className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold text-slate-900 m-0">Users</h2>
                    </div>

                    <div className="grid gap-6 not-prose">
                        <div className="border border-slate-200 rounded-lg overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 flex items-center justify-between border-b border-slate-200">
                                <code className="text-sm font-bold text-slate-700">GET /api/users</code>
                                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">ADMIN</span>
                            </div>
                            <div className="p-4 text-sm text-slate-600">
                                List all registered users and their current status.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
