import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    {
      name: 'xShadowRift',
      product: 'Valorant Cheat',
      text: '"Aimbot and ESP features work flawlessly. Zero lag, anti-cheat never triggers. Went from Silver to Radiant in weeks. Highly recommend."'
    },
    {
      name: 'PhantomAce',
      product: 'Valorant Cheat',
      text: '"Wallhack and ESP combo is insane. Fully aware of enemy positions, rotation decisions are so much better now. Team always wonders how I know."'
    },
    {
      name: 'SilentStrike99',
      product: 'Valorant Cheat',
      text: '"No recoil script works perfectly. Each gun has its own profile. Looks completely natural. Getting to Immortal is so much easier now."'
    },
    {
      name: 'StealthMode_K',
      product: 'Valorant Cheat',
      text: '"Skin changer is a great bonus. All the features work together seamlessly. The cheat feels premium and the price is very reasonable."'
    },
    {
      name: 'NightCrawler_TR',
      product: 'Valorant Bypass',
      text: '"Bypass system is top notch. Vanguard fully bypassed, using for 3 months with zero bans. Updates come super fast."'
    },
    {
      name: 'BanEvader_X',
      product: 'Hardware Ban Removal',
      text: '"HWID ban removal was done faster than expected. Instructions were clear and easy to follow. Playing on a fresh account with no issues."'
    },
    {
      name: 'QuantumBreach',
      product: 'Hardware Ban Removal',
      text: '"Got banned on 3 devices, they solved all of them at once. Very fair price, much cheaper than competitors. Reliable service, will use again."'
    },
    {
      name: 'RapidFire_TR',
      product: 'Valorant Cheat',
      text: '"Delivery was instant after payment. Setup guide was clear. Everything worked on first try. No issues whatsoever. 10/10 service."'
    }
  ];

  return (
    <section className="w-full py-32 px-6 md:px-12 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="flex flex-col items-center gap-6 mb-20">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/5 w-fit">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[11px] font-bold text-zinc-400">Testimonials</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
                What Our Users Say
            </h2>
            <p className="max-w-2xl text-zinc-500 text-lg leading-relaxed">
                Real players' real experiences: They share how our products have transformed their gaming journeys.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-3xl bg-zinc-950/50 border border-white/5 text-left flex flex-col gap-6 hover:border-green-500/10 transition-all duration-300"
                >
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-800 border-2 border-green-500/20">
                             <img src={`https://i.pravatar.cc/150?u=${review.name}`} alt={review.name} className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
                        </div>
                        <div>
                             <h4 className="text-white font-bold tracking-tight">{review.name}</h4>
                             <p className="text-zinc-500 text-xs">{review.product}</p>
                        </div>
                    </div>
                    <p className="text-zinc-400 text-[14px] leading-relaxed italic">
                        {review.text}
                    </p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
