"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Zap, Globe, Smartphone, ShoppingCart } from 'lucide-react';

const SERVICES = [
    {
        icon: <GraduationCap className="w-8 h-8" />,
        title: "Build A Future-Ready AI Workforce",
        description: "Empower your team to seamlessly integrate AI into their daily workflows by providing customized training designed to address your specific requirements. Our training programs will equip your team with the necessary skills and knowledge to thrive and achieve success in leveraging AI technologies."
    },
    {
        icon: <Zap className="w-8 h-8" />,
        title: "Business Transformation",
        description: "At AsimovX, we specialize in digital business transformation, empowering companies to harness the power of technology and innovation to stay ahead in a rapidly evolving market. Our expert team collaborates with you to reimagine your business processes, enhance customer experiences, and streamline operations."
    },
    {
        icon: <Globe className="w-8 h-8" />,
        title: "Web Application Design & Development",
        description: "Web applications are essential tools for modern businesses, offering dynamic and interactive experiences for users. We specialize in comprehensive web application development and design services tailored to meet your specific needs. Our expert team handles everything from initial concept and custom design to robust development and ongoing maintenance."
    },
    {
        icon: <Smartphone className="w-8 h-8" />,
        title: "Mobile Development",
        description: "Mobile applications are an excellent way to reach an audience that is already aware of and interested in your brand, as well as to attract new customers through easy access on their phones. Asimovx manages every aspect of the development process for its clients' mobile applications, including customized design, content management, and quality maintenance."
    },
    {
        icon: <ShoppingCart className="w-8 h-8" />,
        title: "E-Commerce Website",
        description: "E-commerce websites are a powerful tool for engaging existing customers and attracting new ones through convenient online access. Asimovx oversees every phase of the development process for its clients' e-commerce platforms, including bespoke design, content management, and quality assurance."
    }
];

const AdditionalServices = () => {
    return (
        <section className="py-44 px-6 md:px-24 bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {SERVICES.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className="group"
                    >
                        <div className="flex items-start gap-6">
                            <div className="p-5 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl group-hover:from-accent group-hover:to-accent/80 transition-all duration-500 flex-shrink-0">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 font-light leading-relaxed text-lg">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AdditionalServices;
