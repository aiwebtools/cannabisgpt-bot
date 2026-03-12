
import React, { useState, useEffect, useCallback } from 'react';
import { Cannabis, Heart, Menu, X, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        scrolled 
          ? "py-2 sm:py-3 glassmorphism border-b border-white/10" 
          : "py-3 sm:py-5 bg-transparent"
      )}
    >
      {/* Legal disclaimer banner */}
      <div className="bg-cyber-purple/90 text-white py-1 text-[10px] sm:text-xs text-center flex items-center justify-center px-2">
        <AlertTriangle className="h-3 w-3 mr-1 sm:mr-1.5 text-white flex-shrink-0" />
        <p className="truncate">21+ ONLY | For legal use in accordance with local laws | For educational and informational purposes only</p>
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group min-w-0">
            <div className="relative h-8 w-8 sm:h-10 sm:w-10 overflow-hidden flex-shrink-0">
              <Cannabis 
                className="h-8 w-8 sm:h-10 sm:w-10 text-cyber-green group-hover:text-cyber-green-light transition-colors duration-300" 
                strokeWidth={1.5} 
              />
              <div className="absolute inset-0 bg-glow-green opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-cyber text-base sm:text-xl text-white tracking-wide relative">
                <span className="relative z-10 bg-gradient-to-r from-cyber-green via-cyber-green-light to-cyber-green bg-clip-text text-transparent animate-pulse-glow">
                  CANNABIS GPT
                </span>
                <span className="absolute inset-0 text-cyber-green animate-glow blur-sm opacity-50">
                  CANNABIS GPT
                </span>
                <span className="absolute inset-0 border-2 border-cyber-green/30 rounded-md animate-pulse-glow pointer-events-none"></span>
              </span>
              <div className="flex flex-col mt-0.5 sm:mt-1">
                <span className="text-[10px] sm:text-xs text-gray-400 block leading-tight truncate">
                  AI POWERED CANNABIS EXPERTISE
                </span>
                <span className="text-[7px] sm:text-[8px] text-gray-400 block leading-tight">
                  Made with <Heart className="h-2 w-2 inline mx-0.5 text-cyber-pink fill-cyber-pink" /> for the CT Cannabis Alliance
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3 lg:gap-4">
            <a 
              href="#faq" 
              className="text-white hover:text-cyber-green transition-colors text-sm"
            >
              FAQ
            </a>
            <a 
              href="https://www.ctcannabisalliance.org" 
              className="cyber-button-purple text-sm whitespace-nowrap"
              target="_blank" 
              rel="noopener noreferrer"
            >
              JOIN THE ALLIANCE
            </a>
            <a 
              href="https://chatgpt.com/g/g-69018c711fa48191bdeb7e4b0642092c-cannabis-gpt" 
              className="cyber-button text-sm whitespace-nowrap"
              target="_blank" 
              rel="noopener noreferrer"
            >
              USE CANNABIS GPT
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              className="cyber-button-purple text-sm whitespace-nowrap"
              target="_blank" 
              rel="noopener noreferrer"
            >
              MORE AI TOOLS
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-md text-white focus:outline-none active:scale-95 transition-transform touch-manipulation"
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

      {/* Mobile Navigation - Full screen overlay */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-cyber-darker/95 backdrop-blur-lg transition-opacity duration-200 ease-out",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        style={{ top: 0 }}
      >
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={closeMobileMenu}
            className="h-10 w-10 rounded-full flex items-center justify-center bg-cyber-dark border border-cyber-green/30 active:scale-95 transition-transform touch-manipulation"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-cyber-green" />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center h-full gap-6 px-6 overflow-y-auto">
          <a 
            href="#faq" 
            className="text-white hover:text-cyber-green transition-colors text-lg active:scale-95 touch-manipulation"
            onClick={closeMobileMenu}
          >
            FAQ
          </a>
          <a 
            href="https://www.ctcannabisalliance.org" 
            className="cyber-button-purple w-full max-w-xs text-center active:scale-95 touch-manipulation"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            JOIN THE ALLIANCE
          </a>
          <a 
            href="https://chatgpt.com/g/g-69018c711fa48191bdeb7e4b0642092c-cannabis-gpt" 
            className="cyber-button w-full max-w-xs text-center active:scale-95 touch-manipulation"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            USE CANNABIS GPT
          </a>
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="cyber-button-purple w-full max-w-xs text-center active:scale-95 touch-manipulation"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
          >
            MORE AI TOOLS
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
