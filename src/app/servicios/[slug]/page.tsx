"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client, urlFor } from '@/sanity/client';

export default function ServiceDetail({ params }: { params: { slug: string } }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [service, setService] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "servicio" && slug.current == "${params.slug}"][0]{
            title,
            price,
            "desc": descripcion,
            "img": imagen
        }`;

        client.fetch(query).then(data => {
            if (data) {
                setService({
                    ...data,
                    img: data.img ? urlFor(data.img).url() : "https://via.placeholder.com/800x1200"
                });
            }
            setLoading(false);
        }).catch(() => setLoading(false));
    }, [params.slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!service) {
        return (
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="flex-grow flex flex-col items-center justify-center gap-4">
                    <h2 className="text-2xl font-serif">Servicio no encontrado</h2>
                    <Link href="/servicios" className="text-primary hover:underline">Volver a servicios</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow flex flex-col items-center w-full">
                <section className="w-full max-w-7xl px-4 sm:px-8 py-12">
                    <Link href="/servicios" className="mb-6 flex items-center gap-2 text-text-muted hover:text-primary transition-colors w-fit">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        <span className="text-sm font-bold">Volver a Servicios</span>
                    </Link>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-3xl overflow-hidden shadow-2xl border border-white/50 dark:border-white/5 animate-in fade-in">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] group">
                                <img alt={service.title} className="absolute inset-0 w-full h-full object-cover" src={service.img} />
                            </div>
                            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                                <h2 className="font-serif text-4xl lg:text-5xl text-text-main dark:text-white mb-4 leading-tight">{service.title}</h2>
                                <div className="flex items-baseline gap-4 mb-8">
                                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                                </div>
                                <div className="space-y-6 mb-10">
                                    <p className="text-text-muted dark:text-gray-300 leading-relaxed text-lg">{service.desc}</p>
                                    <ul className="space-y-3">
                                        <li className="flex items-center gap-3 text-text-main dark:text-gray-200">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            <span>Profesionales certificados</span>
                                        </li>
                                        <li className="flex items-center gap-3 text-text-main dark:text-gray-200">
                                            <span className="material-symbols-outlined text-primary">check_circle</span>
                                            <span>Productos de alta gama</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="flex-1 bg-primary hover:bg-primary-dark text-white dark:text-background-dark font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-3">
                                        Agendar por WhatsApp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}
