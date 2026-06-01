import React, { useEffect, useState, useRef } from 'react';
import { Cpu, Menu, X, ArrowRight, BarChart, Shield, Zap, Network, Brain, CheckCircle, Radio, Settings, FileText, Building, Sun } from 'lucide-react';
import { ServiceDetailPage } from './ServiceDetailPage';

// --- Components ---

const Particles = () => {
  const [particles, setParticles] = useState<Array<{ id: number, left: string, top: string, delay: string, duration: string, size: string }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${15 + Math.random() * 10}s`,
      size: `${Math.random() * 4 + 2}px`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size
          }}
        />
      ))}
    </div>
  );
};

const Navbar = ({ setView, view }: { setView: (v: 'home' | 'contact' | 'quote' | 'service') => void, view: string }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'contacto') {
      setView('contact');
    } else {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: '¿Quiénes somos?', id: 'quienes-somos' },
    { label: 'Servicios y Especialidades', id: 'servicios' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${(scrolled || view !== 'home') ? 'bg-black/80 backdrop-blur-xl border-b border-primary-500/10 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.4)]' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('home')}>
          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full ring-2 ring-primary-500/50 overflow-hidden group-hover:scale-110 transition-transform duration-300">
            <img src="/anibal_lopez.png" alt="Ing. Héctor López CV" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary-500/10 group-hover:bg-transparent transition-colors"></div>
          </div>
          <span className="text-sm md:text-base font-semibold text-gray-200">Ing. Héctor Aníbal López</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.link/k5qs8e"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/25 border border-[#25D366]/30 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#25D366]" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.486a.75.75 0 0 0 .92.92l5.703-1.484A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.964-1.355l-.357-.213-3.706.965.984-3.62-.233-.373A9.75 9.75 0 1 1 12 21.75z" />
            </svg>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary-500 hover:after:w-full after:transition-all after:duration-300">
                {item.label}
              </button>
            ))}
            <button className="btn-primary text-sm py-2.5 px-6" onClick={() => setView('quote')}>
              Presupuesto
            </button>
          </div>

          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 pt-20">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-2xl font-bold text-gray-200 hover:text-primary-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button
            className="btn-primary mt-4"
            onClick={() => { setView('quote'); setMobileMenuOpen(false); }}
          >
            Presupuesto
          </button>

          <a
            href="https://wa.link/k5qs8e"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 font-medium"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-green-400" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.486a.75.75 0 0 0 .92.92l5.703-1.484A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.964-1.355l-.357-.213-3.706.965.984-3.62-.233-.373A9.75 9.75 0 1 1 12 21.75z" />
            </svg>
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

const ServiceCard = ({ title, description, imageSrc, tags, icon: Icon, className = "" }: { title: string, description: string, imageSrc: string, tags: string[], icon: any, className?: string }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`service-card-flip reveal ${className} ${isFlipped ? 'is-flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="service-card-inner">
        {/* Front */}
        <div className="service-card-front">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          <div className="service-overlay">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-primary-500/20 backdrop-blur-md border border-primary-500/30">
                <Icon className="w-5 h-5 text-primary-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-xs text-primary-300 md:hidden font-medium uppercase tracking-wider">Toca para más info</p>
          </div>
        </div>
        {/* Back */}
        <div className="service-card-back glass-card">
          <div className="p-3 rounded-xl bg-primary-500/10 border border-primary-500/20 mb-4 inline-block flex-shrink-0">
            <Icon className="w-6 h-6 text-primary-400" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">{description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map(tag => (
              <span key={tag} className="text-[10px] md:text-xs font-medium uppercase tracking-wider px-3 py-1 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20">
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); setIsFlipped(false); }}
            className="mt-auto flex items-center gap-2 text-xs font-bold text-primary-400 md:hidden p-2 rounded-lg bg-white/5 border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a la imagen
          </button>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    params.append('formType', 'Contacto');
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });

    try {
      const response = await fetch('https://elemaxtoro.app.n8n.cloud/webhook/af94eb79-4d59-43de-a962-2eab473ac715', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
      });

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status}`);
      }
      alert('Mensaje enviado con éxito');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intente nuevamente.');
    }
  };

  return (
    <div className="pt-32 pb-20 max-w-6xl mx-auto px-6 min-h-screen relative z-10 reveal active">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Contacto y Ubicación</h2>
        <p className="text-gray-400">Posadas, Provincia de Misiones, Argentina.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="glass-card p-8 !rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Envíenos un Mensaje</h3>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">Nombre</label>
                <input name="nombre" type="text" required className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-primary-500 outline-none transition-colors" placeholder="Su nombre" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm text-gray-400">Teléfono</label>
                <input name="telefono" type="tel" required className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-primary-500 outline-none transition-colors" placeholder="Su número" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Email</label>
              <input name="email" type="email" required className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-primary-500 outline-none transition-colors" placeholder="Su email" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">¿Por qué se comunica?</label>
              <textarea name="motivo" required className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-primary-500 outline-none transition-colors h-32 resize-none" placeholder="Breve reseña..."></textarea>
            </div>
            <button type="submit" className="btn-primary mt-4 py-4 text-lg w-full">Enviar Mensaje</button>
          </form>
        </div>

        <div className="glass-card p-10 !rounded-2xl h-full min-h-[400px] flex flex-col items-center justify-center text-center border border-primary-500/20 bg-primary-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-600/10 rounded-full blur-[60px] pointer-events-none"></div>
          {/* Animated checkmark */}
          <div className="relative mb-8 flex items-center justify-center w-24 h-24 rounded-full bg-primary-500/15 border border-primary-500/30">
            <svg viewBox="0 0 24 24" className="w-12 h-12 text-primary-400" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-white mb-4">¡Escríbanos sin compromiso!</h3>
          <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
            Complete el formulario y recibiremos su mensaje. Le responderemos a la brevedad posible.
          </p>
          <div className="mt-8 flex items-center gap-2 text-sm text-primary-400 font-medium">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
            </span>
            Equipo del Ing. Héctor Aníbal López
          </div>
        </div>
      </div>
    </div>
  );
};

const QuotePage = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    params.append('formType', 'Presupuesto');

    const fileInput = e.currentTarget.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      params.append('archivos_adjuntos', Array.from(fileInput.files).map(f => f.name).join(', '));
    }

    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        params.append(key, value);
      }
    });

    try {
      const response = await fetch('https://elemaxtoro.app.n8n.cloud/webhook/af94eb79-4d59-43de-a962-2eab473ac715', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params
      });

      if (!response.ok) {
        throw new Error(`Error del servidor: ${response.status}`);
      }
      alert('Solicitud de cotización enviada con éxito');
      e.currentTarget.reset();
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      alert('Hubo un error al enviar la solicitud. Por favor intente nuevamente.');
    }
  };

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 min-h-screen relative z-10 reveal active">
      <h2 className="text-4xl font-bold mb-8 text-center text-white">Solicitar Presupuesto</h2>
      <div className="glass-card p-8 !rounded-2xl">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Nombre / Empresa</label>
              <input name="nombre" type="text" required className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-primary-500 outline-none transition-colors" placeholder="Nombre completo o razón social" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Teléfono</label>
              <input name="telefono" type="tel" required className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-primary-500 outline-none transition-colors" placeholder="Número de contacto" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Email</label>
            <input name="email" type="email" required className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-primary-500 outline-none transition-colors" placeholder="Correo electrónico" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-400">Detalles del Proyecto / Cotización</label>
            <textarea name="motivo" required className="bg-white/5 border border-white/10 rounded-xl p-3 text-white focus:border-primary-500 outline-none transition-colors h-48 resize-none" placeholder="Describa con el mayor detalle posible el proyecto, alcances, y necesidades..."></textarea>
          </div>

          <button type="submit" className="btn-primary mt-4 py-4 text-lg w-full">Solicitar Cotización</button>
        </form>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<'home' | 'contact' | 'quote' | 'service'>('home');
  const [activeService, setActiveService] = useState<string>('');

  const handleOpenService = (id: string) => {
    setActiveService(id);
    setView('service');
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [view]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-primary-500/30 flex flex-col">
      <Navbar view={view} setView={setView} />

      <div className="flex-grow">
        {view === 'contact' && <ContactPage />}
        {view === 'quote' && <QuotePage />}
        {view === 'service' && <ServiceDetailPage serviceId={activeService} onBack={() => { setView('home'); setTimeout(() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' }), 100); }} setView={setView as any} />}

        {view === 'home' && (
          <main>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 overflow-hidden">
              <Particles />

              {/* Background Gradient */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[600px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none"></div>

              <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="text-left">
                  <h1 className="text-[2rem] md:text-[4.25rem] font-extrabold mt-16 md:mt-16 tracking-tight leading-[1.1] mb-6 reveal">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 glow-text">
                      Ingeniería en Telecomunicaciones y Control
                    </span>
                  </h1>

                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6 reveal" style={{ transitionDelay: '100ms' }}>
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                    </span>
                    Soluciones Integrales y Certificadas
                  </div>

                  <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed reveal" style={{ transitionDelay: '200ms' }}>
                    Diseño, planificación, dirección y auditoría en telecomunicaciones, seguridad electrónica, radiodifusión y automatización industrial.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 reveal" style={{ transitionDelay: '300ms' }}>
                    <button
                      className="btn-primary flex items-center gap-2 text-lg"
                      onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Ver Servicios <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="relative hidden lg:flex justify-center items-center reveal" style={{ transitionDelay: '400ms' }}>
                  <div className="relative w-[425px] h-[425px] animate-float">
                    {/* 3D Sphere / Hero Visual representation */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-900/40 to-primary-500/20 border border-primary-500/30 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,0.3)] flex items-center justify-center overflow-hidden">
                      <img
                        src="/logo_anibal.png"
                        alt="Logo Aníbal"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Social Proof */}
            <section className="py-12 border-y border-white/5 bg-white/[0.02]">
              <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-8 reveal">Soporte técnico y legal garantizado para su industria</p>
                <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 reveal">
                  {/* Placeholder Logos */}
                  {['Consorcios', 'Industrias', 'Comercios', 'Radiodifusión', 'Instituciones'].map((company, i) => (
                    <div key={i} className="flex items-center gap-2 font-bold text-xl text-white">
                      <div className="w-8 h-8 rounded bg-white/20"></div>
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quiénes Somos Section */}
            <section id="quienes-somos" className="py-16 md:py-32 relative border-b border-white/5 bg-gradient-to-b from-[#000000] to-[#0a0a0a]">
              <div className="max-w-7xl mx-auto px-6">
                {/* Título Principal */}
                <div className="text-center mb-20 reveal">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovación Tecnológica con Sello <span className="text-primary-400">Misionero</span> y Respaldo Académico</h2>
                </div>

                {/* Esencia y Valor Agregado */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24 reveal">
                  <div>
                    <h3 className="text-3xl font-semibold mb-6 text-white">Nuestra Esencia</h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      Somos un equipo multidisciplinario de expertos liderado por el <strong className="text-white">Ingeniero Héctor Aníbal López</strong>, egresado de la Universidad Nacional de La Plata (UNLP). Desde el corazón de la tierra colorada de Misiones, unimos la rigurosidad de la ingeniería tradicional con las tecnologías más disruptivas del mercado para ofrecer soluciones integrales a industrias, empresas, comercios y hogares.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      Nuestra filosofía se basa en cubrir el ciclo completo de cada desafío: desde el diseño y la planificación, hasta la dirección, instalación, configuración y mantenimiento técnico preventivo o correctivo. No solo instalamos tecnología; proyectamos el crecimiento seguro de nuestros clientes.
                    </p>
                  </div>

                  <div className="glass-card p-10 border border-primary-500/20 bg-primary-500/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-[60px]"></div>
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                      <FileText className="text-primary-400 w-8 h-8" /> El Valor Agregado
                    </h3>
                    <p className="text-gray-300 mb-8 italic">"A diferencia de los servicios técnicos convencionales, nuestro equipo cuenta con la habilitación legal para otorgar las máximas garantías del sector."</p>
                    <ul className="space-y-6">
                      <li className="flex items-start gap-4">
                        <CheckCircle className="text-primary-500 w-6 h-6 mt-1 shrink-0" />
                        <div>
                          <strong className="text-white text-lg block mb-1">Validación y Peritajes</strong>
                          <span className="text-gray-400">Emitimos informes técnicos y tasaciones oficiales.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="text-primary-500 w-6 h-6 mt-1 shrink-0" />
                        <div>
                          <strong className="text-white text-lg block mb-1">Certificación de Redes y Sistemas</strong>
                          <span className="text-gray-400">Firmas aprobatorias y auditorías de Higiene y Seguridad exigidas por organismos reguladores.</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <CheckCircle className="text-primary-500 w-6 h-6 mt-1 shrink-0" />
                        <div>
                          <strong className="text-white text-lg block mb-1">Responsabilidad Civil y Técnica</strong>
                          <span className="text-gray-400">Dirección legal de obras tecnológicas de gran envergadura.</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Pilares de Servicios */}
                <div className="text-center mb-16 reveal">
                  <h3 className="text-3xl font-bold mb-6">Nuestros Pilares de Servicios</h3>
                  <p className="text-gray-400 max-w-2xl mx-auto text-lg">Para reflejar que somos varios especialistas, dividimos nuestro alcance en cuatro grandes áreas de competencia.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
                  <div className="glass-card flex flex-col items-center text-center p-8 border-t-[3px] border-t-yellow-500 hover:-translate-y-2 transition-transform duration-300 relative z-20">
                    <div className="w-20 h-20 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6">
                      <Zap className="w-10 h-10 text-yellow-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">Electricidad Profesional</h4>
                    <p className="text-gray-400 leading-relaxed">Diseño, montaje y adecuación de tableros eléctricos, sistemas de potencia y cableados estructurados bajo normas de seguridad.</p>
                  </div>
                  <div className="glass-card flex flex-col items-center text-center p-8 border-t-[3px] border-t-blue-500 hover:-translate-y-2 transition-transform duration-300 relative z-20">
                    <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                      <Network className="w-10 h-10 text-blue-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">Telecomunicaciones y Redes</h4>
                    <p className="text-gray-400 leading-relaxed">Especialistas en tendido e infraestructura de fibra óptica, redes UTP, enlaces Wi-Fi, procesamiento de señales y radiodifusión.</p>
                  </div>
                  <div className="glass-card flex flex-col items-center text-center p-8 border-t-[3px] border-t-purple-500 hover:-translate-y-2 transition-transform duration-300 relative z-20">
                    <div className="w-20 h-20 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
                      <Brain className="w-10 h-10 text-purple-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">Automatización e IA</h4>
                    <p className="text-gray-400 leading-relaxed">Sistemas de control automatizados, integración de Inteligencia Artificial para optimización de procesos y diseño del entorno.</p>
                  </div>
                  <div className="glass-card flex flex-col items-center text-center p-8 border-t-[3px] border-t-red-500 hover:-translate-y-2 transition-transform duration-300 relative z-20">
                    <div className="w-20 h-20 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                      <Shield className="w-10 h-10 text-red-500" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">Seguridad Electrónica</h4>
                    <p className="text-gray-400 leading-relaxed">Auditoría e instalación avanzada de videovigilancia con analíticas, centrales de incendios homologadas y seguridad integral.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Services / Features */}
            <section id="servicios" className="py-16 md:py-32 relative">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 reveal">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Áreas de Especialización y <span className="text-primary-400">Servicios</span></h2>
                  <p className="text-gray-400 max-w-2xl mx-auto text-lg">Brindamos soluciones de alta fialibidad desde el diseño de factibilidad y montaje, hasta la puesta en marcha, auditoría y mantenimiento preventivo.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ServiceCard
                    title="Telecomunicaciones y Redes"
                    description="Diseño, planificación, tendido y procesamiento de señales de voz, datos y video interconectando su infraestructura corporativa o residencial."
                    imageSrc="/telecom_redes.png"
                    tags={['Fibra Óptica', 'Redes UTP', 'Wi-Fi']}
                    icon={Network}
                  />
                  <ServiceCard
                    title="Seguridad Electrónica"
                    description="Auditoría, diseño, instalación y mantenimiento de sistemas de protección edilicia, control de acceso y videovigilancia integral."
                    imageSrc="/seg_electronica.png"
                    tags={['CCTV y Analíticas', 'Centrales de Incendios', 'Sistemas de Protección']}
                    icon={Shield}
                  />
                  <ServiceCard
                    title="Radiodifusión y TV"
                    description="Diseño, montaje y mantenimiento optimizado de plantas transmisoras y enlaces de estudio a planta (STLs)."
                    imageSrc="/radio_tv.png"
                    tags={['Sistemas Irradiantes', 'Radio FM/AM', 'TDT y TV Digital']}
                    icon={Radio}
                  />
                  <ServiceCard
                    title="Automatización y Control"
                    description="Diseño e implementación de sistemas automáticos de procesos interconectados, instrumentación y control avanzado de maquinaria."
                    imageSrc="/automatizacion.png"
                    tags={['Redes Industriales', 'Control', 'Potencia Electrónica']}
                    icon={Settings}
                  />
                  <ServiceCard
                    title="Electricidad Industrial y Residencial"
                    description="Ejecución, auditoría y mantenimiento de tableros eléctricos, proyectos de baja y media tensión para el sector industrial, comercial y residencial."
                    imageSrc="/electricidad.png"
                    tags={['Tableros Industriales', 'Baja/Media Tensión', 'Mantenimiento']}
                    icon={Zap}
                  />
                  <ServiceCard
                    title="Respaldo Legal e Incumbencias"
                    description="Emisión de informes técnicos, peritajes, tasaciones y certificación legal de redes y sistemas electrónicos con responsabilidad profesional."
                    imageSrc="/certificacion_legal.png"
                    tags={['Informes Técnicos', 'Peritajes', 'Certificación Local']}
                    icon={FileText}
                  />
                  <ServiceCard
                    title="Higiene y Dirección de Obra"
                    description="Proyección, dirección y auditoría según normas vigentes en instalaciones electrónicas con firma aprobatoria ante organismos reguladores."
                    imageSrc="/higiene_obra.png"
                    tags={['Dirección Técnica', 'Auditoría Legal', 'Puesta en Marcha']}
                    icon={Building}
                  />
                  <ServiceCard
                    title="Instalación de Paneles Solares"
                    description="Diseño, cálculo e instalación de sistemas de energía solar fotovoltaica para industrias, comercios y hogares, optimizando el consumo energético."
                    imageSrc="/paneles_solares.png"
                    tags={['Energía Renovable', 'Fotovoltaica', 'Eficiencia']}
                    icon={Sun}
                  />
                </div>
              </div>
            </section>

            {/* Fases del Servicio */}
            <section className="py-16 md:py-32">
              <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 reveal">Ciclo de Gestión del <span className="text-primary-400">Proyecto</span></h2>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      quote: "Elaboración de planos, cálculos de enlace rigurosos, viabilidad técnica y presupuesto base de la obra e instalación.",
                      author: "Fase 1",
                      role: "Estudio de Factibilidad y Diseño",
                      seed: "blueprint-design"
                    },
                    {
                      quote: "Implementación con montaje seguro, liderazgo técnico de los equipos de trabajo e instalación bajo normas de seguridad vigentes.",
                      author: "Fase 2",
                      role: "Dirección y Construcción",
                      seed: "construction-site"
                    },
                    {
                      quote: "Mediciones técnicas, calibración de equipos, mantenimiento preventivo y correctivo finalizando con la firma de conformidad.",
                      author: "Fase 3",
                      role: "Ensayos, Auditoría y Puesta en Marcha",
                      seed: "industrial-testing"
                    }
                  ].map((testimonial, i) => (
                    <div key={i} className="glass-card reveal flex flex-col h-full" style={{ transitionDelay: `${i * 100}ms` }}>
                      <div className="flex gap-1 mb-6">
                        {/* Indicators instead of stars */}
                        <div className="h-1 w-8 bg-primary-500 rounded-full"></div>
                        <div className="h-1 w-8 bg-primary-500/30 rounded-full"></div>
                        <div className="h-1 w-8 bg-primary-500/10 rounded-full"></div>
                      </div>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed flex-grow">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4 mt-auto">
                        <img
                          src={`https://picsum.photos/seed/${testimonial.seed}/100/100`}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full border-2 border-primary-500/30"
                          referrerPolicy="no-referrer"
                        />
                        <div>
                          <h4 className="font-bold text-white">{testimonial.role}</h4>
                          <p className="text-sm text-gray-400">{testimonial.author}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 md:py-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-primary-600/20 blur-[100px] rounded-full max-w-4xl mx-auto"></div>
              <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
                <h2 className="text-5xl md:text-7xl font-bold mb-8">¿Busca una solución técnica respaldada?</h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Confíe en la experiencia y certificación legal para garantizar la eficiencia de la infraestructura tecnológica de su empresa.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button className="btn-primary animate-pulse-glow text-lg px-10 py-5 w-full sm:w-auto" onClick={() => setView('quote')}>
                    Solicitar Presupuesto
                  </button>
                </div>
                <p className="mt-6 text-sm text-gray-500">Ingeniero Héctor Aníbal López. Matrícula profesional validada.</p>
              </div>
            </section>
          </main>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#050505] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="w-8 h-8 text-primary-500" />
                <span className="text-xl font-bold">Ing. Héctor López</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">Soluciones integrales y certificadas en telecomunicaciones, automatización, seguridad electrónica, radiodifusión y control industrial.</p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-colors cursor-pointer">in</div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-colors cursor-pointer">@</div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-500/20 hover:text-primary-400 transition-colors cursor-pointer">W</div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Servicios</h4>
              <ul className="space-y-4 text-gray-400">
                <li><button onClick={() => handleOpenService('telecomunicaciones')} className="hover:text-primary-400 transition-colors w-full text-left">Telecomunicaciones</button></li>
                <li><button onClick={() => handleOpenService('seguridad_electronica')} className="hover:text-primary-400 transition-colors w-full text-left">Seguridad Electrónica</button></li>
                <li><button onClick={() => handleOpenService('radiodifusion')} className="hover:text-primary-400 transition-colors w-full text-left">Radiodifusión y TV</button></li>
                <li><button onClick={() => handleOpenService('automatizacion')} className="hover:text-primary-400 transition-colors w-full text-left">Automatización y Control</button></li>
                <li><button onClick={() => handleOpenService('electricidad')} className="hover:text-primary-400 transition-colors w-full text-left">Electricidad y Tableros</button></li>
                <li><button onClick={() => handleOpenService('paneles_solares')} className="hover:text-primary-400 transition-colors w-full text-left">Paneles Solares</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Auditorías</h4>
              <ul className="space-y-4 text-gray-400">
                <li><button onClick={() => handleOpenService('informes_tecnicos')} className="hover:text-primary-400 transition-colors w-full text-left">Informes Técnicos</button></li>
                <li><button onClick={() => handleOpenService('peritajes')} className="hover:text-primary-400 transition-colors w-full text-left">Peritajes y Tasaciones</button></li>
                <li><button onClick={() => handleOpenService('normativas')} className="hover:text-primary-400 transition-colors w-full text-left">Normativas y Certificaciones</button></li>
                <li><button onClick={() => handleOpenService('direccion_tecnica')} className="hover:text-primary-400 transition-colors w-full text-left">Dirección Técnica</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contacto</h4>
              <ul className="space-y-4 text-gray-400">
                <li><button onClick={() => setView('contact')} className="hover:text-primary-400 transition-colors cursor-pointer">Consultas</button></li>
                <li><button onClick={() => setView('contact')} className="hover:text-primary-400 transition-colors cursor-pointer">Formulario</button></li>
                <li><button onClick={() => setView('contact')} className="hover:text-primary-400 transition-colors cursor-pointer">Teléfonos</button></li>
                <li><button onClick={() => setView('contact')} className="hover:text-primary-400 transition-colors cursor-pointer">Ubicación</button></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Ing. Héctor Aníbal López. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Políticas y Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Asuntos Legales</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button for Mobile */}
      <a
        href="https://wa.link/k5qs8e"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-green-500/30 animate-bounce transition-transform hover:scale-110 active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.486a.75.75 0 0 0 .92.92l5.703-1.484A11.953 11.953 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.964-1.355l-.357-.213-3.706.965.984-3.62-.233-.373A9.75 9.75 0 1 1 12 21.75z" />
        </svg>
      </a>
    </div>
  );
}
