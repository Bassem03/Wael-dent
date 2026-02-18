import React from 'react';
import { motion } from 'framer-motion';
import { User, CheckCircle, Award, Heart, Shield } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-12 relative">
            {/* Subtle Warm Mesh Gradient */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-accent-gold/5 via-primary-light/10 to-transparent pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-3 block"
                    >
                        Qui Sommes-Nous
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-serif font-medium text-slate-900 mb-6"
                    >
                        Architectes de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-accent-gold">Confiance</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        Nous sommes un collectif de visionnaires, d'artistes et de praticiens dédiés à la recherche incessante de l'excellence en matière de soins bucco-dentaires.
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-24">
                    {[
                        {
                            name: "Dr. Tesnim Blel",
                            role: "Chirurgien Dentiste",
                            bio: "Expert en dentisterie esthétique avec plus de 15 ans d'expérience dans la transformation des sourires.",
                            gradient: "from-rose-500 to-orange-400",
                            icon: User
                        },
                        {
                            name: "Dr. Ahmed Mansour",
                            role: "Orthodontiste",
                            bio: "Spécialisé dans l'Invisalign et les alignements esthétiques complexes pour adultes et enfants.",
                            gradient: "from-blue-600 to-cyan-400",
                            icon: Shield
                        },
                        {
                            name: "Mariem Ghrab",
                            role: "Hygiéniste Senior",
                            bio: "Dédiée à votre confort et à la prévention pour maintenir une santé bucco-dentaire optimale.",
                            gradient: "from-emerald-500 to-teal-400",
                            icon: Heart
                        }
                    ].map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-white/50 group relative overflow-hidden"
                        >
                            {/* Hover Gradient Border Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.gradient} mb-6 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                                    <member.icon size={36} />
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1 text-center">{member.name}</h3>
                                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.gradient} font-bold text-xs uppercase tracking-wider text-center mb-6`}>{member.role}</p>
                                <p className="text-slate-500 text-center leading-relaxed">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Values Section - Split Layout */}
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
                    {/* Abstract Shapes */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-serif">La Philosophie de l'<span className="text-primary-glow">Excellence</span></h2>
                            <p className="text-slate-300 text-lg leading-relaxed font-light">
                                Nous croyons que la dentisterie doit être une expérience positive et valorisante.
                                Notre cabinet repose sur les piliers de la transparence, du confort et de l'excellence clinique.
                                Chaque détail de votre visite est soigneusement pensé pour assurer votre sérénité.
                            </p>

                            <div className="grid gap-4">
                                {["Soins Centrés sur le Patient", "Technologies de Pointe", "Approche Holistique", "Engagement Communautaire"].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-glow">
                                            <CheckCircle size={16} />
                                        </div>
                                        <span className="font-medium text-slate-200">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-8 flex items-center justify-center relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
                                <div className="text-center relative z-10">
                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ duration: 5, repeat: Infinity }}
                                        className="w-24 h-24 mx-auto bg-gradient-to-br from-accent-gold to-orange-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-orange-500/30 mb-6"
                                    >
                                        <Award size={48} />
                                    </motion.div>
                                    <h3 className="text-3xl font-serif text-white mb-2">Clinique Primée</h3>
                                    <p className="text-slate-400">Élue Meilleure Clinique Dentaire 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
