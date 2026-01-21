"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Portfolio() {
    const { t } = useLanguage();

    const PROJECTS = [
        {
            title: t('portfolio_page.projects.p4dots.title'),
            category: t('portfolio_page.projects.p4dots.category'),
            image: "/images/portfolio/4dotss.jpg",
            description: t('portfolio_page.projects.p4dots.desc'),
            link: "https://4dots.in"
        },
        {
            title: t('portfolio_page.projects.kontrast.title'),
            category: t('portfolio_page.projects.kontrast.category'),
            image: "/images/portfolio/kontrast.jpg",
            description: t('portfolio_page.projects.kontrast.desc'),
            link: "https://www.kontrastrestaurang.se/"
        },
        {
            title: t('portfolio_page.projects.secondskin_b2b.title'),
            category: t('portfolio_page.projects.secondskin_b2b.category'),
            image: "/images/portfolio/secondskin.jpg",
            description: t('portfolio_page.projects.secondskin_b2b.desc'),
            link: "https://business.secondskinstyle.com/"
        },
        {
            title: t('portfolio_page.projects.secondskin.title'),
            category: t('portfolio_page.projects.secondskin.category'),
            image: "/images/portfolio/secondskinstyle.jpg",
            description: t('portfolio_page.projects.secondskin.desc'),
            link: "https://secondskinstyle.com/"
        },
        {
            title: t('portfolio_page.projects.pipetechs.title'),
            category: t('portfolio_page.projects.pipetechs.category'),
            image: "/images/portfolio/pipelines.jpg",
            description: t('portfolio_page.projects.pipetechs.desc'),
            link: "https://www.pipetechs.com/"
        },
        {
            title: t('portfolio_page.projects.growers.title'),
            category: t('portfolio_page.projects.growers.category'),
            image: "/images/portfolio/growerdirect.jpg",
            description: t('portfolio_page.projects.growers.desc'),
            link: "https://www.growersdirect.co.nz/"
        },
        {
            title: t('portfolio_page.projects.timax.title'),
            category: t('portfolio_page.projects.timax.category'),
            image: "/images/portfolio/timax.jpg",
            description: t('portfolio_page.projects.timax.desc'),
            link: "https://www.timax.nl/"
        },
        {
            title: t('portfolio_page.projects.sicci.title'),
            category: t('portfolio_page.projects.sicci.category'),
            image: "/images/portfolio/sicci.jpg",
            description: t('portfolio_page.projects.sicci.desc'),
            link: "https://sicci.com/"
        },
        {
            title: t('portfolio_page.projects.icai.title'),
            category: t('portfolio_page.projects.icai.category'),
            image: "/images/portfolio/icai.jpg",
            description: t('portfolio_page.projects.icai.desc'),
            link: "https://icai.org.sg/"
        },
        {
            title: t('portfolio_page.projects.chets.title'),
            category: t('portfolio_page.projects.chets.category'),
            image: "/images/portfolio/boots.jpg",
            description: t('portfolio_page.projects.chets.desc'),
            link: "https://chetsshoes.com/"
        },
        {
            title: t('portfolio_page.projects.finance.title'),
            category: t('portfolio_page.projects.finance.category'),
            image: "/images/portfolio/personalfinance.jpg",
            description: t('portfolio_page.projects.finance.desc'),
            link: "https://www.personalfinancesweden.com/"
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
            <Navbar />

            <section className="pt-44 pb-20 px-6 md:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6 block">
                        {t('portfolio_page.tagline')}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                        {t('portfolio_page.title').split(" ")[0]} <br /> <span className="accent-gradient italic">{t('portfolio_page.title').split(" ").slice(1).join(" ")}</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl">
                        {t('portfolio_page.description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl border border-white/10 group-hover:border-accent/50 transition-all duration-500">
                                <div className="absolute inset-0 bg-slate-900 group-hover:scale-105 transition-transform duration-700">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        unoptimized
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    />
                                </div>

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="px-6 py-3 border border-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer"
                                    >
                                        {t('portfolio_page.view_case_study')}
                                    </Link>
                                </div>
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                                <span className="text-xs font-mono text-slate-500 border border-white/10 px-2 py-1 rounded">{project.category}</span>
                            </div>
                            <p className="text-slate-400 font-light leading-relaxed text-sm">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
