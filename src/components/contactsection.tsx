import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Mail, MessageCircle, Send} from 'lucide-react';
import emailjs from '@emailjs/browser';
import Toast from './toast';

const ContactSection = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // IDs do EmailJS via variáveis de ambiente
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then(() => {
        setToast({ message: t('contact.toast.success'), type: 'success' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch((error) => {
        console.error('Erro ao enviar:', error.text || error);
        setToast({ message: t('contact.toast.error'), type: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const socialLinks = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/5562994083233', color: 'hover:text-green-500' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/rafaeljesusof_/', color: 'hover:text-pink-500' },
    { icon: Mail, label: 'E-mail', href: 'mailto:Rafaeljesusmiiranda@gmail.com', color: 'hover:text-primary' },
  ];

  return (
    <section id="contato" className="section-padding bg-[#0D0D0D] text-white py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-4 mb-2 line-accent pb-6 text-[#c1121f] w-fit">
              {t('contact.title')}
              <div className="w-full mt-5 h-0.75 bg-[#FAFAFA] "></div>
            </h2>

            <p className="text-[#FAFAFA] leading-relaxed mb-10 max-w-md">
              {t('contact.description')}
            </p>

            {/* Social Links */}
            <div className="space-y-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 text-white transition-colors ${social.color} group`}
                >
                  <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-[#c1121f] transition-colors rounded-md">
                    <social.icon size={20} />
                  </div>
                  <div>
                    <span className="font-medium">{social.label}</span>
                    <p className="text-md text-[#A6A6A6]">{t('contact.social.connect')}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            {/* Clipboard Container */}
            <div className="relative bg-[#161616] rounded-3xl p-8 pt-24 border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">

              {/* Clip Visual */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-16 bg-[#1a1a1a] rounded-b-2xl border-b border-x border-white/10 shadow-xl flex flex-col items-center justify-end pb-4 z-10">
                <div className="w-24 h-2 bg-[#333] rounded-full"></div>
              </div>
              
              {/* Metal Ring */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full border-4 border-[#2a2a2a] z-20 bg-[#0D0D0D]"></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">{t('contact.form.nameLabel')}</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 px-4 py-3 text-foreground focus:border-[#c1121f] focus:outline-none transition-colors rounded-lg"
                      placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">{t('contact.form.emailLabel')}</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-black/20 border border-white/10 px-4 py-3 text-foreground focus:border-[#c1121f] focus:outline-none transition-colors rounded-lg"
                      placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">{t('contact.form.subjectLabel')}</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-white/10 px-4 py-3 text-foreground focus:border-[#c1121f] focus:outline-none transition-colors rounded-lg"
                  >
                    <option value="">{t('contact.form.subjectDefault')}</option>
                    <option value="modelo">{t('contact.form.subjects.model')}</option>
                    <option value="design">{t('contact.form.subjects.design')}</option>
                    <option value="consultoria">{t('contact.form.subjects.consulting')}</option>
                    <option value="hospedagem">{t('contact.form.subjects.hosting')}</option>
                    <option value="outro">{t('contact.form.subjects.other')}</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">{t('contact.form.messageLabel')}</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/20 border border-white/10 px-4 py-3 text-foreground focus:border-[#c1121f] focus:outline-none transition-colors resize-none rounded-lg"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#c1121f] text-white rounded-xl font-medium transition-all duration-300 hover:bg-[#df0211] shadow-[0_0_15px_rgba(193,18,31,0.5)] hover:shadow-[0_0_25px_rgba(193,18,31,0.7)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? t('contact.form.submitSending') : t('contact.form.submitDefault')}
                  {!loading && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        <AnimatePresence>
          {toast && (
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => setToast(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;