"use client";

import { STATS_DATA } from "@/data/stats";
import { useState, useEffect, useRef } from "react";

// Simple SVG Donut Chart Component
function DonutChart({ data, delay = 0 }: { data: { name: string; value: number; color: string }[], delay?: number }) {
  const size = 160;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (chartRef.current) {
      observer.observe(chartRef.current);
    }
    
    return () => observer.disconnect();
  }, [delay]);

  let currentOffset = 0;
  
  return (
    <div 
      ref={chartRef} 
      className={`relative w-[160px] h-[160px] mx-auto flex items-center justify-center transition-all duration-1000 ease-out transform ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}
    >
      <svg width={size} height={size} className="transform -rotate-90 filter drop-shadow-sm">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#f3f4f6"
          strokeWidth={strokeWidth}
        />
        {data.map((item, index) => {
          const dashArray = (item.value / 100) * circumference;
          const strokeDashoffset = -currentOffset;
          
          currentOffset += dashArray;
          
          return (
            <circle
              key={index}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={item.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${isVisible ? dashArray : 0} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-[1500ms] ease-out"
              strokeLinecap="round"
            />
          );
        })}
      </svg>
      <div className={`absolute inset-0 flex items-center justify-center flex-col text-center mt-2 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-xs text-gray-500 font-medium tracking-wide">Total</span>
        <span className="text-2xl font-bold text-gray-900 leading-none tracking-tight">100%</span>
      </div>
    </div>
  );
}

function StatCard({ statSection, index }: { statSection: typeof STATS_DATA[0], index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef} 
      className={`flex flex-col items-center bg-gray-50/50 p-8 rounded-2xl transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <h3 className="text-xl font-bold text-gray-800 mb-8 tracking-tight">{statSection.title}</h3>
      
      <div className="mb-8">
        <DonutChart data={statSection.data} delay={index * 150 + 300} />
      </div>
      
      {/* Legend */}
      <div className={`flex flex-col gap-3 w-full max-w-[220px] transition-all duration-1000 delay-[800ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {statSection.data.map((item, i) => (
          <div key={i} className="flex items-center justify-between text-base group">
            <div className="flex items-center gap-3">
              <span 
                className="w-3.5 h-3.5 rounded-full shadow-sm transform transition-transform group-hover:scale-125 duration-300" 
                style={{ backgroundColor: item.color }} 
              ></span>
              <span className="text-gray-600 font-medium">{item.name}</span>
            </div>
            <span className="font-bold text-gray-900">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats" className="section-padding bg-white pb-24 overflow-hidden">
      <div className="container-inner">
        <div 
          ref={headerRef} 
          className={`mb-16 text-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
        >
          <p className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-3">Stats</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-2">数字で見る</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12">
          {STATS_DATA.map((statSection, index) => (
            <StatCard key={statSection.id} statSection={statSection} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
