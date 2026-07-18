import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 border-b border-brand-dark/10">
      <div className="relative z-10 flex-1">
        <div className="mb-6">
          <span className="px-4 py-1.5 border border-brand-dark rounded-full text-[11px] uppercase font-bold tracking-widest text-brand-dark">Residential & Commercial</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-dark mb-6 leading-none"
        >
          Designing <br/><span className="italic text-brand-accent">Spaces</span> You'll Love.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-brand-text mb-10 max-w-md font-normal leading-relaxed"
        >
          Modern interior solutions focused on functional, sustainable, and creative design since 2018. Over 500 transformations delivered with precision.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-4 bg-brand-primary hover:bg-brand-dark text-white px-8 py-4 text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Book Consultation
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>

      <div className="flex-1 w-full relative h-[500px]">
         <div className="absolute top-1/2 -translate-y-1/2 right-0 w-3/4 h-[80%] bg-brand-primary opacity-5 rounded-t-[200px] z-0" />
         <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
          alt="Beautiful modern living room"
          className="w-full h-full object-cover border-2 border-brand-dark/20 relative z-10 shadow-[16px_16px_0px_var(--color-brand-accent)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[24px_24px_0px_var(--color-brand-accent)] transition-all duration-500"
        />
      </div>
    </section>
  );
}
