"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import AISphere from './AISphere';
import { useLanguage } from '@/context/LanguageContext';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeInOut"
        }
    },
};

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section className="relative min-h-[110vh] flex flex-col justify-center px-6 md:px-24 pt-32 overflow-hidden mesh-gradient">
            <AISphere />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-6xl z-10"
            >
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                    <span className="w-12 h-[1px] bg-accent"></span>
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent">{t('hero.tagline')}</span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="text-6xl md:text-[7rem] font-bold tracking-tight leading-[1] mb-12 text-gradient"
                >
                    {t('hero.title_1')} <br />
                    {t('hero.title_2')} <br />
                    <span className="accent-gradient italic">{t('hero.title_3')}</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-xl md:text-2xl text-slate-400 mb-16 max-w-3xl font-light leading-relaxed"
                >
                    {t('hero.description')}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-8">
                    <button className="group relative px-10 py-5 overflow-hidden rounded-full transition-all">
                        <span className="absolute inset-0 bg-accent translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease"></span>
                        <span className="relative z-10 font-bold text-lg text-background group-hover:text-white transition-colors duration-500">
                            {t('hero.cta_primary')}
                        </span>
                        <span className="absolute inset-0 border border-accent rounded-full"></span>
                    </button>

                    <button className="flex items-center gap-4 group">
                        <span className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                            <svg className="w-5 h-5 group-hover:text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <span className="font-bold tracking-widest uppercase text-sm group-hover:text-accent transition-colors">{t('hero.cta_secondary')}</span>
                    </button>
                </motion.div>
            </motion.div>

        </section>
    );
};

export default Hero;
