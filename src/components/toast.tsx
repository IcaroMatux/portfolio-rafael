import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

const Toast = ({ message, type, onClose, duration = 5000 }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: 20, x: '-50%' }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="fixed bottom-8 left-1/2 z-50 flex items-center gap-4 px-6 py-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] border border-white/10 bg-[#1a1a1a]/95 backdrop-blur-md min-w-[320px] max-w-[90vw]"
    >
      <div className={`shrink-0 ${type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
        {type === 'success' ? <CheckCircle size={22} /> : <AlertCircle size={22} />}
      </div>
      
      <p className="text-white text-sm font-medium flex-1 leading-tight">{message}</p>
      
      <button 
        onClick={onClose} 
        className="shrink-0 p-1 hover:bg-white/10 rounded-full transition-colors text-white/40 hover:text-white cursor-pointer"
        aria-label="Fechar notificação"
      >
        <X size={18} />
      </button>
    </motion.div>
  );
};

export default Toast;
