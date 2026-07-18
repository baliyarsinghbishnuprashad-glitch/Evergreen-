import { Leaf, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-secondary border-t border-brand-dark/10 text-brand-dark pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6 text-brand-dark">
              <Leaf className="text-brand-primary" size={24} />
              <span className="text-xl font-serif font-bold uppercase tracking-widest">EverGreen</span>
            </a>
            <p className="text-brand-text max-w-md mb-8 text-sm">
              Designing Spaces You'll Love. We are a modern interior design company specializing in residential and commercial spaces.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-brand-dark flex items-center justify-center hover:bg-brand-dark hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#home" className="hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Services</a></li>
              <li><a href="#pricing" className="hover:text-brand-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-brand-dark/10 pt-8 text-center text-xs font-bold uppercase tracking-widest text-brand-text">
          <p>&copy; {new Date().getFullYear()} EverGreen Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
