"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const ARTICLES = [
    {
        title: "Human Pose Comparison and Action Scoring using Deep Learning, OpenCV & Python",
        excerpt: "Pose Estimation is one of the more elegant applications of neural networks and is startlingly accurate and sometimes, seems like...",
        link: "/blog/human-pose"
    },
    {
        title: "Real-Time Image Classification On Android Using Flutter, TFlite",
        excerpt: "Making a smartphone app from scratch might seem a daunting task to most newbies and maybe even seasoned programmers. Enter Flutter....",
        link: "#"
    }
];

const Blog = () => {
    const { t } = useLanguage();

    return (
        <section className="py-44 px-6 md:px-24 bg-black relative">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6 block">
                        {t('blog.tagline')}
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        {t('blog.title_1')} <br />
                        <span className="text-slate-600 font-light">{t('blog.title_2')}</span>
                    </h2>
                    <p className="text-xl text-slate-400 font-light mt-6">
                        {t('blog.description')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ARTICLES.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative border border-white/10 rounded-3xl p-8 hover:border-accent/50 transition-all duration-500 bg-gradient-to-br from-white/5 to-transparent"
                        >
                            <div className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4 pr-16 group-hover:text-accent transition-colors">
                                {article.title}
                            </h3>
                            <p className="text-slate-400 font-light leading-relaxed mb-6">
                                {article.excerpt}
                            </p>
                            <Link
                                href={article.link}
                                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-accent hover:gap-4 transition-all"
                            >
                                {t('blog.read_more')}
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
