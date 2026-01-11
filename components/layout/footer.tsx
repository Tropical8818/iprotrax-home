import Link from 'next/link';
import { Github, Twitter } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t bg-slate-50">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="font-bold text-xl text-indigo-600 mb-4 inline-block">
                            iProTraX
                        </Link>
                        <p className="text-slate-500 text-sm max-w-sm">
                            The intelligent production tracking system designed for modern manufacturing.
                            Streamline your operations with AI-powered insights.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link href="/#features" className="hover:text-indigo-600">Features</Link></li>
                            <li><Link href="/#pricing" className="hover:text-indigo-600">Pricing</Link></li>
                            <li><Link href="/docs" className="hover:text-indigo-600">Documentation</Link></li>
                            <li><Link href="/changelog" className="hover:text-indigo-600">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-slate-900 mb-4">Community</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link href="https://github.com/Tropical8818/iProTraX" className="hover:text-indigo-600">GitHub</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">Discord</Link></li>
                            <li><Link href="#" className="hover:text-indigo-600">Twitter</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-400">
                        © {new Date().getFullYear()} iProTraX. All rights reserved.
                    </p>
                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/Tropical8818/iProTraX" className="text-slate-400 hover:text-slate-600">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-slate-400 hover:text-slate-600">
                            <Twitter className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
