import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import firstSlidePoster from '../assets/images/rafaelimage1.jpeg';
import secondSlidePoster from '../assets/images/rafaelimage2.jpeg';
import aestheticSlide from '../assets/images/aestheticimage.jpeg';
import designSlide from '../assets/images/designimage.jpg';
import hospedagemSlide from '../assets/images/hospedagemimage.jpeg';


interface AboutProps {
    autoPlay?: boolean;
    delay?: number;
}

// Variantes movidas para fora do componente e tipadas como Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Efeito cascata entre os elementos
            delayChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.3 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function About({ autoPlay = true, delay = 6000 }: AboutProps) {
    const { t } = useTranslation();

    const slides = [
        {
            type: "image",
            src: firstSlidePoster,
            title: t('about.slides.0.title'),
            subtitle: t('about.slides.0.subtitle'),
            text: t('about.slides.0.text'),
            ctaLabel: t('about.slides.0.ctaLabel'),
            ctaHref: "#portfolio"
        },
        {
            type: "image",
            src: secondSlidePoster,
            title: t('about.slides.1.title'),
            subtitle: t('about.slides.1.subtitle'),
            text: t('about.slides.1.text'),
            ctaLabel: t('about.slides.1.ctaLabel'),
            ctaHref: "#modelo"
        },
        {
            type: "image",
            src: designSlide,
            title: t('about.slides.2.title'),
            subtitle: t('about.slides.2.subtitle'),
            text: t('about.slides.2.text'),
            ctaLabel: t('about.slides.2.ctaLabel'),
            ctaHref: "#design"
        },
        {
            type: "image",
            src: aestheticSlide,
            title: t('about.slides.3.title'),
            subtitle: t('about.slides.3.subtitle'),
            text: t('about.slides.3.text'),
            ctaLabel: t('about.slides.3.ctaLabel'),
            ctaHref: "#estetica"
        },
        {
            type: "image",
            src: hospedagemSlide,
            title: t('about.slides.4.title'),
            subtitle: t('about.slides.4.subtitle'),
            text: t('about.slides.4.text'),
            ctaLabel: t('about.slides.4.ctaLabel'),
            ctaHref: "#hospedagem"
        }
    ];

    const [index, setIndex] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (!autoPlay) return;
        timerRef.current = setInterval(() => {
            setIndex((i: number) => (i + 1) % slides.length);
        }, delay);
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [autoPlay, delay]);

    const goTo = (i: number) => {
        if (timerRef.current) clearInterval(timerRef.current);
        setIndex(i);
        if (autoPlay) {
            timerRef.current = setInterval(() => {
                setIndex((s) => (s + 1) % slides.length);
            }, delay);
        }
    };

    const handleCtaClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            event.preventDefault();
            const element = document.getElementById(href.substring(1));
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <section id='sobre' className='py-14 w-full min-h-screen relative overflow-hidden'>
            <div className='flex flex-col md:flex-row min-h-screen gap-6 md:gap-0'>

                {/* Mídia - LEFT */}
                <div className='w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden bg-[#131514]'>
                    <div className="w-full h-full relative overflow-hidden bg-[#131514]">
                        {slides.map((s, i) => (
                            <div
                                key={i}
                                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                ${i === index ? "opacity-100 z-20" : "opacity-0 z-10 pointer-events-none"}`}
                                style={{ backgroundColor: "black" }}
                            >
                                {s.type === "video" ? (
                                    <>
                                        {/* Fundo Ambient para Vídeo */}
                                        <div className="absolute inset-0 overflow-hidden">
                                            <video
                                                className="w-full h-full object-cover blur-2xl scale-110 opacity-60"
                                                src={s.src}
                                                autoPlay={i === index}
                                                muted
                                                loop
                                                playsInline
                                            />
                                        </div>
                                        <video
                                            className="relative w-full h-full object-contain z-10 drop-shadow-2xl hidden md:block"
                                            src={s.src}
                                            autoPlay={i === index}
                                            playsInline
                                            muted
                                            loop
                                        />
                                    </>
                                ) : (
                                    <>
                                        {/* Fundo Ambient (Imagem desfocada para preencher o espaço) */}
                                        {/* <div className="absolute inset-0 overflow-hidden">
                                            <img src={s.src}  alt="" className="w-full h-full object-cover  scale-110 " aria-hidden="true" />
                                        </div> */}
                                        {/* Imagem Principal (Inteira e sem cortes) */}
                                        <img 
                                            src={s.src} 
                                            alt={s.title} 
                                            className="relative w-full h-full rounded-lg object-contain z-10 drop-shadow-2xl"
                                            decoding="async"
                                            loading="lazy"

                                        />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

                {/* Conteúdo - RIGHT */}
                <div className='w-full md:w-1/2 h-auto relative flex items-center'>
                    <div className='w-full max-w-2xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-24'>
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={index}
                                className="max-w-full sm:max-w-lg md:max-w-xl text-[#c1121f]"
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <motion.h2
                                    className="font-bebas text-2xl sm:text-4xl md:text-7xl leading-snug sm:leading-tight mb-3 sm:mb-4"
                                    variants={itemVariants}
                                >
                                    {slides[index].title}
                                </motion.h2>

                                <motion.h3
                                    className="font-lora text-base sm:text-2xl md:text-3xl text-[#FAFAFA] mb-3 sm:mb-4"
                                    variants={itemVariants}
                                >
                                    {slides[index].subtitle}
                                </motion.h3>

                                <motion.p
                                    className="font-lora text-sm sm:text-base md:text-lg text-[#A6A6A6] mb-4 sm:mb-6"
                                    variants={itemVariants}
                                >
                                    {slides[index].text}
                                </motion.p>

                                <motion.div
                                    className="flex flex-wrap items-center gap-3 sm:gap-4"
                                    variants={itemVariants}
                                >
                                    <a
                                        href={slides[index].ctaHref}
                                        onClick={(e) => handleCtaClick(e, slides[index].ctaHref)}
                                        className="inline-block bg-brand-deep hover:bg-brand-warm transition text-[#FAFAFA]
                                    border  border-white/30 px-4 sm:px-6 py-2 rounded-full font-semibold text-base sm:text-xl"
                                    >
                                        {slides[index].ctaLabel}
                                    </a>

                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <div className="absolute left-0 bottom-0 w-full flex flex-col items-center z-20">
                <div className="flex justify-center w-full mb-6 gap-3 ">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`h-3 w-12 sm:w-16 transition border-none cursor-pointer
                ${index === i ? "bg-[#c1121f]" : "bg-white/40 hover:bg-white/60"}`}
                            aria-label={`Ir para slide ${i + 1}`}
                            style={{ borderRadius: '4px' }}
                        />
                    ))}
                </div>
            </div>
        </section>

    )
}
