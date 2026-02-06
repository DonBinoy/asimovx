"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, Send, Loader2, Linkedin, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { COUNTRY_CODES } from '@/constants/phoneCodes';

export default function Contact() {
    const { t } = useLanguage();

    const LOCATIONS = [
        {
            country: t('contact_page.locations.sweden'),
            address: ["Asimovx Technologies AB", "Snövits väg 64D,", "Trelleborg 231 32 Sweden"],
            email: "vinil.valsan@asimovx.se",
            phones: ["+46 722122262", "+46 733205536"]
        },
        {
            country: t('contact_page.locations.spain'),
            address: ["Calle de Sequillo 20", "Madrid", "Spain 28017"],
            email: "liju.ps@asimovx.se",
            phones: ["+34634266903"]
        },
        {
            country: t('contact_page.locations.latvia'),
            address: ["Burtnieku iela 1", "Riga,", "Latvia, LV-1006"],
            email: "liju.ps@asimovx.se",
            phones: ["+371 22477016"]
        }
    ];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+46',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    phone: `${formData.countryCode} ${formData.phone}`
                }),
            });

            if (response.ok) {
                console.log("Form Submitted Successfully");
                setIsSuccess(true);
                setFormData({ name: '', email: '', countryCode: '+46', phone: '', message: '' });
            } else {
                console.error("Failed to submit form");
                // Optional: Handle error state here
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
            <Navbar />

            <section className="pt-44 pb-20 px-6 md:px-24 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-accent text-sm font-bold tracking-[0.3em] uppercase block mb-4">{t('contact_page.tagline')}</span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
                        {t('contact_page.title')}
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400 font-light max-w-2xl">
                        {t('contact_page.blurb')}
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
                            <h4 className="text-sm font-bold tracking-widest uppercase text-slate-500 mb-4">{t('contact_page.social_title')}</h4>
                            <a href="https://www.linkedin.com/company/asimovx-technologies-ab" className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors font-medium">
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
                            <h3 className="text-2xl font-bold text-white mb-2">{t('contact_page.form.title')}</h3>
                            <p className="text-slate-400 mb-8 text-sm">
                                {t('contact_page.form.subtitle')}
                            </p>

                            {isSuccess ? (
                                <div className="text-center py-12 bg-green-500/10 rounded-2xl border border-green-500/20">
                                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-white mb-2">{t('contact_page.form.success_title')}</h3>
                                    <p className="text-slate-400">{t('contact_page.form.success_msg')}</p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full text-sm font-medium transition-colors"
                                    >
                                        {t('contact_page.form.btn_another')}
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            {t('contact_page.form.name')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600"
                                            placeholder={t('contact_page.form.name')}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            {t('contact_page.form.email')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600"
                                            placeholder={t('contact_page.form.email')}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            {t('contact_page.form.phone')}
                                        </label>
                                        <div className="flex gap-2">
                                            <select
                                                value={formData.countryCode}
                                                onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                                className="bg-black/50 border border-white/10 rounded-xl px-2 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none min-w-[80px]"
                                            >
                                                {COUNTRY_CODES.map(c => (
                                                    <option key={c.code} value={c.code} className="bg-[#111] text-white">
                                                        {c.flag} {c.code}
                                                    </option>
                                                ))}
                                            </select>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600"
                                                placeholder={t('contact_page.form.phone')}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-2">
                                            {t('contact_page.form.message')}
                                        </label>
                                        <textarea
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors placeholder:text-slate-600 resize-none"
                                            placeholder={t('contact_page.form.message')}
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
                                                {t('contact_page.form.btn_sending')}
                                            </>
                                        ) : (
                                            <>
                                                {t('contact_page.form.btn_submit')}
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
