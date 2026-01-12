import { DocsSidebar } from '@/components/layout/docs-sidebar';
import { DocsPager } from '@/components/layout/docs-pager';
import { DocsBreadcrumb } from '@/components/layout/docs-breadcrumb';

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 py-10 px-6 max-w-7xl">
            <aside className="fixed top-24 z-30 -ml-2 hidden h-[calc(100vh-6rem)] w-full shrink-0 md:sticky md:block">
                <div className="h-full overflow-y-auto py-6 pr-6 lg:py-8 no-scrollbar">
                    <DocsSidebar />
                </div>
            </aside>
            <main className="relative py-6 lg:gap-10 lg:py-8">
                <div className="mx-auto w-full min-w-0 max-w-3xl">
                    <DocsBreadcrumb />
                    <div className="min-h-[60vh]">
                        {children}
                    </div>
                    <DocsPager />
                </div>
            </main>
        </div>
    );
}
