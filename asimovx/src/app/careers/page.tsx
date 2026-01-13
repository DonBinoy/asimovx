"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, Share2, Mail, Facebook, Twitter, Linkedin, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { JOBS } from '@/data/jobs';
import Link from 'next/link';

export default function Careers() {
    const { t } = useLanguage();
    const [activeShareId, setActiveShareId] = React.useState<number | null>(null);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [filterType, setFilterType] = React.useState("All");

    const filteredJobs = JOBS.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesType = filterType === "All" || job.type === filterType;
        return matchesSearch && matchesType;
    });

    return (
        <main className="min-h-screen bg-black text-foreground selection:bg-accent selection:text-background" >
            <Navbar />

            <section className="pt-44 pb-20 px-6 md:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-6 block">
                        {t('careers.tagline')}
                    </span>
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
                        {t('careers.title').split(" ")[0]} <br /> <span className="accent-gradient italic">{t('careers.title').split(" ").slice(1).join(" ")}</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl mb-12">
                        {t('careers.description')}
                    </p>

                    {/* Search and Filter Section */}
                    <div className="flex flex-col md:flex-row gap-6 mb-12">
                        <div className="relative flex-1">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search roles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-slate-500 focus:outline-none focus:border-accent transition-colors"
                            />
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0">
                            {["All", "Full-time", "Internship"].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setFilterType(type)}
                                    className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap border transition-all ${filterType === type
                                        ? "bg-accent border-accent text-white"
                                        : "bg-transparent border-white/10 text-slate-400 hover:text-white hover:border-white/30"
                                        }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 gap-6">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-accent/50 hover:bg-white/10 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm text-slate-400 font-mono">
                                            <span className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" /> {job.posted}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" /> {job.location}
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" /> {job.type}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <div className="relative">
                                            <button
                                                onClick={() => setActiveShareId(activeShareId === index ? null : index)}
                                                className={`p-3 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all ${activeShareId === index ? 'bg-white text-black' : ''}`}
                                            >
                                                <Share2 className="w-4 h-4" />
                                            </button>

                                            {activeShareId === index && (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    className="absolute right-0 top-full mt-2 p-3 bg-zinc-900 border border-white/10 rounded-xl shadow-xl flex gap-3 z-50 backdrop-blur-xl"
                                                >
                                                    <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors text-white" title="Email">
                                                        <Mail className="w-4 h-4" />
                                                    </a>
                                                    <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors text-[#25D366]" title="WhatsApp">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                        </svg>
                                                    </a>
                                                    <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors text-[#1877F2]" title="Facebook">
                                                        <Facebook className="w-4 h-4" />
                                                    </a>
                                                    <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors text-[#1DA1F2]" title="Twitter">
                                                        <Twitter className="w-4 h-4" />
                                                    </a>
                                                    <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors text-[#0A66C2]" title="LinkedIn">
                                                        <Linkedin className="w-4 h-4" />
                                                    </a>
                                                </motion.div>
                                            )}
                                        </div>
                                        <Link href={`/careers/${job.slug}`} className="px-6 py-3 bg-accent text-white rounded-full text-sm font-bold uppercase tracking-wider hover:bg-accent/80 transition-all flex items-center gap-2">
                                            {t('careers.details')} <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>

                                <p className="text-slate-400 font-light leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                                    {job.description}
                                </p>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 text-slate-500">
                            <p className="text-xl">No positions found matching your criteria.</p>
                            <button
                                onClick={() => { setSearchTerm(""); setFilterType("All"); }}
                                className="mt-4 text-accent hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>

            </section>

            <Footer />
        </main >
    );
}
