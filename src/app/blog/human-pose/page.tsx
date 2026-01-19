"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';


export default function HumanPoseArticle() {
    const { t } = useLanguage();
    return (
        <main className="min-h-screen bg-black text-foreground">
            <div className="py-24 px-6 md:px-24 max-w-5xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all mb-12">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-bold tracking-widest uppercase">Back to Home</span>
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
                        Human Pose Comparison and Action Scoring using Deep Learning, OpenCV & Python
                    </h1>

                    <div className="flex items-center gap-4 mb-12 pb-8 border-b border-white/10">
                        <a
                            href="https://github.com/kr1210/Human-Pose-Compare"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent rounded-full text-accent hover:bg-accent hover:text-background transition-all"
                        >
                            <ExternalLink className="w-4 h-4" />
                            View on GitHub
                        </a>
                    </div>

                    <div className="relative h-[600px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                        <Image
                            src="/images/hp/hp1.jpg"
                            alt="Human Pose Estimation Main"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none">
                        <p className="text-xl text-slate-300 leading-relaxed mb-8">
                            {t('blog_articles.human_pose.content.p1')}
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.human_pose.content.p2')}
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.human_pose.content.p3')}
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">{t('blog_articles.human_pose.content.h_challenge')}</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.human_pose.content.p4')}
                        </p>

                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.human_pose.content.p5')}
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">{t('blog_articles.human_pose.content.h_model')}</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.human_pose.content.p6')}
                        </p>
                        <div className="relative h-[500px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5">
                            <Image src="/images/hp/hp2.jpg" alt="PoseNet Model" fill className="object-contain p-4" />
                        </div>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">{t('blog_articles.human_pose.content.h_similarity')}</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.human_pose.content.p_similarity')}
                        </p>

                        <h3 className="text-2xl font-bold mt-12 mb-4 text-accent">{t('blog_articles.human_pose.content.h_solutions')}</h3>
                        <ul className="list-disc list-inside space-y-3 text-slate-400 mb-8">
                            <li><strong className="text-white">{t('blog_articles.human_pose.content.li_bbox_bold')}</strong> {t('blog_articles.human_pose.content.li_bbox')}</li>
                            <li><strong className="text-white">{t('blog_articles.human_pose.content.li_norm_bold')}</strong> {t('blog_articles.human_pose.content.li_norm')}</li>
                        </ul>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden border border-white/5 shadow-xl bg-white/5 group hover:border-accent/30 transition-colors">
                                <Image src="/images/hp/hp3.jpg" alt="Normalization Diagram 1" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="relative h-[450px] w-full rounded-3xl overflow-hidden border border-white/5 shadow-xl bg-white/5 group hover:border-accent/30 transition-colors">
                                <Image src="/images/hp/hp4.jpg" alt="Normalization Diagram 2" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">{t('blog_articles.human_pose.content.h_cosine')}</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.human_pose.content.p_cosine_1')}
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.human_pose.content.p_cosine_2')}
                        </p>
                        <div className="flex flex-col gap-12 mb-16">
                            <div className="relative h-[350px] w-full rounded-3xl overflow-hidden border border-white/5 shadow-xl bg-white/5 group hover:border-accent/30 transition-colors">
                                <Image src="/images/hp/hp5.jpg" alt="Cosine Similarity 1" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="relative h-[650px] w-full rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 group hover:border-accent/30 transition-colors">
                                <Image src="/images/hp/hp6.jpg" alt="Cosine Similarity 2" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">{t('blog_articles.human_pose.content.h_drawbacks')}</h2>
                        <ul className="list-disc list-inside space-y-3 text-slate-400 mb-8">
                            <li>{t('blog_articles.human_pose.content.li_drawback_1')}</li>
                            <li>{t('blog_articles.human_pose.content.li_drawback_2')}</li>
                        </ul>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">{t('blog_articles.human_pose.content.h_dtw')}</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.human_pose.content.p_dtw_1')}
                        </p>
                        <div className="relative h-[500px] w-full mb-16 rounded-3xl overflow-hidden border border-white/5 shadow-2xl bg-white/5 group">
                            <Image src="/images/hp/hp7.jpg" alt="Dynamic Time Warping" fill className="object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            {t('blog_articles.human_pose.content.p_dtw_2')}
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">{t('blog_articles.human_pose.content.h_future')}</h2>
                        <ul className="list-disc list-inside space-y-3 text-slate-400 mb-8">
                            <li><strong className="text-white">{t('blog_articles.human_pose.content.li_auto_bold')}</strong> {t('blog_articles.human_pose.content.li_auto')}</li>
                            <li><strong className="text-white">{t('blog_articles.human_pose.content.li_score_bold')}</strong> {t('blog_articles.human_pose.content.li_score')}</li>
                            <li><strong className="text-white">{t('blog_articles.human_pose.content.li_point_bold')}</strong> {t('blog_articles.human_pose.content.li_point')}</li>
                            <li><strong className="text-white">{t('blog_articles.human_pose.content.li_feedback_bold')}</strong> {t('blog_articles.human_pose.content.li_feedback')}</li>
                        </ul>


                        <h2 className="text-3xl font-bold mt-16 mb-6 text-white">{t('blog_articles.human_pose.content.h_refs')}</h2>
                        <ul className="space-y-2 text-accent">
                            <li>
                                <a href="https://medium.com/tensorflow/move-mirror-an-ai-experiment-with-pose-estimation-in-the-browser-using-tensorflow-js-2f7b769f9b23" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {t('blog_articles.human_pose.content.ref_1')}
                                </a>
                            </li>
                            <li>
                                <a href="https://towardsdatascience.com/dynamic-time-warping-3933f25fcdd" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    {t('blog_articles.human_pose.content.ref_2')}
                                </a>
                            </li>
                        </ul>
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
