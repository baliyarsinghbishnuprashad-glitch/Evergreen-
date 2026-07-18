import { motion } from 'motion/react';
import { Home, Briefcase, Utensils, Bath, Armchair, Layout, Cuboid, Key } from 'lucide-react';

const services = [
  { icon: Home, title: "Home Interior Design", desc: "Complete residential transformations tailored to your lifestyle." },
  { icon: Briefcase, title: "Office Interior Design", desc: "Productive and inspiring workspaces for modern businesses." },
  { icon: Utensils, title: "Kitchen Remodeling", desc: "Functional and beautiful kitchens that serve as the heart of your home." },
  { icon: Bath, title: "Bathroom Renovation", desc: "Spa-like retreats designed for ultimate relaxation and comfort." },
  { icon: Armchair, title: "Custom Furniture", desc: "Bespoke pieces crafted to fit your space and style perfectly." },
  { icon: Layout, title: "Space Planning", desc: "Optimizing flow and functionality in every square foot." },
  { icon: Cuboid, title: "3D Visualization", desc: "See your space before construction begins with photorealistic renders." },
  { icon: Key, title: "Turnkey Solutions", desc: "End-to-end project management from concept to completion." }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-secondary border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">Our Services</h4>
          <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-6">What We Do</h2>
          <p className="text-sm md:text-base text-brand-text max-w-xl mx-auto">
            From concept to completion, we offer a comprehensive suite of interior design services to bring your vision to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-white border-2 border-brand-dark/20 shadow-[8px_8px_0px_var(--color-brand-accent)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_var(--color-brand-accent)] transition-all duration-300 group flex flex-col"
              >
                <div className="w-14 h-14 border-2 border-brand-dark/20 shadow-[4px_4px_0px_var(--color-brand-primary)] flex items-center justify-center mb-6 bg-brand-secondary group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:shadow-[6px_6px_0px_var(--color-brand-primary)] transition-all duration-300">
                  <Icon className="text-brand-primary group-hover:scale-110 transition-transform duration-300" size={28} />
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-dark mb-3">{service.title}</h3>
                <p className="text-sm text-brand-text leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
