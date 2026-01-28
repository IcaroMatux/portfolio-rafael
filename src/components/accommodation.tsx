import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Wifi, Coffee, MapPin, Star, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const Accommodation = () => {
    const { t } = useTranslation();

    const amenities = [
        { name: t('accommodation.amenities.wifi'), icon: Wifi },
        { name: t('accommodation.amenities.payment'), icon: Coffee },
        { name: t('accommodation.amenities.location'), icon: MapPin },
        { name: t('accommodation.amenities.reviews'), icon: Star },
    ];

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [cards, setCards] = useState<string[]>([]);

    useEffect(() => {
        if (!isInView) return;
        const importImages = async () => {
            const images = await Promise.all([
                import('../assets/images/accomodation-1.jpeg'),
                import('../assets/images/accomodation-2.jpeg'),
                import('../assets/images/accomodation-3.jpeg'),
                import('../assets/images/accomodation-4.jpeg'),
                import('../assets/images/accomodation-5.jpeg'),
            ]);
            setCards(images.map((img) => img.default));
        };
        importImages();
    }, [isInView]);

    return (
        <section
            id="hospedagem"
            ref={ref}
            /* Adicionado max-w-[100vw] para garantir que a seção nunca exceda a tela */
            className="py-16 sm:py-20 lg:py-24 overflow-hidden max-w-[100vw]"
        >
            <div
                className="
                    w-full max-w-7xl mx-auto
                    px-5 sm:px-6 lg:px-8
                "
            >
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT COLUMN - Texto */}
                    {/* min-w-0 é CRUCIAL para evitar que o grid estoure em telas pequenas */}
                    <motion.div
                        className="min-w-0"
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Title */}
                        <div className="w-full">
                            <h2
                                className="
                                    font-heading
                                    text-2xl
                                    /* Ajuste de tamanho para telas muito pequenas */
                                    text-[1.75rem]
                                    sm:text-3xl
                                    md:text-5xl
                                    text-[#c1121f]
                                    font-semibold
                                    mt-3 mb-3
                                wrap-break-word
                                "
                            >
                                {t('accommodation.title')}
                            </h2>

                            <div className="w-full h-0.5 bg-[#FAFAFA] mt-3 mb-4" />
                        </div>

                        {/* Description */}
                        <p className="text-[0.95rem] sm:text-lg text-[#FAFAFA] opacity-80 leading-relaxed mb-6">
                            {t('accommodation.description')}
                        </p>

                        {/* Amenities */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6">
                            {amenities.map((amenity) => (
                                <div
                                    key={amenity.name}
                                    className="
                                        flex items-center gap-3 p-3 rounded-xl
                                        bg-white/5 border border-white/5
                                        hover:border-[#c1121f]/30 transition-colors group
                                        w-full
                                    "
                                >
                                    <div className="p-2 rounded-full bg-[#c1121f]/10 text-[#c1121f] group-hover:bg-[#c1121f] group-hover:text-white transition-colors shrink-0">
                                        <amenity.icon size={18} />
                                    </div>
                                    <span className="text-sm font-medium text-[#FAFAFA] truncate">
                                        {amenity.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Differentials Card */}
                        <div
                            className="
                                relative w-full
                                p-5 sm:p-6 md:p-8
                                border border-white/10 bg-white/5
                                rounded-2xl mt-8 sm:mt-10
                                overflow-hidden group
                            "
                            onMouseMove={(e) => {
                                if (window.innerWidth < 768) return;
                                const rect = e.currentTarget.getBoundingClientRect();
                                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
                            }}
                        >
                            <div
                                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{
                                    background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(193,18,31,0.15), transparent 40%)',
                                }}
                            />

                            <div className="relative z-10">
                                <h4 className="flex items-center gap-2 text-lg sm:text-xl mb-4 text-[#FAFAFA]">
                                    <Star className="text-[#c1121f] fill-[#c1121f] shrink-0" size={18} />
                                    <span className="wrap-break-word">{t('accommodation.differentials.title')}</span>
                                </h4>

                                <ul className="space-y-3 sm:space-y-4">
                                    {[0, 1, 2].map((i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 size={16} className="text-[#c1121f] mt-1 shrink-0" />
                                            <span className="text-sm text-[#A6A6A6] leading-relaxed">
                                                {t(`accommodation.differentials.items.${i}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT COLUMN - Swiper */}
                    {/* w-full e max-w-full garantem que esta coluna não empurre a largura total */}
                    <div className="relative w-full max-w-full flex items-center justify-center min-w-0">
                        <div className="absolute inset-0 bg-[#c1121f]/10 blur-[100px] hidden md:block" />

                        {isInView && (
                            <div className="w-full flex justify-center overflow-visible">
                                <Swiper
                                    effect="cards"
                                    grabCursor
                                    speed={500}
                                    modules={[EffectCards, Autoplay, Pagination]}
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                                    /* Fixamos um max-width menor para garantir que os cards girem sem cortar */
                                    className="w-70! xs:w-95! <sm:w-95!></sm:w-95!> aspect-3/4 mx-auto"
                                >
                                    {cards.map((img, i) => (
                                        <SwiperSlide
                                            key={i}
                                            className="rounded-2xl overflow-hidden border border-white/10 bg-[#1a1a1a]"
                                        >
                                            <img
                                                src={img}
                                                loading="lazy"
                                                alt="Accommodation"
                                                className="w-full h-full object-cover"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accommodation;