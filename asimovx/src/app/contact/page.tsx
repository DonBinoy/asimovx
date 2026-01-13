"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Send, Loader2, Linkedin, CheckCircle } from 'lucide-react';

const LOCATIONS = [
    {
        country: "Sweden",
        address: ["Asimovx Technologies AB", "Sockenvägen 6A,", "Trelleborg 23134 Sweden"],
        email: "vinil.valsan@asimovx.se",
        phones: ["+46 722122262", "+46 733205536"]
    },
    {
        country: "Spain",
        address: ["Calle de Sequillo 20", "Madrid", "Spain 28017"],
        email: "liju.ps@asimovx.se",
        phones: ["+34634266903"]
    },
    {
        country: "Latvia",
        address: ["Burtnieku iela 1", "Riga,", "Latvia, LV-1006"],
        email: "liju.ps@asimovx.se",
        phones: ["+371 22477016"]
    }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Form Submitted", formData);
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <main className="min-h-screen bg-black text-foreground selection:bg-accent selection:text-background">
            <Navbar />

            <section className="pt-44 pb-20 px-6 md:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase block mb-4">Contact Us</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
                        How can we <span className="text-accent">help you?</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-light max-w-2xl">
                        Get Free Quotes Now. Use the form below or reach out to our offices directly.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column: Locations */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-12"
                    >
                        <div className="grid gap-10">
                            {LOCATIONS.map((loc, index) => (
                                <div key={index} className="border-l-2 border-white/10 pl-6 hover:border-accent transition-colors group">
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{loc.country}</h3>

                                    <div className="space-y-3 text-slate-400 font-light mb-4">
                                        {loc.address.map((line, i) => (
                                            <p key={i} className="flex items-center gap-3">
                                                {i === 0 && <MapPin className="w-4 h-4 text-accent shrink-0" />}
                                                <span className={i === 0 ? "" : "ml-7"}>{line}</span>
                                            </p>
                                        ))}
                                    </div>

                                    <div className="space-y-2">
                                        <a href={`mailto:${loc.email}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                                            <Mail className="w-4 h-4 text-accent" />
                                            {loc.email}
                                        </a>
                                        {loc.phones.map((phone, i) => (
                                            <a key={i} href={`tel:${phone}`} className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                                                <Phone className="w-4 h-4 text-accent" />
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h4 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-4">Social Media</h4>
                            <a href="#" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors font-medium">
                                <Linkedin className="w-5 h-5" />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Column: Enquiry Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="bg-zinc-900/50 border border-white/10 rounded-3xl p-8 md:p-10">
                            <h3 className="text-2xl font-bold text-white mb-2">Write to us..</h3>
                            <p className="text-slate-400 mb-8 text-sm">
                                If you have an Innovative Idea on how we can Improve. We are all ears!
                            </p>

                            {isSuccess ? (
                                <div className="text-center py-12 bg-green-500/10 rounded-2xl border border-green-500/20">
                                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-slate-400">We'll get back to you shortly.</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-colors"
                                    >
                                        Send another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600"
                                            placeholder="Enter your first name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600"
                                            placeholder="Enter your email"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600"
                                            placeholder="Enter your phone"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            Message / Enquiry
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600 resize-none"
                                            placeholder="Enter your message"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
