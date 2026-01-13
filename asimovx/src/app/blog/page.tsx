"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogComponent from '@/components/Blog';

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-black text-foreground selection:bg-accent selection:text-background">
            <Navbar />

            {/* 
                Reusing the Home page Blog section. 
                We might want to adjust padding if it feels too constrained, 
                but for now we keep it consistent with the user's request to "appear the section".
            */}
            <BlogComponent />

            <Footer />
        </main>
    );
}
