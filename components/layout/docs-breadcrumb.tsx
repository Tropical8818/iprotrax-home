'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

export function DocsBreadcrumb() {
    const pathname = usePathname();

    // Simple breadcrumb logic: just capitalize path segments
    // /docs/installation -> Home > Documentation > Installation
    const segments = pathname
        .split('/')
        .filter(segment => segment !== '')
        .map(segment => ({
            label: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
            href: `/${pathname.split('/').slice(0, pathname.split('/').indexOf(segment) + 1).filter(Boolean).join('/')}`,
        }));

    return (
        <nav className="flex items-center text-sm text-slate-500 mb-6 overflow-hidden">
            <Link href="/" className="hover:text-indigo-600 flex items-center">
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
            </Link>

            {segments.map((segment, index) => (
                <div key={index} className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    {index === segments.length - 1 ? (
                        <span className="font-medium text-slate-900 truncate">
                            {segment.label === 'Docs' ? 'Documentation' : segment.label}
                        </span>
                    ) : (
                        <Link href={segment.href} className="hover:text-indigo-600 truncate">
                            {segment.label === 'Docs' ? 'Documentation' : segment.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
