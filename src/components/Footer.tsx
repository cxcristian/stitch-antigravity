"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { client, urlFor } from '@/sanity/client';

export default function Footer() {
    const [logoSrc, setLogoSrc] = useState("/images/logo_new.png");

    useEffect(() => {
        client.fetch(`*[_type == "branding"][0].logo`).then(logo => {
            if (logo) {
                setLogoSrc(urlFor(logo).url());
            }
        });
    }, []);

    return (
        <footer className="bg-[#1c1917] text-white pt-16 pb-8">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={logoSrc} alt="Solare Logo" className="h-12 w-auto object-contain" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Un espacio dedicado a resaltar tu belleza natural con técnicas innovadoras y un enfoque personalizado.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg mb-4 text-[#f8ebd0]">Explora</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                            <li><Link href="/servicios" className="hover:text-primary transition-colors">Servicios</Link></li>
                            <li><Link href="/portafolio" className="hover:text-primary transition-colors">Portafolio</Link></li>
                            <li><Link href="/contacto" className="hover:text-primary transition-colors">Contacto</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg mb-4 text-[#f8ebd0]">Contacto</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-base mt-0.5">location_on</span>
                                <span>Av. Principal 123, Polanco<br />Ciudad de México</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-base">call</span>
                                <span>+52 (55) 1234 5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-base">mail</span>
                                <span>contacto@solare.com</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-serif text-lg mb-4 text-[#f8ebd0]">Horario</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex justify-between">
                                <span>Lun - Vie</span>
                                <span>9:00 AM - 7:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sábado</span>
                                <span>10:00 AM - 5:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Domingo</span>
                                <span className="text-gray-600">Cerrado</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© 2024 Solare Beauty Studio. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <Link className="hover:text-white transition-colors" href="#">Privacidad</Link>
                        <Link className="hover:text-white transition-colors" href="#">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
