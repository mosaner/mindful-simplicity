
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-studio-dark-gray text-white text-center">
      <div className="container mx-auto">
        <p className="flex items-center justify-center">
          Made with <Heart className="h-4 w-4 mx-2 text-studio-coral" /> by betamind studio
        </p>
        <p className="text-sm mt-2 text-gray-400">
          &copy; {currentYear} betamind studio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
