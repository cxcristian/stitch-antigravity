"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { client, urlFor } from '@/sanity/client';
import { useEffect, useState } from 'react';

const NavLink = ({ to, children, active }: { to: string, children: React.ReactNode, active: boolean }) => {
    const baseClass = "text-white hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider md:tracking-normal md:normal-case";
    const activeClass = "text-primary font-bold border-b-2 border-primary pb-0.5";
    const inactiveClass = "text-white hover:text-primary transition-colors opacity-90";

    return (
        <Link href={to} className={`${baseClass} ${active ? activeClass : inactiveClass}`}>
            {children}
        </Link>
    );
};

const Logo = ({ src }: { src: string }) => (
    <div className="flex items-center gap-3">
        <img src={src} alt="Solare Logo" className="h-12 w-auto object-contain" />
    </div>
);

export default function Header({ transparent = false }: { transparent?: boolean }) {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [logoSrc, setLogoSrc] = useState("/images/logo_new.png");

    useEffect(() => {
        client.fetch(`*[_type == "branding"][0].logo`).then(logo => {
            if (logo) {
                setLogoSrc(urlFor(logo).url());
            }
        });
    }, []);

    return (
        <>
            <header className={`sticky top-0 z-40 w-full ${transparent ? 'bg-white/90 dark:bg-background-dark/90' : 'bg-background-light/90 dark:bg-background-dark/90'} backdrop-blur-md border-b border-[#e7e5e0] dark:border-[#333]`}>
                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <Link href="/">
                            <Logo src={logoSrc} />
                        </Link>

                        <nav className="hidden md:flex items-center gap-8">
                            <NavLink to="/" active={pathname === '/'}>Inicio</NavLink>
                            <NavLink to="/servicios" active={pathname.startsWith('/servicios')}>Servicios</NavLink>
                            <NavLink to="/portafolio" active={pathname === '/portafolio'}>Portafolio</NavLink>
                            <NavLink to="/contacto" active={pathname === '/contacto'}>Contacto</NavLink>
                        </nav>

                        <div className="hidden md:flex">
                            <Link href="/contacto">
                                <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-primary text-white hover:bg-[#d9a60e] transition-colors shadow-lg shadow-primary/20 text-sm font-bold tracking-wide">
                                    Reservar Cita
                                </button>
                            </Link>
                        </div>

                        <div className="md:hidden text-text-main dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            <span className="material-symbols-outlined cursor-pointer text-3xl">menu</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-background-light dark:bg-background-dark p-8 md:hidden flex flex-col gap-6">
                    <div className="flex justify-between items-center mb-8">
                        <Logo src={logoSrc} />
                        <span className="material-symbols-outlined text-3xl cursor-pointer" onClick={() => setMobileMenuOpen(false)}>close</span>
                    </div>
                    <nav className="flex flex-col gap-6 text-xl">
                        <Link href="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
                        <Link href="/servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</Link>
                        <Link href="/portafolio" onClick={() => setMobileMenuOpen(false)}>Portafolio</Link>
                        <Link href="/contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</Link>
                    </nav>
                </div>
            )}
        </>
    );
}
