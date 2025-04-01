
import { Mail } from 'lucide-react';

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
          <div className="flex justify-center">
            <a 
              href="mailto:hello@betamind.space" 
              className="flex items-center p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors border border-white/5 w-full max-w-md"
            >
              <Mail className="h-6 w-6 mr-4" />
              <span>hello@betamind.space</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
