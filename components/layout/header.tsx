'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { label: 'Features', href: '/#features' },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Pricing', href: '/#pricing' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-xl mr-4">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-indigo-600">iProTraX</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            {menuItems.map((item) => (
                                <NavigationMenuItem key={item.label}>
                                    <Link href={item.href} legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            {item.label}
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild>
                        <Link href="https://github.com/Tropical8818/iProTraX" target="_blank">
                            <Github className="w-5 h-5" />
                            <span className="sr-only">GitHub</span>
                        </Link>
                    </Button>
                    <Button className="bg-indigo-600 hover:bg-indigo-500 text-white">
                        Get Started
                    </Button>
                </div>

                {/* Mobile Nav */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild className="md:hidden">
                        <Button variant="ghost" size="icon">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <div className="flex flex-col gap-4 mt-6">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="text-lg font-medium hover:text-indigo-600 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="h-px bg-border my-2" />
                            <Link
                                href="https://github.com/Tropical8818/iProTraX"
                                className="flex items-center gap-2 text-lg font-medium hover:text-indigo-600"
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
