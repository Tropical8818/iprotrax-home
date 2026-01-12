
import { MonitorPlay, Lock, Eye, MousePointer2 } from "lucide-react";

export default function KioskModePage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Kiosk Mode</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                Designed for large TV screens on the shop floor. It provides a passive, high-visibility display that keeps the team aligned without requiring interaction.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-12">
                <div className="p-6 bg-slate-900 rounded-xl text-white shadow-xl">
                    <MonitorPlay className="w-10 h-10 text-emerald-400 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Auto-Scroll</h3>
                    <p className="text-slate-400 text-sm">
                        Automatically cycles through pages of orders. No mouse needed.
                    </p>
                </div>
                <div className="p-6 bg-white border rounded-xl shadow-sm">
                    <Eye className="w-10 h-10 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Visual Priority</h3>
                    <p className="text-slate-600 text-sm">
                        Rows are color-coded and sorted. Urgent items float to the top.
                    </p>
                </div>
                <div className="p-6 bg-white border rounded-xl shadow-sm">
                    <Lock className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Secure Lock</h3>
                    <p className="text-slate-600 text-sm">
                        Read-only mode. prevents unauthorized edits from the floor terminal.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold mb-6">Setup Recommendations</h2>
            <div className="border rounded-2xl overflow-hidden shadow-sm not-prose">
                <table className="w-full text-left">
                    <tbody className="divide-y divide-slate-100">
                        <tr className="bg-slate-50/50">
                            <td className="px-6 py-4 font-semibold text-slate-900 w-1/3">Hardware</td>
                            <td className="px-6 py-4 text-slate-600">Smart TV (Android) or Raspberry Pi + Monitor</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-semibold text-slate-900">Browser</td>
                            <td className="px-6 py-4 text-slate-600">Chrome / Edge (F11 for Fullscreen)</td>
                        </tr>
                        <tr className="bg-slate-50/50">
                            <td className="px-6 py-4 font-semibold text-slate-900">Account</td>
                            <td className="px-6 py-4 text-slate-600">Create a dedicated "Viewer" user role.</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 font-semibold text-slate-900">Session</td>
                            <td className="px-6 py-4 text-slate-600">Use a browser extension to auto-refresh every hour.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="flex items-start gap-3 p-4 bg-indigo-50 border border-indigo-100 rounded-lg mt-10 text-sm text-indigo-800">
                <MousePointer2 className="w-5 h-5 mt-0.5 text-indigo-600" />
                <div>
                    <strong>Note:</strong> To exit Kiosk Mode on a touch screen without a keyboard, tap the hidden detailed exit button in the top-right corner 5 times.
                </div>
            </div>
        </div>
    );
}
