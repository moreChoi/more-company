"use client";

import { STATS_DATA } from "@/data/stats";

// Simple SVG Donut Chart Component
function DonutChart({ data }: { data: { name: string; value: number; color: string }[] }) {
  const size = 160;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  let currentOffset = 0;
  
  return (
    <div className="relative w-[160px] h-[160px] mx-auto flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
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
              strokeDasharray={`${dashArray} ${circumference}`}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000 ease-out"
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center flex-col text-center mt-2">
        <span className="text-xs text-gray-500 font-medium">Total</span>
        <span className="text-xl font-bold text-gray-900 leading-none">100%</span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="section-padding bg-white pb-20">
      <div className="container-inner">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-2">数字で見る</h2>
          <p className="text-blue-600 font-medium tracking-widest uppercase text-sm">Stats</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {STATS_DATA.map((statSection) => (
            <div key={statSection.id} className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-gray-800 mb-8">{statSection.title}</h3>
              
              <div className="mb-6">
                <DonutChart data={statSection.data} />
              </div>
              
              {/* Legend */}
              <div className="flex flex-col gap-2 w-full max-w-[200px]">
                {statSection.data.map((item, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color, background: item.color.startsWith('var') ? `rgb(var(--color-primary))` : item.color }} 
                        // Note for color parsing, inline style handles standard hex, but for tailwind css var we'll fall back gracefully or assume standard css vars are handled.
                        // For simplicity, let's just let the browser handle it
                      ></span>
                      <span className="text-gray-600">{item.name}</span>
                    </div>
                    <span className="font-bold text-gray-900">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
