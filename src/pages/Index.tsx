import React, { useEffect, lazy, Suspense } from 'react';
import Header from '@/components/Header';

// Lazy-loaded components
const Hero = lazy(() => import('@/components/Hero'));
const Features = lazy(() => import('@/components/Features'));
const HowItWorks = lazy(() => import('@/components/HowItWorks'));
const VideoDemo = lazy(() => import('@/components/VideoDemo'));
const CTA = lazy(() => import('@/components/CTA'));
const Footer = lazy(() => import('@/components/Footer'));

// Loading fallback
const SectionLoader = () => (
  <div className="flex justify-center items-center py-16">
    <div className="h-12 w-12 border-4 border-t-cyber-green border-r-transparent border-b-cyber-purple border-l-transparent rounded-full animate-spin"></div>
  </div>
);

const Index = () => {
  useEffect(() => {
    document.title = "CANNABIS GPT | AI Cannabis Expert by AiWebTools.Ai";
    
    // Preload components after initial render
    const preloadComponents = async () => {
      const importHero = import('@/components/Hero');
      const importFeatures = import('@/components/Features');
      const importHowItWorks = import('@/components/HowItWorks');
      // Other components will be loaded when needed
    };
    preloadComponents();
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-hidden">
      <Header />
      <main>
        <Suspense fallback={<SectionLoader />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Features />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <HowItWorks />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <VideoDemo />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
