import { motion } from 'motion/react';

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "350+", label: "Happy Clients" },
  { value: "25", label: "Professional Designers" },
  { value: "98%", label: "Customer Satisfaction" }
];

export default function Stats() {
  return (
    <section className="py-24 bg-white border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-4 border-brand-accent pl-5"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-1">
                {stat.value}
              </div>
              <div className="text-brand-text text-xs uppercase font-bold tracking-widest opacity-80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
