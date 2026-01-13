"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Database, Target, Search, Rocket, GraduationCap } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Process = () => {
    const { t } = useLanguage();

    const PROCESS_STEPS = [
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: t('process.step_1_title'),
            description: t('process.step_1_desc')
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: t('process.step_2_title'),
            description: t('process.step_2_desc')
        },
        {
            icon: <Target className="w-6 h-6" />,
            title: t('process.step_3_title'),
            description: t('process.step_3_desc')
        },
        {
            icon: <Search className="w-6 h-6" />,
            title: t('process.step_4_title'),
            description: t('process.step_4_desc')
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: t('process.step_5_title'),
            description: t('process.step_5_desc')
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: t('process.step_6_title'),
            description: t('process.step_6_desc')
        }
    ];

    return (
        <section className="py-44 px-6 md:px-24 bg-background relative overflow-hidden">
            <div className="absolute inset-0 tech-grid opacity-20"></div>

            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6 block">
                        {t('process.tagline')}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-foreground">
                        {t('process.title').split(" ")[0]} <span className="accent-gradient">{t('process.title').split(" ").slice(1).join(" ")}</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {PROCESS_STEPS.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-accent-secondary rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                            <div className="relative p-8 bg-card border border-border rounded-2xl h-full">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="text-4xl font-bold text-slate-200 dark:text-white/10">{String(index + 1).padStart(2, '0')}</span>
                                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent group-hover:text-white transition-all duration-300">
                                        {step.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
