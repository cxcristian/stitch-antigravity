import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-dark dark:text-white font-display antialiased overflow-x-hidden">
      <Header transparent={true} />

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center justify-center overflow-hidden" id="inicio">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-10"></div>
          <div className="w-full h-full bg-cover bg-center bg-no-repeat scale-105 animate-[pulse_10s_ease-in-out_infinite]" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSTlWie2FtVbd2pekp18BpxOkOAmHW7w3Wjzvrwfw4vAO-4NT12zv5vKLYPc4A5Pi_DSJppXf9DgeNlTO51mp5EouATvs_fvhFnlkYiTrx-JGJwC_pkyA0HLWseRShOgoDVj4VHsDJB1CzwVH_Zt4BqwANrW5hYYviiGyeGL4UMhuJcUL1jhhRwXxoZR4XocedtOjpk1TxU530wAzWFShwkALsh1lGMp2_uqm-faDniM3HcxptdG9TLMp54xLiI7LpRnPSHcKsEpY')" }}>
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-4xl fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 opacity-90">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="uppercase tracking-[0.2em] text-sm font-medium">Estudio de Belleza</span>
            <span className="w-12 h-[1px] bg-primary"></span>
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-bold leading-tight mb-4 tracking-tight drop-shadow-sm">
            SOLARE
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-10 text-white/90 tracking-wide font-display">
            Belleza • Maquillaje • Nail Art
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contacto">
              <button className="min-w-[240px] bg-primary hover:bg-[#d9a60e] text-white dark:text-background-dark text-base font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
                <span>Reservar por WhatsApp</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform text-lg">arrow_forward</span>
              </button>
            </Link>
            <Link href="/servicios">
              <button className="min-w-[240px] bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                Ver Servicios
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <span className="material-symbols-outlined text-white/70 text-3xl">keyboard_arrow_down</span>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <span className="text-primary text-sm font-bold tracking-[0.15em] uppercase block mb-3">Bienvenidos a Solare</span>
          <h2 className="text-text-dark dark:text-white font-serif text-3xl md:text-4xl font-medium leading-tight mb-6">
            Descubre tu brillo interior
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-text-soft dark:text-gray-300 text-lg leading-relaxed font-light">
            Un espacio exclusivo donde la belleza se encuentra con el arte. Disfruta de una experiencia cálida y premium diseñada para resaltar tu mejor versión. En Solare, cada detalle está pensado para ofrecerte un momento de relajación y transformación.
          </p>
        </div>
      </section>

      {/* Services Section Preview */}
      <section className="py-24 bg-background-cream dark:bg-[#2a2415]" id="servicios">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-text-dark dark:text-white font-serif text-3xl md:text-4xl font-medium mb-4">¿Qué ofrecemos?</h2>
            <p className="text-text-soft dark:text-gray-400">Tratamientos exclusivos para cuidar de ti</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "brush", title: "Maquillaje Social", text: "Realza tus facciones con técnicas profesionales para eventos de día o noche. Acabados naturales y duraderos." },
              { icon: "spa", title: "Nail Art Premium", text: "Diseños exclusivos y cuidado profundo para tus manos. Utilizamos esmaltes de alta gama y técnicas de vanguardia.", badge: "Popular" },
              { icon: "auto_awesome", title: "Styling de Cejas", text: "Diseño y perfilado personalizado según la morfología de tu rostro. Laminado y tinte para una mirada impactante." }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-background-dark p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-[#f0eee6] dark:border-white/5 relative overflow-hidden">
                {/* @ts-ignore */}
                {service.badge && <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">{service.badge}</div>}
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-text-dark dark:text-white mb-3">{service.title}</h3>
                <p className="text-text-soft dark:text-gray-400 leading-relaxed mb-6">{service.text}</p>
                <Link href="/servicios" className="inline-flex items-center text-primary font-bold text-sm tracking-wide uppercase hover:underline">
                  Ver más <span className="material-symbols-outlined text-base ml-1">chevron_right</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-24 bg-white dark:bg-background-dark" id="galeria">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-text-dark dark:text-white font-serif text-3xl md:text-4xl font-medium mb-2">Nuestro Trabajo</h2>
              <p className="text-text-soft dark:text-gray-400">Una mirada a nuestros resultados recientes</p>
            </div>
            <Link href="/portafolio" className="hidden md:inline-flex items-center gap-2 text-text-dark dark:text-white font-medium hover:text-primary transition-colors">
              Ver galería completa <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {/* Sample Images */}
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB92r11-co_25aU0QgmP2l5X8e6eXLHSCG_ifLMnk19bLfV-OxATVNcpCX4-hAwCo3kTIEkiiOMEDGE0EoGdmlTUMOi9STfxlMPZjlOnnQhb7iwWdYP2wHawzzEjL35VYZSbamDbM9YNeucsf3YavC9814uhEx76pDBfYLy1gLTgVwZgtlNoAPvLa21lYu4SWWteQz2_G7fNx2_1OVZof2zRghQ5_UDBR-hDo31kZkC8_spf5ZPMe3Sx6WGYbuD4NXzUIkgvSAcVag')" }}></div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800 md:translate-y-8">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA66r96yNii_v4Na17T0Zz4JznznkS6Y6G0D11wjItLATxjvEnUjD-YZA-JoqgW7WMxlSFdwVfw_2pzUgdB_dvB4Xayt1GvquHpSBtdSB2Y6YQQjsu60-7bvh0PfgsXRSM72jMdP0zkGTHeGZVAPdKKvKz4VKn8Dj3UHU8owqv2atJMbwOj9LMItgdQpIM-pnB7WK_GN6oYgercxL5QKWRAddSsSuNuvXwtmubaz9zDZZLQaK0xTmFVeuXn_b-dQ8tuDhmzOiaeACY')" }}></div>
            </div>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCOUzr4n9dK-HZjJ-sFMeoMJSh31KhQCW5Y7xoYNuVckpXGo1i8CzKkzGpJsFftA3zXAZbSHv0eOK5jtEkea3ZjCCTlm1bVqu-j2y6DhO_cuYFtMH17k-sm4qDGPhwBWHi_xE_V6AWEJjdd6jFr-VSp72E9Z8K8PaK3GF2L5xSwQPIbwERmLLGbg601Cf3P9hQ9-bTzzR-BOCAeLY0mWnaVT0gOwKVwlY25-xu5nT8izgkeE4dHoEtkWAH_oqvrLab2mqJh5iHE_PE')" }}></div>
            </div>
          </div>
          <div className="mt-8 md:hidden text-center">
            <Link href="/portafolio" className="inline-flex items-center gap-2 text-text-dark dark:text-white font-medium hover:text-primary transition-colors">
              Ver galería completa <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
