import React from 'react';
import { motion } from 'framer-motion';
import { Gem, ClipboardCheck, Sparkles, Smile, Brush, Microscope, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-12 relative">
            {/* Tech Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-24 max-w-3xl mx-auto"
                >
                    <div className="inline-block p-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary-dark font-mono text-xs mb-4">
                        // EXCELLENCE CLINIQUE
                    </div>
                    <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6">Solutions <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Avancées</span></h1>
                    <p className="text-slate-500 text-lg leading-relaxed">
                        L'ingénierie de précision rencontre l'art humain. Notre gamme diversifiée de services utilise les technologies dentaires les plus avancées au monde.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Dentisterie Esthétique",
                            icon: Gem,
                            gradient: "from-purple-500 to-indigo-500",
                            desc: "Facettes, composites et transformations du sourire conçus pour renforcer votre confiance.",
                            list: ["Facettes en Porcelaine", "Conception du Sourire", "Blanchiment Dentaire"]
                        },
                        {
                            title: "Soins Préventifs",
                            icon: ClipboardCheck,
                            gradient: "from-blue-500 to-cyan-500",
                            desc: "Nettoyages et examens de routine pour maintenir une santé bucco-dentaire optimale à vie.",
                            list: ["Nettoyages Réguliers", "Dépistage Bucco-dentaire", "Examens"]
                        },
                        {
                            title: "Orthodontie",
                            icon: Smile,
                            gradient: "from-pink-500 to-rose-500",
                            desc: "Invisalign et gouttières transparentes pour un sourire plus droit sans tracas.",
                            list: ["Gouttières Transparentes", "Contention", "Options Traditionnelles"]
                        },
                        {
                            title: "Soins Restaurateurs",
                            icon: Brush,
                            gradient: "from-amber-500 to-orange-500",
                            desc: "Réparation des dents endommagées avec des couronnes, ponts et obturations de haute qualité.",
                            list: ["Couronnes Dentaires", "Obturations", "Ponts"]
                        },
                        {
                            title: "Implants",
                            icon: Microscope,
                            gradient: "from-emerald-500 to-teal-500",
                            desc: "Remplacements permanents et naturels pour les dents manquantes.",
                            list: ["Implant Unitaire", "Arcade Complète", "Greffe Osseuse"]
                        },
                        {
                            title: "Blanchiment Hybride",
                            icon: Sparkles,
                            gradient: "from-cyan-400 to-blue-400",
                            desc: "Traitements de blanchiment professionnels pour un sourire éclatant et radieux.",
                            list: ["Blanchiment au Cabinet", "Kits à Domicile", "Élimination des Taches"]
                        },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.gradient} opacity-10 rounded-bl-[100px] transition-transform duration-500 group-hover:scale-150`} />

                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-md`}>
                                <service.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-3">{service.title}</h3>
                            <p className="text-slate-500 mb-8 text-sm leading-relaxed">{service.desc}</p>

                            <div className="space-y-3 relative z-10">
                                {service.list.map((item, i) => (
                                    <div key={i} className="flex items-center text-sm font-medium text-slate-600 border-b border-slate-50 pb-2 last:border-0 last:pb-0">
                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                <ArrowUpRight className="text-slate-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 relative rounded-[3rem] p-12 overflow-hidden text-center text-white shadow-2xl">
                    <div className="absolute inset-0 bg-secondary" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/30 to-transparent pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h3 className="text-3xl md:text-4xl font-serif">Plans de Traitement Personnalisés</h3>
                        <p className="text-slate-300 font-light text-lg">
                            Chaque sourire est unique. Planifiez une consultation et nos experts créeront un parcours personnalisé pour votre sourire parfait.
                        </p>
                        <Link to="/contact" className="inline-block bg-white text-secondary font-bold px-10 py-4 rounded-full hover:bg-primary-light transition-all transform hover:-translate-y-1 shadow-lg shadow-white/10">
                            Prendre RDV
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;
