import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, Lock, LogIn, UserPlus, Send } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, initialMode = 'login' }) => {
  const [mode, setMode] = useState(initialMode); // 'login', 'register', or 'forgot'

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-md bg-[#080808] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 pb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 w-fit">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">
                    {mode === 'forgot' ? 'Forgot Password' : mode}
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-900 border border-white/5 text-zinc-500 hover:text-white transition-colors"
                id="close-auth-modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="px-8 pb-10 flex flex-col gap-8 text-center">
                <div className="flex flex-col items-center gap-2">
                    <div className="flex font-black text-2xl tracking-tighter italic mb-4">
                        <span className="text-white uppercase">se</span>
                        <span className="text-green-500 uppercase">ly</span>
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tight text-left w-full">
                        {mode === 'login' ? 'Welcome Back' : mode === 'register' ? 'Create Account' : 'Reset Password'}
                    </h2>
                    <p className="text-zinc-500 text-[15px] text-left w-full">
                        {mode === 'login' ? 'Login to access your account and licenses' : 
                         mode === 'register' ? 'Join us to get the best cheat solutions today' : 
                         'Enter your email and we will send you a reset link.'}
                    </p>
                </div>

                {/* Tab Switcher (Only if not in forgot mode) */}
                {mode !== 'forgot' && (
                    <div className="grid grid-cols-2 p-1.5 bg-zinc-900/50 rounded-2xl border border-white/5">
                        <button
                            onClick={() => setMode('login')}
                            className={`py-3 rounded-xl font-bold text-sm transition-all duration-300 ${mode === 'login' ? 'bg-green-500 text-black shadow-lg shadow-green-500/20' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setMode('register')}
                            className={`py-3 rounded-xl font-bold text-sm transition-all duration-300 ${mode === 'register' ? 'bg-green-500 text-black shadow-lg shadow-green-500/20' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            Register
                        </button>
                    </div>
                )}

                {/* Form */}
                <div className="flex flex-col gap-5 text-left">
                    {mode === 'register' && (
                        <div className="flex flex-col gap-2.5">
                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Username</label>
                            <input
                                type="text"
                                placeholder="yourusername"
                                className="w-full px-6 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl text-zinc-200 focus:outline-none focus:border-green-500/50 transition-colors"
                            />
                        </div>
                    )}
                    
                    <div className="flex flex-col gap-2.5">
                        <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full px-6 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl text-zinc-200 focus:outline-none focus:border-green-500/50 transition-colors"
                        />
                    </div>

                    {mode !== 'forgot' && (
                        <div className="flex flex-col gap-2.5">
                            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest ml-1">Password</label>
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full px-6 py-4 bg-zinc-900/50 border border-white/5 rounded-2xl text-zinc-200 focus:outline-none focus:border-green-500/50 transition-colors"
                            />
                            {mode === 'login' && (
                                <button 
                                    onClick={() => setMode('forgot')}
                                    className="text-[11px] font-bold text-green-500 mt-1 hover:underline text-right"
                                >
                                    Forgot password?
                                </button>
                            )}
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-4">
                    <button className="w-full py-5 bg-green-500 hover:bg-green-400 text-black font-black text-lg rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_30px_rgba(34,197,94,0.3)] uppercase tracking-tight">
                        {mode === 'login' ? <LogIn size={20} /> : mode === 'register' ? <UserPlus size={20} /> : <Send size={20} className="fill-current" />}
                        {mode === 'login' ? 'Login' : mode === 'register' ? 'Register' : 'Send Reset Link'}
                    </button>

                    {mode === 'forgot' ? (
                        <p className="text-zinc-600 text-[13px] font-bold">
                            Remember your password?{' '}
                            <button
                                onClick={() => setMode('login')}
                                className="text-green-500 hover:underline"
                            >
                                Login
                            </button>
                        </p>
                    ) : (
                        <p className="text-zinc-600 text-sm font-bold">
                            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}{' '}
                            <button
                                onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                                className="text-green-500 hover:underline"
                            >
                                {mode === 'login' ? 'Register' : 'Login'}
                            </button>
                        </p>
                    )}
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
