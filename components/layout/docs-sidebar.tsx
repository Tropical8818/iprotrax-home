'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> { }

const docsConfig = {
    sidebarNav: [
        {
            title: "Getting Started",
            items: [
                { title: "Introduction", href: "/docs" },
                { title: "Installation", href: "/docs/installation" },
                { title: "Architecture", href: "/docs/architecture" },
                { title: "Changelog", href: "/docs/changelog" },
            ]
        },
        {
            title: "Core Concepts",
            items: [
                { title: "Product Lines", href: "/docs/concepts/product-lines" },
                { title: "Orders & WO", href: "/docs/concepts/orders" },
                { title: "Collaboration", href: "/docs/concepts/collaboration" },
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

export function DocsSidebar({ className, ...props }: SidebarNavProps) {
    const pathname = usePathname();

    return (
        <aside className="w-full" {...props}>
            {docsConfig.sidebarNav.map((group, index) => (
                <div key={index} className="pb-6">
                    <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold text-slate-900">
                        {group.title}
                    </h4>
                    {group.items?.length && (
                        <div className="grid grid-flow-row auto-rows-max text-sm gap-1">
                            {group.items.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:underline text-slate-600 hover:text-indigo-600 ${pathname === item.href ? "font-medium text-indigo-600 bg-indigo-50" : ""
                                        }`}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </aside>
    );
}
