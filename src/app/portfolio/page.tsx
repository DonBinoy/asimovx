"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

// Dummy portfolio data using generated artifacts
const PROJECTS = [
    {
        title: "AI Neural Dashboard",
        category: "Data Visualization",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        description: "A comprehensive analytics platform for monitoring neural network performance in real-time."
    },
    {
        title: "Robotics Control Interface",
        category: "Industrial IoT",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
        description: "Next-generation HMI for controlling precision robotic arms in manufacturing environments."
    },
    {
        title: "Holographic Data Network",
        category: "Cybersecurity",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop",
        description: "Immersive 3D data visualization for tracking global cybersecurity threats and network traffic."
    }
];

export default function Portfolio() {
    const { t } = useLanguage();

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
                        {t('portfolio.tagline')}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                        {t('portfolio.title').split(" ")[0]} <br /> <span className="accent-gradient italic">{t('portfolio.title').split(" ").slice(1).join(" ")}</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl">
                        {t('portfolio.description')}
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
                                    <span className="px-6 py-3 border border-white rounded-full text-sm font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors cursor-pointer">
                                        {t('portfolio.view_case_study')}
                                    </span>
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
