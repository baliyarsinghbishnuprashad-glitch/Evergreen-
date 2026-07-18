import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "$499",
    desc: "Perfect for single room updates",
    features: ["Single Room Design", "2 Design Concepts", "Basic 3D Visualization", "Email Support"],
    highlight: false
  },
  {
    name: "Premium",
    price: "$1,499",
    desc: "Complete home transformation",
    features: ["Entire Home Design", "Unlimited Revisions", "Premium Materials", "Full 3D Walkthrough", "Priority Support"],
    highlight: true
  },
  {
    name: "Enterprise",
    price: "Custom Quote",
    desc: "For commercial & large spaces",
    features: ["Commercial Projects", "Dedicated Team", "Project Management", "Priority Support", "Turnkey Execution"],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-secondary border-b border-brand-dark/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">Pricing Plans</h4>
          <h2 className="text-4xl md:text-5xl font-serif italic text-brand-dark mb-6">Clear & Transparent Pricing</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-8 border-2 border-brand-dark/20 transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-brand-dark text-white shadow-[12px_12px_0px_var(--color-brand-primary)] md:-translate-y-4 hover:-translate-y-6 hover:-translate-x-2 hover:shadow-[20px_20px_0px_var(--color-brand-primary)]' 
                  : 'bg-white text-brand-dark shadow-[8px_8px_0px_var(--color-brand-accent)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[16px_16px_0px_var(--color-brand-accent)]'
              }`}
            >
              <h3 className="text-2xl font-serif font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlight ? 'text-white/80' : 'text-brand-text'}`}>{plan.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <ul className="space-y-4 mb-8 text-sm font-medium">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={plan.highlight ? 'text-brand-accent' : 'text-brand-primary'} size={18} />
                    <span className={plan.highlight ? 'text-white/90' : 'text-brand-text'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-4 text-xs font-bold uppercase tracking-widest transition-colors ${
                  plan.highlight
                    ? 'bg-brand-primary hover:bg-white hover:text-brand-primary text-white border border-brand-primary hover:border-white'
                    : 'bg-transparent border border-brand-dark hover:bg-brand-dark hover:text-white text-brand-dark'
                }`}
              >
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
