
import { Webhook, Code2, Globe2 } from "lucide-react";

export default function ApiOverviewPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">API Overview</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                iProTraX uses Next.js API Routes to provide a RESTful interface for all data interactions. This allows for third-party integrations (e.g., SAP, Tableau) or custom client development.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-12">
                <div className="p-6 bg-slate-50 border rounded-xl text-center">
                    <Globe2 className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-900">RESTful Design</h3>
                    <p className="text-sm text-slate-500">Standard HTTP verbs (GET, POST, PUT) and JSON payloads.</p>
                </div>
                <div className="p-6 bg-slate-50 border rounded-xl text-center">
                    <Code2 className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-900">Type-Safe</h3>
                    <p className="text-sm text-slate-500">Fully typed responses aligning with the Prisma schema.</p>
                </div>
                <div className="p-6 bg-slate-50 border rounded-xl text-center">
                    <Webhook className="w-8 h-8 text-slate-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-slate-900">AI Enabled</h3>
                    <p className="text-sm text-slate-500">Endpoints dealing with comments automatically trigger AI pipelines.</p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Base URL</h2>
            <div className="bg-slate-900 p-4 rounded-lg font-mono text-slate-50 flex items-center justify-between mb-8">
                <span>http://localhost:3000/api</span>
                <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">GET</span>
            </div>

            <h2 className="text-2xl font-bold mb-6">Authentication</h2>
            <p className="mb-6">
                Most endpoints require a valid session. We use HTTP-only cookies for security. For external scripts, you can pass an API token (coming soon in v8.1).
            </p>

            <div className="p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                <p className="m-0 text-amber-800 font-medium text-sm">
                    <strong>Note:</strong> Internal APIs are subject to change. Please rely on the methods documented in the <a href="/docs/api/endpoints" className="underline hover:text-amber-900">Endpoints Reference</a>.
                </p>
            </div>
        </div>
    );
}
