"use client";
import React from 'react';

interface PortfolioItemProps {
    img: {
        src: string;
        title: string;
        category: string;
        aspect?: string;
    };
    onClick: () => void;
}

export default function PortfolioItem({ img, onClick }: PortfolioItemProps) {
    return (
        <div
            onClick={onClick}
            className="gallery-item break-inside-avoid relative group cursor-pointer rounded-xl overflow-hidden shadow-sm mb-8"
        >
            <div className={`bg-gray-100 w-full relative overflow-hidden ${img.aspect || 'aspect-[3/4]'}`}>
                <img alt={img.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" src={img.src} />
            </div>
            <div className="gallery-overlay absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 flex items-end p-6 group-hover:opacity-100">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-serif text-lg font-medium text-text-main">{img.title}</p>
                    <p className="text-xs text-text-soft uppercase tracking-wider mt-1">{img.category}</p>
                </div>
            </div>
        </div>
    );
}
