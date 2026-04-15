import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
  const logos = Array(12).fill('SR');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="w-full pt-40 md:pt-48 pb-24 md:pb-32 px-4 md:px-6 bg-black relative overflow-hidden flex flex-col items-center">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-green-500/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-4xl text-center relative z-10 flex flex-col items-center">
        {/* Version Badge */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="bg-[#051109] border border-green-900/40 p-1 rounded-xl mb-8 md:mb-12 flex items-center gap-3 md:gap-4 group cursor-pointer hover:border-green-500/30 transition-all duration-300 w-fit mx-auto"
        >
            <div className="bg-[#0e2a16] px-3 md:px-4 py-1.5 rounded-lg border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <span className="text-[11px] md:text-[13px] font-black text-white tracking-tight">Sely</span>
            </div>
            
            <div className="flex items-center gap-2 md:gap-3 pr-3">
                <div className="w-[1.5px] h-3 md:h-4 bg-white/20"></div>
                <span className="text-[11px] md:text-[13px] font-medium text-zinc-300 group-hover:text-white transition-colors flex items-center gap-1.5">
                    sr theme v0.1
                    <span className="text-zinc-500 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
            </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6 md:mb-8 px-2 uppercase"
        >
          {isMobile ? (
            <>Premium Cheats <br /> Real Advantage</>
          ) : (
            <>Premium Cheats for <br /> Real Advantage</>
          )}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 text-sm md:text-xl max-w-[320px] md:max-w-2xl mb-16 md:mb-24 font-medium leading-relaxed mx-auto"
        >
          Our exclusive cheats are crafted to enhance your gameplay and dominate your opponents with ease.
        </motion.p>

        {/* Logo Marquee Section */}
        <div className="w-full relative py-6 md:py-8 overflow-hidden pointer-events-none opacity-40">
            <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <motion.div 
                animate={{ x: [0, -1000] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            >
                {[...logos, ...logos, ...logos].map((logo, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <img src="/srlogo.png" alt="SR" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                        <span className="text-lg md:text-xl font-black tracking-tighter text-white uppercase italic">{logo}</span>
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
