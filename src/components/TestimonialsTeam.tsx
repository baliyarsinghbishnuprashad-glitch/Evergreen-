import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: "Sarah Johnson", quote: "The team transformed our living room beyond our expectations. Professional and creative from start to finish." },
  { name: "Michael Brown", quote: "Excellent communication and amazing design ideas. Highly recommended." },
  { name: "Emily Carter", quote: "Our office renovation was completed ahead of schedule with outstanding quality." }
];

const team = [
  { name: "Olivia Green", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "Daniel Lee", role: "Lead Interior Designer", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Sophia Carter", role: "Project Manager", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400" },
  { name: "Ethan Walker", role: "3D Visualization Expert", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" }
];

export default function TestimonialsTeam() {
  return (
    <section id="team" className="py-24 bg-white border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Testimonials */}
        <div className="mb-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">Testimonials</h4>
            <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-6">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-brand-secondary p-8 border-2 border-brand-dark/20 shadow-[8px_8px_0px_var(--color-brand-accent)] relative hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_var(--color-brand-accent)] transition-all duration-300 flex flex-col"
              >
                <Quote className="absolute top-6 right-6 text-brand-primary/20" size={48} />
                <div className="flex gap-1 text-brand-accent mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} fill="currentColor" size={20} />)}
                </div>
                <p className="text-brand-dark text-base md:text-lg font-medium italic mb-6">"{t.quote}"</p>
                <div className="mt-auto pt-6 border-t border-brand-dark/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-accent">— {t.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">Our Team</h4>
            <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-6">Meet the Experts</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden border-2 border-brand-dark/20 shadow-[6px_6px_0px_var(--color-brand-accent)] aspect-square mx-auto max-w-[240px] group-hover:-translate-y-2 group-hover:-translate-x-2 group-hover:shadow-[12px_12px_0px_var(--color-brand-accent)] transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-1">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
