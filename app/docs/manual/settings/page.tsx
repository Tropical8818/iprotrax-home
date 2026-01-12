
import { Users, LayoutList, Database, DatabaseBackup } from "lucide-react";

export default function SettingsManualPage() {
    return (
        <div className="prose prose-slate max-w-none dark:prose-invert">
            <h1 className="text-4xl font-extrabold tracking-tight mb-4">Settings</h1>
            <p className="lead text-lg text-slate-600 mb-8">
                Configure the system environment, manage user roles, and define product line behaviors.
            </p>

            <div className="space-y-10">
                {/* User Mgmt */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Users className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold m-0 text-slate-900">User Management</h2>
                    </div>
                    <div className="border rounded-xl bg-white shadow-sm p-6">
                        <p className="text-slate-600 mb-4">Admins can create, edit, or remove user accounts. There are 3 role levels:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose p-0 m-0 list-none">
                            <li className="p-4 bg-indigo-50 rounded-lg text-center">
                                <strong className="block text-indigo-900">Admin</strong>
                                <span className="text-xs text-indigo-700">Full system control</span>
                            </li>
                            <li className="p-4 bg-slate-50 rounded-lg text-center">
                                <strong className="block text-slate-900">Supervisor</strong>
                                <span className="text-xs text-slate-600">Can edit orders & users</span>
                            </li>
                            <li className="p-4 bg-white border rounded-lg text-center">
                                <strong className="block text-slate-700">User</strong>
                                <span className="text-xs text-slate-500">Read-only view</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Product Line */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <LayoutList className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold m-0 text-slate-900">Product Line Config</h2>
                    </div>
                    <p className="text-slate-600 mb-4">
                        Define the columns and steps for each production line. This is where you map Excel headers to database fields.
                    </p>
                    <div className="bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300">
                        JSON Editor provided in UI for advanced configuration.
                    </div>
                </div>

                {/* Data Mgmt */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Database className="w-6 h-6 text-indigo-600" />
                        <h2 className="text-2xl font-bold m-0 text-slate-900">Data Management</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                        <div className="border p-5 rounded-xl hover:border-indigo-300 transition-colors">
                            <div className="font-bold text-slate-900 mb-2">Clean Data</div>
                            <p className="text-sm text-slate-500 mb-3">Clear all test data before going live.</p>
                            <button className="px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">Dangerous</button>
                        </div>
                        <div className="border p-5 rounded-xl hover:border-indigo-300 transition-colors">
                            <div className="font-bold text-slate-900 mb-2">Export DB</div>
                            <p className="text-sm text-slate-500 mb-3">Download a full SQLite snapshot.</p>
                            <div className="flex items-center gap-1 text-xs text-indigo-600 font-medium">
                                <DatabaseBackup className="w-3 h-3" /> Backup
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
