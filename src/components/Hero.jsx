import { motion } from 'framer-motion';

const Hero = () => {
  const logos = Array(12).fill('SR');

  return (
    <section className="w-full pt-48 pb-32 px-6 bg-black relative overflow-hidden flex flex-col items-center">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl w-full text-center relative z-10 flex flex-col items-center">
        {/* Version Badge - High Fidelity */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-[#051109] border border-green-900/40 p-1.5 rounded-xl mb-12 flex items-center gap-4 group cursor-pointer hover:border-green-500/30 transition-all duration-300"
        >
            <div className="bg-[#0e2a16] px-4 py-1.5 rounded-lg border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <span className="text-[13px] font-black text-white tracking-tight">Sely</span>
            </div>
            
            <div className="flex items-center gap-3 pr-3">
                <div className="w-[1.5px] h-4 bg-white/20 relative">
                    <div className="absolute inset-0 bg-green-400 blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="text-[13px] font-medium text-zinc-300 group-hover:text-white transition-colors flex items-center gap-1.5">
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
          className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-8"
        >
          Premium Cheats for Real <br /> Advantage
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-500 text-lg md:text-xl max-w-2xl mb-24 font-medium leading-relaxed"
        >
          Our exclusive cheats are crafted to enhance your gameplay and dominate your opponents with ease.
        </motion.p>

        {/* Logo Marquee Section */}
        <div className="w-full relative py-8 overflow-hidden pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            <motion.div 
                animate={{ x: [0, -1920] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-24 whitespace-nowrap"
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div key={index} className="flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                        <img src="/srlogo.png" alt="SR" className="w-8 h-8 object-contain" />
                        <span className="text-xl font-black tracking-tighter text-white uppercase italic">{logo}</span>
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
