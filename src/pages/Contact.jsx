import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Calendar } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-12 relative">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-secondary skew-y-3 origin-top-left z-0" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-16 pt-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-white mb-6"
                    >
                        Planifiez Votre Visite
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-300 max-w-2xl mx-auto font-light"
                    >
                        Prêt à transformer votre sourire ? Nous sommes là pour répondre à vos questions et vous accueillir au sein de notre cabinet.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-slate-900/10 border border-slate-100"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                <Calendar size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800">Prendre un rendez-vous</h2>
                        </div>

                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 pl-4">Prénom</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-slate-800 font-medium" placeholder="Votre prénom" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 pl-4">Nom</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-slate-800 font-medium" placeholder="Votre nom" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 pl-4">Adresse Email</label>
                                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-slate-800 font-medium" placeholder="votre@email.com" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 pl-4">Numéro de Téléphone</label>
                                <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-slate-800 font-medium" placeholder="99228686" />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 pl-4">Service Requis</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-slate-800 font-medium appearance-none">
                                    <option>Contrôle Général & Nettoyage</option>
                                    <option>Consultation Esthétique</option>
                                    <option>Douleur Dentaire / Urgence</option>
                                    <option>Orthodontie</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 pl-4">Message</label>
                                <textarea rows="4" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all text-slate-800 font-medium resize-none" placeholder="Dites-nous en plus sur vos besoins..." />
                            </div>

                            <button type="submit" className="w-full bg-secondary hover:bg-slate-800 text-white font-bold py-5 rounded-2xl transition-all shadow-xl shadow-slate-900/20 flex items-center justify-center gap-3 transform hover:-translate-y-1">
                                <Send size={20} />
                                <span>Envoyer la demande</span>
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="space-y-6 pt-8"
                    >
                        {/* Info Cards - Stacked */}
                        {[
                            { icon: Phone, title: "Appelez-nous", val: "99228686", sub: "Lun-Ven 8h-18h", color: "bg-blue-100 text-blue-600" },
                            { icon: Mail, title: "Email", val: "drtesnimblel@gmail.com", sub: "Réponse sous 2 heures", color: "bg-emerald-100 text-emerald-600" },
                            { icon: MapPin, title: "Visitez-nous", val: "Immeuble Salma 4, Sousse 4000", sub: "B17 Avenue Léopold Sédar Senghor, 1ere étage", color: "bg-purple-100 text-purple-600" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-6"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center`}>
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-1">{item.title}</h3>
                                    <p className="text-xl font-bold text-slate-800">{item.val}</p>
                                    <p className="text-sm text-slate-500">{item.sub}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Map Embed */}
                        <div className="w-full h-80 bg-slate-200 rounded-[2rem] overflow-hidden relative shadow-lg border-4 border-white">
                            <iframe
                                title="Map Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.3414!2d10.6366!3d35.8256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275727038e833%3A0xc3f92d43f07a9097!2sAv.+Yasser+Arafat%2C+Sousse!5e0!3m2!1sfr!2stn!4v1709506634732!5m2!1sfr!2stn"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
