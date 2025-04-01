
import { Search, Lightbulb, LineChart } from 'lucide-react';

const ApproachSection = () => {
  const approaches = [
    {
      icon: <Search className="h-12 w-12 text-studio-blue" />,
      title: "Research with Empathy",
      description: "We listen first. Every problem starts with people."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-studio-coral" />,
      title: "Simplify, Don't Complicate",
      description: "We cut through noise to design solutions that feel obvious."
    },
    {
      icon: <LineChart className="h-12 w-12 text-studio-green" />,
      title: "Measure Impact",
      description: "Success isn't just launch day—it's lasting change."
    }
  ];

  return (
    <section id="approach" className="section-spacing bg-studio-light-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-studio-blue mb-4">
            Less is more, but better.
          </h2>
          <div className="w-20 h-1 bg-studio-coral mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover-card-effect"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {approach.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-studio-dark-gray">
                  {approach.title}
                </h3>
                <p className="text-gray-600">
                  {approach.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
