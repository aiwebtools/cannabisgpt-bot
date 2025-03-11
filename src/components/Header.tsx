
import React, { useState, useEffect } from 'react';
import { Cannabis, Heart, Menu, X, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled 
          ? "py-3 glassmorphism border-b border-white/10" 
          : "py-5 bg-transparent"
      )}
    >
      {/* Legal disclaimer banner */}
      <div className="bg-cyber-purple/90 text-white py-1 text-xs text-center flex items-center justify-center">
        <AlertTriangle className="h-3 w-3 mr-1.5 text-white" />
        <p>21+ ONLY | For legal use in accordance with local laws | For educational and informational purposes only</p>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <div className="relative h-10 w-10 overflow-hidden">
              <Cannabis 
                className="h-10 w-10 text-cyber-green group-hover:text-cyber-green-light transition-colors duration-300" 
                strokeWidth={1.5} 
              />
              <div className="absolute inset-0 bg-glow-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-cyber text-xl text-white tracking-wide">CANNABIS GPT</span>
              <div className="flex flex-col mt-1">
                <span className="text-xs text-gray-400 hidden sm:block">
                  AI POWERED CANNABIS EXPERTISE
                </span>
                <span className="text-[8px] text-gray-400 hidden sm:block whitespace-nowrap">
                  Made with <Heart className="h-2 w-2 inline mx-0.5 text-cyber-pink fill-cyber-pink" /> for the Connecticut Cannabis Small Business Alliance
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-green transition-colors text-sm"
            >
              FAQ
            </a>
            <a 
              href="https://www.ctcannabisalliance.org" 
              className="cyber-button-purple text-sm"
              target="_blank" 
              rel="noopener noreferrer"
            >
              JOIN THE ALLIANCE
            </a>
            <a 
              href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" 
              className="cyber-button text-sm"
              target="_blank" 
              rel="noopener noreferrer"
            >
              GET STARTED
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              className="cyber-button-purple text-sm"
              target="_blank" 
              rel="noopener noreferrer"
            >
              MORE AI TOOLS
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-md text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-cyber-green" />
            ) : (
              <Menu className="h-6 w-6 text-cyber-green" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-cyber-darker/90 backdrop-blur-lg transition-all duration-300 ease-in-out",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          <a 
            href="#faq" 
            className="text-white hover:text-cyber-green transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="https://www.ctcannabisalliance.org" 
            className="cyber-button-purple w-full text-center"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            JOIN THE ALLIANCE
          </a>
          <a 
            href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" 
            className="cyber-button w-full text-center"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            ACCESS CANNABIS GPT NOW
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            className="cyber-button-purple w-full text-center"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            MORE AI TOOLS
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
