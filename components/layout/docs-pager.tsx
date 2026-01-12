'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

// This configuration mirrors the one in docs-sidebar.
// Ideally, this should be in a shared config file.
const docsConfig = {
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                { title: "Introduction", href: "/docs" },
                { title: "Installation", href: "/docs/installation" },
                { title: "Architecture", href: "/docs/architecture" },
            ]
        },
        {
            title: "Core Concepts",
            items: [
                { title: "Product Lines", href: "/docs/concepts/product-lines" },
                { title: "Orders & WO", href: "/docs/concepts/orders" },
                { title: "AI Analysis", href: "/docs/concepts/ai-analysis" },
            ]
        },
        {
            title: "User Manual",
            items: [
                { title: "Dashboard", href: "/docs/manual/dashboard" },
                { title: "Settings", href: "/docs/manual/settings" },
                { title: "Kiosk Mode", href: "/docs/manual/kiosk" },
            ]
        },
        {
            title: "API Reference",
            items: [
                { title: "Overview", href: "/docs/api" },
                { title: "Endpoints", href: "/docs/api/endpoints" },
            ]
        }
    ]
};

export function DocsPager() {
    const pathname = usePathname();

    // Flatten the links list
    const links = docsConfig.sidebarNav.flatMap(group => group.items);
    const splitPath = pathname.split("#")[0]; // remove hash if present
    const currentIndex = links.findIndex(item => item.href === splitPath);

    const prev = currentIndex > 0 ? links[currentIndex - 1] : null;
    const next = currentIndex < links.length - 1 ? links[currentIndex + 1] : null;

    if (!prev && !next) return null;

    return (
        <div className="flex flex-row items-center justify-between pt-10 mt-10 border-t border-slate-200">
            {prev ? (
                <Button variant="outline" asChild className="h-auto py-4 px-4 justify-start">
                    <Link href={prev.href} className="flex flex-col items-start gap-1 text-left">
                        <span className="flex items-center text-xs text-slate-500">
                            <ChevronLeft className="mr-1 h-3 w-3" />
                            Previous
                        </span>
                        <span className="font-medium text-slate-900">{prev.title}</span>
                    </Link>
                </Button>
            ) : (
                <div /> // Spacer
            )}

            {next && (
                <Button variant="outline" asChild className="h-auto py-4 px-4 justify-end">
                    <Link href={next.href} className="flex flex-col items-end gap-1 text-right">
                        <span className="flex items-center text-xs text-slate-500">
                            Next
                            <ChevronRight className="ml-1 h-3 w-3" />
                        </span>
                        <span className="font-medium text-slate-900">{next.title}</span>
                    </Link>
                </Button>
            )}
        </div>
    );
}
