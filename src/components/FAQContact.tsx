import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MapPin, Phone, Mail, Clock } from 'lucide-react';

const faqs = [
  { q: "How long does a project take?", a: "Most residential projects take 4–12 weeks depending on size." },
  { q: "Do you provide free consultations?", a: "Yes, we offer a free 30-minute consultation." },
  { q: "Can I request custom furniture?", a: "Absolutely. We design custom furniture tailored to your space." },
  { q: "Do you work outside your city?", a: "Yes, we provide both onsite and virtual design services." }
];

export default function FAQContact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 bg-white border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* FAQs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">FAQs</h4>
            <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-8">Got Questions?</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-brand-secondary border-2 border-brand-dark/20 overflow-hidden hover:shadow-[4px_4px_0px_var(--color-brand-primary)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center"
                  >
                    <span className="font-semibold text-brand-dark pr-4">{faq.q}</span>
                    <ChevronDown className={`text-brand-primary transition-transform flex-shrink-0 ${openFAQ === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFAQ === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-5 text-sm text-brand-text"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">Contact Us</h4>
            <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-8">Get In Touch</h2>
            
            <div className="bg-brand-secondary p-8 border-2 border-brand-dark/20 shadow-[12px_12px_0px_var(--color-brand-accent)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[20px_20px_0px_var(--color-brand-accent)] transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-brand-dark/20 flex items-center justify-center flex-shrink-0 bg-white shadow-[2px_2px_0px_var(--color-brand-primary)]">
                    <MapPin className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-1">Address</h3>
                    <p className="text-sm text-brand-text">245 Maple Avenue<br/>Austin, TX 78701</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-brand-dark/20 flex items-center justify-center flex-shrink-0 bg-white shadow-[2px_2px_0px_var(--color-brand-primary)]">
                    <Phone className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-1">Phone</h3>
                    <p className="text-sm text-brand-text">+1 (512) 555-0198</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-brand-dark/20 flex items-center justify-center flex-shrink-0 bg-white shadow-[2px_2px_0px_var(--color-brand-primary)]">
                    <Mail className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-1">Email</h3>
                    <a href="mailto:hello@evergreeninteriors.com" className="text-sm text-brand-primary hover:underline">hello@evergreeninteriors.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-brand-dark/20 flex items-center justify-center flex-shrink-0 bg-white shadow-[2px_2px_0px_var(--color-brand-primary)]">
                    <Clock className="text-brand-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-brand-dark mb-1">Business Hours</h3>
                    <p className="text-sm text-brand-text">Mon–Fri: 9:00 AM – 6:00 PM<br/>Sat: 10:00 AM – 4:00 PM<br/>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
