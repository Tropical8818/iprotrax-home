export default function InstallationPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1>Installation</h1>

            <h2>Prerequisites</h2>
            <ul>
                <li>Node.js 18+</li>
                <li>Docker & Docker Compose (optional, for containerized deployment)</li>
                <li>PostgreSQL or SQLite (default)</li>
            </ul>

            <h2>Quick Start</h2>
            <p>Clone the repository and install dependencies:</p>

            <pre className="bg-slate-950 p-4 rounded-lg text-white font-mono text-sm overflow-x-auto">
                {`git clone https://github.com/Tropical8818/iProTraX.git
cd iProTraX
npm install`}
            </pre>

            <h2>Configuration</h2>
            <p>
                Copy the example environment file and configure your database and AI settings:
            </p>
            <pre className="bg-slate-950 p-4 rounded-lg text-white font-mono text-sm overflow-x-auto">
                {`cp .env.example .env
# Edit .env with your credentials`}
            </pre>

            <h2>Running the Server</h2>
            <pre className="bg-slate-950 p-4 rounded-lg text-white font-mono text-sm overflow-x-auto">
                {`npm run dev`}
            </pre>
            <p>
                The application will be available at <code>http://localhost:3000</code>.
            </p>

            <h2>Docker Deployment</h2>
            <p>
                For production deployment using Docker:
            </p>
            <pre className="bg-slate-950 p-4 rounded-lg text-white font-mono text-sm overflow-x-auto">
                {`docker-compose up -d`}
            </pre>
        </div>
    );
}
