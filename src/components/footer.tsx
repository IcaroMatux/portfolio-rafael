import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Instagram, Mail, MessageCircle, ArrowUp, MapPin, Linkedin } from 'lucide-react';
import { Link, animateScroll } from 'react-scroll';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { label: t('nav.home'), to: 'home' },
        { label: t('nav.about'), to: 'sobre' },
        { label: t('nav.model'), to: 'modelo' },
        { label: t('nav.design'), to: 'design' },
        { label: t('nav.aesthetic'), to: 'estetica' },
        { label: t('nav.accommodation'), to: 'hospedagem' },
        { label: t('nav.contact'), to: 'contato' },
    ];

    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/rafaeljesusof_/', label: 'Instagram' },
        { icon: MessageCircle, href: 'https://wa.me/5562994083233', label: 'WhatsApp' },
        { icon: Mail, href: 'mailto:Rafaeljesusmiiranda@gmail.com', label: 'Email' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/rafael-miranda-a6898a275/', label: 'Linkedin' },
    ];

    const scrollToTop = () => {
        animateScroll.scrollToTop({
            duration: 800,
            smooth: 'easeInOutQuad'
        });
    };

    return (
        <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#c1121f]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <a href="#home" className="font-heading text-3xl font-semibold tracking-tight block">
                            <span className="text-[#c1121f]">R</span>afael Miranda
                        </a>
                        <p className="text-[#A6A6A6] text-md leading-relaxed max-w-xs">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div>
                        <h3 className="font-medium text-lg mb-6 text-white">{t('footer.navigation')}</h3>
                        <ul className="space-y-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={800}
                                        className="text-[#A6A6A6] hover:text-[#c1121f] transition-colors text-md flex items-center gap-2 group cursor-pointer"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#c1121f] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="font-medium text-lg mb-6 text-white">{t('footer.contact')}</h3>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:Rafaeljesusmiiranda@gmail.com" className="text-[#A6A6A6] hover:text-white transition-colors text-md flex items-center gap-3">
                                    <Mail size={16} className="text-[#c1121f]" />
                                    Rafaeljesusmiiranda@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/5562994083233" className="text-[#A6A6A6] hover:text-white transition-colors text-md flex items-center gap-3">
                                    <MessageCircle size={16} className="text-[#c1121f]" />
                                    +55 (62) 99408-3233
                                </a>
                            </li>
                            <li>
                                <span className="text-[#A6A6A6] text-md flex items-center gap-3">
                                    <MapPin size={16} className="text-[#c1121f]" />
                                    {t('footer.location')}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div>
                        <h3 className="font-medium text-lg mb-6 text-white">{t('footer.social')}</h3>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-[#c1121f] hover:border-[#c1121f] transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#A6A6A6] text-md text-center md:text-left">
                        {t('footer.copyright', { year: currentYear })}
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 text-md font-medium text-white hover:text-[#c1121f] transition-colors uppercase tracking-wider cursor-pointer"
                    >
                        {t('footer.backToTop')}
                        <ArrowUp size={14} />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;