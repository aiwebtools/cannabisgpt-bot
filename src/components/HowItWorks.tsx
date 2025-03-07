
import React from 'react';
import { SearchCheck, FileText, Lightbulb, ChevronRight, Eye, Mic, Code, Brain } from 'lucide-react';

const steps = [
  {
    icon: SearchCheck,
    title: "Ask Any Cannabis Question",
    description: "Start by asking about strain lineage, potency calculations, or regulatory information.",
    color: "text-cyber-green",
    bgColor: "bg-cyber-green/10",
    borderColor: "border-cyber-green/30"
  },
  {
    icon: FileText,
    title: "Get Web-Enhanced Results",
    description: "CANNABIS GPT searches the web for the most up-to-date information and relevant YouTube videos.",
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    borderColor: "border-cyber-purple/30"
  },
  {
    icon: Lightbulb,
    title: "Receive Detailed Analysis",
    description: "Receive comprehensive answers with visualizations, calculations, and expert guidance.",
    color: "text-cyber-green",
    bgColor: "bg-cyber-green/10",
    borderColor: "border-cyber-green/30"
  },
  {
    icon: Brain,
    title: "Access Multimodal Abilities",
    description: "Utilize vision, voice, data analysis, coding, and more capabilities to excel your cannabis knowledge and business.",
    color: "text-cyber-purple",
    bgColor: "bg-cyber-purple/10",
    borderColor: "border-cyber-purple/30"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-cyber bg-cyber-purple/10 px-3 py-1 rounded-full text-cyber-purple border border-cyber-purple/30 mb-4 inline-block animate-fade-in">
            SIMPLE TO USE
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber font-bold mb-3 md:mb-4 animate-fade-in">
            <span className="text-white">How </span>
            <span className="cyber-text-shadow text-cyber-green">CANNABIS GPT</span>
            <span className="text-white"> Works</span>
          </h2>
          <p className="text-gray-300 animate-fade-in text-sm md:text-base">
            Get started in seconds with our intuitive AI assistant designed specifically for cannabis expertise.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 md:gap-8 relative">
            {/* Connecting line */}
            <div className="absolute left-[27px] top-12 bottom-12 w-[2px] bg-gradient-to-b from-cyber-green via-cyber-purple to-cyber-green hidden md:block"></div>
            
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row gap-4 md:gap-5 items-start relative animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 ${step.bgColor} rounded-full flex items-center justify-center ${step.borderColor} border z-10`}>
                  <step.icon className={`h-5 w-5 md:h-6 md:w-6 ${step.color}`} />
                </div>
                
                <div className="cyber-card flex-1 md:mt-0">
                  <h3 className="text-lg md:text-xl font-cyber font-medium text-white mb-1 md:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {index < steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -bottom-6 left-[25px] text-cyber-green rotate-90 h-5 w-5 z-10" />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:mt-12 flex justify-center animate-fade-in">
            <a 
              href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" 
              className="cyber-button w-full sm:w-auto text-center"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GET STARTED NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
