"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const CTA = () => {
    const { t } = useLanguage();

    return (
        <section className="py-32 px-6 md:px-24 bg-gradient-to-br from-accent/10 via-transparent to-transparent border-y border-white/5">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto text-center"
            >
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                    {t('cta.title_1')} <br /> <span className="accent-gradient">{t('cta.title_2')}</span>
                </h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
                    {t('cta.description')}
                </p>
                <button className="group relative px-12 py-5 overflow-hidden rounded-full transition-all border border-accent">
                    <span className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease"></span>
                    <span className="relative z-10 font-bold text-lg text-accent group-hover:text-background transition-colors duration-500">
                        {t('cta.button')}
                    </span>
                </button>
            </motion.div>
        </section>
    );
};

export default CTA;
