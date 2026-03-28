"use client";

import { BENEFITS_DATA } from "@/data/benefits";
import SectionTitle from "@/components/ui/SectionTitle";
import { useEffect, useRef, useState } from "react";

export default function BenefitsSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="section-padding bg-gray-50 border-t border-gray-200 overflow-hidden">
      <div className="container-inner">
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
           <SectionTitle title="福利厚生" subtitle="Benefits" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {BENEFITS_DATA.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.id} 
                className={`bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:border-blue-100 group ease-out duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
