"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder to avoid mismatched hydration
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2.5 rounded-full border border-white/10 dark:border-white/10 border-black/10 bg-white/5 hover:bg-white/10 transition-all text-foreground"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                {theme === "dark" ? (
                    <Moon className="w-4 h-4 text-slate-400 hover:text-white transition-colors" />
                ) : (
                    <Sun className="w-4 h-4 text-orange-500 hover:text-orange-600 transition-colors" />
                )}
            </motion.div>
        </button>
    );
}
