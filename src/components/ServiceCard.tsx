"use client";
import Link from 'next/link';
import { urlFor } from '@/sanity/client';

interface ServiceProps {
    slug: { current: string };
    titulo: string;
    descripcion: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imagen: any;
    precio: string;
}

export default function ServiceCard({ service }: { service: ServiceProps }) {
    // Fallback image if sanity image is missing or loading
    const imageSrc = service.imagen ? urlFor(service.imagen).width(600).height(800).url() : "https://via.placeholder.com/600x800";
    // const imageSrc = "https://via.placeholder.com/600x800"; // FORCE MOCK FOR BUILD PASS

    return (
        <div className="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-primary/20 flex flex-col h-full cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-300"></div>
                <img alt={service.titulo} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={imageSrc} />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded-full z-20 shadow-sm">
                    <span className="text-sm font-bold text-text-main dark:text-white">{service.precio}</span>
                </div>
            </div>
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-serif text-xl font-medium text-text-main dark:text-white mb-2 group-hover:text-primary transition-colors">{service.titulo}</h3>
                <p className="text-sm text-text-soft dark:text-gray-400 line-clamp-2 mb-4 flex-grow">
                    {service.descripcion}
                </p>
                <Link href={`/servicios/${service.slug.current}`} className="flex items-center text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-2 transition-all">
                    <span>Ver Detalles</span>
                    <span className="material-symbols-outlined text-lg ml-1">arrow_forward</span>
                </Link>
            </div>
        </div>
    );
}
