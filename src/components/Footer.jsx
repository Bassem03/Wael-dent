import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 text-slate-100 font-sans tracking-wide">
            <div className="container mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">

                    <div className="flex items-center gap-4 mb-4">
                        <img src={`${import.meta.env.BASE_URL}tasnim-dent.jpg`} alt="Logo" className="w-20 h-20 object-contain bg-white rounded-2xl p-0.5 shadow-lg shadow-primary/20" onError={(e) => e.target.style.display = 'none'} />
                        <div className="flex flex-col leading-tight">
                            <h2 className="text-xl md:text-2xl font-serif font-bold text-primary">Cabinet Dentaire</h2>
                            <span className="text-slate-300 text-sm md:text-base font-medium">Dr. Tesnim Blel</span>
                        </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        Offrir des soins dentaires de premier ordre avec une technologie de pointe et une approche centrée sur le patient. Votre sourire est notre signature.
                    </p>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Liens Rapides</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-slate-400 hover:text-primary transition-colors duration-300">Accueil</Link></li>
                            <li><Link to="/about" className="text-slate-400 hover:text-primary transition-colors duration-300">À Propos</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors duration-300">Nos Services</Link></li>
                            <li><Link to="/reviews" className="text-slate-400 hover:text-primary transition-colors duration-300">Avis des Patients</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-primary transition-colors duration-300">Contact & RDV</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors duration-300">Dentisterie Esthétique</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors duration-300">Implants</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors duration-300">Orthodontie</Link></li>
                            <li><Link to="/services" className="text-slate-400 hover:text-primary transition-colors duration-300">Blanchiment</Link></li>
                            <li><Link to="/contact" className="text-slate-400 hover:text-primary transition-colors duration-300">Urgences</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex gap-2 items-start">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>1ere étage, Immeuble Salma 4, B17 Avenue Léopold Sédar Senghor, Sousse 4000</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>99228686</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>drtesnimblel@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Cabinet Dentaire Dr. Tesnim Blel. Tous droits réservés.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-cyan-400 transition-colors">Politique de Confidentialité</Link>
                        <Link to="#" className="hover:text-cyan-400 transition-colors">Conditions d'Utilisation</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

