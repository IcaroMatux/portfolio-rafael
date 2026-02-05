import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, animateScroll } from 'react-scroll';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const languages = [
        { code: 'pt', label: 'PT' },
        { code: 'en', label: 'EN' },
        { code: 'es', label: 'ES' },
    ];

    const currentLang = languages.find(l => i18n.language?.startsWith(l.code)) || languages[0];

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setIsLangOpen(false);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: t('nav.home'), to: 'home' },
        { label: t('nav.about'), to: 'sobre' },
        { label: t('nav.model'), to: 'modelo' },
        { label: t('nav.design'), to: 'design' },
        { label: t('nav.aesthetic'), to: 'estetica' },
        { label: t('nav.accommodation'), to: 'hospedagem' },
        { label: t('nav.contact'), to: 'contato' },
    ];

    const scrollToTop = () => {
        animateScroll.scrollToTop({
            duration: 800,
            smooth: 'easeInOutQuad'
        });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/20 backdrop-blur-md border-b border-border' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <button onClick={scrollToTop} className="font-heading text-2xl font-semibold tracking-tight text-white cursor-pointer flex items-center gap-1 ">
                        <div>
                            <span className='text-[#c1121f]'>R</span>afael Miranda </div>
                    </button>


                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                duration={800}
                                offset={-80}
                                className="text-sm font-medium text-[#A6A6A6] hover:text-white transition-colors duration-300 relative group cursor-pointer"
                                activeClass="text-white"
                            >
                                {item.label}
                                <span className="absolute -bottom-1  left-0 w-0 h-0.5 bg-[#c1121f] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}

                        {/* Language Switcher */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangOpen(!isLangOpen)}
                                className="flex items-center gap-2 text-sm font-medium text-[#A6A6A6] hover:text-white transition-colors duration-300"
                            >
                                <Globe size={18} />
                                <span className="relative h-5 w-6 overflow-hidden block">
                                    <AnimatePresence mode="wait">
                                        <motion.span
                                            key={currentLang.code}
                                            initial={{ y: -20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: 20, opacity: 0 }}
                                            transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}
                                            className="absolute inset-0 flex items-center justify-center"
                                        >
                                            {currentLang.label}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </button>

                            <AnimatePresence>
                                {isLangOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full right-0 mt-2 w-24 bg-black border border-white/10 rounded-lg overflow-hidden shadow-xl"
                                    >
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-white/5 ${currentLang.code === lang.code ? 'text-[#c1121f]' : 'text-[#A6A6A6]'
                                                    }`}
                                            >
                                                {lang.label}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-foreground text-white"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black border-b border-border"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    duration={800}
                                    offset={-80}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-white hover:text-[#D9D9D9] transition-colors cursor-pointer"
                                    activeClass="text-[#c1121f]"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            {/* Mobile Language Switcher */}
                            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10">
                                <div className="flex items-center gap-2 text-[#A6A6A6]">
                                    <Globe size={18} />
                                    <span className="text-sm">{t('nav.languageLabel')}</span>
                                </div>
                                <div className="flex gap-4">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => changeLanguage(lang.code)}
                                            className={`text-sm font-medium transition-colors ${currentLang.code === lang.code ? 'text-[#c1121f]' : 'text-[#A6A6A6]'
                                                }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
