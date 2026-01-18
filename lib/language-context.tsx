'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: (en: string, zh: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('iprotrax-lang') as Language | null;
        if (saved === 'en' || saved === 'zh') {
            setLanguage(saved);
        }
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('iprotrax-lang', language);
        }
    }, [language, mounted]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'zh' : 'en');
    };

    // Use 'en' as default before hydration to prevent mismatch
    const currentLanguage = mounted ? language : 'en';
    const t = (en: string, zh: string) => currentLanguage === 'en' ? en : zh;

    return (
        <LanguageContext.Provider value={{ language: currentLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
}
