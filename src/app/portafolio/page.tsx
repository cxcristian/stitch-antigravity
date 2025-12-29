"use client";
import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PortfolioItem from "@/components/PortfolioItem";

import { client, urlFor } from '@/sanity/client';

export default function PortfolioPage() {
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const [galleryImages, setGalleryImages] = useState<any[]>([]);
    const [activeFilter, setActiveFilter] = useState("Todos");

    useEffect(() => {
        const query = `*[_type == "trabajo"]{
            "src": imagen,
            "title": titulo,
            "category": categoria,
            "aspect": aspecto,
            _id
        }`;

        client.fetch(query).then(data => {
            const formattedData = data.map((item: any) => ({
                ...item,
                src: item.src ? urlFor(item.src).url() : "https://via.placeholder.com/600x800"
            }));
            setGalleryImages(formattedData.length > 0 ? formattedData : []);
        });
    }, []);

    const filteredImages = galleryImages.filter(img =>
        activeFilter === "Todos" ? true : img.category === activeFilter
    );

    // Mock data fallback if fetch fails or is empty initially for dev feel (optional, but requested to fix)
    /*
    const galleryImages = [ ... ]
    */

    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow">
                <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto text-center">
                    <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
                        <span className="uppercase tracking-[0.2em] text-xs font-bold text-primary">Galería Exclusiva</span>
                        <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-medium text-text-main leading-tight">
                            Trabajos <span className="italic text-primary">Recientes</span>
                        </h2>
                        <p className="text-text-soft text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                            Una selección curada de nuestro arte en belleza, maquillaje y estilismo. Descubre la elegancia y el detalle que definen a Solare.
                        </p>
                    </div>
                </section>

                <section className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto mb-12">
                    <div className="flex justify-center">
                        <div className="inline-flex flex-wrap justify-center items-center gap-2 p-2 rounded-2xl">
                            {["Todos", "Novias", "Editorial", "Color & Corte", "Maquillaje", "Estilismo", "Tratamientos"].map((filter, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${activeFilter === filter ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white dark:bg-transparent border-gray-200 dark:border-gray-700 text-text-main dark:text-gray-200 hover:border-primary hover:text-primary'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-4 sm:px-6 lg:px-8 max-w-[1440px] mx-auto pb-24">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {filteredImages.map((img, idx) => (
                            <PortfolioItem key={idx} img={img} onClick={() => setSelectedImage(img)} />
                        ))}
                    </div>
                </section>
            </main>

            <Footer />

            {/* Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in">
                    <div className="relative w-full max-w-6xl max-h-[90vh] bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full cursor-pointer transition-colors"
                        >
                            <span className="material-symbols-outlined text-xl block">close</span>
                        </button>
                        <div className="w-full md:w-2/3 bg-black flex items-center justify-center relative group">
                            <img alt={selectedImage.title} className="max-h-[50vh] md:max-h-[90vh] w-full object-contain" src={selectedImage.src} />
                        </div>
                        <div className="w-full md:w-1/3 p-8 flex flex-col justify-between bg-white dark:bg-[#1c1917] overflow-y-auto">
                            <div>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">{selectedImage.category}</span>
                                    <span className="text-gray-400 text-xs">Agosto 2024</span>
                                </div>
                                <h3 className="font-serif text-3xl md:text-4xl text-text-main mb-4">{selectedImage.title}</h3>
                                <div className="space-y-4 text-text-soft leading-relaxed">
                                    <p>Este trabajo muestra nuestra dedicación al detalle y la perfección.</p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <button className="w-full py-3.5 bg-black dark:bg-white dark:text-black text-white rounded-lg font-bold hover:opacity-90 transition-opacity">
                                    Reservar servicio similar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
