export default function DocsPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1>Introduction</h1>
            <p className="lead">
                iProTraX is an intelligent production tracking system designed to modernize manufacturing workflows.
                It combines real-time tracking, AI-powered analysis, and seamless Excel integration to boost efficiency.
            </p>

            <h2>Key Features</h2>
            <ul>
                <li>
                    <strong>Real-time Tracking:</strong> Monitor every step of your production line as it happens.
                </li>
                <li>
                    <strong>AI Analysis:</strong> Use advanced LLMs to automatically configure product lines and analyze order data.
                </li>
                <li>
                    <strong>Excel Integration:</strong> Import orders directly from Excel with smart header detection.
                </li>
                <li>
                    <strong>Kiosk Mode:</strong> dedicated interface for workshop terminals.
                </li>
            </ul>

            <h2>Getting Started</h2>
            <p>
                To get up and running with iProTraX, check out the <a href="/docs/installation">Installation Guide</a>.
            </p>
        </div>
    );
}
