export default function ApiReferencePage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1>API Reference</h1>
            <p>
                The iProTraX API allows you to programmatically interact with the system, managing products, orders, and retrieving analytics data.
            </p>

            <h2>Authentication</h2>
            <p>
                All API requests must be authenticated using a Bearer Token or Session Cookie.
            </p>

            <h2>Endpoints</h2>

            <h3>Products</h3>
            <ul>
                <li><code>GET /api/config</code> - Retrieve product configuration</li>
                <li><code>POST /api/config</code> - Update settings</li>
            </ul>

            <h3>Import</h3>
            <ul>
                <li><code>POST /api/import-excel/preview</code> - Preview Excel file import</li>
                <li><code>POST /api/import-excel/analyze</code> - Analyze file structure with AI</li>
            </ul>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-4">
                <p className="font-bold text-amber-700 m-0">Note</p>
                <p className="text-amber-700 m-0">
                    This documentation is a work in progress. For full details, please refer to the source code or swagger definitions (coming soon).
                </p>
            </div>
        </div>
    );
}
