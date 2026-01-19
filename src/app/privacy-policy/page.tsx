"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPolicy() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
            <Navbar />

            <section className="pt-44 pb-20 px-6 md:px-24">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 text-white">
                            {t('privacy_policy.title')} <span className="text-accent">{t('privacy_policy.title_suffix')}</span>
                        </h1>

                        <div className="space-y-8 text-slate-400 font-light leading-relaxed">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">{t('privacy_policy.title')} {t('privacy_policy.title_suffix')}</h3>
                                <p>
                                    {t('privacy_policy.intro_1')}
                                </p>
                            </div>

                            <p>
                                {t('privacy_policy.intro_2')}
                            </p>

                            <ul className="list-disc pl-5 space-y-2">
                                <li>{t('privacy_policy.list_1')}</li>
                                <li>{t('privacy_policy.list_2')}</li>
                                <li>{t('privacy_policy.list_3')}</li>
                                <li>{t('privacy_policy.list_4')}</li>
                                <li>{t('privacy_policy.list_5')}</li>
                                <li>{t('privacy_policy.list_6')}</li>
                                <li>{t('privacy_policy.list_7')}</li>
                                <li>{t('privacy_policy.list_8')}</li>
                                <li>{t('privacy_policy.list_9')}</li>
                                <li>{t('privacy_policy.list_10')}</li>
                            </ul>

                            <p className="italic text-sm">
                                {t('privacy_policy.disclaimer')}
                            </p>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">{t('privacy_policy.sharing_title')}</h3>
                                <p>
                                    {t('privacy_policy.sharing_text')}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">{t('privacy_policy.security_title')}</h3>
                                <p>
                                    {t('privacy_policy.security_text')}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">{t('privacy_policy.opt_out_title')}</h3>
                                <p>
                                    {t('privacy_policy.opt_out_text')}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">{t('privacy_policy.usage_title')}</h3>
                                <p>
                                    {t('privacy_policy.usage_text')}
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-4">{t('privacy_policy.contact_title')}</h3>
                                <p>
                                    {t('privacy_policy.contact_text')}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
