import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import heroImage from '../assets/images/herosectionbg.jpg';
import { useTranslation } from 'react-i18next';


const HeroSection = () => {
    const { t } = useTranslation();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={heroImage}
                    alt=""
                    // @ts-ignore
                    fetchPriority="high"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0F0F0F] opacity-60" />
            </div>

            {/* Conteúdo */}
            <div
                className="
        relative
        z-10
        w-full
        max-w-7xl
        mx-auto
        px-6
        mt-20
        md:px-12
        flex
        flex-col
        items-center
        text-center
      "
            >
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="
            font-heading
            text-6xl
            md:text-7xl
            lg:text-8xl
            font-semibold
            leading-[0.9]
            mb-8
            text-[#FAFAFA]
          "
                    >
                        {t('hero.titlePrefix')}
                        
                        <span className="text-[#C1121F]">
                            <Typewriter
                                options={{
                                    strings: t('hero.typewriter', { returnObjects: true }) as string[],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 100,
                                }}
                            />
                        </span>
                        {t('hero.titleSuffix')}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="
            text-[#FAFAFA]
            text-base
            md:text-xl
            max-w-md
            mx-auto
            mb-8
            leading-relaxed
            opacity-90
          "
                    >
                        {t('hero.description')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <a
                            href="#modelo"
                            className="
              group
              inline-flex
              items-center
              gap-3
              px-8
              py-4
              bg-primary
              text-primary-foreground
              font-medium
              transition-all
              duration-300
              hover:bg-[#780000]
              text-[#FAFAFA]
              border
              backdrop-blur-md
              bg-white/20
              border-white/30
              rounded-md
            "
                        >
                            {t('hero.buttons.portfolio')}
                            <span className="transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </a>

                        <a
                            href="#contato"
                            className="
              inline-flex
              items-center
              gap-3
              px-15
              py-4
            rounded-md
              border
              backdrop-blur-md
              border-white/30  
              bg-white/20
               hover:bg-[#780000]
              text-[#FAFAFA]
              font-medium
              transition-all
              duration-300
              hover:border-primary
              hover:text-primary
            "
                        >
                            {t('hero.buttons.contact')}
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );

};

export default HeroSection;