"use client";

import React, { use } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowLeft, ArrowRight, Share2, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ApplicationForm from '@/components/ApplicationForm';
import { JOBS } from '@/data/jobs';

export default function JobDetails({ params }: { params: Promise<{ slug: string }> }) {
    // Determine unwrapping based on React/Next version type of params
    // In strict Next.js 15+, params is a Promise.
    const resolvedParams = use(params);
    const slug = resolvedParams.slug;

    const job = JOBS.find(j => j.slug === slug);
    const [isApplicationOpen, setIsApplicationOpen] = React.useState(false);

    if (!job) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-foreground selection:bg-accent selection:text-background">
            <Navbar />
            <ApplicationForm
                isOpen={isApplicationOpen}
                onClose={() => setIsApplicationOpen(false)}
                jobTitle={job.title}
            />

            <section className="pt-44 pb-20 px-6 md:px-24 max-w-5xl mx-auto">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Link href="/careers" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-bold uppercase tracking-widest">Back to Careers</span>
                    </Link>
                </motion.div>

                {/* Job Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div>
                            <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4 block">
                                {job.type} Position
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
                                {job.title}
                            </h1>
                            <div className="flex flex-wrap gap-6 text-sm text-slate-400 font-mono mb-8">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4 text-accent" /> {job.posted}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-accent" /> {job.location}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-accent" /> {job.type}
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsApplicationOpen(true)}
                            className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:bg-slate-200 transition-colors whitespace-nowrap"
                        >
                            Apply Now
                        </button>
                    </div>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {/* Main Description */}
                    <div className="md:col-span-2 space-y-12">
                        <div className="prose prose-invert prose-lg max-w-none">
                            <h3 className="text-2xl font-bold mb-4 text-white">About The Role</h3>
                            <p className="text-slate-400 font-light leading-relaxed">
                                {job.fullDescription || job.description}
                            </p>
                        </div>

                        {/* Responsibilities */}
                        {job.responsibilities && (
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-white">What You'll Do</h3>
                                <ul className="space-y-4">
                                    {job.responsibilities.map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start text-slate-400 font-light">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Requirements */}
                        {job.requirements && (
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-white">What We're Looking For</h3>
                                <ul className="space-y-4">
                                    {job.requirements.map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start text-slate-400 font-light">
                                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Preferred Qualifications */}
                        {job.preferredQualifications && (
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-white">Preferred Qualifications</h3>
                                <ul className="space-y-4">
                                    {job.preferredQualifications.map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start text-slate-400 font-light">
                                            <div className="mt-1.5 w-1.5 h-1.5 border border-accent rounded-full flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}


                        {/* Benefits */}
                        {job.benefits && (
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-white">Why Join Us?</h3>
                                <ul className="space-y-4">
                                    {job.benefits.map((item, i) => (
                                        <li key={i} className="flex gap-4 items-start text-slate-400 font-light">
                                            <span className="mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="md:col-span-1">
                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-32">
                            <h3 className="text-xl font-bold mb-6">Share this role</h3>
                            <div className="flex gap-4 mb-8">
                                <button className="p-3 bg-white/10 rounded-full hover:bg-accent transition-colors">
                                    <Share2 className="w-5 h-5" />
                                </button>
                                {/* Add more social share buttons here if needed */}
                            </div>

                            <hr className="border-white/10 mb-8" />

                            <h4 className="font-bold mb-4">Department</h4>
                            <p className="text-slate-400 mb-6">Engineering & AI</p>

                            <h4 className="font-bold mb-4">Contact</h4>
                            <a href="mailto:careers@asimovx.com" className="text-accent hover:underline">careers@asimovx.com</a>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
