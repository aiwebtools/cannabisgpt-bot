
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import VideoDemo from '@/components/VideoDemo';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "CANNABIS GPT | AI Cannabis Expert by AiWebTools.Ai";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <VideoDemo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
