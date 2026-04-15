import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does the cheat work after purchase?',
      answer: 'After purchase, you will receive an email with your license key and a download link for our specialized loader. Simply run the loader, enter your key, and the cheat will be injected automatically.'
    },
    {
      question: 'Is the cheat safe to use?',
      answer: "Yes, our cheats are developed with a primary focus on security and undetectability. We use advanced obfuscation and kernel-level drivers to stay ahead of anti-cheat systems like Vanguard."
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including Credit/Debit Cards, Cryptocurrencies (Bitcoin, Ethereum, USDT), and Binance Gift Cards.'
    },
    {
      question: 'How fast is delivery after payment?',
      answer: 'Delivery is instant. Our automated system sends the license key and instructions to your registered email address immediately after payment confirmation.'
    },
    {
      question: 'What happens when the game gets an update?',
      answer: 'When a game updates, our team works quickly to update the cheat. The loader will automatically notify you when an update is available or if the cheat is temporarily under maintenance.'
    },
    {
      question: 'Can I use the cheat on multiple PCs?',
      answer: 'Our licenses are typically locked to one HWID. If you need to change your PC, please contact our support team for a HWID reset.'
    },
    {
      question: 'Do you offer customer support?',
      answer: 'Absolutely. We provide 24/7 technical support through our Discord server and ticket system to assist you with any questions or installation issues.'
    },
    {
      question: 'What is your refund policy?',
      answer: "We offer refunds only in cases where our software is not compatible with your system and our support team cannot resolve the issue. Please read our Terms of Service for full details."
    }
  ];

  return (
    <section className="w-full py-32 px-6 md:px-12 bg-black relative">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className="flex flex-col items-center gap-6 mb-20">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[11px] font-bold text-zinc-400">FAQ</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                Frequently Asked Questions
            </h2>
            <p className="max-w-2xl text-zinc-500 text-lg">
                Find answers to the most common queries to help you get the most out of our platform.
            </p>
        </div>

        <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/5 py-2">
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="w-full flex items-center justify-between py-6 text-left group transition-all duration-300"
                    >
                        <span className={`text-lg font-bold transition-all duration-300 ${openIndex === i ? 'text-green-500' : 'text-zinc-200 group-hover:text-green-500'}`}>
                            {faq.question}
                        </span>
                        <div className={`p-1 rounded-full transition-all duration-300 ${openIndex === i ? 'rotate-45 text-green-500' : 'text-zinc-500 group-hover:text-green-500'}`}>
                            <Plus size={20} />
                        </div>
                    </button>
                    
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <p className="pb-8 text-zinc-400 leading-relaxed text-left max-w-3xl pr-12">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
