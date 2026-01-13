"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Brain, Eye, MessageSquare, Terminal, Monitor, Smartphone, ShoppingCart, Activity, Gamepad2, Settings, Users, BarChart } from 'lucide-react';

const CORE_SERVICES = [
    {
        title: "Computer Vision",
        description: "Our core expertise lies in crafting bespoke software solutions that harness the power of computer vision techniques to derive valuable insights from a diverse range of data sources, including images, videos, LiDAR data, and live streams.",
        detail: "Through a fusion of cutting-edge deep learning algorithms and traditional computer vision approaches, we empower businesses to effortlessly detect, segment, and track objects, thereby unlocking crucial information and elevating the efficiency of their decision-making processes.",
        icon: Eye,
        color: "text-blue-400"
    },
    {
        title: "Natural Language Processing",
        description: "Leverage the potential of deep learning to harness the power of natural language processing pipelines and derive valuable meaning and insights from unstructured text.",
        detail: "",
        icon: MessageSquare,
        color: "text-green-400"
    },
    {
        title: "Generative AI",
        description: "Unlock the full potential of your business by embracing state-of-the-art generative AI solutions customized to your unique requirements. Our team of skilled machine learning engineers and scientists is poised to assist you in developing groundbreaking, high-performance solutions and seamlessly integrating generative AI into your business operations and products.",
        detail: "Whether it’s tailoring natural language processing to your needs, harnessing the capabilities of computer vision, or exploring the realms of reinforcement learning, our seasoned professionals are committed to guiding you through the intricate landscape of generative AI, enabling you to seize its limitless possibilities",
        icon: Brain,
        color: "text-purple-400"
    }
];

const GENERAL_SERVICES = [
    {
        title: "Technology & Software",
        description: "Our innovative solutions have helped technology companies re-imagine the way they operate.",
        icon: Terminal
    },
    {
        title: "Sports Tech",
        description: "We bring state-of-the-art technologies to sports with tracking, activity recognition, pose estimation and more.",
        icon: Activity
    },
    {
        title: "Automotives",
        description: "With solutions ranging from multi-camera object tracking to behavior identification and process optimization.",
        icon: Settings
    },
    {
        title: "Manufacturing/Agro",
        description: "We have implemented solutions ranging from computer vision tools for food manufacturers to real-time sensor analysis on production lines.",
        icon: BarChart
    },
    {
        title: "Marketing",
        description: "Whether it’s on the demand or supply side, we help companies make the most of impression- and user-level data to optimize their advertising efforts.",
        icon: Users
    },
    {
        title: "Healthcare & Pharma",
        description: "We build solutions to make pharmaceuticals safer and more effective through machine learning based approaches for detecting prescription fraud, personalizing healthcare provider outreach, and researching the next wave of therapeutics.",
        icon: Activity
    },
    {
        title: "Gaming",
        description: "Finding a way to engage players in this high-paced, competitive environment is a major challenge. We help companies personalize promotions and incentives to maximize customer engagement through effective reinvestment.",
        icon: Gamepad2
    },
    {
        title: "Build A Future-Ready AI Workforce",
        description: "Empower your team to seamlessly integrate AI into their daily workflows by providing customized training designed to address your specific requirements. Our training programs will equip your team with the necessary skills and knowledge to thrive and achieve success in leveraging AI technologies.",
        icon: Users
    },
    {
        title: "Business Transformation",
        description: "At AsimovX, we specialize in digital business transformation, empowering companies to harness the power of technology and innovation to stay ahead in a rapidly evolving market. Our expert team collaborates with you to reimagine your business processes, enhance customer experiences, and streamline operations.",
        icon: BarChart
    },
    {
        title: "Web Application Design & Development",
        description: "Web applications are essential tools for modern businesses, offering dynamic and interactive experiences for users. At Asimovx, we specialize in comprehensive web application development and design services tailored to meet your specific needs.",
        icon: Monitor
    },
    {
        title: "Mobile Development",
        description: "Mobile applications are an excellent way to reach an audience that is already aware of and interested in your brand, as well as to attract new customers through easy access on their phones. Asimovx manages every aspect of the development process.",
        icon: Smartphone
    },
    {
        title: "e-Commerce Website",
        description: "E-commerce websites are a powerful tool for engaging existing customers and attracting new ones through convenient online access. Asimovx oversees every phase of the development process for its clients’ e-commerce platforms.",
        icon: ShoppingCart
    }
];

export default function Services() {
    return (
        <main className="min-h-screen bg-black text-foreground selection:bg-accent selection:text-background">
            <Navbar />

            {/* Header Section */}
            <section className="pt-44 pb-20 px-6 md:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase block mb-6">What We Do</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-white leading-tight">
                        Solving <span className="text-accent">Real-World</span> <br />
                        Business Problems <br />
                        With <span className="text-accent">AI Based</span> Consulting.
                    </h1>
                    <p className="text-xl text-slate-400 font-light leading-relaxed mb-12 max-w-3xl">
                        Our team of experienced AI consultants will work closely with you to identify the right artificial intelligence technologies, tools, and strategies that will help you streamline your business operations, improve customer engagement, and maximize profitability, everything from NLP/Computer Vision to Generative AI.
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
                                        Contact Us
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
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Services</h2>
                    <p className="text-xl text-slate-400">
                        We can help organizations of all sizes and industries design, build and deploy state-of-the-art machine learning solutions.
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
