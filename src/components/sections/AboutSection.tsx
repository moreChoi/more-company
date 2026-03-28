"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-black text-white relative flex flex-col md:flex-row overflow-hidden"
    >
      <div className="container-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className={`order-2 lg:order-1 transition-all duration-1000 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            
            {/* Tag */}
            <div className="mb-6 flex flex-col items-start">
               <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm">About Us</span>
               <div className="w-12 h-1 bg-blue-600 mt-3 rounded-full" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">モアは</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg font-medium max-w-lg">
              <p>
                新しいITの形をデザインし、社会に価値を提供するテクノロジー企業です。
                システムの力で、お客様のビジネスの成長を支援します。
              </p>
              <p>
                変化の激しい現代において、常に最先端の技術と柔軟な発想を持ち、
                長期的なパートナーシップを築くことを目指しています。
              </p>
            </div>

            {/* The giant 'ABOUT' text watermark in the background */}
            <span 
              className={`text-gray-500 font-black tracking-tighter uppercase text-8xl md:text-[10rem] opacity-[0.03] absolute -left-10 md:left-20 top-10 md:-top-10 pointer-events-none select-none transition-all duration-1000 delay-500 ease-out transform ${isVisible ? 'translate-y-0 scale-100' : '-translate-y-20 scale-95'}`}
            >
              ABOUT
            </span>
          </div>
          
          {/* Image Content */}
          <div className={`order-1 lg:order-2 transition-all duration-1000 delay-[300ms] ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(37,99,235,0.4)] group">
              <div 
                className={`absolute inset-0 bg-cover bg-center transition-transform duration-[15s] ease-out ${isVisible ? 'scale-105 group-hover:scale-110' : 'scale-100'}`} 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/90 via-black/40 to-blue-900/40 mix-blend-multiply" />
              
              {/* Overlay styling elements */}
              <div className={`absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 to-transparent transition-all duration-1000 delay-[800ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="w-12 h-1 bg-blue-500 mb-4 rounded-full" />
                  <p className="font-extrabold text-white text-2xl tracking-wide">Think Future.</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
