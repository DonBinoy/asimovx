"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isLangOpen, setIsLangOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-12 py-8 transition-all duration-300"
        >
            <div className="text-xl font-bold tracking-[0.2em] group cursor-pointer">
                ASIMOVX <span className="text-accent italic">.</span>
            </div>

            <div className="flex items-center gap-8 xl:gap-12">
                <div className="hidden lg:flex space-x-8 xl:space-x-12 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">
                    <Link href="/" className="hover:text-white transition-colors">{t('navbar.home')}</Link>
                    <Link href="/about" className="hover:text-white transition-colors">{t('navbar.about')}</Link>
                    <Link href="/services" className="hover:text-white transition-colors">{t('navbar.services')}</Link>
                    <Link href="/portfolio" className="hover:text-white transition-colors">{t('navbar.portfolio')}</Link>
                    <Link href="/careers" className="hover:text-white transition-colors">{t('navbar.careers')}</Link>
                    <Link href="/blog" className="hover:text-white transition-colors">{t('navbar.blog')}</Link>
                </div>

                <div className="flex gap-4 items-center">
                    {/* Language Switcher */}
                    <div className="relative mr-2">
                        <button
                            onClick={() => setIsLangOpen(!isLangOpen)}
                            className="p-3 text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                        >
                            <Globe className="w-5 h-5" />
                            <span className="text-xs font-bold tracking-widest">{language}</span>
                        </button>

                        {isLangOpen && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                className="absolute right-0 top-full mt-2 w-32 bg-zinc-900 border border-white/10 rounded-xl shadow-xl z-50 overflow-hidden backdrop-blur-xl"
                            >
                                {['EN', 'ES', 'SV'].map((lang) => (
                                    <button
                                        key={lang}
                                        onClick={() => {
                                            setLanguage(lang as any);
                                            setIsLangOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 text-xs font-bold tracking-widest hover:bg-white/10 transition-colors ${language === lang ? 'text-accent bg-white/5' : 'text-slate-400'}`}
                                    >
                                        {lang === 'EN' ? 'English' : lang === 'ES' ? 'Español' : 'Svenska'}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    <Link href="/contact">
                        <button className="px-6 py-3 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500">
                            {t('navbar.contact')}
                        </button>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
