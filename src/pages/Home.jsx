import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Star, Clock, ShieldCheck, ArrowRight, HeartPulse, Stethoscope, Sparkles, Activity, Award, UserCheck } from 'lucide-react';
import heroBg from '../assets/dent-background.jpg';

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        }
    })
};

const Home = () => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 100]);
    const bgY = useTransform(scrollY, [0, 500], [0, 50]); // Parallax for background
    const heroOpacity = useTransform(scrollY, [0, 800], [1, 0.2]);

    // Parallax for the features section
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const yFeatures = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <div className="w-full overflow-hidden bg-slate-50 selection:bg-primary/30">

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden">
                {/* Background Image & Overlay with Parallax */}
                <motion.div
                    style={{ y: bgY }}
                    className="absolute inset-0 z-0"
                >
                    <motion.img
                        src={heroBg}
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                        initial={{ scale: 1.1 }}
                        animate={{ scale: [1.1, 1.15, 1.1] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 bg-slate-900/30" /> {/* Dark overlay for readability */}

                    {/* Floating Particles */}
                    <motion.div
                        animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full blur-[1px]"
                    />
                    <motion.div
                        animate={{ y: [0, 30, 0], opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-primary/40 rounded-full blur-[2px]"
                    />
                    <motion.div
                        animate={{ y: [0, -40, 0], opacity: [0.1, 0.4, 0.1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent-gold/60 rounded-full"
                    />
                </motion.div>

                <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center pb-20">
                    {/* Text Content */}
                    <motion.div
                        style={{ y: heroY, opacity: heroOpacity }}
                        className="space-y-8 relative"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-medium text-white leading-[1.1] tracking-tight"
                        >
                            Souriez avec une <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-white to-indigo-300 animate-shimmer bg-[length:200%_auto]">Confiance Totale</span>
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                            className="text-xl text-slate-300 max-w-xl leading-relaxed font-light border-l-4 border-primary pl-6"
                        >
                            Redéfinir la dentisterie avec un mélange d'art, de science et de luxe.
                            Entrez dans un monde où votre confort est notre priorité et l'excellence est la norme.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={3}
                            className="flex flex-wrap gap-5 pt-4"
                        >
                            <Link to="/contact" className="group relative px-10 py-5 bg-gradient-to-r from-primary to-accent-purple text-white rounded-full font-bold text-lg overflow-hidden shadow-2xl shadow-primary/40 transition-all hover:scale-105 hover:shadow-primary/60">
                                <div className="absolute inset-0 bg-white/20 group-hover:translate-x-full transition-transform duration-500 ease-out skew-x-12 -ml-4" />
                                <span className="relative z-10 flex items-center gap-2">
                                    Prendre RDV <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                            <Link to="/services" className="px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm flex items-center gap-2">
                                <Calendar size={20} className="text-primary-glow" />
                                Nos Services
                            </Link>
                        </motion.div>

                        {/* Stats Strip */}
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            custom={4}
                            className="pt-12 grid grid-cols-3 gap-8 border-t border-white/10 mt-8"
                        >

                            {[
                                { val: "500+", label: "Sourires Créés", color: "text-primary-glow" },
                                { val: "5  ans +", label: "Expérience", color: "text-white" },
                                { val: "5.0", label: "Évaluation", color: "text-accent-gold" },
                            ].map((stat, i) => (
                                <div key={i} className="">
                                    <div className={`text-4xl font-serif font-bold mb-1 ${stat.color}`}>{stat.val}</div>
                                    <div className="text-sm text-slate-400 font-medium tracking-wide uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image Composition */}
                    <div className="relative h-[500px] lg:h-[850px] w-full perspective-1000 mt-12 lg:mt-0">
                        {/* Spinning decorative ring with gradient - LG only to save mobile perf */}
                        <div className="hidden lg:block absolute top-[15%] right-[5%] w-[550px] h-[550px] rounded-full border border-primary/20 animate-spin-slow pointer-events-none" />
                        <div className="hidden lg:block absolute top-[15%] right-[5%] w-[550px] h-[550px] rounded-full border-2 border-transparent border-t-accent-purple/30 border-r-primary/30 animate-spin-slow pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, rotateY: 30, x: 50 }}
                            animate={{ opacity: 1, rotateY: 0, x: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute top-0 lg:top-20 right-0 w-full lg:w-[500px] h-full lg:h-[650px] rounded-[3rem] lg:rounded-[40px] overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-secondary-surface/30 backdrop-blur-sm z-20 group"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
                                alt="Professional Dentist"
                                className="w-full h-full object-cover opacity-75 transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Colorful Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/20 to-transparent opacity-80" />

                            {/* Floating "Live" Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-8 left-8 px-5 py-3 bg-secondary/60 backdrop-blur-md border border-white/10 rounded-2xl flex items-center gap-3 shadow-xl"
                            >
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                <span className="text-white text-sm font-semibold tracking-wide">Ouvert jusqu'à 18:30h Sauf Samedi jusqu'à 15:00h</span>
                            </motion.div>
                        </motion.div>

                        {/* Floating Feature Card 1 */}
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
                >
                    <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary-glow to-transparent" />
                    <span className="text-primary-glow/70 text-xs font-bold tracking-[0.2em] uppercase">Défiler</span>
                </motion.div>
            </section>

            {/* MARQUEE */}
            <div className="bg-primary overflow-hidden py-4 relative z-20 shadow-lg rotate-1 scale-105 border-y-4 border-white/10 hidden md:block">
                <div className="whitespace-nowrap animate-marquee flex gap-12 text-white font-bold text-lg tracking-widest uppercase">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <div key={i} className="flex items-center gap-12">
                            <span>Orthodontie</span>
                            <span className="text-primary-light">♦</span>
                            <span>Dentisterie Esthétique</span>
                            <span className="text-primary-light">♦</span>
                            <span>Implants</span>
                            <span className="text-primary-light">♦</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* FEATURES BENTO GRID */}
            <section ref={ref} className="py-32 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 skew-x-12 translate-x-32" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Pourquoi Nous Choisir</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Découvrez la différence d'un <span className="text-primary italic">Soin d'exception</span></h2>
                        <p className="text-slate-600 text-lg">Nous ne nous contentons pas de soigner les dents ; nous créons des sourires en utilisant la technologie la plus avancée.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Large Card 1 */}
                        <motion.div
                            style={{ y: yFeatures }}
                            className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 relative overflow-hidden group text-white shadow-2xl"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-500" />
                            <div className="relative z-10">
                                <Stethoscope size={48} className="text-primary mb-6 animate-pulse-soft" />
                                <h3 className="text-3xl font-serif mb-4">Diagnostics Avancés</h3>
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-shimmer" style={{ top: '20%' }} />
                                <p className="text-slate-300 max-w-md text-lg leading-relaxed">
                                    Utilisation de scans 3D. La médecine de précision à son apogée.
                                </p>
                            </div>
                        </motion.div>

                        {/* Tall Card 2 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col justify-between group overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50" />
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-6 animate-pulse-soft">
                                    <Star size={32} />
                                </div>
                                <h3 className="text-2xl font-serif text-slate-900 mb-4">Service 5 Étoiles</h3>
                                <p className="text-slate-600">votre confort est orchestré à la perfection.</p>
                            </div>
                        </motion.div>

                        {/* Regular Card 3 */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[2.5rem] p-10 border border-slate-100 shadow-xl shadow-slate-200/50 group"
                        >
                            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform animate-pulse-soft">
                                <ShieldCheck size={32} />
                            </div>
                            <h3 className="text-2xl font-serif text-slate-900 mb-4">Garantie </h3>
                            <p className="text-slate-600">Nous garantissons notre travail. Tous les implants et facettes bénéficient de notre garantie exclusive.</p>
                        </motion.div>

                        {/* Large Card 4 - Image Background */}
                        <motion.div
                            style={{ y: yFeatures }}
                            className="md:col-span-2 relative h-80 rounded-[2.5rem] overflow-hidden group shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2068&ixlib=rb-4.0.3"
                                alt="Facility"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent" />
                            <div className="absolute inset-0 p-10 flex flex-col justify-center max-w-md">
                                <h3 className="text-3xl font-serif text-white mb-4">Installation Ultra-Moderne</h3>
                                <p className="text-slate-300 text-lg mb-6">Entrez dans un environnement stérile, semblable à un spa, conçu pour apaiser vos sens.</p>
                                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm cursor-pointer group-hover:gap-4 transition-all">
                                    Faire la visite <ArrowRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA PARALLAX SECTION */}
            <section className="relative py-40 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1588776813158-cef3f50d8186?auto=format&fit=crop&q=80&w=2574&ixlib=rb-4.0.3"
                        alt="Background"
                        className="w-full h-full object-cover grayscale opacity-20"
                    />
                    <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto border border-white/20 bg-white/5 backdrop-blur-lg rounded-[3rem] p-16 shadow-2xl relative overflow-hidden"
                    >
                        {/* Shine effect */}
                        <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 animate-shimmer" />

                        <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Votre plus beau sourire vous attend</h2>
                        <p className="text-xl text-primary-light mb-12 font-light max-w-2xl mx-auto">
                            Ne vous contentez pas de la moyenne. Rejoignez les milliers de patients qui ont transformé leur vie avec le Dr. Tesnim Blel.
                        </p>
                        <Link to="/contact" className="inline-block px-12 py-5 bg-white text-secondary font-bold rounded-full shadow-2xl shadow-white/20 hover:scale-105 transition-all text-lg">
                            Prendre RDV
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
