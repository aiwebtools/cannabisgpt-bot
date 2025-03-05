
import React from 'react';

const VideoDemo = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyber-green/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyber-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="text-xs font-cyber bg-cyber-purple/10 px-3 py-1 rounded-full text-cyber-purple border border-cyber-purple/30 mb-4 inline-block">
            VIDEO SHOWCASE
          </span>
          <h2 className="text-3xl md:text-4xl font-cyber font-bold mb-4">
            <span className="text-white">See </span>
            <span className="cyber-text-shadow text-cyber-green">CANNABIS GPT</span>
            <span className="text-white"> in Action</span>
          </h2>
          <p className="text-gray-300">
            Watch how CANNABIS GPT provides expert cannabis knowledge and insights in real-time.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glassmorphism rounded-2xl p-1 border border-white/10 overflow-hidden">
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl">
            <iframe 
              src="https://player.vimeo.com/video/983288259?h=ee46a32dbe&autoplay=0&loop=0&title=0&byline=0&portrait=0" 
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowFullScreen
              title="CANNABIS GPT Demo Video"
            ></iframe>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a 
            href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" 
            className="cyber-button inline-flex items-center gap-2 group"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <span>TRY IT YOURSELF</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
