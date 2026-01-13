"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ApplicationFormProps {
    isOpen: boolean;
    onClose: () => void;
    jobTitle: string;
}

export default function ApplicationForm({ isOpen, onClose, jobTitle }: ApplicationFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        countryCode: '+1',
        phone: '',
        description: '',
        resume: null as File | null
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.resume) newErrors.resume = 'Resume is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Form Data:', formData);
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, resume: e.target.files[0] });
            setErrors({ ...errors, resume: '' });
        }
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', countryCode: '+1', phone: '', description: '', resume: null });
        setErrors({});
        setIsSuccess(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <div>
                                <h2 className="text-xl font-bold text-white">Apply for Role</h2>
                                <p className="text-sm text-slate-400">{jobTitle}</p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            {!isSuccess ? (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => {
                                                setFormData({ ...formData, name: e.target.value });
                                                if (errors.name) setErrors({ ...errors, name: '' });
                                            }}
                                            className={`w-full bg-black/50 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({ ...formData, email: e.target.value });
                                                if (errors.email) setErrors({ ...errors, email: '' });
                                            }}
                                            className={`w-full bg-black/50 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.email}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                            Phone Number <span className="text-slate-500 text-xs">(Optional)</span>
                                        </label>
                                        <div className="flex gap-2">
                                            <div className="relative">
                                                <select
                                                    value={formData.countryCode}
                                                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                                                    className="w-[100px] bg-black/50 border border-white/10 rounded-lg px-3 py-3 text-white focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer"
                                                >
                                                    <option value="+1">🇺🇸 +1</option>
                                                    <option value="+44">🇬🇧 +44</option>
                                                    <option value="+91">🇮🇳 +91</option>
                                                    <option value="+61">🇦🇺 +61</option>
                                                    <option value="+49">🇩🇪 +49</option>
                                                    <option value="+33">🇫🇷 +33</option>
                                                    <option value="+81">🇯🇵 +81</option>
                                                    <option value="+86">🇨🇳 +86</option>
                                                    <option value="+971">🇦🇪 +971</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-slate-400">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                                </div>
                                            </div>
                                            <input
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors"
                                                placeholder="(555) 000-0000"
                                            />
                                        </div>
                                    </div>

                                    {/* Resume Upload */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                            Resume/CV <span className="text-red-500">*</span>
                                        </label>
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className={`border-2 border-dashed ${errors.resume ? 'border-red-500 bg-red-500/5' : 'border-white/10 hover:border-accent hover:bg-white/5'} rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all group`}
                                        >
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                                className="hidden"
                                                accept=".pdf,.doc,.docx"
                                            />
                                            {formData.resume ? (
                                                <div className="flex items-center gap-2 text-accent bg-accent/10 px-4 py-2 rounded-full">
                                                    <CheckCircle className="w-4 h-4" />
                                                    <span className="text-sm font-medium">{formData.resume.name}</span>
                                                </div>
                                            ) : (
                                                <>
                                                    <Upload className="w-8 h-8 text-slate-500 mb-2 group-hover:text-accent transition-colors" />
                                                    <p className="text-sm text-slate-400 group-hover:text-white transition-colors">Click to upload resume</p>
                                                    <p className="text-xs text-slate-600 mt-1">PDF, DOC, DOCX up to 10MB</p>
                                                </>
                                            )}
                                        </div>
                                        {errors.resume && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> {errors.resume}</p>}
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-300 mb-1.5">
                                            Cover Letter / Description <span className="text-slate-500 text-xs">(Optional)</span>
                                        </label>
                                        <textarea
                                            value={formData.description}
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                            rows={3}
                                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                                            placeholder="Tell us a bit about yourself..."
                                        />
                                    </div>

                                    <div className="pt-2">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-accent/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                "Submit Application"
                                            )}
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Application Sent!</h3>
                                    <p className="text-slate-400 mb-8">
                                        Thanks for applying to the <span className="text-white font-medium">{jobTitle}</span> role. <br />
                                        We'll review your application and get back to you soon.
                                    </p>
                                    <button
                                        onClick={resetForm}
                                        className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
