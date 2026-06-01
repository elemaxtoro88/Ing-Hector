import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface ServiceDetailProps {
    serviceId: string;
    onBack: () => void;
    setView: (v: 'contact' | 'quote') => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailProps> = ({ serviceId, onBack, setView }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [serviceId]);

    const servicesData: Record<string, any> = {
        'telecomunicaciones': {
            title: 'Telecomunicaciones',
            image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
            description: 'En un mundo hiperconectado, la infraestructura de telecomunicaciones es la columna vertebral de cualquier organización de éxito. Nuestros ingenieros diseñan, despliegan y optimizan redes de voz, datos y video que garantizan alta disponibilidad, escalabilidad y seguridad.',
            engineerRole: 'Como Ingenieros Electrónicos, evaluamos las necesidades de ancho de banda y latencia, seleccionamos la topología óptima y configuramos activamente el enrutamiento y procesamiento de las señales para garantizar un ecosistema de red libre de colisiones.',
            bullets: [
                'Tendido e infraestructura de Fibra Óptica (soplado, empalmes, mediciones).',
                'Diseño de redes LAN/WAN y cableado estructurado UTP/FTP.',
                'Sistemas de radioenlace y redes inalámbricas Wi-Fi unificadas.',
                'Procesamiento avanzado de señales para Voz sobre IP (VoIP).'
            ]
        },
        'seguridad_electronica': {
            title: 'Seguridad Electrónica',
            image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
            description: 'Proteja sus activos, personal y recintos con sistemas de seguridad electrónica de vanguardia. Vamos más allá de la instalación de cámaras, brindando inteligencia y control absoluto sobre los accesos y perímetros con equipos homologados de nivel industrial.',
            engineerRole: 'Aplicamos nuestro conocimiento en tecnologías de sensores, procesamiento de imágenes y protocolos de comunicación segura para integrar analíticas de IA que previenen incidentes, operando bajo redundancia energética.',
            bullets: [
                'Circuitos Cerrados de Televisión (CCTV) con videovigilancia IP y analíticas de comportamiento.',
                'Sistemas de control de acceso biométrico y vehicular.',
                'Centrales de alarmas para detección temprana de incendios bajo normativas NFPA.',
                'Sistemas de protección perimetral e integración domótica.'
            ]
        },
        'radiodifusion': {
            title: 'Radiodifusión y TV',
            image: '/radiodifusion_hero.png',
            description: 'Maximizamos el alcance y la fidelidad de sus transmisiones de Radio y TV. El rubro de radiodifusión requiere una precisión matemática extrema y equipamiento robusto que soporte las inclemencias del tiempo, manteniendo la calidad inalterable 24/7.',
            engineerRole: 'Un ingeniero electrónico dimensiona la ganancia y patrón de radiación de las antenas, calibra los transmisores para no desperdiciar energía en armónicos y sintoniza todo el sistema para evitar las reflexiones (ROE).',
            bullets: [
                'Sistemas irradiantes para radio FM/AM y TV Digital Terrestre (TDT).',
                'Enlaces de Estudio a Planta Transmisora (STLs).',
                'Mantenimiento optimizado, calibración y mediciones de potencia.',
                'Sistemas de energía ininterrumpida e infraestructura de torre segura.'
            ]
        },
        'automatizacion': {
            title: 'Automatización y Control',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
            description: 'Transforme su proceso productivo a través del control inteligente. La automatización elimina los errores humanos, agiliza los tiempos de respuesta y permite obtener métricas en tiempo real de su línea industrial o sistema corporativo.',
            engineerRole: 'Programamos Controladores Lógicos Programables (PLCs) y sistemas SCADA, diseñando algoritmos de control de lazo cerrado (PID) e integrando instrumentación como sensores y actuadores para dirigir mecanismos complejos con precisión.',
            bullets: [
                'Sistemas de control automatizados para procesos industriales continuos.',
                'Integración algorítmica para optimización de procesos y control.',
                'Control y monitoreo remoto a través de redes industriales (Modbus, Ethernet).',
                'Instrumentación electrónica: sensores, transmisores, variadores de frecuencia.'
            ]
        },
        'electricidad': {
            title: 'Electricidad y Tableros',
            image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80',
            description: 'El flujo de energía seguro y eficiente es el punto de partida para cualquier proyecto. Desde pequeñas viviendas hasta potentes instalaciones fabriles, garantizamos la distribución eléctrica sin sobrecargas, armónicos ni fallas térmicas.',
            engineerRole: 'Abarcamos el cálculo de la potencia de cortocircuito, dimensionamiento de protecciones, estudio del factor de potencia para evitar multas tarifarias y la correcta distribución de tableros eléctricos.',
            bullets: [
                'Diseño y montaje de tableros eléctricos TGBT y circuitos seccionales.',
                'Sistemas de baja y media tensión con cálculos certificados.',
                'Corrección de factor de potencia y estudios de calidad de red.',
                'Mantenimiento preventivo infrarrojo (termografía).'
            ]
        },
        'informes_tecnicos': {
            title: 'Informes Técnicos',
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
            description: 'La elaboración de un Informe Técnico profesional garantiza que usted cuenta con evidencia certificada sobre el estado actual, el funcionamiento y el cumplimiento legal de sus sistemas e infraestructura electrónica.',
            engineerRole: 'Nuestra firma como Ingenieros evalúa, testea y asienta por escrito las condiciones técnicas, validando metodologías científicas para que la constancia tenga peso legal ante auditorías internas y externas de la organización.',
            bullets: [
                'Auditoría y levantamiento de estados en instalaciones existentes.',
                'Emisión de reportes técnicos con firma de profesional matriculado.',
                'Análisis de fallas (Troubleshooting) y peritaje de funcionamiento.',
                'Recomendaciones firmadas para planes de actualización tecnológica.'
            ]
        },
        'peritajes': {
            title: 'Peritajes y Tasaciones',
            image: 'https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=1200&q=80',
            description: 'Brindamos servicio experto y objetivo en conflictos legales, aseguradoras o negociaciones corporativas para avalar el valor económico o la responsabilidad técnica de una falla electromecánica, incendio o siniestro electrónico.',
            engineerRole: 'El rol pericial de un Ingeniero comprende la cuantificación y valoración del material tecnológico, analizando la depreciación, obsolescencia, y emitiendo dictámenes oficiales ante tribunales de justicia (perito de parte o de oficio).',
            bullets: [
                'Peritaje de partes en siniestros, incendios y averías eléctricas.',
                'Tasaciones oficiales de infraestructura y activos tecnológicos.',
                'Acompañamiento en mediaciones y seguros industriales.',
                'Determinación de causas raíces en problemas de instalación o equipos.'
            ]
        },
        'normativas': {
            title: 'Normativas y Certificaciones',
            image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1200&q=80',
            description: 'El cumplimiento regulatorio protege a los empleados, al equipamiento y al entorno jurídico del negocio. Garantizamos que cada red estructurada, central de incendio y enlace cumpla o exceda las resoluciones técnicas vigentes.',
            engineerRole: 'Nuestra matrícula permite certificar ante los bomberos, las ART, el ENACOM (Telecomunicaciones), municipalidades y colegios de ingenieros, asumiendo la responsabilidad sobre la legalidad del diseño eléctrico y electrónico.',
            bullets: [
                'Certificación legal de sistemas contra incendios y evacuación.',
                'Mediciones y protocolos de Puesta a Tierra (Res. SRT 900/15).',
                'Adecuación de infraestructura a regulaciones del ENACOM.',
                'Firmas aprobatorias y auditorías de Seguridad e Higiene electrónica.'
            ]
        },
        'direccion_tecnica': {
            title: 'Dirección Técnica',
            image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
            description: 'Toda obra de infraestructura requiere supervisión firme para evitar accidentes, sobrecostos y desvíos técnicos. La correcta Dirección asegura que los planos diseñados se conviertan en realidad de forma segura, a tiempo y en presupuesto.',
            engineerRole: 'Asumimos la máxima autoridad técnica en el sitio de la obra. Inspeccionamos la instalación, auditamos de acuerdo a las reglamentaciones de Higiene Laboral, y autorizamos paso a paso cada avance constructivo.',
            bullets: [
                'Proyección, dirección y conducción técnica de obras en tecnología.',
                'Pliego de bases, condiciones y control de contratistas.',
                'Inspección en sitio y firma de conformidad final de obra (Puesta en marcha).',
                'Control de riesgos electromecánicos (' + "lockout/tagout" + ') preventivo.'
            ]
        },
        'paneles_solares': {
            title: 'Instalación de Paneles Solares',
            image: '/paneles_solares_hero.png',
            description: 'Transición hacia energías limpias mediante sistemas solares fotovoltaicos, logrando autonomía, ahorro económico y disminución de la huella de carbono, adaptados a la necesidad específica del cliente.',
            engineerRole: 'Realizamos el cálculo y dimensionamiento energético, elegimos el equipamiento adecuado (paneles, inversores y baterías) y aseguramos una interconexión a la red eléctrica o funcionamiento off-grid con los más altos estándares técnicos.',
            bullets: [
                'Diseño y dimensionamiento de sistemas fotovoltaicos On-Grid y Off-Grid.',
                'Suministro e instalación de paneles, inversores y acumuladores.',
                'Mantenimiento preventivo y limpieza de módulos solares.',
                'Asesoramiento en eficiencia energética, normativas y seguridad eléctrica.'
            ]
        }
    };

    const data = servicesData[serviceId];

    if (!data) return <div className="pt-32 text-center text-white min-h-screen">Servicio no encontrado</div>;

    return (
        <div className="pt-32 pb-20 max-w-5xl mx-auto px-6 min-h-screen relative z-10 animate-[fadeIn_0.5s_ease-out]">
            <button
                onClick={onBack}
                className="flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium mb-8 transition-colors group"
            >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Volver a la vista principal
            </button>

            <div className="glass-card mb-12 overflow-hidden !rounded-3xl border border-primary-500/20">
                <div className="w-full h-72 md:h-[450px] relative">
                    <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
                    <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                    />
                    <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg leading-tight">{data.title}</h1>
                        <div className="h-1.5 w-24 bg-primary-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                    </div>
                </div>

                <div className="p-8 md:p-12 bg-black/40">
                    <div className="prose prose-invert max-w-none">
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-10 font-light">
                            {data.description}
                        </p>

                        <div className="bg-primary-500/10 border border-primary-500/30 p-8 md:p-10 rounded-2xl mb-12 relative overflow-hidden group hover:bg-primary-500/15 transition-colors">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary-500/20 rounded-full blur-[50px] pointer-events-none group-hover:bg-primary-500/30 transition-colors"></div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-4">
                                <span className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center text-primary-400 font-bold text-lg border border-primary-500/30 shadow-inner">
                                    IE
                                </span>
                                ¿Qué aporta un Ingeniero Electrónico?
                            </h3>
                            <p className="text-gray-200 leading-relaxed text-lg md:text-xl italic border-l-4 border-primary-500 pl-6 py-2">
                                {data.engineerRole}
                            </p>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-8">Alcance Específico de este Servicio</h3>
                        <ul className="grid md:grid-cols-2 gap-6">
                            {data.bullets.map((bullet: string, i: number) => (
                                <li key={i} className="flex items-start gap-4 glass-card p-6 border border-white/10 hover:border-primary-500/30 transition-colors group">
                                    <CheckCircle className="text-primary-500 w-7 h-7 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 text-lg leading-snug">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-16 flex flex-col sm:flex-row justify-center items-center border-t border-white/10 pt-10 gap-6">
                        <button
                            onClick={() => setView('quote')}
                            className="btn-primary py-4 px-10 text-lg font-semibold w-full sm:w-auto text-center"
                        >
                            Solicitar Cotización para este Proyecto
                        </button>
                        <span className="text-gray-500 text-sm italic">Contacto directo con el ingeniero.</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
