"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Camera, Brain, MessageSquare } from 'lucide-react';
import TechScene from './TechScene';
import { useLanguage } from '@/context/LanguageContext';

const Features = () => {
    const { t } = useLanguage();

    const SERVICES = [
        {
            id: "01",
            title: t('features.vision_title'),
            description: t('features.vision_desc'),
            icon: <Camera className="w-5 h-5" />
        },
        {
            id: "02",
            title: t('features.genai_title'),
            description: t('features.genai_desc'),
            icon: <Brain className="w-5 h-5" />
        },
        {
            id: "03",
            title: t('features.nlp_title'),
            description: t('features.nlp_desc'),
            icon: <MessageSquare className="w-5 h-5" />
        },
        {
            id: "04",
            title: t('features.consulting_title'),
            description: t('features.consulting_desc'),
            icon: <AreaChart className="w-5 h-5" />
        }
    ];

    return (
        <section id="services" className="py-44 px-6 md:px-24 bg-background text-foreground relative tech-grid">
            <TechScene />
            <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6"
                    >
                        {t('features.tagline')}
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        {t('features.title_1')} <br /> <span className="text-slate-500 dark:text-slate-600 font-light">{t('features.title_2')}</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-3xl"
                    >
                        {t('features.description')}
                    </motion.p>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-xs font-bold tracking-[0.3em] uppercase text-slate-400 dark:text-white/40 border-b border-black/10 dark:border-white/10 pb-2"
                >
                    {t('features.key_expertise')}
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 dark:bg-white/10 border border-black/5 dark:border-white/10 rounded-3xl overflow-hidden">
                {SERVICES.map((service, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ backgroundColor: "var(--muted)" }}
                        className="group relative p-12 bg-card transition-colors duration-500 min-h-[450px] flex flex-col justify-between glow-border"
                    >
                        <div className="flex justify-between items-start">
                            <span className="text-sm font-mono text-slate-500 dark:text-slate-700 group-hover:text-accent transition-colors">{service.id}</span>
                            <div className="p-4 rounded-full border border-black/5 dark:border-white/5 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-[0_0_0px_rgba(236,72,153,0)] group-hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                                {service.icon}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500 text-foreground">{service.title}</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-lg font-light leading-relaxed">{service.description}</p>
                        </div>

                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-700 ease-in-out"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;
