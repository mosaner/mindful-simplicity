
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold font-manrope text-studio-blue">betamind<span className="text-studio-coral">.</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <button onClick={() => scrollToSection('approach')} className="text-studio-dark-gray hover:text-studio-coral transition-colors font-medium">
            Our Approach
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-studio-dark-gray hover:text-studio-coral transition-colors font-medium">
            Portfolio
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-studio-blue hover:bg-studio-blue/90 text-white"
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-studio-dark-gray"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('approach')} 
              className="text-studio-dark-gray py-2 hover:text-studio-coral transition-colors font-medium"
            >
              Our Approach
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="text-studio-dark-gray py-2 hover:text-studio-coral transition-colors font-medium"
            >
              Portfolio
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-studio-blue hover:bg-studio-blue/90 text-white w-full"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
