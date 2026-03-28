"use client";

import { COMPANY_INFO } from "@/data/company";
import { useEffect, useState } from "react";
import { Globe } from "@/components/ui/Globe";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden transform -mt-[72px]">
      
      {/* Background Image with Slow Zoom & Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-[20s] ease-out ${
            mounted ? 'scale-[1.05]' : 'scale-100'
          }`}
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
        />
        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/90" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Holographic Globe (Right side) */}
      <div className={`absolute top-1/2 -translate-y-1/2 right-[-50%] sm:right-[-30%] md:right-[-15%] xl:right-0 w-[600px] h-[600px] md:w-[800px] md:h-[800px] mix-blend-screen pointer-events-none transition-all duration-[3s] ease-out z-0 ${mounted ? 'opacity-30 md:opacity-40 translate-x-0' : 'opacity-0 translate-x-20'}`}>
        <Globe />
      </div>

      {/* Floating Ambient Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen transition-all duration-[3s] ease-out z-0 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center w-full">
        
        {/* Subtitle / Tag */}
        <div 
          className={`mb-6 transition-all duration-1000 ease-out transform ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md shadow-lg">
            Make The Future
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className={`text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-tight leading-[1.1] md:leading-[1.15] transition-all duration-1000 delay-300 ease-out transform ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          Innovation <span className="font-light">for a</span> <br className="hidden md:block" />
          <span className="relative inline-block mt-2 md:mt-0">
            {/* The visible text */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white relative z-10">
              Better World
            </span>
            {/* The glow effect behind text */}
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white blur-xl opacity-40 select-none z-0">
              Better World
            </span>
          </span>
        </h1>
        
        {/* Description */}
        <p 
          className={`text-base sm:text-lg md:text-2xl text-gray-300 mb-10 md:mb-14 max-w-2xl mx-auto font-medium whitespace-pre-line leading-relaxed sm:leading-loose transition-all duration-1000 delay-[600ms] ease-out transform ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {COMPANY_INFO.slogan}
        </p>

        {/* Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto transition-all duration-1000 delay-[900ms] ease-out transform ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <a 
            href="#about" 
            className="group relative px-8 py-4 sm:px-10 sm:py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold overflow-hidden transition-all duration-300 transform hover:scale-[1.03] shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.8)] w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
              モアについて知る
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 sm:px-10 sm:py-5 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold border border-white/10 backdrop-blur-md transition-all duration-300 w-full sm:w-auto text-center hover:border-white/30 text-sm sm:text-base"
          >
            お問い合わせ
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-[1200ms] w-full ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center cursor-pointer opacity-70 hover:opacity-100 transition-opacity animate-bounce">
          <span className="text-white/60 text-[10px] sm:text-xs mb-3 flex items-center gap-2 uppercase font-bold tracking-[0.3em]">
            <span>Scroll</span>
          </span>
          <div className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1 relative shadow-[0_0_15px_rgba(255,255,255,0.1)]">
             <div className="w-1 h-2 sm:w-1.5 sm:h-2.5 bg-white rounded-full mb-1 animate-[bounce_2s_infinite]" />
          </div>
        </div>
      </div>
      
    </section>
  );
}
