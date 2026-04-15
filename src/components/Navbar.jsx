import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogIn } from 'lucide-react';

const Navbar = ({ onStatusClick, onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#' },
    { name: 'Status', href: '#', isModal: true },
  ];

  return (
    <nav className="w-full flex justify-center px-4 fixed top-[80px] left-0 right-0 z-[100]">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-5xl bg-[#0a0a0a]/70 backdrop-blur-[20px] border border-white/5 rounded-2xl py-3 px-8 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative"
        style={{
            WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        
        {/* Logo Section */}
        <div className="flex items-center gap-2 min-w-[150px]">
          <div className="relative flex items-center cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
               src="/srlogo.png" 
               alt="SR" 
               className="h-8 w-auto object-contain block group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-[17px] font-black tracking-tighter ml-3 leading-none flex items-center">
                <span className="text-white uppercase tracking-tight">S</span>
                <span className="text-green-500 uppercase tracking-tight">R</span>
            </span>
          </div>
        </div>

        {/* Links Section - Centered */}
        <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
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

        {/* Auth Section */}
        <div className="flex items-center justify-end min-w-[150px]">
          <button 
            onClick={onLoginClick}
            className="px-6 py-2.5 rounded-lg bg-white text-black text-[12px] font-black uppercase tracking-wider flex items-center gap-2 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-xl active:scale-95 group"
          >
            <LogIn size={15} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
            Login
          </button>
          
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white ml-4 p-1 hover:bg-white/5 rounded-lg transition-colors">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-20 left-4 right-4 p-8 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl md:hidden flex flex-col gap-6 z-50 shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
             {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-zinc-400 hover:text-white transition-colors"
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
             <button 
                onClick={() => {
                    setIsOpen(false);
                    onLoginClick();
                }}
                className="w-full py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-sm shadow-2xl active:scale-95 transition-all"
            >
                Login Account
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
