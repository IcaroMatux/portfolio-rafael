import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import model1 from '../assets/images/model1.jpeg';
import model2 from '../assets/images/model2.jpeg';
import model3 from '../assets/images/model3.jpeg';
import model4 from '../assets/images/model4.jpeg';
import model5 from '../assets/images/model5.jpeg';
import model6 from '../assets/images/model6.jpeg';
import workVideo from '../assets/videos/rafaelvideo-1.mp4'
import mobileVideo from '../assets/videos/rafaelvideo-mobile.mp4'


const ModelSection = () => {

    const { t } = useTranslation();
    const [showVideo, setShowVideo] = useState(false);
    const ref = useRef(null);
    const isinView = useInView(ref, { once: true, margin: "-100px" });

    const images = [
        { src: model1, title: t('model.gallery.0.title'), category: t('model.gallery.0.category'), categoryColor: '#f7e27e', titleColor: '#FFFFFF' },
        { src: model2, title: t('model.gallery.1.title'), category: t('model.gallery.1.category'), categoryColor: '#f7e27e', titleColor: '#FFFFFF' },
        { src: model3, title: t('model.gallery.2.title'), category: t('model.gallery.2.category'), categoryColor: '#c1121f', titleColor: '#000000' },
        { 
            src: model4, 
            title: (
                <>
                    <span style={{ color: '#000000' }}>Modern</span> <span style={{ color: '#ffffff' }}>Elegance</span>
                </>
            ), 
            category: t('model.gallery.3.category'), categoryColor: '#c1121f', titleColor: '#000000' 
        },
        { src: model5, 
            title: t('model.gallery.4.title'), category: t('model.gallery.4.category'), categoryColor: '#c1121f', titleColor: '#000000' },
        { src: model6, title: t('model.gallery.5.title'), category: t('model.gallery.5.category'), categoryColor: '#c1121f', titleColor: '#ffffff' },
    ];

    return (
        <section id='modelo' className='py-24 bg-[#0D0D0D] relative overflow-hidden' ref={ref}>
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-500px h-500px bg-[#c1121f]/5 rounded-full blur-[120px] hidden md:block" />
                <div className="absolute bottom-[-10%] right-[-10%] w-500px h-125 bg-blue-900/5 rounded-full blur-[120px] hidden md:block" />
                <div className="absolute top-[-10%] left-[-10%] w-500px h-500px bg-[#c1121f]/5 rounded-full blur-[120px] hidden md:block" />
                <div className="absolute bottom-[-10%] right-[-10%] w-500px h-125 bg-blue-900/5 rounded-full blur-[120px] hidden md:block" />
            </div>

            <div className='max-w-7xl mx-auto px-4 relative z-10'>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isinView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className='text-center mb-16'
                >
                    <div className='flex justify-center items-center'>
                        <h2 className="text-[#c1121f] text-4xl md:text-6xl font-heading font-semibold mt-4 mb-6">
                            {t('model.title')}
                            <div className="w-full mt-5 h-0.75 bg-[#FAFAFA] mb-6"></div>
                        </h2>
                    </div>

                    <p className="text-muted-foreground text-[#FAFAFA] max-w-2xl mx-auto">
                        {t('model.description')}
                    </p>

                </motion.div>

                {/* Gallery */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isinView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 * index }}
                            className='group relative aspect-3/4 overflow-hidden cursor-pointer rounded-2xl border border-white/10 bg-white/5'
                        >

                            <img src={image.src}
                                alt={typeof image.title === 'string' ? image.title : "Modern Elegance"}
                                loading="lazy"
                                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                            />

                            {/* Overlay */}
                            <div className='absolute inset-0 bg-linear-to-l from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500'></div>

                            {/* Content */}
                            <div className='absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-500'>
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <span 
                                            className='inline-block px-3 py-1 text-[10px] font-medium tracking-widest uppercase rounded-full border backdrop-blur-md'
                                            style={{ 
                                                color: image.categoryColor,
                                                backgroundColor: `${image.categoryColor}1A`, // ~10% de opacidade
                                                borderColor: `${image.categoryColor}33`     // ~20% de opacidade
                                            }}
                                        >
                                            {image.category}
                                        </span>
                                        <ArrowUpRight className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={20} />
                                    </div>
                                    <h3 className='text-2xl font-heading font-medium' style={{ color: image.titleColor }}>{image.title}</h3>
                                </div>
                            </div>


                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center mt-8">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowVideo(true)}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full backdrop-blur-sm transition-all text-white group cursor-pointer"
                    >
                        <Play size={18} className="fill-current" />
                        <span className="font-medium">{t('model.button')}</span>
                    </motion.button>
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                        onClick={() => setShowVideo(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-red-500/80 text-white rounded-full transition-colors backdrop-blur-md cursor-pointer"
                            >
                                <X size={24} />
                            </button>

                            <video
                                src={workVideo} // Substitua pelo seu vídeo real
                                controls
                                autoPlay
                                playsInline
                                muted
                                poster={model1} // Imagem de capa (essencial para mobile)
                                className="w-full h-full object-cover"
                            >
                                {/* Versão Mobile (Exemplo: crie um arquivo menor e descomente a linha abaixo) */}
                                {/* <source src={mobileVideo} type="video/mp4" media="(max-width: 768px)" /> */}

                                {/* Versão Desktop / Padrão */}
                                <source src={workVideo} type="video/mp4" />
                                <source src={mobileVideo} type="video/mp4 " media="(max-width: 768px)"/>

                                Seu navegador não suporta o elemento de vídeo.
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}

export default ModelSection