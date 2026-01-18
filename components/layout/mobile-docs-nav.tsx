'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { DocsSidebar } from '@/components/layout/docs-sidebar';
import { useLanguage } from '@/lib/language-context';

export function MobileDocsNav() {
    const [open, setOpen] = useState(false);
    const { t } = useLanguage();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="mr-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden">
                    <Menu className="w-6 h-6 mr-2" />
                    <span className="font-bold">{t('Menu', '菜单')}</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
                <div className="h-full overflow-y-auto py-6 pr-6">
                    <DocsSidebar onLinkClick={() => setOpen(false)} />
                </div>
            </SheetContent>
        </Sheet>
    );
}
