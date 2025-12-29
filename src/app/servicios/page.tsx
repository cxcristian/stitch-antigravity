"use client";
import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { client } from '@/sanity/client';

// Mock data fallback
const MOCK_SERVICES = [
    { id: 1, title: "Corte y Styling", price: "$45", descripcion: "Asesoramiento personalizado, lavado relajante y corte de precisión.", slug: { current: 'corte-y-styling' }, imagen: null },
    { id: 2, title: "Manicura Spa", price: "$30", descripcion: "Tratamiento completo para manos con exfoliación.", slug: { current: 'manicura-spa' }, imagen: null },
    { id: 3, title: "Facial Glow", price: "$85", descripcion: "Limpieza profunda y mascarilla de oro.", slug: { current: 'facial-glow' }, imagen: null },
];

export default function ServicesPage() {
    const [services, setServices] = useState<any[]>(MOCK_SERVICES);

    useEffect(() => {
        const query = `*[_type == "servicio"]{
            ...,
            "categoria": categoria
        }`;
        client.fetch(query).then(data => {
            if (data && data.length > 0) {
                setServices(data);
            }
        });
    }, []);

    const [activeTab, setActiveTab] = useState("Todos");

    const filteredServices = services.filter(service =>
        activeTab === "Todos" ? true : service.categoria === activeTab
    );

    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
            <Header />
            <main className="flex-grow flex flex-col items-center w-full">
                <section className="w-full max-w-7xl px-4 sm:px-8 py-12">
                    <div className="flex flex-col items-center text-center gap-4 mb-10">
                        <span className="text-primary font-bold tracking-wider text-xs uppercase">Bienestar & Belleza</span>
                        <h1 className="font-serif text-4xl md:text-5xl font-medium text-text-main dark:text-white leading-tight">
                            Nuestros Servicios Exclusivos
                        </h1>
                        <p className="text-text-soft dark:text-gray-300 max-w-2xl font-light text-lg">
                            Descubre el arte del cuidado personal con nuestra selección de tratamientos premium diseñados para resaltar tu belleza natural.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-hide">
                        <div className="flex gap-2 p-1 bg-surface-light dark:bg-surface-dark rounded-full border border-gray-100 dark:border-gray-800 shadow-sm">
                            {["Todos", "Uñas", "Faciales", "Masajes"].map((tab, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === tab ? 'bg-primary text-white shadow-md' : 'text-text-main dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {filteredServices.map(service => (
                            <ServiceCard key={service.id || service._id} service={service} />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
