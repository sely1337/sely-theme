import { motion } from 'framer-motion';

const ProductsPromo = ({ onProductClick }) => {
  const products = [
    { name: 'VALORANT INTERNAL', type: 'INTERNAL' },
    { name: 'VALORANT EXTERNAL', type: 'EXTERNAL' },
    { name: 'VALORANT BYPASS', type: 'BYPASS' },
    { name: 'VALORANT SPOOF', type: 'SPOOF' },
  ];

  return (
    <section className="w-full py-32 px-6 flex justify-center bg-black">
      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onClick={() => onProductClick?.(product)}
            className="group relative h-[380px] md:h-auto md:aspect-square bg-[#050505] border border-white/5 rounded-[40px] p-4 md:p-6 cursor-pointer overflow-hidden flex flex-col items-center justify-center gap-6 md:gap-8 hover:border-green-500/30 transition-all duration-500"
          >
            {/* Gradient Background */}
            <div className="absolute inset-2 rounded-[32px] bg-gradient-to-br from-green-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Inner Content Card */}
            <div className="absolute inset-4 rounded-[32px] bg-[#080808] border border-white/5 shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-green-900/20 via-transparent to-transparent"></div>
                
                <div className="relative h-full w-full flex flex-col items-center justify-center p-8">
                    <div className="w-20 h-20 bg-[#0c0c0c] border border-white/10 rounded-3xl flex items-center justify-center mb-8 shadow-2xl relative group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-white/5 blur-xl"></div>
                        <img 
                          src="/valo.png" 
                          alt="Valorant" 
                          className="w-14 h-14 object-contain"
                        />
                    </div>

                    {/* Product Name */}
                    <div className="text-center">
                        <h3 className="text-white font-black text-xl md:text-2xl leading-tight tracking-[0.05em] uppercase">
                            VALORANT <br />
                            <span className="text-zinc-400 group-hover:text-green-500 transition-colors">{product.type}</span>
                        </h3>
                    </div>
                </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-green-500/10 blur-[80px] rounded-full group-hover:opacity-100 opacity-0 transition-opacity"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPromo;
