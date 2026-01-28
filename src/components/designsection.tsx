import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import designImg from '../assets/images/design-1.jpg';
import designImg2 from '../assets/images/design-2.jpg';
import designImg3 from '../assets/images/design-3.jpg';
import rafaelImg2 from '../assets/images/design-4.jpg';
import hospedagemImg from '../assets/images/design-5.jpg';
import hospedagemImg2 from '../assets/images/design-6.jpg';

const DesignSection = () => {

  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [showAll, setShowAll] = useState(false);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const projects = [
    {
      title: t('design.projects.0.title'),
      category: t('design.projects.0.category'),
      objective: t('design.projects.0.objective'),
      solution: t('design.projects.0.solution'),
      result: t('design.projects.0.result'),
      image: designImg,
    },

    {
      title: t('design.projects.1.title'),
      category: t('design.projects.1.category'),
      objective: t('design.projects.1.objective'),
      solution: t('design.projects.1.solution'),
      result: t('design.projects.1.result'),
      image: designImg2,
      imagePosition: 'object-top',
    },
    {
      title: t('design.projects.2.title'),
      category: t('design.projects.2.category'),
      objective: t('design.projects.2.objective'),
      solution: t('design.projects.2.solution'),
      result: t('design.projects.2.result'),
      image: designImg3,
    },

    {
      title: t('design.projects.3.title'),
      category: t('design.projects.3.category'),
      objective: t('design.projects.3.objective'),
      solution: t('design.projects.3.solution'),
      result: t('design.projects.3.result'),
      image: rafaelImg2,
    },
    {
      title: t('design.projects.4.title'),
      category: t('design.projects.4.category'),
      objective: t('design.projects.4.objective'),
      solution: t('design.projects.4.solution'),
      result: t('design.projects.4.result'),
      image: hospedagemImg,
    },

    {
      title: t('design.projects.5.title'),
      category: t('design.projects.5.category'),
      objective: t('design.projects.5.objective'),
      solution: t('design.projects.5.solution'),
      result: t('design.projects.5.result'),
      image: hospedagemImg2,
    },

  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  const handleToggleProjects = () => {
    if (showAll) {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(prev => !prev);
  }




  return (
    <section ref={sectionRef} id='design' className='text-white py-24 section-padding overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6'>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className='text-center mb-12'
        >

          <div className='flex justify-center items-center'>
            <h2 className="text-4xl text-[#c1121f] font-heading  md:text-6xl font-semibold mt-4 mb-6">
              {t('design.title')}
              <div className="w-full mt-5 h-0.75 bg-[#FAFAFA] mb-6"></div>
            </h2>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('design.description')}
          </p>
        </motion.div>

        {/* Projects Area */}

        <motion.div layout className='grid lg:grid-cols-3 gap-8'>
          <AnimatePresence mode='popLayout'>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1, transition: { duration: 0.5, delay: index * 0.1 } } : {}}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              transition={{ duration: 0.4 }}
              whileHover="hover"
              onMouseMove={(e) => {
                if (window.innerWidth < 768) return; // Performance: Não calcula em mobile
                const { currentTarget, clientX, clientY } = e;
                const { left, top } = currentTarget.getBoundingClientRect();
                const x = clientX - left;
                const y = clientY - top;
                currentTarget.style.setProperty("--mouse-x", `${x}px`);
                currentTarget.style.setProperty("--mouse-y", `${y}px`);
              }}
              className='group relative h-full border border-[#A6A6A6]/30 bg-[#0D0D0D] rounded-lg overflow-hidden'
            >

              {/* Spotlight Effect */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10"
                style={{
                  background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(193, 18, 31, 0.15), transparent 40%)`,
                }}
              />

              {/* Light Effect */}
              <motion.div
                initial={{ opacity: 0, top: "-20%", right: "-20%" }}
                variants={{
                  hover: {
                    opacity: 1,
                    top: ["-20%", "100%"],
                    right: ["-20%", "100%"],
                    transition: {
                      opacity: { duration: 0.5 },
                      top: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                      right: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                    }
                  }
                }}
                className="absolute w-64 h-64 bg-[#c1121f]/30 blur-[100px] rounded-full pointer-events-none z-0 hidden md:block"
              />

              <div className='relative h-full p-8 z-20'>
                <div className="relative z-10">
                  {/* Header - Image */}
                  <div className="w-full aspect-4/3 mb-6 overflow-hidden rounded-md">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${project.imagePosition || 'object-center'}`}
                    />
                  </div>

                  <span className="text-xs tracking-[0.2em] text-[#c1121f] uppercase">
                    {project.category}
                  </span>

                  <h3 className="text-xl font-medium mt-2 mb-4 group-hover:text-[#c1121f] transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">{t('design.labels.objective')}</span>
                      <p className="text-foreground mt-1">{project.objective}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{t('design.labels.solution')}</span>
                      <p className="text-foreground mt-1">{project.solution}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">{t('design.labels.result')}</span>
                      <p className="font-medium mt-1">{project.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </motion.div>

        {/* Button Area */}
        <div className='mt-12 flex justify-center'>
          <motion.button
            onClick={handleToggleProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 tracking-wide text-md bg-[#c1121f] text-white rounded-full hover:bg-[#df0211] transition-all duration-300 shadow-[0_0_15px_rgba(193,18,31,0.5)] hover:shadow-[0_0_25px_rgba(193,18,31,0.7)]"
          >
            {showAll ? t('design.buttons.viewLess') : t('design.buttons.viewAll')}
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default DesignSection