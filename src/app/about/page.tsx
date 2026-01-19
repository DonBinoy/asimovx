"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Linkedin, Mail, BookOpen } from 'lucide-react';

const TEAM = [
    {
        name: "Krishna Raj R",
        role: "AI HEAD | FOUNDER",
        image: "/images/humans/KR.jpg",
        bio: "Leading the AI revolution with over 15 years of experience in machine learning and neural networks.",
        links: [
            { icon: Linkedin, url: "https://www.linkedin.com/in/krishna-raj-r-7aa791167/" },
            { icon: BookOpen, url: "https://medium.com/@krishnarajr319" }
        ]
    },
    {
        name: "Liju ps",
        role: "TECH HEAD | FOUNDER",
        image: "/images/humans/liju.jpg",
        bio: "Architecting scalable technical solutions that power enterprise-grade AI applications.",
        links: []
    },
    {
        name: "Deepa Subramanian",
        role: "Head of Pre-Sales",
        image: "/images/humans/deepa.jpeg",
        bio: "Bridging the gap between complex technical capabilities and business value verification.",
        links: [
            { icon: Linkedin, url: "https://www.linkedin.com/in/deepa-n-p-2726065/" }
        ]
    },
    {
        name: "Vignesh Krishnan",
        role: "HEAD OF MARKETING",
        image: "/images/humans/vignesh.jpeg",
        bio: "Crafting compelling narratives that showcase the transformative power of our AI solutions.",
        links: []
    },
    {
        name: "Clifton Benjamin",
        role: "UI/UX",
        image: "/images/humans/clifton.jpeg",
        bio: "Designing intuitive and engaging user experiences.",
        links: []
    }
];

export default function About() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-44 pb-20 px-6 md:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white">
                        About <span className="text-accent">Us.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-12">
                        We provide industry leading tech consulting to unlock the potential of AI in your business and achieve quantifiable results.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
                >
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                        <h3 className="text-2xl font-bold mb-4 text-white">Who We Are</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Let us build your next big AI leap to accelerate your business. We combine exceptionally talented teams with optimized tech solutions to deliver specific, measurable outcomes.
                        </p>
                        <ul className="space-y-2 text-slate-300">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Exceptionally Talented Team</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Optimized tech solutions</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> High-end customer support</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-accent rounded-full"></span> Quantifiable Results</li>
                        </ul>
                    </div>
                </motion.div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 px-6 md:px-24 bg-zinc-900/50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Vision & <span className="text-accent">Mission</span></h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Vision Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-black border border-white/10 p-10 rounded-3xl relative overflow-hidden group hover:border-accent/50 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-6xl text-white group-hover:scale-110 transition-transform">01</div>
                            <h3 className="text-2xl font-bold text-accent mb-6 uppercase tracking-widest">Vision</h3>
                            <p className="text-xl text-white leading-relaxed">
                                Solving Real-World Business Problems With AI Based Consulting.
                            </p>
                        </motion.div>

                        {/* Mission Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-black border border-white/10 p-10 rounded-3xl relative overflow-hidden group hover:border-accent/50 transition-colors"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 font-bold text-6xl text-white group-hover:scale-110 transition-transform">02</div>
                            <h3 className="text-2xl font-bold text-accent mb-6 uppercase tracking-widest">Mission</h3>
                            <p className="text-xl text-white leading-relaxed">
                                Empower your world of business with cutting-edge tech solutions that leverage state-of-the-art artificial intelligence (AI) to move your organization towards its goals faster than ever before.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 px-6 md:px-24">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase block mb-4">Leadership</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Meet the <span className="text-accent">Core Team.</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Our team of AI consultants will work closely with you to identify the right artificial intelligence technologies, tools, and strategies.
                        </p>
                    </motion.div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {TEAM.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative w-full md:w-[calc(50%-2rem)] lg:w-[calc(30%-2rem)] max-w-sm"
                            >
                                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-zinc-900 border border-white/5 relative">
                                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors z-10" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                    />

                                    {/* Social Overlay */}
                                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                                        {member.links && member.links.map((link, idx) => (
                                            <a
                                                key={idx}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-black/80 backdrop-blur text-white rounded-full hover:bg-accent transition-colors"
                                            >
                                                <link.icon className="w-4 h-4" />
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-xs font-bold tracking-widest text-accent uppercase mb-3">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
