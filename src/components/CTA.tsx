
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-gradient opacity-20"></div>
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-cyber-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-cyber-green/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto glassmorphism p-6 md:p-12 rounded-2xl border border-white/10 shadow-glass backdrop-blur-xl">
          <div className="grid md:grid-cols-5 gap-8 md:gap-10 items-center">
            <div className="md:col-span-3 space-y-4 md:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber font-bold tracking-tight">
                <span className="text-white">Ready to access </span>
                <span className="cyber-text-shadow text-cyber-green">expert cannabis</span>
                <span className="text-white"> knowledge?</span>
              </h2>
              <p className="text-gray-300 text-sm md:text-base">
                Get immediate answers to your cannabis questions with detailed analysis, visualizations, and up-to-date information.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <a 
                  href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" 
                  className="cyber-button inline-flex items-center justify-center gap-2 group w-full sm:w-auto"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>TRY CANNABIS GPT</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="https://www.aiwebtools.ai" 
                  className="cyber-button-purple w-full sm:w-auto text-center"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  EXPLORE MORE TOOLS
                </a>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-full max-w-xs">
                <div className="absolute inset-0 bg-glow-green rounded-full animate-pulse-glow"></div>
                <div className="glassmorphism rounded-2xl p-5 md:p-6 border border-cyber-green/30 relative z-10 flex flex-col items-center gap-3 md:gap-4">
                  <div className="text-cyber-green text-center font-cyber text-lg md:text-xl">CANNABIS GPT</div>
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent"></div>
                  <ul className="text-xs md:text-sm text-gray-300 space-y-2 md:space-y-3 w-full">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyber-green"></div>
                      <span>Strain genealogy analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyber-green"></div>
                      <span>Potency calculations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyber-green"></div>
                      <span>Regulatory guidance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyber-green"></div>
                      <span>Video integrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyber-green"></div>
                      <span>Educational resources</span>
                    </li>
                  </ul>
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-green/30 to-transparent"></div>
                  <a 
                    href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" 
                    className="text-cyber-green hover:text-cyber-green-light text-sm font-cyber transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    ACCESS NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
