import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, CheckCircle } from 'lucide-react';
import { COUNTRY_CODES } from '@/constants/phoneCodes';

interface BookDemoModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
    const [formData, setFormData] = useState({
        association: '',
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
                    name: formData.name,
                    email: formData.email,
                    phone: `${formData.countryCode} ${formData.phone}`,
                    message: formData.message,
                    organization: formData.association, // Map association to organization
                    subject: `Demo Request: ${formData.association || formData.name}` // Custom subject
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ association: '', name: '', email: '', countryCode: '+46', phone: '', message: '' });
                // Optional: Close after delay
                // setTimeout(onClose, 3000);
            } else {
                alert("Failed to submit request. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred.");
        } finally {
            setIsSubmitting(false);
        }
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
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#111] border border-white/10 w-full max-w-lg rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors z-20"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {isSuccess ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Request Sent!</h3>
                                    <p className="text-slate-400 mb-8">
                                        Thank you for interest. We will be in touch shortly to schedule your demo.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-serif text-white mb-2">Book a Demo</h2>
                                        <p className="text-slate-400 text-sm">
                                            See how our platform can transform your housing association.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Association / BRF Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.association}
                                                onChange={e => setFormData({ ...formData, association: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                                placeholder="e.g. BRF Asimov"
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Your Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Phone</label>
                                                <div className="flex gap-2">
                                                    <select
                                                        value={formData.countryCode}
                                                        onChange={e => setFormData({ ...formData, countryCode: e.target.value })}
                                                        className="bg-white/5 border border-white/10 rounded-xl px-2 py-3 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none min-w-[80px]"
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
                                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                                        placeholder="72..."
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Message (Optional)</label>
                                            <textarea
                                                rows={3}
                                                value={formData.message}
                                                onChange={e => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                                                placeholder="Any specific questions?"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Submit Request
                                                    <Send className="w-4 h-4" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
