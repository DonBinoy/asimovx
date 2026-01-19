"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { useLanguage } from '@/context/LanguageContext';

export default function RealTimeImageClassificationArticle() {
    const { t } = useLanguage();

    return (
        <main className="min-h-screen bg-black text-foreground">
            <div className="py-24 px-6 md:px-24 max-w-5xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all mb-12">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-bold tracking-widest uppercase">{t('blog_articles.common.back_to_home')}</span>
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        {t('blog_articles.realtime_image.title')}
                    </h1>

                    <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
                        <a
                            href="https://github.com/kr1210/Flutter-Real-Time-Image-Classification"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent rounded-full text-accent hover:bg-accent hover:text-background transition-all"
                        >
                            <ExternalLink className="w-4 h-4" />
                            {t('blog_articles.common.view_github')}
                        </a>
                    </div>

                    <div className="relative h-[600px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                        <Image
                            src="/images/tflite/tf1.jpg"
                            alt="Real Time Image Classification Main"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            {t('blog_articles.realtime_image.content.p1')}
                            <a href="https://github.com/kr1210/Flutter-Real-Time-Image-Classification" className="text-accent no-underline hover:underline ml-2">
                                Flutter-Real-Time-Image-Classification
                            </a>
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p2')}
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p3')}
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p4')}
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p5')}
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p6')}
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">{t('blog_articles.realtime_image.content.h_tflite')}</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_tflite')}
                        </p>
                        <ol className="list-decimal list-inside space-y-3 text-slate-400 mb-8">
                            <li>{t('blog_articles.realtime_image.content.li_step1')}</li>
                            <li>{t('blog_articles.realtime_image.content.li_step2')}</li>
                            <li>{t('blog_articles.realtime_image.content.li_step3')}</li>
                        </ol>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-white/10 font-mono text-sm text-slate-300 mb-8">
                            <pre>
                                {`aaptOptions {
    noCompress 'tflite'
    noCompress 'lite'
}`}
                            </pre>
                        </div>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_pubspec')}
                        </p>

                        <div className="relative h-[500px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 group">
                            <Image src="/images/tflite/tf2.jpg" alt="pubspec.yaml configuration" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-accent">{t('blog_articles.realtime_image.content.h_pubspec')}</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_dev_dep')}
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_home_dart')}
                        </p>

                        <div className="relative h-[500px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 group">
                            <Image src="/images/tflite/tf3.jpg" alt="Importing tflite plugin" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-accent">{t('blog_articles.realtime_image.content.h_import')}</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_import_1')}
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_import_2')}
                        </p>

                        <div className="relative h-[500px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 group">
                            <Image src="/images/tflite/tf3.jpg" alt="Loading the model" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-accent">{t('blog_articles.realtime_image.content.h_load')}</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_load')}
                        </p>

                        <div className="relative h-[500px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 group">
                            <Image src="/images/tflite/tf4.jpg" alt="runModelOnFrame function" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4 text-accent">{t('blog_articles.realtime_image.content.h_run_model')}</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_run_1')}
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_run_2')}
                        </p>

                        <div className="bg-slate-900/50 p-6 rounded-xl border border-white/10 font-mono text-sm text-slate-300 mb-8">
                            <pre>
                                {`{
index: 0,
label: "person",
confidence: 0.629
}`}
                            </pre>
                        </div>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_output_1')}
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.realtime_image.content.p_render')}
                        </p>

                        <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-2xl">
                            <p className="text-slate-300 font-medium">
                                {t('blog_articles.realtime_image.content.footer_repo')} <a href="https://github.com/kr1210/Flutter-Real-Time-Image-Classification" className="text-accent hover:underline">Flutter-Real-Time-Image-Classification</a>
                            </p>
                        </div>

                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10">
                        <Link href="/" className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
                        </Link>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
