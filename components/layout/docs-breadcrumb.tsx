'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';

const segmentMap: Record<string, string> = {
    'docs': '文档',
    'installation': '安装',
    'architecture': '架构',
    'changelog': '更新日志',
    'concepts': '核心概念',
    'product-lines': '生产线',
    'orders': '订单',
    'collaboration': '协作',
    'ai-analysis': 'AI 分析',
    'manual': '手册',
    'dashboard': '仪表盘',
    'settings': '设置',
    'kiosk': '看板',
    'api': 'API',
    'endpoints': '端点'
};

export function DocsBreadcrumb() {
    const pathname = usePathname();
    const { t } = useLanguage();

    // Simple breadcrumb logic: just capitalize path segments
    // /docs/installation -> Home > Documentation > Installation
    const segments = pathname
        .split('/')
        .filter(segment => segment !== '')
        .map(segment => {
            const zhLabel = segmentMap[segment] || segment;
            const enLabel = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

            return {
                label: t(enLabel, zhLabel),
                href: `/${pathname.split('/').slice(0, pathname.split('/').indexOf(segment) + 1).filter(Boolean).join('/')}`,
            };
        });

    return (
        <nav className="flex items-center text-sm text-slate-500 overflow-hidden">
            <Link href="/" className="hover:text-indigo-600 flex items-center">
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
            </Link>

            {segments.map((segment, index) => (
                <div key={index} className="flex items-center">
                    <ChevronRight className="w-4 h-4 mx-2 text-slate-300" />
                    {index === segments.length - 1 ? (
                        <span className="font-medium text-slate-900 truncate">
                            {segment.label === 'Docs' ? t('Documentation', '文档') : segment.label}
                        </span>
                    ) : (
                        <Link href={segment.href} className="hover:text-indigo-600 truncate">
                            {segment.label === 'Docs' ? t('Documentation', '文档') : segment.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
