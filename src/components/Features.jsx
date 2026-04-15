import { motion } from 'framer-motion';

const Features = () => {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
         <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-green-500/10 blur-[100px] rounded-full"></div>
         <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-green-500/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6 mb-20 text-center">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[11px] font-bold text-zinc-400">Why Us?</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                Why Should You Choose Us?
            </h2>
            <p className="max-w-2xl text-zinc-500 text-lg">
                Secure Payments, Advanced Support, Multiple Payment Systems, and more...
            </p>
        </div>

        {/* Row 1: Big Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Binance Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-10 rounded-[40px] bg-[#050505] border border-white/5 text-left h-[450px] relative overflow-hidden group"
            >
                <div>
                   <h3 className="text-2xl font-black text-white mb-2">Binance Gift Card</h3>
                   <p className="text-zinc-500 text-[15px] max-w-xs">Don't worry if you don't have a card. You can complete your purchases by paying with a Binance Gift Card.</p>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-20">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-[300px] h-[300px] bg-green-500/5 blur-[60px] rounded-full"></div>
                        <div className="z-10 flex flex-col items-center">
                            <div className="w-16 h-16 bg-zinc-900 rounded-2xl border border-white/5 flex items-center justify-center mb-4">
                                <div className="w-8 h-8 bg-[#f3ba2f] rotate-45 flex items-center justify-center">
                                     <div className="w-4 h-4 bg-zinc-900 -rotate-45"></div>
                                </div>
                            </div>
                            <span className="text-3xl font-black text-green-500 tracking-tight">BINANCE</span>
                            <span className="text-[10px] font-bold text-white tracking-[0.5em] mt-1 opacity-60 uppercase">Gift Card</span>
                        </div>
                        {/* Glow Dots */}
                        <div className="absolute -left-24 top-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                            </div>
                        </div>
                        <div className="absolute -right-24 top-1/2 -translate-y-1/2">
                            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Secure Payment Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="p-10 rounded-[40px] bg-[#050505] border border-white/5 text-left h-[450px] relative overflow-hidden group"
            >
                <div>
                   <h3 className="text-2xl font-black text-white mb-2">Secure Payment</h3>
                   <p className="text-zinc-500 text-[15px] max-w-xs">All payment systems feature a secure payment infrastructure. None of your information is stored after the transaction.</p>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-20">
                    <div className="relative flex items-center justify-center">
                         <div className="absolute w-[400px] h-[400px] bg-green-500/5 blur-[80px] rounded-full"></div>
                         <div className="w-32 h-44 border-2 border-green-500/30 rounded-t-[60px] rounded-b-2xl relative flex items-center justify-center overflow-hidden bg-zinc-950/40">
                             <div className="w-10 h-10 rounded-full border-4 border-white/80 mb-8"></div>
                             <div className="absolute bottom-8 left-0 right-0 h-[1px] bg-green-500/50"></div>
                             <span className="absolute bottom-4 text-[9px] font-black text-green-500 tracking-widest uppercase">Secure Layer</span>
                         </div>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Row 2: Smaller Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bitcoin Card */}
            <motion.div className="p-10 rounded-[40px] bg-[#050505] border border-white/5 text-left h-[400px] relative overflow-hidden group">
                <h3 className="text-xl font-black text-white mb-2">Payment With Bitcoin</h3>
                <p className="text-zinc-500 text-[14px]">In the payment section, to multiple Bitcoin addresses.</p>
                <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-32 h-32 bg-orange-500/10 blur-[40px] rounded-full"></div>
                        <div className="w-20 h-20 bg-[#0c0c0c] border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl relative group-hover:scale-110 transition-transform duration-500">
                             <div className="absolute inset-0 bg-orange-500/10 blur-xl rounded-full"></div>
                             <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
                                <circle cx="12" cy="12" r="10" stroke="url(#btcGradient)" strokeWidth="2.5" fill="#111" />
                                <path d="M12 6V8M12 16V18M14.5 8H10.5V16H14.5C15.6046 16 16.5 15.1046 16.5 14C16.5 12.8954 15.6046 12 14.5 12C15.6046 12 16.5 11.1046 16.5 10C16.5 8.89543 15.6046 8 14.5 8ZM8.5 8H10.5H12.5M8.5 16H10.5H14.5" stroke="#f7931a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <defs>
                                    <linearGradient id="btcGradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                                        <stop offset="0" stopColor="#f7931a" />
                                        <stop offset="1" stopColor="#ffb81c" />
                                    </linearGradient>
                                </defs>
                             </svg>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Global Market Card */}
            <motion.div className="p-10 rounded-[40px] bg-[#050505] border border-white/5 text-left h-[400px] relative overflow-hidden group">
                <h3 className="text-xl font-black text-white mb-2">Global Market Access</h3>
                <p className="text-zinc-500 text-[14px]">You can shop anywhere in the world with all cards.</p>
                <div className="absolute bottom-0 right-0 w-full h-1/2 flex items-center justify-center pointer-events-none">
                     <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute w-40 h-40 bg-green-500/5 blur-[50px] rounded-full"></div>
                        <svg width="240" height="240" viewBox="0 0 400 300" className="opacity-40 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-110 transition-transform">
                            <ellipse cx="200" cy="150" rx="150" ry="80" stroke="#22c55e" strokeWidth="1" fill="none" strokeDasharray="5 5" />
                            <ellipse cx="200" cy="150" rx="100" ry="50" stroke="#22c55e" strokeWidth="1" fill="none" />
                            <circle cx="200" cy="150" r="30" stroke="#22c55e" strokeWidth="2" fill="none" />
                            <circle cx="200" cy="150" r="4" fill="#22c55e" className="animate-pulse" />
                            
                            <motion.circle 
                                animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                cx="100" cy="120" r="3" fill="#22c55e" 
                            />
                            <motion.circle 
                                animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0.4, 0.1] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                                cx="300" cy="180" r="3" fill="#22c55e" 
                            />
                             <motion.circle 
                                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
                                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                cx="250" cy="90" r="2" fill="#22c55e" 
                            />
                        </svg>
                     </div>
                </div>
            </motion.div>

            {/* Fast Delivery Card */}
            <motion.div className="p-10 rounded-[40px] bg-gradient-to-br from-green-950/40 via-zinc-950 to-black border border-white/10 text-center h-[400px] relative overflow-hidden group shadow-[inset_0_0_60px_rgba(34,197,94,0.1)]">
                <h3 className="text-xl font-black text-white mb-2">Fast Delivery</h3>
                <p className="text-zinc-500 text-[14px]">Once payment is complete, the product will be delivered to you as soon as possible.</p>
                
                <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 gap-8 pointer-events-none">
                    <div className="px-8 py-4 rounded-full bg-green-500/20 border border-green-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                        <span className="text-lg font-black text-white tracking-tight uppercase">Payment Completed</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-bounce">
                            <path d="M12 4L12 20M12 4L18 10M12 4L6 10" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[10px] font-black text-green-500 tracking-[0.4em] uppercase">Fast Delivery</span>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
