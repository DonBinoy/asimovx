"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Brain, Eye, MessageSquare, Terminal, Monitor, Smartphone, ShoppingCart, Activity, Gamepad2, Settings, Users, BarChart } from 'lucide-react';

export default function Services() {
    const { t } = useLanguage();

    const CORE_SERVICES = [
        {
            title: t('services_page.core.vision.title'),
            description: t('services_page.core.vision.desc'),
            detail: t('services_page.core.vision.detail'),
            icon: Eye,
            color: "text-blue-400"
        },
        {
            title: t('services_page.core.nlp.title'),
            description: t('services_page.core.nlp.desc'),
            detail: "",
            icon: MessageSquare,
            color: "text-green-400"
        },
        {
            title: t('services_page.core.genai.title'),
            description: t('services_page.core.genai.desc'),
            detail: t('services_page.core.genai.detail'),
            icon: Brain,
            color: "text-purple-400"
        }
    ];

    const GENERAL_SERVICES = [
        {
            title: t('services_page.general.tech.title'),
            description: t('services_page.general.tech.desc'),
            icon: Terminal
        },
        {
            title: t('services_page.general.sports.title'),
            description: t('services_page.general.sports.desc'),
            icon: Activity
        },
        {
            title: t('services_page.general.auto.title'),
            description: t('services_page.general.auto.desc'),
            icon: Settings
        },
        {
            title: t('services_page.general.manu.title'),
            description: t('services_page.general.manu.desc'),
            icon: BarChart
        },
        {
            title: t('services_page.general.marketing.title'),
            description: t('services_page.general.marketing.desc'),
            icon: Users
        },
        {
            title: t('services_page.general.health.title'),
            description: t('services_page.general.health.desc'),
            icon: Activity
        },
        {
            title: t('services_page.general.gaming.title'),
            description: t('services_page.general.gaming.desc'),
            icon: Gamepad2
        },
        {
            title: t('services_page.general.workforce.title'),
            description: t('services_page.general.workforce.desc'),
            icon: Users
        },
        {
            title: t('services_page.general.transformation.title'),
            description: t('services_page.general.transformation.desc'),
            icon: BarChart
        },
        {
            title: t('services_page.general.web.title'),
            description: t('services_page.general.web.desc'),
            icon: Monitor
        },
        {
            title: t('services_page.general.mobile.title'),
            description: t('services_page.general.mobile.desc'),
            icon: Smartphone
        },
        {
            title: t('services_page.general.ecom.title'),
            description: t('services_page.general.ecom.desc'),
            icon: ShoppingCart
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
            <Navbar />

            {/* Header Section */}
            <section className="pt-44 pb-20 px-6 md:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase block mb-6">{t('services_page.tagline')}</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
                        {t('services_page.title_1')} <span className="text-accent">{t('services_page.title_2')}</span> <br />
                        {t('services_page.title_3')} <br />
                        {t('services_page.title_4')} <span className="text-accent">{t('services_page.title_5')}</span> {t('services_page.title_6')}
                    </h1>
                    <p className="text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-3xl">
                        {t('services_page.description')}
                    </p>
                </motion.div>
            </section>

            {/* Core AI Services */}
            <section className="py-20 px-6 md:px-24 bg-zinc-900/30">
                <div className="space-y-32">
                    {CORE_SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-start`}
                        >
                            <div className="flex-1 space-y-8">
                                <div className="flex items-center gap-4">
                                    <service.icon className={`w-12 h-12 ${service.color}`} />
                                    <h2 className="text-4xl md:text-5xl font-bold text-white">{service.title}</h2>
                                </div>
                                <p className="text-xl text-slate-300 leading-relaxed font-light">
                                    {service.description}
                                </p>
                                {service.detail && (
                                    <p className="text-lg text-slate-400 leading-relaxed font-light border-l-2 border-accent/30 pl-6">
                                        {service.detail}
                                    </p>
                                )}
                                <Link href="/#contact">
                                    <button className="px-8 py-4 mt-4 bg-white/10 hover:bg-accent text-white rounded-full font-bold uppercase tracking-wider transition-all flex items-center gap-2 group">
                                        {t('services_page.contact_btn')}
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>

                            {/* Visual/Abstract Graphic Placeholder for each service */}
                            <div className="flex-1 w-full aspect-square md:aspect-video rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden group">
                                <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${index === 0 ? 'from-blue-500' : index === 1 ? 'from-green-500' : 'from-purple-500'} to-transparent`} />
                                <service.icon className={`w-32 h-32 text-white/20 group-hover:scale-110 transition-transform duration-700`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* General Services Grid */}
            <section className="py-32 px-6 md:px-24">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('services_page.services_header')}</h2>
                    <p className="text-xl text-slate-400">
                        {t('services_page.services_desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {GENERAL_SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-accent/50 hover:bg-zinc-900/80 transition-all group"
                        >
                            <div className="mb-6 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
