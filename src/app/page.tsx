"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Industries from '@/components/Industries';
import Process from '@/components/Process';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-background">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <Hero />


      <Features />

      <section className="py-44 px-6 md:px-24 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-slate-600 mb-8 block font-orbitron">The Asimovx Standard</span>
          <h2 className="text-5xl md:text-[8rem] font-bold tracking-tighter leading-none mb-12">
            EXCELLENCE <br /> IS ONLY THE <br /> <span className="accent-gradient italic">START.</span>
          </h2>
        </motion.div>
      </section>


      <Industries />
      <Process />
      <Blog />

      <CTA />
      <Footer />
    </main>
  );
}
