import React, { useState } from 'react';
const VideoDemo = () => {
  const [isLoading, setIsLoading] = useState(true);
  return <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 md:mb-12 max-w-3xl mx-auto">
          <span className="text-xs font-cyber bg-cyber-purple/10 px-3 py-1 rounded-full text-cyber-purple border border-cyber-purple/30 mb-4 inline-block">This AI Tool Was Made For The Connecticut Cannabis Small Business Alliance and it's Members</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-cyber font-bold mb-3 md:mb-4">
            <span className="text-white">The </span>
            <span className="cyber-text-shadow text-cyber-green">CANNABIS GPT</span>
            <span className="text-white">Anthem</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base">Cannabis GPT Can Revolutionize Your Legal Cannabis & Hemp Business Operations</p>
        </div>
        
        {/* First Video - YouTube */}
        <div className="max-w-4xl mx-auto glassmorphism rounded-2xl p-1 border border-white/10 overflow-hidden mb-8">
          {isLoading && <div className="absolute inset-0 flex items-center justify-center bg-cyber-dark/80 z-10">
              <div className="h-10 w-10 md:h-12 md:w-12 border-4 border-t-cyber-green border-r-transparent border-b-cyber-purple border-l-transparent rounded-full animate-spin"></div>
            </div>}
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
            <iframe src="https://www.youtube.com/embed/zGGdCzxFNS4?autoplay=1&mute=0&rel=0" className="absolute top-0 left-0 w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="CANNABIS GPT Introduction" onLoad={() => setIsLoading(false)}></iframe>
          </div>
        </div>

        {/* Second Video - Vimeo */}
        <div className="max-w-4xl mx-auto glassmorphism rounded-2xl p-1 border border-white/10 overflow-hidden">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
            <iframe src="https://player.vimeo.com/video/1132373393?autoplay=0&loop=0&title=0&byline=0&portrait=0&muted=0&quality=1080p" className="absolute top-0 left-0 w-full h-full" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="CANNABIS GPT Demo Video"></iframe>
          </div>
        </div>
        
        <div className="mt-6 md:mt-8 text-center">
          <a href="https://chatgpt.com/g/g-69018c711fa48191bdeb7e4b0642092c-cannabis-gpt" className="cyber-button inline-flex items-center gap-2 group" target="_blank" rel="noopener noreferrer">
            <span>TRY IT YOURSELF</span>
          </a>
        </div>
      </div>
    </section>;
};
export default VideoDemo;