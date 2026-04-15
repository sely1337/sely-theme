import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const LegalModal = ({ isOpen, onClose, title, sections }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="w-full max-w-2xl bg-[#080808] border border-white/5 rounded-[32px] overflow-hidden relative shadow-2xl"
        >
          {/* Header */}
          <div className="p-8 pb-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10 mb-3 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[11px] font-bold text-green-500 uppercase tracking-widest">{title}</span>
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">{title}</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-zinc-500 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <X size={20} />
            </button>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent mx-8"></div>

          {/* Content */}
          <div className="p-8 pt-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-white font-black text-lg mb-3 tracking-tight">
                    {index + 1}. {section.title}
                  </h3>
                  <p className="text-zinc-500 text-[15px] leading-relaxed font-medium">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 pt-0">
             <button 
               onClick={onClose}
               className="w-full py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-green-500 hover:text-white transition-all duration-300"
             >
                I Understand
             </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default LegalModal;
