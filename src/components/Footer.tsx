
import React from 'react';
import { Cannabis, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg"></div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-cyber-dark to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-10">
          <div className="md:col-span-5 space-y-6">
            <a href="/" className="flex items-center gap-2 group">
              <div className="relative h-10 w-10 overflow-hidden">
                <Cannabis 
                  className="h-10 w-10 text-cyber-green group-hover:text-cyber-green-light transition-colors duration-300" 
                  strokeWidth={1.5} 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-cyber text-xl text-white tracking-wide">CANNABIS GPT</span>
                <span className="text-xs text-gray-400">Premium AI Web Tools by <a href="https://www.aiwebtools.ai" className="text-cyber-green hover:text-cyber-green-light transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a></span>
              </div>
            </a>
            
            <div>
              <p className="text-gray-400 max-w-lg mb-2">
                Your ultimate cannabis intelligence assistant powered by <a href="https://www.aiwebtools.ai" className="text-cyber-green hover:text-cyber-green-light transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a>. Premium AI web tools featuring comprehensive strain information, potency calculations, and expert guidance for cannabis professionals and CCSBA members.
              </p>
              
              <p className="text-xs text-gray-500 max-w-lg mb-3">
                For informational, educational, and research purposes only.
              </p>

              <div className="text-xs text-gray-500 space-y-1">
                <p><strong className="text-cyber-green">AI Web Tools:</strong> Cannabis AI, Strain Genetics, Potency Calculator</p>
                <p><strong className="text-cyber-green">CCSBA Partner:</strong> Connecticut Cannabis Small Business Alliance</p>
                <p><strong className="text-cyber-green"><a href="https://www.aiwebtools.ai" className="hover:text-cyber-green-light transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a>:</strong> Premium AI Tools & Cannabis Technology</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" 
                className="cyber-button text-sm"
                target="_blank" 
                rel="noopener noreferrer"
                title="Access Cannabis GPT AI Tools"
              >
                GET STARTED
              </a>
              <a 
                href="https://www.aiwebtools.ai" 
                className="cyber-button-purple text-sm"
                target="_blank" 
                rel="noopener noreferrer"
                title="More AI Web Tools by AiWebTools.Ai"
              >
                MORE AI TOOLS
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-cyber text-lg text-white">AI Web Tools</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt"
                  className="hover:text-cyber-green transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Cannabis GPT AI Tools"
                >
                  Cannabis GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://linktr.ee/ctcannabisalliance/?via=aiwebtools"
                  className="hover:text-cyber-green transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Other Cannabis Related GPTs"
                >
                  Other Cannabis Related GPTs
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  className="hover:text-cyber-green transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="AiWebTools.Ai - Premium AI Tools"
                >
                  AiWebTools.Ai
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ctcannabisalliance.org" 
                  className="hover:text-cyber-green transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                  title="Connecticut Cannabis Small Business Alliance - CCSBA"
                >
                  CCSBA Partnership
                </a>
              </li>
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="hover:text-cyber-green transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  className="hover:text-cyber-green transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-cyber text-lg text-white">Contact <a href="https://www.aiwebtools.ai" className="text-cyber-green hover:text-cyber-green-light transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a></h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="tel:4758008096" 
                  className="flex items-center gap-2 hover:text-cyber-green transition-colors"
                  title="Call AiWebTools.Ai"
                >
                  <Phone className="h-4 w-4 text-cyber-green" />
                  <span>(475) 800-8096</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="flex items-center gap-2 hover:text-cyber-green transition-colors"
                  title="Email AiWebTools.Ai"
                >
                  <Mail className="h-4 w-4 text-cyber-green" />
                  <span>Contact@ai-webtools.com</span>
                </a>
              </li>
            </ul>
            
            <div className="mt-6 space-y-2">
              <a 
                href="https://www.aiwebtools.ai" 
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple hover:text-cyber-purple-light transition-colors"
                target="_blank" 
                rel="noopener noreferrer"
                title="Explore AI Web Tools by AiWebTools.Ai"
              >
                Explore AI Web Tools
              </a>
              
              <div className="text-xs text-gray-500">
                <p>Keywords: AI Tools, Cannabis AI, CCSBA, <a href="https://www.aiwebtools.ai" className="hover:text-cyber-green transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a></p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} <a href="https://www.aiwebtools.ai" className="text-cyber-green hover:text-cyber-green-light transition-colors" target="_blank" rel="noopener noreferrer">AiWebTools.Ai</a>. All rights reserved. Premium AI Web Tools for Cannabis Professionals.
          </p>
          <p className="text-xs text-gray-400 text-center">
            Made with ❤️ for the Connecticut Cannabis Small Business Alliance (CCSBA)
          </p>
          <div className="flex gap-6">
            <a 
              href="https://openai.com/policies/privacy-policy/" 
              className="text-gray-500 hover:text-cyber-green text-sm transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a 
              href="https://aiwebtools.lovable.app/disclaimers" 
              className="text-gray-500 hover:text-cyber-green text-sm transition-colors"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
