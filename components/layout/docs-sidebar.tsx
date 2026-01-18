'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/language-context';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
    onLinkClick?: () => void;
}

const docsConfig = {
    // ... config remains same ...
    sidebarNav: [
        {
            title: "Getting Started",
            titleZh: "入门指南",
            items: [
                { title: "Introduction", titleZh: "介绍", href: "/docs" },
                { title: "Installation", titleZh: "安装", href: "/docs/installation" },
                { title: "Architecture", titleZh: "架构", href: "/docs/architecture" },
                { title: "Changelog", titleZh: "更新日志", href: "/docs/changelog" },
            ]
        },
        {
            title: "Core Concepts",
            titleZh: "核心概念",
            items: [
                { title: "Product Lines", titleZh: "生产线", href: "/docs/concepts/product-lines" },
                { title: "Productivity Engine", titleZh: "生产力引擎", href: "/docs/concepts/productivity" },
                { title: "Orders & WO", titleZh: "订单与工单", href: "/docs/concepts/orders" },
                { title: "Collaboration", titleZh: "协作机制", href: "/docs/concepts/collaboration" },
                { title: "AI Analysis", titleZh: "AI 分析", href: "/docs/concepts/ai-analysis" },
            ]
        },
        {
            title: "User Manual",
            titleZh: "用户手册",
            items: [
                { title: "Dashboard", titleZh: "仪表盘", href: "/docs/manual/dashboard" },
                { title: "Operation View", titleZh: "操作视图", href: "/docs/manual/operation" },
                { title: "Unified Analytics", titleZh: "统一分析", href: "/docs/manual/analytics" },
                { title: "Settings", titleZh: "设置", href: "/docs/manual/settings" },
                { title: "Kiosk Mode", titleZh: "看板模式", href: "/docs/manual/kiosk" },
            ]
        },
        {
            title: "API Reference",
            titleZh: "API 参考",
            items: [
                { title: "Overview", titleZh: "概览", href: "/docs/api" },
                { title: "Endpoints", titleZh: "端点", href: "/docs/api/endpoints" },
            ]
        }
    ]
};

export function DocsSidebar({ className, onLinkClick, ...props }: SidebarNavProps) {
    const pathname = usePathname();
    const { t } = useLanguage();

    return (
        <aside className="w-full" {...props}>
            {docsConfig.sidebarNav.map((group, index) => (
                <div key={index} className="pb-6">
                    <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold text-slate-900">
                        {t(group.title, group.titleZh)}
                    </h4>
                    {group.items?.length && (
                        <div className="grid grid-flow-row auto-rows-max text-sm gap-1">
                            {group.items.map((item, i) => (
                                <Link
                                    key={i}
                                    href={item.href}
                                    onClick={onLinkClick}
                                    className={`group flex w-full items-center rounded-md border border-transparent px-2 py-1.5 hover:underline text-slate-600 hover:text-indigo-600 ${pathname === item.href ? "font-medium text-indigo-600 bg-indigo-50" : ""
                                        }`}
                                >
                                    {t(item.title, item.titleZh)}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </aside>
    );
}
