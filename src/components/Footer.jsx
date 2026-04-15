import { motion } from 'framer-motion';

const Footer = ({ onLegalClick, onStatusClick }) => {
  return (
    <footer className="w-full bg-black pt-32 pb-16 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          {/* Brand Column */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 mb-6">
                <img src="/srlogo.png" alt="SR" className="w-10 h-10 object-contain" />
                <div className="flex font-black text-2xl tracking-tighter italic">
                    <span className="text-white uppercase">s</span>
                    <span className="text-green-500 uppercase">r</span>
                </div>
            </div>
            <p className="text-zinc-500 text-[15px] leading-relaxed mb-8">
              Stay on top of the game with our mobile-friendly, reliable software. Choose the product that's right for you and start winning right away!
            </p>
            <div className="flex items-center gap-6">
              {/* Facebook */}
              <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Discord */}
              <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42.001 1.333-.956 2.418-2.157 2.418z"/></svg>
              </a>
              {/* X */}
              <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-zinc-500 hover:text-white transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-wrap gap-16 md:gap-24 lg:gap-32">
            <div className="flex flex-col gap-6">
                <h4 className="text-white font-bold text-lg">Quick Links</h4>
                <ul className="flex flex-col gap-4 text-zinc-500 text-[14px]">
                    <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors duration-300 text-left">Home</button></li>
                    <li><button className="hover:text-white transition-colors duration-300 text-left">Products</button></li>
                    <li><button onClick={onStatusClick} className="hover:text-white transition-colors duration-300 text-left">Status</button></li>
                </ul>
            </div>

            <div className="flex flex-col gap-6">
                <h4 className="text-white font-bold text-lg">Legal</h4>
                <ul className="flex flex-col gap-4 text-zinc-500 text-[14px]">
                    <li><button onClick={() => onLegalClick('privacy')} className="hover:text-white transition-colors duration-300 text-left">Privacy Policy</button></li>
                    <li><button onClick={() => onLegalClick('refund')} className="hover:text-white transition-colors duration-300 text-left">Refund Policy</button></li>
                    <li><button onClick={() => onLegalClick('terms')} className="hover:text-white transition-colors duration-300 text-left">Terms of Service</button></li>
                </ul>
            </div>

            <div className="flex flex-col gap-6">
                <h4 className="text-white font-bold text-lg">Support</h4>
                <ul className="flex flex-col gap-4 text-zinc-500 text-[14px]">
                    <li><a href="#" className="hover:text-white transition-colors duration-300">E-Mail Support Line</a></li>
                    <li><a href="#" className="hover:text-white transition-colors duration-300">WhatsApp Support Line</a></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Separator and Copyright */}
        <div className="w-full h-[1px] bg-white/5 mb-12"></div>
        <div className="text-center text-zinc-600 text-[14px] font-medium">
          <p>© 2026 - All rights reserved, Developed by <span className="text-zinc-500">Sely</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
