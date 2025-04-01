
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing bg-studio-blue text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple problems. Big solutions. Let's chat.
          </h2>
          <div className="w-20 h-1 bg-studio-coral mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="mailto:hello@mindfulstudio.co" 
              className="flex items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Mail className="h-6 w-6 mr-4" />
              <span>hello@mindfulstudio.co</span>
            </a>
            
            <a 
              href="tel:+15551234567" 
              className="flex items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Phone className="h-6 w-6 mr-4" />
              <span>+1 (555) 123-4567</span>
            </a>
            
            <a 
              href="https://linkedin.com/company/mindfulstudio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Linkedin className="h-6 w-6 mr-4" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://instagram.com/mindfulstudio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-6 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
            >
              <Instagram className="h-6 w-6 mr-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-white h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full absolute top-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-white w-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
