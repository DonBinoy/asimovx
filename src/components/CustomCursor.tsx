"use client";

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

    useEffect(() => {
        // Don't run on mobile/touch devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        let trailId = 0;

        const updatePosition = (e: MouseEvent) => {
            requestAnimationFrame(() => {
                setPosition({ x: e.clientX, y: e.clientY });

                setTrail(prev => {
                    const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
                    return newTrail.slice(-8);
                });

                const target = e.target as HTMLElement;
                setIsPointer(
                    window.getComputedStyle(target).cursor === 'pointer' ||
                    target.tagName === 'A' ||
                    target.tagName === 'BUTTON'
                );
            });
        };

        window.addEventListener('mousemove', updatePosition);
        return () => window.removeEventListener('mousemove', updatePosition);
    }, []);

    return (
        <div className="hidden md:block">
            {/* Trail particles */}
            {trail.map((point, index) => (
                <div
                    key={point.id}
                    className="fixed pointer-events-none z-[9997]"
                    style={{
                        left: `${point.x}px`,
                        top: `${point.y}px`,
                        transform: 'translate(-50%, -50%)',
                        opacity: (index + 1) / trail.length * 0.5,
                    }}
                >
                    <div
                        className="w-1 h-1 bg-accent rounded-full"
                        style={{
                            boxShadow: '0 0 4px rgba(236, 72, 153, 0.6)',
                        }}
                    />
                </div>
            ))}

            {/* Main cursor - outer circle */}
            <div
                className="fixed pointer-events-none z-[10000]"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.2s ease, height 0.2s ease',
                }}
            >
                <div
                    className={`rounded-full border-2 transition-all duration-200 ${isPointer
                        ? 'w-12 h-12 border-accent bg-accent/10'
                        : 'w-8 h-8 border-accent/60 bg-transparent'
                        }`}
                    style={{
                        boxShadow: isPointer
                            ? '0 0 20px rgba(236, 72, 153, 0.6), inset 0 0 10px rgba(236, 72, 153, 0.3)'
                            : '0 0 10px rgba(236, 72, 153, 0.4)',
                    }}
                />
            </div>

            {/* Inner dot */}
            <div
                className="fixed pointer-events-none z-[10001]"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div
                    className={`bg-accent rounded-full transition-all duration-150 ${isPointer ? 'w-1 h-1 opacity-0' : 'w-1.5 h-1.5 opacity-100'
                        }`}
                />
            </div>

            {/* Rotating ring */}
            <div
                className="fixed pointer-events-none z-[9999] animate-spin"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                    animationDuration: '3s',
                }}
            >
                <svg
                    width={isPointer ? "56" : "40"}
                    height={isPointer ? "56" : "40"}
                    viewBox="0 0 40 40"
                    className="transition-all duration-200"
                >
                    <circle
                        cx="20"
                        cy="20"
                        r="18"
                        fill="none"
                        stroke="#ec4899"
                        strokeWidth="1"
                        strokeDasharray="4 8"
                        opacity="0.3"
                    />
                </svg>
            </div>
        </div>
    );
}
