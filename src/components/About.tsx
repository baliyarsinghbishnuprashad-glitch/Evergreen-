import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-b border-brand-dark/10">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000"
            alt="Interior design planning"
            className="border-2 border-brand-dark/20 shadow-[12px_12px_0px_var(--color-brand-accent)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[20px_20px_0px_var(--color-brand-accent)] transition-all duration-500 object-cover h-[500px] w-full"
          />
          <div className="absolute -bottom-6 -right-6 bg-brand-primary text-white p-6 border-2 border-brand-dark/20 shadow-[8px_8px_0px_var(--color-brand-dark)] hidden md:block hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_var(--color-brand-dark)] transition-all duration-500">
            <p className="text-4xl font-serif font-bold mb-1">8+</p>
            <p className="text-xs uppercase font-bold tracking-widest opacity-90">Years Experience</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">About Us</h4>
          <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-6">Crafting beautiful spaces since 2018</h2>
          <p className="text-sm md:text-base text-brand-text mb-6 leading-relaxed">
            EverGreen Interiors is a modern interior design company specializing in residential and commercial spaces.
            We have helped over 500 clients transform their homes and offices with creative, functional, and sustainable designs.
          </p>
          <p className="text-sm md:text-base text-brand-text mb-8 leading-relaxed">
            Our team of experienced designers works closely with clients to deliver personalized interiors that match their style and budget.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Free Initial Consultation",
              "Eco-Friendly Materials",
              "On-Time Project Delivery",
              "5-Year Workmanship Warranty",
              "3D Design Preview",
              "Dedicated Project Manager"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-brand-primary rounded-full flex-shrink-0" />
                <span className="text-brand-dark text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
