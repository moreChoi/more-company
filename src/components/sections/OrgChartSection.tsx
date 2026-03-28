"use client";

import { useEffect, useRef, useState } from "react";

export default function OrgChartSection() {
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
    <section id="orgchart" ref={sectionRef} className="section-padding bg-gray-50 pb-24 text-gray-900 border-t border-gray-200 overflow-hidden">
      <div className="container-inner">
        <div className={`mb-12 md:mb-16 text-center transition-all duration-1000 ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl font-bold tracking-tight mb-2">組織図</h2>
          <p className="text-blue-600 font-medium tracking-widest uppercase text-sm">Organization</p>
        </div>
        
        {/* ======================= */}
        {/* Mobile View (< 768px)   */}
        {/* ======================= */}
        <div className={`md:hidden mt-8 px-4 max-w-md mx-auto relative transition-all duration-1000 delay-[300ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          {/* Root Level */}
          <div className="bg-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-md text-center z-10 border border-blue-700 mx-auto w-4/5">
            代表取締役
          </div>
          
          <div className="flex justify-center flex-col items-center">
            <div className="w-px h-8 bg-blue-300"></div>
          </div>

          <div className="space-y-5">
            {/* Sales Branch */}
            <div className="bg-white border border-blue-200/60 rounded-xl p-5 shadow-sm">
              <div className="text-blue-900 font-extrabold text-base mb-4 flex items-center gap-3 border-b border-gray-100 pb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                営業本部
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                <div className="bg-blue-50/50 hover:bg-blue-100/50 transition-colors text-gray-700 py-2.5 px-4 text-sm rounded-lg border border-blue-100/50 flex items-center before:content-[''] before:w-1 before:h-1 before:bg-blue-300 before:rounded-full before:mr-2">法人営業部</div>
                <div className="bg-blue-50/50 hover:bg-blue-100/50 transition-colors text-gray-700 py-2.5 px-4 text-sm rounded-lg border border-blue-100/50 flex items-center before:content-[''] before:w-1 before:h-1 before:bg-blue-300 before:rounded-full before:mr-2">企画部</div>
              </div>
            </div>

            {/* Dev Branch */}
            <div className="bg-white border border-blue-200/60 rounded-xl p-5 shadow-sm">
              <div className="text-blue-900 font-extrabold text-base mb-4 flex items-center gap-3 border-b border-gray-100 pb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                開発本部
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                <div className="bg-blue-50/50 hover:bg-blue-100/50 transition-colors text-gray-700 py-2.5 px-4 text-sm rounded-lg border border-blue-100/50 flex items-center before:content-[''] before:w-1 before:h-1 before:bg-blue-300 before:rounded-full before:mr-2">システム開発部</div>
                <div className="bg-blue-50/50 hover:bg-blue-100/50 transition-colors text-gray-700 py-2.5 px-4 text-sm rounded-lg border border-blue-100/50 flex items-center before:content-[''] before:w-1 before:h-1 before:bg-blue-300 before:rounded-full before:mr-2">インフラ部</div>
                <div className="bg-blue-50/50 hover:bg-blue-100/50 transition-colors text-gray-700 py-2.5 px-4 text-sm rounded-lg border border-blue-100/50 flex items-center before:content-[''] before:w-1 before:h-1 before:bg-blue-300 before:rounded-full before:mr-2">R&D室</div>
              </div>
            </div>

            {/* Admin Branch */}
            <div className="bg-white border border-blue-200/60 rounded-xl p-5 shadow-sm">
              <div className="text-blue-900 font-extrabold text-base mb-4 flex items-center gap-3 border-b border-gray-100 pb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>
                管理本部
              </div>
              <div className="grid grid-cols-1 gap-2.5">
                <div className="bg-blue-50/50 hover:bg-blue-100/50 transition-colors text-gray-700 py-2.5 px-4 text-sm rounded-lg border border-blue-100/50 flex items-center before:content-[''] before:w-1 before:h-1 before:bg-blue-300 before:rounded-full before:mr-2">総務人事部</div>
                <div className="bg-blue-50/50 hover:bg-blue-100/50 transition-colors text-gray-700 py-2.5 px-4 text-sm rounded-lg border border-blue-100/50 flex items-center before:content-[''] before:w-1 before:h-1 before:bg-blue-300 before:rounded-full before:mr-2">財務経理部</div>
              </div>
            </div>
          </div>
        </div>


        {/* ======================= */}
        {/* Desktop View (>= 768px) */}
        {/* ======================= */}
        <div className={`hidden md:flex flex-col items-center justify-center mt-12 overflow-x-auto pb-8 w-full transition-all duration-1000 delay-[300ms] ease-out transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="min-w-[800px] flex flex-col items-center">
            
            {/* Root Level */}
            <div className="bg-blue-600 text-white font-bold py-4 px-16 rounded-xl shadow-lg z-10 text-center tracking-widest text-lg">
              代表取締役
            </div>
            
            {/* Vertical Line */}
            <div className="w-px h-10 bg-blue-400"></div>
            
            {/* Horizontal Line dividing branches */}
            <div className="w-[660px] h-[2px] bg-blue-400"></div>
            
            {/* Branches */}
            <div className="flex justify-between w-[660px] relative mt-0">
              {/* Left Branch */}
              <div className="flex flex-col items-center w-48">
                <div className="w-px h-8 bg-blue-400"></div>
                <div className="bg-white border-2 border-blue-400 text-blue-900 font-extrabold py-3.5 px-6 rounded-lg shadow-md w-full text-center text-base mb-6 relative hover:-translate-y-1 transition-transform">
                  営業本部
                </div>
                <div className="flex flex-col gap-3 w-full items-center relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:h-full before:bg-blue-100 before:-z-10">
                  <div className="bg-white hover:bg-blue-50 transition-colors text-gray-700 py-2.5 px-4 text-sm font-medium rounded-md border border-gray-200 shadow-sm w-44 text-center z-10">法人営業部</div>
                  <div className="bg-white hover:bg-blue-50 transition-colors text-gray-700 py-2.5 px-4 text-sm font-medium rounded-md border border-gray-200 shadow-sm w-44 text-center z-10">企画部</div>
                </div>
              </div>
              
              {/* Center Branch */}
              <div className="flex flex-col items-center w-48">
                <div className="w-px h-8 bg-blue-400"></div>
                <div className="bg-white border-2 border-blue-400 text-blue-900 font-extrabold py-3.5 px-6 rounded-lg shadow-md w-full text-center text-base mb-6 relative hover:-translate-y-1 transition-transform">
                  開発本部
                </div>
                <div className="flex flex-col gap-3 w-full items-center relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:h-full before:bg-blue-100 before:-z-10">
                  <div className="bg-white hover:bg-blue-50 transition-colors text-gray-700 py-2.5 px-4 text-sm font-medium rounded-md border border-gray-200 shadow-sm w-44 text-center z-10">システム開発部</div>
                  <div className="bg-white hover:bg-blue-50 transition-colors text-gray-700 py-2.5 px-4 text-sm font-medium rounded-md border border-gray-200 shadow-sm w-44 text-center z-10">インフラ部</div>
                  <div className="bg-white hover:bg-blue-50 transition-colors text-gray-700 py-2.5 px-4 text-sm font-medium rounded-md border border-gray-200 shadow-sm w-44 text-center z-10">R&D室</div>
                </div>
              </div>
              
              {/* Right Branch */}
              <div className="flex flex-col items-center w-48">
                <div className="w-px h-8 bg-blue-400"></div>
                <div className="bg-white border-2 border-blue-400 text-blue-900 font-extrabold py-3.5 px-6 rounded-lg shadow-md w-full text-center text-base mb-6 relative hover:-translate-y-1 transition-transform">
                  管理本部
                </div>
                <div className="flex flex-col gap-3 w-full items-center relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-px before:h-full before:bg-blue-100 before:-z-10">
                  <div className="bg-white hover:bg-blue-50 transition-colors text-gray-700 py-2.5 px-4 text-sm font-medium rounded-md border border-gray-200 shadow-sm w-44 text-center z-10">総務人事部</div>
                  <div className="bg-white hover:bg-blue-50 transition-colors text-gray-700 py-2.5 px-4 text-sm font-medium rounded-md border border-gray-200 shadow-sm w-44 text-center z-10">財務経理部</div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
