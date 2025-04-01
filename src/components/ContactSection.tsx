
import { Mail, Phone, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-spacing bg-gradient-to-br from-studio-blue to-studio-blue/90 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-manrope">
            Simple problems. Big solutions. Let's chat.
          </h2>
          <div className="w-20 h-1 bg-studio-coral mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a 
              href="mailto:hello@betamindstudio.co" 
              className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors border border-white/5"
            >
              <Mail className="h-6 w-6 mr-4" />
              <span>hello@betamindstudio.co</span>
            </a>
            
            <a 
              href="tel:+15551234567" 
              className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors border border-white/5"
            >
              <Phone className="h-6 w-6 mr-4" />
              <span>+1 (555) 123-4567</span>
            </a>
            
            <a 
              href="https://linkedin.com/company/betamindstudio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors border border-white/5"
            >
              <Linkedin className="h-6 w-6 mr-4" />
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://instagram.com/betamindstudio" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors border border-white/5"
            >
              <Instagram className="h-6 w-6 mr-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
