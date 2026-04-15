import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Zap, ShieldCheck, Heart, Star, LayoutGrid } from 'lucide-react';

const ProductModal = ({ isOpen, onClose, product }) => {
  const [selectedPlan, setSelectedPlan] = useState('1 Month');
  
  const plans = [
    { name: '3 Day', price: '$10', off: '' },
    { name: '1 Week', price: '$25', off: '5% OFF' },
    { name: '1 Month', price: '$60', off: '15% OFF', popular: true },
    { name: 'Unlimited', price: '$150', off: 'BEST VALUE' },
  ];

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="relative w-full max-w-4xl bg-[#050505] border border-green-500/20 rounded-[48px] overflow-hidden shadow-[0_0_80px_rgba(34,197,94,0.15)] flex flex-col md:flex-row h-auto md:h-[600px]"
          >
            {/* Design Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/5 blur-[100px] rounded-full -ml-32 -mb-32"></div>

            {/* Left Side: Brand & Status */}
            <div className="w-full md:w-[40%] bg-gradient-to-br from-green-950/40 via-transparent to-transparent p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5 relative">
              <div className="flex flex-col gap-6">
                 <div className="w-20 h-20 bg-green-500/10 border border-green-500/20 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                    <img src="/valo.png" alt="Icon" className="w-12 h-12 object-contain" />
                 </div>
                 <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500 text-black text-[9px] font-black uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></div>
                            Undetected
                        </span>
                        <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Build 4.2.1</span>
                    </div>
                    <h2 className="text-4xl font-black text-white leading-tight uppercase tracking-tighter italic">
                        {product.name}
                    </h2>
                 </div>
              </div>

              <div className="flex flex-col gap-5 mt-12 md:mt-0">
                 {[
                    { icon: ShieldCheck, text: 'Kernel Level Security', color: 'text-green-500' },
                    { icon: Zap, text: 'Instant Delivery', color: 'text-green-500' },
                    { icon: Star, text: 'High Quality Build', color: 'text-green-500' }
                 ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                        <item.icon size={18} className={item.color} />
                        <span className="text-xs font-bold text-zinc-400 uppercase tracking-wide">{item.text}</span>
                    </div>
                 ))}
              </div>
            </div>

            {/* Right Side: Options & Actions */}
            <div className="flex-1 p-10 flex flex-col justify-between gap-8 relative z-10">
               <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em]">Purchase Plan</span>
                  <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                    <X size={20} className="text-zinc-500" />
                  </button>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  {plans.map((plan) => (
                    <button
                        key={plan.name}
                        onClick={() => setSelectedPlan(plan.name)}
                        className={`relative p-5 rounded-3xl border transition-all duration-500 flex flex-col gap-1 overflow-hidden group ${selectedPlan === plan.name ? 'bg-green-500 border-green-500 shadow-[0_10px_40px_rgba(34,197,94,0.3)]' : 'bg-white/5 border-white/5 hover:border-green-500/20'}`}
                    >
                        {plan.off && (
                            <span className={`absolute top-4 right-4 text-[8px] font-bold px-2 py-0.5 rounded-full ${selectedPlan === plan.name ? 'bg-black/20 text-black' : 'bg-green-500/10 text-green-500 font-black'}`}>
                                {plan.off}
                            </span>
                        )}
                        <span className={`text-[10px] font-black uppercase tracking-widest ${selectedPlan === plan.name ? 'text-black opacity-60' : 'text-zinc-500'}`}>{plan.name}</span>
                        <span className={`text-2xl font-black ${selectedPlan === plan.name ? 'text-black' : 'text-white'}`}>{plan.price}</span>
                        
                        <div className={`absolute bottom-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity ${selectedPlan === plan.name ? 'text-black' : 'text-green-500/20'}`}>
                            <Star size={14} />
                        </div>
                    </button>
                  ))}
               </div>

               <div className="flex flex-col gap-6">
                    <div className="space-y-4">
                         <div className="relative group">
                            <input 
                                type="email" 
                                placeholder="YOUR EMAIL ADDRESS" 
                                className="w-full bg-[#0a0a0a] border border-white/5 rounded-2xl px-6 py-4 text-xs font-black tracking-widest uppercase focus:outline-none focus:border-green-500/50 transition-all text-white placeholder:opacity-30"
                            />
                            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-green-500/20 scale-x-0 group-focus-within:scale-x-100 transition-transform"></div>
                         </div>
                    </div>

                    <button className="w-full relative group">
                        <div className="absolute inset-0 bg-green-500 blur-2xl opacity-10 group-hover:opacity-40 transition-opacity"></div>
                        <div className="relative w-full py-5 bg-green-500 rounded-2xl flex items-center justify-center gap-3 text-black font-black text-lg uppercase tracking-tight shadow-xl shadow-green-500/10 active:scale-[0.98] transition-all">
                           <Zap size={22} className="fill-black" />
                           Unlock Access Now
                        </div>
                    </button>
               </div>

               <div className="flex items-center justify-center gap-6 opacity-30 grayscale group-hover:opacity-60 transition-opacity">
                  <div className="flex items-center gap-2">
                    <LayoutGrid size={14} className="text-zinc-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Instant Delivery</span>
                  </div>
                  <div className="w-[1px] h-3 bg-white/10"></div>
                  <div className="flex items-center gap-2">
                    <Heart size={14} className="text-zinc-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Loved by Students</span>
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
