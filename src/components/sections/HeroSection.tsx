import { COMPANY_INFO } from "@/data/company";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden transform -mt-[72px]">
      {/* Background Cover */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-black/80" />
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')" }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Innovation for a <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Better World</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium whitespace-pre-line">
          {COMPANY_INFO.slogan}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#about" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
            モアについて知る
          </a>
          <a href="#contact" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold border border-white/20 backdrop-blur-sm transition-all">
            お問い合わせ
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/50 text-xs mb-2 tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-2.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
