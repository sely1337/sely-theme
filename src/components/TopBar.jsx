import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const TopBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Hide top bar completely on mobile to save vertical space
  if (isMobile) return null;

  return (
    <div className="w-full h-[60px] bg-[#050505] border-b border-white/5 flex items-center justify-between px-6 md:px-12 fixed top-0 left-0 right-0 z-[110]">
      {/* Social Links */}
      <div className="flex items-center gap-6">
        <a href="#" className="flex items-center gap-2 group">
            <img src="/srlogo.png" alt="SR" className="w-6 h-6 object-contain" />
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">sely.store</span>
        </a>
      </div>

      {/* Stats - Hidden on Mobile */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">329 Users Online</span>
        </div>
        <div className="w-[1px] h-3 bg-white/10"></div>
        <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Undetected</span>
        </div>
      </div>

      {/* Brand Icon */}
      <div className="flex items-center gap-2">
        <img src="/srlogo.png" alt="SR" className="w-6 h-6 object-contain" />
        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest hidden sm:inline">sely.store</span>
      </div>
    </div>
  );
};

export default TopBar;
