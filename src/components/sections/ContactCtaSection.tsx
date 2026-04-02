"use client";

import { ArrowUp, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactCtaSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-blue-600 text-white relative overflow-hidden">
      
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-700 rounded-full blur-[100px] pointer-events-none opacity-40 transform -translate-x-1/3 translate-y-1/3" />
      
      <div className="container-inner relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 uppercase">Let&apos;s Work Together</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 font-medium leading-relaxed">
            システム開発のご相談、お見積りなど<br className="hidden md:block" />
            お気軽にお問い合わせください。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Email Contact Button */}
            <a 
              href="mailto:morejp@morejp.net"
              onClick={() => {
                try {
                  navigator.clipboard.writeText("morejp@morejp.net");
                  alert("メールアプリが起動しない場合は、以下のメールアドレスをご利用ください。\n\nコピーされました： morejp@morejp.net");
                } catch (e) {
                  alert("メールアプリが起動しない場合は、以下のメールアドレスをご利用ください： morejp@morejp.net");
                }
              }}
              className="group flex flex-col items-center justify-center gap-1 bg-white text-blue-700 hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6" />
                <span className="text-lg">お問い合わせ</span>
              </div>
              <span className="text-xs font-medium text-blue-500 opacity-80 pt-1 mt-1 border-t border-blue-100">morejp@morejp.net</span>
            </a>
            
            {/* Recruit / Partner Link (Optional) */}
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-8 py-5 rounded-full font-bold text-lg transition-all border border-blue-400/50 w-full sm:w-auto"
            >
              <span>TOPへ</span>
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
