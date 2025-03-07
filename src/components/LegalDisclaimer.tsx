
import React from 'react';
import { Shield, AlertTriangle } from 'lucide-react';

const LegalDisclaimer = () => {
  return (
    <section className="py-10 bg-cyber-darker relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <Shield className="h-8 w-8 text-cyber-purple mb-2" />
            <h2 className="text-2xl font-cyber text-white text-center">Legal Disclaimer</h2>
          </div>
          
          <div className="glassmorphism border border-cyber-purple/20 rounded-xl p-6">
            <div className="flex items-start mb-4">
              <AlertTriangle className="h-5 w-5 text-cyber-purple mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                <strong className="text-white">AGE RESTRICTION:</strong> Cannabis GPT is strictly for adults 21 years of age or older. By using this service, you confirm that you are at least 21 years old.
              </p>
            </div>
            
            <div className="flex items-start mb-4">
              <AlertTriangle className="h-5 w-5 text-cyber-purple mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                <strong className="text-white">LEGAL JURISDICTIONS ONLY:</strong> This tool is intended for use only in jurisdictions where cannabis is legal. Users must comply with all applicable local, state, and federal laws regarding cannabis.
              </p>
            </div>
            
            <div className="flex items-start mb-4">
              <AlertTriangle className="h-5 w-5 text-cyber-purple mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                <strong className="text-white">INFORMATIONAL PURPOSE ONLY:</strong> Cannabis GPT is provided for educational and informational purposes only. It is not intended to promote or encourage the use, cultivation, or distribution of cannabis products.
              </p>
            </div>
            
            <div className="flex items-start mb-4">
              <AlertTriangle className="h-5 w-5 text-cyber-purple mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                <strong className="text-white">NOT MEDICAL ADVICE:</strong> The information provided by Cannabis GPT is not medical advice. Consult with a healthcare professional before using cannabis for medical purposes.
              </p>
            </div>
            
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-cyber-purple mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-gray-300 text-sm">
                <strong className="text-white">NO LIABILITY:</strong> The creators of Cannabis GPT assume no responsibility or liability for any misuse or legal consequences resulting from the use of this tool or information provided through it.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <a 
              href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" 
              className="cyber-button mr-4"
              target="_blank" 
              rel="noopener noreferrer"
            >
              I UNDERSTAND & WANT TO PROCEED
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="cyber-button-purple"
              target="_blank" 
              rel="noopener noreferrer"
            >
              EXPLORE OTHER AI TOOLS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalDisclaimer;
