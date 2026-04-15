import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Clock, Shield, Server, Cpu } from 'lucide-react';

const StatusModal = ({ isOpen, onClose }) => {
  const sections = [
    {
      title: 'VALORANT PRODUCTS',
      icon: <Cpu size={16} />,
      items: [
        { name: 'Valorant Cheat v1', sub: 'Aimbot - ESP - Wallhack', status: 'Online', time: '2m ago' },
        { name: 'Valorant Cheat v2', sub: 'Aimbot - ESP - Triggerbot - Radar', status: 'Online', time: '5m ago' },
        { name: 'Valorant Cheat v3', sub: 'Full Premium Package', status: 'Updating', time: '1h ago' },
        { name: 'Valorant Cheat v4', sub: 'Elite Package', status: 'Online', time: '10m ago' },
      ]
    },
    {
      title: 'BYPASS & SECURITY',
      icon: <Shield size={16} />,
      items: [
        { name: 'Vanguard Bypass', sub: 'Anti-cheat bypass system', status: 'Online', time: '3m ago' },
        { name: 'HWID Spoofer', sub: 'Hardware ID changer', status: 'Online', time: '8m ago' },
        { name: 'Hardware Ban Removal', sub: 'Permanent ban fix service', status: 'Offline', time: '2h ago' },
      ]
    },
    {
      title: 'INFRASTRUCTURE',
      icon: <Server size={16} />,
      items: [
        { name: 'License Server', sub: 'Authentication & key validation', status: 'Online', time: '1m ago' },
        { name: 'Payment Gateway', sub: 'Binance & crypto payments', status: 'Online', time: '4m ago' },
      ]
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-md"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="relative w-full max-w-2xl bg-[#080808] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl flex flex-col max-h-[85vh]"
          >
            {/* Header */}
            <div className="p-10 border-b border-white/5 bg-zinc-950/50 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 w-fit">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Live Status</span>
                </div>
                <h2 className="text-3xl font-black text-white tracking-tight uppercase">System Status</h2>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-2xl bg-zinc-900 border border-white/5 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-10 space-y-12 custom-scrollbar">
              {sections.map((section, sidx) => (
                <div key={sidx} className="space-y-6">
                  <div className="flex items-center gap-3 text-green-500">
                    {section.icon}
                    <span className="text-[11px] font-black uppercase tracking-[0.3em]">{section.title}</span>
                  </div>

                  <div className="space-y-4">
                    {section.items.map((item, iidx) => (
                      <div
                        key={iidx}
                        className="flex items-center justify-between p-6 rounded-[24px] bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-colors group"
                      >
                        <div className="flex flex-col gap-1">
                          <h4 className="text-white font-bold tracking-tight">{item.name}</h4>
                          <span className="text-zinc-500 text-xs">{item.sub}</span>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <div className="hidden sm:flex items-center gap-2 text-zinc-600">
                                <span className="text-[11px] font-bold">{item.time}</span>
                            </div>

                            <div className={`flex items-center gap-2 px-5 py-2 rounded-full border text-[11px] font-black uppercase tracking-widest min-w-[100px] justify-center
                                ${item.status === 'Online' ? 'bg-green-500/10 border-green-500/20 text-green-500' : 
                                  item.status === 'Updating' ? 'bg-orange-500/10 border-orange-500/20 text-orange-500' : 
                                  'bg-red-500/10 border-red-500/20 text-red-500'}`}
                            >
                                <div className={`w-1.5 h-1.5 rounded-full ${
                                    item.status === 'Online' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,1)]' : 
                                    item.status === 'Updating' ? 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,1)]' : 
                                    'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]'
                                }`}></div>
                                {item.status}
                            </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default StatusModal;
