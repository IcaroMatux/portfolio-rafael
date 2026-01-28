import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Sparkles, User, Camera, Palette, ScanFace, Gem, ChevronLeft, ChevronRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../swiper-custom.css';


const AestheticSection = () => {

    const { t } = useTranslation();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const services = [
        {
            title: t('aesthetic.services.0.title'),
            description: t('aesthetic.services.0.description'),
            icon: User,
            image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: t('aesthetic.services.1.title'),
            description: t('aesthetic.services.1.description'),
            icon: Palette,
            image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: t('aesthetic.services.2.title'),
            description: t('aesthetic.services.2.description'),
            icon: Camera,
            image: "https://images.unsplash.com/photo-1585916420730-d7f95e942d43?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: t('aesthetic.services.3.title'),
            description: t('aesthetic.services.3.description'),
            icon: Sparkles,
            image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: t('aesthetic.services.4.title'),
            description: t('aesthetic.services.4.description'),
            icon: ScanFace,
            image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop"
        },
        {
            title: t('aesthetic.services.5.title'),
            description: t('aesthetic.services.5.description'),
            icon: Gem,
            image: "https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=800&auto=format&fit=crop"
        }
    ];


    return (
        <section ref={ref} id="estetica" className="section-padding py-12 md:py-24 bg-[#0D0D0D] text-white relative overflow-hidden">


            {/* Background accent */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 hidden md:block" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mb-10 md:mb-16"
                >

                    <div className="w-fit">
                        <h2 className="font-heading text-3xl md:text-5xl text-[#c1121f] font-semibold mt-4 mb-4">
                            {t('aesthetic.title')}
                        </h2>
                        <div className="w-full h-0.75 bg-[#FAFAFA] mb-6"></div>
                    </div>
                    <p className="text-base opacity-80 max-w-xl leading-relaxed">
                        {t('aesthetic.description')}
                    </p>

                </motion.div>

                {/* Carrousel Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <button className="custom-prev absolute top-1/2 -left-8 z-20 -translate-y-1/2 bg-[#c1121f] p-3 rounded-full text-white shadow-lg hover:bg-[#a00f1a] transition-all duration-300 hidden md:flex items-center justify-center [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:hover:bg-[#c1121f]">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="custom-next absolute top-1/2 -right-8 z-20 -translate-y-1/2 bg-[#c1121f] p-3 rounded-full text-white shadow-lg hover:bg-[#a00f1a] transition-all duration-300 hidden md:flex items-center justify-center [&.swiper-button-disabled]:opacity-30 [&.swiper-button-disabled]:cursor-not-allowed [&.swiper-button-disabled]:hover:bg-[#c1121f]">
                        <ChevronRight size={24} />
                    </button>

                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        speed={1000}
                        pagination={{ clickable: true }}
                        navigation={{
                            prevEl: '.custom-prev',
                            nextEl: '.custom-next',
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="pb-14"
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index} className="h-auto">
                                <div className="animated-gradient-border group transition-all duration-300">
                                    <div className="animated-gradient-border-inner relative overflow-hidden">
                                        {/* Background Image & Overlay */}
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-all duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-b from-black/90 via-black/70 to-black/95" />
                                        </div>

                                        <div className="relative z-10 flex flex-col h-full">
                                            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#c1121f] group-hover:shadow-[0_0_30px_rgba(193,18,31,0.6)] transition-all duration-300 bg-[radial-gradient(circle,rgba(193,18,31,0.2)_0%,transparent_70%)]">
                                                <service.icon className="text-[#c1121f] group-hover:text-white transition-colors duration-300" size={28} />
                                            </div>
                                            <h3 className="text-xl font-heading font-medium mb-3 text-white group-hover:text-[#c1121f] transition-colors">{service.title}</h3>
                                            <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>


            </div>
        </section >

    )
}

export default AestheticSection