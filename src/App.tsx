import { useEffect, lazy, Suspense } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import './i18n/i18nity.js';
import ScrollToTop from './components/scrollToTop';
import Navbar from './components/navbar';
import HeroSection from './components/herosection';

const AboutSection = lazy(() => import('./components/aboutsection'));
const ModelSection = lazy(() => import('./components/modelsection'));
const DesignSection = lazy(() => import('./components/designsection'));
const AestheticSection = lazy(() => import('./components/aestheticsection'));
const AccommodationSection = lazy(() => import('./components/accommodation'));
const ContactSection = lazy(() => import('./components/contactsection'));
const FooterSection = lazy(() => import('./components/footer'));


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      disable: 'mobile',
    });
  }, []);

  return (
    <main>
      <Navbar />
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <AboutSection />
        <ModelSection />
        <DesignSection />
        <AestheticSection />
        <AccommodationSection />
        <ContactSection />
        <FooterSection />
      </Suspense>
    </main>
  )
}

export default App
