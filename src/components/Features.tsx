
import React from 'react';
import { 
  Search, 
  Database, 
  Calculator, 
  FileText, 
  ImagePlus,
  Youtube,
  LineChart,
  BookOpen
} from 'lucide-react';

const featureItems = [
  {
    icon: Search,
    title: "Web Search Integration",
    description: "Always up-to-date information through real-time web searches for strain information, regulations, and research.",
    color: "text-cyber-green"
  },
  {
    icon: Database,
    title: "Strain Genealogy Analysis",
    description: "Detailed tracking of strain genetics back to landrace origins with complete family trees and visualizations.",
    color: "text-cyber-purple"
  },
  {
    icon: Calculator,
    title: "Precise Potency Calculations",
    description: "Accurate calculations for tinctures, edibles, and other cannabis products with step-by-step explanations.",
    color: "text-cyber-green"
  },
  {
    icon: Youtube,
    title: "YouTube Video Integration",
    description: "Finds and embeds relevant, playable YouTube videos directly in the chat interface for visual learning.",
    color: "text-cyber-purple"
  },
  {
    icon: FileText,
    title: "Regulatory Information",
    description: "Comprehensive assistance with understanding complex cannabis regulations and license applications.",
    color: "text-cyber-green"
  },
  {
    icon: ImagePlus,
    title: "Image & Data Analysis",
    description: "Advanced capabilities for analyzing cannabis-related images and processing complex data sets.",
    color: "text-cyber-purple"
  },
  {
    icon: LineChart,
    title: "Visual Representations",
    description: "Creates charts, diagrams, and family trees to visually explain complex cannabis information.",
    color: "text-cyber-green"
  },
  {
    icon: BookOpen,
    title: "Educational Courses",
    description: "Structured cannabis education with detailed lessons, resources, and interactive learning experiences.",
    color: "text-cyber-purple"
  }
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-cyber-dark to-transparent z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-cyber bg-cyber-green/10 px-3 py-1 rounded-full text-cyber-green border border-cyber-green/30 mb-4 inline-block animate-fade-in">
            CAPABILITIES
          </span>
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4 animate-fade-in">
            <span className="text-white">Comprehensive </span>
            <span className="cyber-purple-text-shadow text-cyber-purple">Cannabis</span>
            <span className="text-white"> Intelligence</span>
          </h2>
          <p className="text-gray-300 animate-fade-in">
            CANNABIS GPT combines deep industry knowledge with advanced AI capabilities to provide unparalleled cannabis expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="cyber-card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.color} mb-4 inline-flex p-3 rounded-lg border border-white/10 bg-white/5`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-cyber font-medium text-white mb-3 group-hover:text-cyber-green transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
