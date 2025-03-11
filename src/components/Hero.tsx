
import React, { useRef, useEffect } from 'react';
import { Cannabis } from 'lucide-react';
const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Make canvas fill parent element
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for 3D effect
    // Reduce particle count on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const particles: {
      x: number;
      y: number;
      z: number;
      size: number;
      speed: number;
      color: string;
    }[] = [];
    const particleCount = isMobile ? 50 : 100;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        // depth
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#39ff14' : '#9b30ff'
      });
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid with reduced density on mobile
      ctx.lineWidth = 0.3;
      ctx.strokeStyle = 'rgba(57, 255, 20, 0.1)';
      const gridSize = isMobile ? 40 : 30;

      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Update and draw particles
      particles.forEach(particle => {
        // Update depth (z-coordinate)
        particle.z -= particle.speed;

        // Reset particle when it gets too close (out of view)
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Calculate position based on perspective
        const scale = 1000 / (1000 + particle.z);
        const x2d = particle.x * scale + canvas.width / 2 * (1 - scale);
        const y2d = particle.y * scale + canvas.height / 2 * (1 - scale);

        // Draw particle
        ctx.globalAlpha = scale * 0.8; // Fade with distance
        ctx.beginPath();
        ctx.arc(x2d, y2d, particle.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  return <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* 3D Particles Canvas in background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{
      pointerEvents: 'none'
    }} />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center justify-center min-h-[90vh]">
        <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left animate-fade-in">
            <div className="inline-block">
              <span className="text-xs font-cyber bg-cyber-green/10 px-3 py-1 rounded-full text-cyber-green border border-cyber-green/30">
                AI-POWERED CANNABIS EXPERTISE
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cyber font-bold tracking-tight leading-tight">
              <span className="text-white">Your Ultimate </span>  
              <span className="cyber-text-shadow text-cyber-green">Cannabis</span>
              <span className="text-white"> Intelligence Assistant</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0">Featuring comprehensive knowledge of strain genetics, precise potency calculations, up-to-date regulatory insights, and expert cultivation guidance — all enhanced with advanced web search capabilities, real-time data analysis, visual recognition, and seamless YouTube video integration.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://chatgpt.com/g/g-BSB5oEyLI-hemp-gpt" className="cyber-button w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                GET STARTED
              </a>
              <a href="https://www.aiwebtools.ai" className="cyber-button-purple w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                MORE AI TOOLS
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-float">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-glow-green animate-pulse-glow"></div>
              <div className="glassmorphism rounded-2xl p-8 h-full w-full flex items-center justify-center relative overflow-hidden border border-cyber-green/20">
                <Cannabis className="h-28 w-28 sm:h-36 sm:w-36 text-cyber-green animate-glow" />
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyber-purple/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyber-green/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient overlay at bottom for transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-cyber-dark to-transparent"></div>
    </section>;
};
export default Hero;
