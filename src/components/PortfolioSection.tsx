
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const [secretarieHovered, setSecretarieHovered] = useState(false);
  
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="section-spacing">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-studio-blue mb-4">
            Solutions that speak for themselves.
          </h2>
          <div className="w-20 h-1 bg-studio-coral mx-auto rounded-full"></div>
        </div>
        
        {/* Featured Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div 
            className="relative bg-white rounded-xl overflow-hidden shadow-md h-[400px]"
            onMouseEnter={() => setSecretarieHovered(true)}
            onMouseLeave={() => setSecretarieHovered(false)}
          >
            {/* Before Image (Cluttered UI) */}
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ${
                secretarieHovered ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="bg-gradient-to-br from-red-100 to-red-50 h-full w-full p-6 flex flex-col">
                <div className="flex justify-between mb-4">
                  <div className="w-32 h-5 bg-red-200 rounded"></div>
                  <div className="w-24 h-5 bg-red-200 rounded"></div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="bg-red-200 h-12 rounded"></div>
                  ))}
                </div>
                <div className="h-40 bg-red-200 rounded mb-4"></div>
                <div className="grid grid-cols-2 gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="bg-red-200 h-16 rounded"></div>
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/80 px-6 py-3 rounded-lg shadow-sm text-studio-dark-gray font-medium">
                    Before: Cluttered Interface
                  </div>
                </div>
              </div>
            </div>
            
            {/* After Image (Streamlined Dashboard) */}
            <div 
              className={`absolute inset-0 transition-opacity duration-500 ${
                secretarieHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="bg-gradient-to-br from-studio-green/30 to-blue-50 h-full w-full p-6 flex flex-col">
                <div className="flex justify-between mb-6">
                  <div className="w-32 h-6 bg-studio-green rounded-md"></div>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-white rounded-full shadow-sm"></div>
                    <div className="w-8 h-8 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white h-20 rounded-lg shadow-sm flex items-center justify-center">
                      <div className="w-10 h-10 bg-studio-green/20 rounded-full"></div>
                    </div>
                  ))}
                </div>
                <div className="h-48 bg-white rounded-lg shadow-sm mb-6"></div>
                <div className="h-16 bg-white rounded-lg shadow-sm"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 px-6 py-3 rounded-lg shadow-sm text-studio-blue font-medium">
                    After: Streamlined Interface
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-studio-blue mb-4">Secretarie</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-studio-dark-gray mb-2">Problem:</h4>
                <p className="text-gray-600">
                  Health professionals waste hours juggling patient data, appointments, and follow-ups.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-studio-dark-gray mb-2">Solution:</h4>
                <p className="text-gray-600">
                  An intuitive platform automating patient management with AI-driven scheduling, 
                  progress tracking, and telehealth integration.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-studio-dark-gray mb-2">Outcome:</h4>
                <p className="text-gray-600">
                  Reduced administrative workload by 40%, improved patient retention by 25%.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Agriculture Project */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover-card-effect">
            <div className="h-48 bg-gradient-to-br from-yellow-100 to-green-100 p-6 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white/40 rounded-full"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-studio-blue mb-3">AgroSmart</h3>
              <p className="text-gray-600 mb-4">
                Precision agriculture platform helping farmers optimize crop yields through IoT sensors and predictive analytics.
              </p>
            </div>
          </div>
          
          {/* Education Project */}
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover-card-effect">
            <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-100 p-6 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-12 h-12 bg-white/40 rounded-full"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-studio-blue mb-3">EduFlow</h3>
              <p className="text-gray-600 mb-4">
                Personalized learning platform that adapts to each student's pace, learning style, and knowledge gaps.
              </p>
            </div>
          </div>
          
          {/* Next Project Teaser */}
          <div className="bg-gradient-to-br from-studio-blue to-studio-coral/70 rounded-xl overflow-hidden shadow-md hover-card-effect text-white">
            <div className="h-48 flex items-center justify-center p-6">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold">?</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Your Project Next?</h3>
              <p className="mb-4 text-white/90">
                Let's collaborate to transform your complex challenge into an elegant solution.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={scrollToContact}
            className="bg-studio-blue hover:bg-studio-blue/90 text-white px-8 py-6 text-lg"
          >
            Have a problem? Let's solve it
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
