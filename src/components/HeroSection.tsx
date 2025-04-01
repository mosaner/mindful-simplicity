
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 -right-36 w-96 h-96 gradient-blob animate-morph animate-float opacity-40"></div>
      <div className="absolute bottom-1/4 -left-24 w-64 h-64 gradient-blob animate-morph animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-manrope">
            <span className="gradient-text">We simplify the complex.</span> <br />
            <span className="relative mt-2 inline-block">
              Let's build solutions that matter.
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-studio-coral rounded-full"></span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-studio-dark-gray mt-6 max-w-2xl mx-auto font-light">
            A digital innovation studio dedicated to making life better—one thoughtful idea at a time.
          </p>
          
          <div className="pt-8">
            <Button 
              onClick={scrollToProjects}
              className="bg-studio-blue hover:bg-studio-blue/90 text-white text-lg px-8 py-6 font-medium"
            >
              See How We Do It
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract Pattern Grid */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-studio-blue/20 h-full"></div>
          ))}
        </div>
        <div className="grid grid-rows-12 h-full w-full absolute top-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-b border-studio-blue/20 w-full"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
