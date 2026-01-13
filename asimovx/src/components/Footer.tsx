import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-background text-foreground pt-44 pb-20 px-6 md:px-24 border-t border-white/5 dark:border-white/5 border-black/5">
            <div className="flex flex-col md:flex-row justify-between gap-24 mb-32">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12">
                        {t('footer.title_1')} <br />
                        <span className="accent-gradient">{t('footer.title_2')}</span> <br />
                        {t('footer.title_3')}
                    </h2>
                    <p className="text-xl text-slate-500 dark:text-slate-500 font-light leading-relaxed">
                        {t('footer.description')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-16">
                    <div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black dark:text-white mb-8 block">{t('footer.contact')}</span>
                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold mb-3 text-accent">{t('footer.sweden')}</h4>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                    Asimovx Technologies AB<br />
                                    Sockenvägen 6A<br />
                                    Trelleborg, 23134<br />
                                    {t('footer.sweden')}
                                </p>
                                <a href="tel:+46733205536" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-accent transition-colors mt-3">
                                    <Phone className="w-4 h-4" />
                                    +46 733205536
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-black dark:text-white mb-8 block">{t('footer.network')}</span>
                        <ul className="space-y-4 text-slate-600 dark:text-slate-500 text-sm">
                            <li><a href="#" className="hover:text-accent transition-colors italic">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors italic">Twitter</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors italic">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 dark:border-white/5 border-black/5 pt-12 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-700 dark:text-slate-700">
                <div>© 2026 ASIMOVX TECH GROUP</div>
                <div className="flex gap-8 mt-6 md:mt-0">
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">{t('footer.privacy')}</a>
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">{t('footer.legal')}</a>
                    <a href="#" className="hover:text-black dark:hover:text-white transition-colors">{t('footer.cookies')}</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
