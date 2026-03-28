import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-black text-white relative flex flex-col md:flex-row">
      <div className="container-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">モアは</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                新しいITの形をデザインし、社会に価値を提供するテクノロジー企業です。
                システムの力で、お客様のビジネスの成長を支援します。
              </p>
              <p>
                変化の激しい現代において、常に最先端の技術と柔軟な発想を持ち、
                長期的なパートナーシップを築くことを目指しています。
              </p>
            </div>
            <div className="mt-12">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-8xl md:text-9xl opacity-10 absolute -left-10 md:left-20 top-20 pointer-events-none select-none">ABOUT</span>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent mix-blend-multiply" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
