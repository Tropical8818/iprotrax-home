
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, LayoutDashboard, BrainCircuit, TabletSmartphone } from "lucide-react";

export default function DocsPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Introduction</h1>
            <p className="lead text-xl text-slate-600 mb-8">
                iProTraX is the Agile Manufacturing Collaboration Platform that bridges the gap between rigid ERP systems and your dynamic shop floor.
            </p>

            <div className="space-y-8 my-10">
                <div>
                    <h2 className="text-2xl font-bold mb-4">🎯 The Problem</h2>
                    <p className="mb-4">
                        In modern high-mix manufacturing, relying solely on heavy ERP systems like <strong>SAP</strong> or <strong>ME POD</strong> creates critical operational gaps:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                        <div className="p-4 bg-red-50 border border-red-100 rounded-lg">
                            <h4 className="font-bold text-red-900 mb-1">System Rigidity</h4>
                            <p className="text-sm text-red-700">SAP is powerful but inflexible. It fails when machines break down or plans change urgently.</p>
                        </div>
                        <div className="p-4 bg-orange-50 border border-orange-100 rounded-lg">
                            <h4 className="font-bold text-orange-900 mb-1">Data Lag</h4>
                            <p className="text-sm text-orange-700">Reporting delays mean the "System Truth" is often hours behind the "Ground Truth".</p>
                        </div>
                        <div className="p-4 bg-slate-50 border border-slate-100 rounded-lg">
                            <h4 className="font-bold text-slate-900 mb-1">Black Box</h4>
                            <p className="text-sm text-slate-700">Supervisors rely on spreadsheets and WhatsApp, creating invisible data silos.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold mb-4">💡 The Solution</h2>
                    <p className="mb-6">
                        iProTraX is not a replacement for SAP. It is the <strong>Agile Collaboration Layer</strong> that sits between your heavy ERP and your teams.
                    </p>
                    <div className="p-6 bg-indigo-50 border-l-4 border-indigo-500 rounded-r-lg">
                        <p className="m-0 font-medium text-indigo-900 text-lg">
                            "It visualizes the invisible, empowering supervisors to make instant corrections and providing AI-driven insights to optimize production."
                        </p>
                    </div>
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">✨ Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-12">
                <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Monitor className="w-8 h-8 text-emerald-600 mb-3" />
                    <h3 className="text-lg font-bold mb-2">Shop Floor Kiosk</h3>
                    <p className="text-slate-600 text-sm">
                        Replaces social media updates with a passive, always-on monitor. Cycles through active orders based on priority.
                    </p>
                </div>
                <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <LayoutDashboard className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="text-lg font-bold mb-2">Super Edit Mode</h3>
                    <p className="text-slate-600 text-sm">
                        Agile correction tool for Supervisors. Fix "SAP Lag" and missing steps instantly with a full audit trail.
                    </p>
                </div>
                <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <BrainCircuit className="w-8 h-8 text-purple-600 mb-3" />
                    <h3 className="text-lg font-bold mb-2">AI Copilot</h3>
                    <p className="text-slate-600 text-sm">
                        Analyze risks, generate shift reports, and detect bottlenecks using smart category analysis on comments.
                    </p>
                </div>
                <div className="p-6 border rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                    <TabletSmartphone className="w-8 h-8 text-amber-600 mb-3" />
                    <h3 className="text-lg font-bold mb-2">Mobile First</h3>
                    <p className="text-slate-600 text-sm">
                        Optimized interfaces for Frontline Workers (Operation View) and Supervisors (Dashboard) on any device.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
            <div className="flex gap-4 not-prose">
                <Button size="lg" asChild>
                    <Link href="/docs/installation">
                        Installation Guide <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <Link href="/docs/architecture">
                        View Architecture
                    </Link>
                </Button>
            </div>
        </div>
    );
}
