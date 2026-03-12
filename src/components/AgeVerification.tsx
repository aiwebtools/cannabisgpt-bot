
import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const AgeVerification = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const hasVerified = localStorage.getItem('cannabis-gpt-age-verified');
    
    if (!hasVerified) {
      setIsOpen(true);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cannabis-gpt-age-verified', 'true');
    setIsOpen(false);
  };
  
  const handleDecline = () => {
    window.location.href = 'https://aiwebtools.lovable.app/?via=aiwebtools';
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-cyber-darker border border-cyber-purple/30 rounded-2xl overflow-hidden animate-fade-in">
        <div className="bg-cyber-purple/20 p-4 flex items-center">
          <Shield className="h-6 w-6 text-cyber-purple mr-2" />
          <h2 className="text-xl font-cyber text-white">Age Verification Required</h2>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="flex items-start mb-6">
            <AlertTriangle className="h-6 w-6 text-cyber-purple mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-white font-medium mb-2">Legal Disclaimer</h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                Cannabis GPT is intended for adults 21+ in jurisdictions where cannabis is legal. 
                This tool is for educational and informational purposes only.
              </p>
              
              <div className="bg-black/30 p-3 sm:p-4 rounded-lg border border-white/10 mb-4">
                <p className="text-white text-sm mb-2">By clicking "I AGREE" you confirm that:</p>
                <ul className="text-gray-300 text-sm space-y-2 ml-5">
                  <li className="flex items-start">
                    <div className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0">•</div>
                    <p>You are at least 21 years of age</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0">•</div>
                    <p>You are located in a jurisdiction where cannabis is legal</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0">•</div>
                    <p>You understand this tool is for research and educational purposes only</p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0">•</div>
                    <p>You will comply with all applicable laws in your jurisdiction</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
            <button 
              onClick={handleDecline}
              className="order-2 sm:order-1 px-6 py-3 bg-transparent hover:bg-cyber-purple/10 text-white border border-white/10 rounded-lg flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4 mr-2" />
              EXIT
            </button>
            <button 
              onClick={handleAccept}
              className="order-1 sm:order-2 cyber-button flex items-center justify-center"
            >
              <Check className="h-4 w-4 mr-2" />
              I AGREE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeVerification;
