'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/lib/language-context';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { language, toggleLanguage, t } = useLanguage();

    const menuItems = [
        { label: t('Features', '功能'), href: '/#features' },
        { label: t('How It Works', '工作原理'), href: '/#how-it-works' },
        { label: t('Documentation', '文档'), href: '/docs' },
        { label: t('Pricing', '价格'), href: '/#pricing' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            {/* Increased max-width and padding for a more generous feel */}
            <div className="container mx-auto max-w-7xl px-6 md:px-8 flex h-24 items-center justify-between">
                <div className="flex items-center gap-3 mr-4">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="relative w-auto h-12 md:h-14 aspect-[3/1]">
                            <Image
                                src="/logo.png"
                                alt="iProTraX Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            {menuItems.map((item) => (
                                <NavigationMenuItem key={item.label}>
                                    <Link href={item.href} legacyBehavior passHref>
                                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} text-base font-medium`}>
                                            {item.label}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {/* Language Toggle */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50"
                    >
                        <Globe className="w-4 h-4" />
                        {language === 'en' ? '中文' : 'EN'}
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="hover:bg-slate-100">
                        <Link href="https://github.com/Tropical8818/iProTraX" target="_blank">
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 h-10 shadow-sm transition-all hover:shadow-md">
                        {t('Get Started', '立即开始')}
                    </Button>
                </div>

                {/* Mobile Nav */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-6 mt-8 px-6">
                            <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                                <div className="relative w-auto h-12 aspect-[3/1]">
                                    <Image src="/logo.png" alt="Logo" fill className="object-contain object-left" />
                                </div>
                            </Link>

                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-lg font-medium hover:text-indigo-600 transition-colors py-2 border-b border-slate-50"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Mobile Language Toggle */}
                            <button
                                onClick={() => { toggleLanguage(); setIsOpen(false); }}
                                className="flex items-center gap-2 text-lg font-medium hover:text-indigo-600 py-2"
                            >
                                <Globe className="w-5 h-5" />
                                {language === 'en' ? '切换到中文' : 'Switch to English'}
                            </button>

                            <Link
                                href="https://github.com/Tropical8818/iProTraX"
                                className="flex items-center gap-2 text-lg font-medium hover:text-indigo-600 py-2"
                            >
                                <Github className="w-5 h-5" />
                                GitHub
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

