"use client";
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
    return (
        <div className="flex min-h-screen w-full flex-col overflow-x-hidden">
            <Header />
            <main className="flex flex-col flex-1">
                <section className="px-4 py-8 md:px-10 md:py-16 lg:px-20 bg-background-light">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
                            <div className="flex flex-col gap-6 lg:w-1/2">
                                <div className="flex flex-col gap-4 text-left">
                                    <span className="text-primary font-bold tracking-widest uppercase text-xs">Ponte en contacto</span>
                                    <h1 className="text-[#181611] text-4xl font-serif font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                                        Estamos aquí para <br /> <span className="text-primary/90 italic">resaltar tu belleza</span>
                                    </h1>
                                    <p className="text-text-soft text-lg font-normal leading-relaxed max-w-[500px]">
                                        Agenda tu cita, resuelve tus dudas o visítanos en nuestro estudio. Tu experiencia de relajación comienza aquí.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-4 pt-2">
                                    <button className="flex items-center justify-center rounded-full h-12 px-8 bg-primary text-[#181611] text-base font-bold shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-300">
                                        <span className="mr-2 material-symbols-outlined text-xl">calendar_month</span>
                                        <span>Agendar Cita</span>
                                    </button>
                                    <Link href="/servicios">
                                        <button className="flex items-center justify-center rounded-full h-12 px-8 bg-white border border-[#e6e3db] text-[#181611] text-base font-bold hover:bg-[#fcfbf8] transition-colors">
                                            <span>Ver Servicios</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full mt-6 lg:mt-0 flex justify-center">
                                <div className="relative w-full aspect-[4/3] max-w-[550px] rounded-2xl overflow-hidden shadow-2xl group flex items-center justify-center bg-gradient-to-br from-[#d4af37] via-[#f3e5ab] to-[#8a7f60]">
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-80 mix-blend-overlay"></div>
                                    <img alt="Solare Studio Logo Golden" className="relative z-10 w-3/4 object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv1SRTP9zDvIb-ndCYT9UZLOgImG6JGkahN5VtPxs3ssWGszHnOjKodts4XxwDITpPnAj0Mx0GCERcZ6gVheiLaoXMeE6NKrSKY0NtsEdvn3X7iOKOhKEwnXkT-uVuE9LN-TRE1F90xSSAOnCS3Zhkb709P-CRA2sOVmOWp0nqiQ_u10U7doHoMRPul1eo8ysmZIDpRTO1SLXg7pNJ7dC_JfbxGATk6y_-UQM5X7QXbHy8AH4tQaxX1dq5DW9cyjaCjKJvR5MpC9s" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12 px-4 md:px-10 lg:px-20 border-y border-[#f0eee6]">
                    <div className="mx-auto max-w-[960px] text-center">
                        <div className="flex flex-col items-center gap-6">
                            <div className="p-3 bg-[#25D366]/10 rounded-full inline-flex items-center justify-center text-[#25D366] mb-2">
                                <span className="material-symbols-outlined text-4xl">chat</span>
                            </div>
                            <h2 className="text-[#181611] text-3xl md:text-4xl font-serif font-bold leading-tight">
                                Hablemos por WhatsApp
                            </h2>
                            <p className="text-text-soft text-base md:text-lg max-w-[600px] mx-auto">
                                Respuesta inmediata en horario laboral. Agenda tu servicio con un solo clic usando nuestro mensaje prearmado.
                            </p>
                            <button className="w-full max-w-[480px] flex cursor-pointer items-center justify-center rounded-xl h-14 px-6 bg-[#25D366] text-white text-base font-bold shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1">
                                <span className="truncate">Enviar Mensaje (Hola, quiero agendar ✨)</span>
                            </button>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-16 md:px-10 lg:px-20 bg-background-light">
                    <div className="mx-auto max-w-[1200px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-3">
                                    <h2 className="text-[#181611] text-3xl font-serif font-bold">Información del Estudio</h2>
                                    <p className="text-text-soft text-base">Encuéntranos en nuestros horarios de atención o contáctanos directamente.</p>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { icon: "schedule", title: "Horarios de Atención", content: "Lunes a Viernes: 9:00 - 19:00\nSábados: 10:00 - 14:00", extra: "Domingos Cerrado" },
                                        { icon: "location_on", title: "Ubicación", content: "Av. Principal de la Ciudad 123\nEdificio Solare, Piso 2." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-5 rounded-2xl border border-[#e6e3db] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="text-primary bg-primary/10 p-3 rounded-full flex items-center justify-center shrink-0">
                                                <span className="material-symbols-outlined">{item.icon}</span>
                                            </div>
                                            <div className="flex flex-col gap-1">
                                                <h3 className="text-[#181611] text-lg font-bold font-serif">{item.title}</h3>
                                                <p className="text-text-soft text-sm leading-relaxed whitespace-pre-line">
                                                    {item.content}
                                                    {item.extra && <br />}
                                                    {item.extra && <span className="text-primary text-xs font-bold uppercase tracking-wide">{item.extra}</span>}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 bg-white p-8 rounded-2xl border border-[#e6e3db] shadow-lg h-fit">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#181611] text-2xl font-serif font-bold">Envíanos un mensaje</h3>
                                    <p className="text-text-soft text-sm">¿Prefieres el correo? Llena este formulario breve.</p>
                                </div>
                                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#181611] text-sm font-bold">Nombre Completo</label>
                                        <input className="h-12 w-full rounded-lg border border-[#e6e3db] bg-[#f8f8f6] px-4 text-sm text-[#181611] placeholder:text-[#897f61] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="Ej. María Pérez" type="text" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#181611] text-sm font-bold">Correo Electrónico</label>
                                        <input className="h-12 w-full rounded-lg border border-[#e6e3db] bg-[#f8f8f6] px-4 text-sm text-[#181611] placeholder:text-[#897f61] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all" placeholder="tucorreo@ejemplo.com" type="email" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#181611] text-sm font-bold">Mensaje</label>
                                        <textarea className="w-full rounded-lg border border-[#e6e3db] bg-[#f8f8f6] p-4 text-sm text-[#181611] placeholder:text-[#897f61] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="¿En qué podemos ayudarte?" rows={4}></textarea>
                                    </div>
                                    <button className="mt-2 flex items-center justify-center rounded-lg h-12 w-full bg-[#181611] text-white text-sm font-bold hover:bg-[#333] transition-colors" type="button">
                                        Enviar Mensaje
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
