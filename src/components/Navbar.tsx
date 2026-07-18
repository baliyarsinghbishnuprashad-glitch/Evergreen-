import { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Team', href: '#team' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-secondary border-b border-brand-dark/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Leaf className={`transition-colors text-brand-primary`} size={24} />
          <span className={`text-xl font-serif font-bold transition-colors text-brand-dark uppercase tracking-widest`}>
            EverGreen
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-brand-dark hover:text-brand-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-6 py-3 bg-brand-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-brand-dark transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-brand-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-brand-secondary border-b border-brand-dark/10 p-4 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs font-semibold uppercase tracking-widest text-brand-dark hover:text-brand-primary p-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-6 py-3 bg-brand-primary text-white text-center text-xs font-bold uppercase tracking-widest mt-2"
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
