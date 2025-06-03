
import React from 'react';
import { ArrowRight, Sparkles, Cannabis } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-bg"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyber-green/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyber-purple/10 px-4 py-2 rounded-full text-cyber-purple border border-cyber-purple/30 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-cyber">PREMIER AI WEB TOOLS BY AIWEBTOOLS.AI FOR CANNABIS PROFESSIONALS</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cyber font-bold leading-tight animate-slide-up">
            <span className="text-white">Meet </span>
            <span className="cyber-text-shadow text-cyber-green">CANNABIS GPT</span>
            <br />
            <span className="text-white">Your AI </span>
            <span className="cyber-text-shadow text-cyber-purple">Cannabis Expert</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Professional AI Web Tools by <strong className="text-cyber-green">AiWebTools.Ai</strong> featuring advanced strain analysis, potency calculations, regulatory guidance, and expert Cannabis & Hemp consultation powered by cutting-edge AI technology for CCSBA members and cannabis professionals.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-up" style={{ animationDelay: '1s' }}>
            <a 
              href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" 
              className="cyber-button group inline-flex items-center gap-2 text-lg px-8 py-4"
              target="_blank" 
              rel="noopener noreferrer"
              title="Access Cannabis GPT AI Tools by AiWebTools.Ai"
            >
              <Cannabis className="h-5 w-5" />
              <span>CANNABIS GPT - Welcome to the Age of the Green Leaf</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="https://www.aiwebtools.ai" 
              className="cyber-button-purple group inline-flex items-center gap-2 text-lg px-8 py-4"
              target="_blank" 
              rel="noopener noreferrer"
              title="Explore More AI Web Tools by AiWebTools.Ai"
            >
              <Sparkles className="h-5 w-5" />
              <span>EXPLORE AI WEB TOOLS</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-8 space-y-4 animate-fade-in" style={{ animationDelay: '1.5s' }}>
            <p className="text-sm text-gray-400">
              Trusted by Cannabis Professionals • CCSBA Partnership • AiWebTools.Ai Premium AI Tools
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                AI-Powered Cannabis Intelligence
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-cyber-purple rounded-full"></div>
                Professional Grade AI Web Tools
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                CCSBA Approved Technology
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyber-green/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyber-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
