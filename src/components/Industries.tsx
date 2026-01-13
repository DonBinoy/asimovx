"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Trophy, Car, Factory, TrendingUp, Heart, Gamepad2, GraduationCap, Zap, Globe, Smartphone, ShoppingCart } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Industries = () => {
    const { t } = useLanguage();

    const INDUSTRIES = [
        {
            icon: <Laptop className="w-6 h-6" />,
            title: t('industries.tech_title'),
            description: t('industries.tech_desc')
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: t('industries.sports_title'),
            description: t('industries.sports_desc')
        },
        {
            icon: <Car className="w-6 h-6" />,
            title: t('industries.auto_title'),
            description: t('industries.auto_desc')
        },
        {
            icon: <Factory className="w-6 h-6" />,
            title: t('industries.manu_title'),
            description: t('industries.manu_desc')
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: t('industries.marketing_title'),
            description: t('industries.marketing_desc')
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: t('industries.health_title'),
            description: t('industries.health_desc')
        },
        {
            icon: <Gamepad2 className="w-6 h-6" />,
            title: t('industries.gaming_title'),
            description: t('industries.gaming_desc')
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: t('industries.workforce_title'),
            description: t('industries.workforce_desc')
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: t('industries.transformation_title'),
            description: t('industries.transformation_desc')
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: t('industries.web_title'),
            description: t('industries.web_desc')
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: t('industries.mobile_title'),
            description: t('industries.mobile_desc')
        },
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: t('industries.ecom_title'),
            description: t('industries.ecom_desc')
        }
    ];

    return (
        <section className="py-44 px-6 md:px-24 bg-background scanlines relative">
            <div className="mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6"
                >
                    {t('industries.tagline')}
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-4xl text-foreground"
                >
                    {t('industries.title_1')} <br />
                    <span className="text-slate-500 dark:text-slate-600 font-light">{t('industries.title_2')}</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-3xl"
                >
                    {t('industries.description')}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {INDUSTRIES.map((industry, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="group p-8 border border-border rounded-2xl hover:border-accent/30 transition-all duration-300 hover:bg-accent/5"
                    >
                        <div className="p-4 bg-accent/10 w-fit rounded-xl mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-[0_0_15px_rgba(236,72,153,0.1)] group-hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] text-foreground">
                            {industry.icon}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-foreground/80 transition-colors text-foreground">{industry.title}</h3>
                        <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed text-sm">{industry.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Industries;
