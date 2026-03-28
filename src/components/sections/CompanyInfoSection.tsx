"use client";

import { COMPANY_INFO } from "@/data/company";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function CompanyInfoSection() {
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
    <section id="company" ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      <div className="container-inner">
        <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <SectionTitle title="会社概要" subtitle="Company" align="left" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">

          {/* Logo / Brand Info */}
          <div className={`bg-gray-50 p-12 w-full rounded-3xl border border-gray-100 flex flex-col items-center justify-center text-center aspect-square lg:aspect-auto lg:h-full min-h-[350px] shadow-sm transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <div className="relative w-full h-48 md:h-64 mb-8 transition-transform duration-700 hover:scale-110">
              <Image
                src="/more-removebg-preview.png"
                alt={COMPANY_INFO.nameEn}
                fill
                className="object-contain drop-shadow-md"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{COMPANY_INFO.nameEn}</h3>
            <p className="text-gray-500 font-medium tracking-wide">{COMPANY_INFO.name}</p>
          </div>

          {/* Table Details */}
          <div className={`transition-all duration-1000 delay-[500ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            <dl className="divide-y divide-gray-200 border-t border-gray-200">
              {COMPANY_INFO.details.map((detail, index) => (
                <div key={index} className="py-5 flex flex-col sm:flex-row sm:gap-4 hover:bg-gray-50/80 transition-colors px-2 rounded-lg">
                  <dt className="text-sm font-bold text-gray-900 mb-2 sm:mb-0 uppercase tracking-wider w-full sm:w-1/3 md:w-1/4 shrink-0">{detail.label}</dt>
                  <dd className="text-base text-gray-700 leading-relaxed w-full">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    </section>
  );
}
