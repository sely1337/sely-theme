import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Creative Dashboard',
    category: 'Web Design',
    image: '/project1.png',
  },
  {
    title: 'Future Fintech',
    category: 'Mobile App',
    image: '/project2.png',
  },
];

const Work = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Öne Çıkan Projeler</h2>
            <p className="text-muted-foreground text-lg">Tutkuyla inşa ettiğimiz dijital işler.</p>
          </div>
          <button className="hidden md:block px-8 py-3 rounded-xl border border-border font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all">
            Tümünü Gör
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-zinc-200 dark:bg-zinc-800">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                {project.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
