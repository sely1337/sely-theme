import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

const Navbar = ({ onStatusClick, onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Status', href: '#', isModal: true },
  ];

  return (
    <nav className={`w-full flex justify-center px-4 md:px-6 fixed left-0 right-0 z-[100] transition-all duration-[500ms] ${isMobile ? 'top-4' : 'top-[80px]'}`}>
      <motion.div 
        layout
        className={`w-full max-w-5xl bg-[#0a0a0a]/80 backdrop-blur-[20px] border border-white/10 rounded-[28px] flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative ${isMobile ? 'py-3 px-5' : 'py-3.5 px-8'}`}
        style={{ WebkitBackdropFilter: 'blur(20px)' }}
      >
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <div className="relative flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/srlogo.png" alt="SR" className="h-6 md:h-8 w-auto object-contain" />
            <span className="text-[14px] md:text-[17px] font-black tracking-tighter ml-2 md:ml-3 leading-none text-white uppercase italic">
                S<span className="text-green-500">R</span>
            </span>
          </div>
        </div>

        {/* Desktop Links */}
        {!isMobile && (
          <div className="flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.isModal) {
                      e.preventDefault();
                      onStatusClick?.();
                  }
                }}
                className="text-[13px] font-bold text-white/50 hover:text-white transition-all duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          <button 
            onClick={onLoginClick}
            className={`rounded-xl bg-white text-black font-black uppercase tracking-wider transition-all duration-300 hover:bg-green-500 hover:text-white active:scale-95 flex items-center justify-center gap-2 ${isMobile ? 'w-10 h-10' : 'px-6 py-2.5 text-[12px]'}`}
          >
            <LogIn size={isMobile ? 18 : 15} strokeWidth={3} />
            {!isMobile && 'LOGIN'}
          </button>
          
          {isMobile && (
            <button onClick={() => setIsOpen(!isOpen)} className="w-10 h-10 bg-white/5 flex items-center justify-center text-white rounded-xl hover:bg-white/10 transition-colors">
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          )}
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-[72px] left-4 right-4 p-6 bg-[#0a0a0a]/95 backdrop-blur-3xl border border-white/10 rounded-[32px] flex flex-col gap-4 z-50 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
             {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-zinc-400 hover:text-white transition-colors bg-white/5 px-6 py-4 rounded-2xl"
                onClick={(e) => {
                    setIsOpen(false);
                    if (link.isModal) {
                        e.preventDefault();
                        onStatusClick?.();
                    }
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
