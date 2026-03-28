import { VALUES_DATA } from "@/data/values";

export default function ValuesSection() {
  return (
    <section id="values" className="section-padding bg-black text-white overflow-hidden relative">
      
      {/* Background decoration */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-blue-800/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container-inner relative z-10">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">私たちの価値観</h2>
          <p className="text-blue-500 font-medium tracking-widest uppercase">Values</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12">
          {VALUES_DATA.map((val, idx) => (
            <div 
              key={val.id} 
              className="bg-gray-900/50 backdrop-blur-sm p-10 rounded-3xl border border-gray-800 hover:bg-gray-800/80 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Decorative Number */}
              <div className="absolute -top-4 -right-4 text-9xl font-black text-white/5 select-none pointer-events-none group-hover:text-blue-500/10 transition-colors duration-500">
                0{idx + 1}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white mb-4 tracking-tighter">
                  {val.title}
                </h3>
                <h4 className="text-xl font-bold text-gray-200 mb-6">{val.subtitle}</h4>
                <p className="text-gray-400 leading-relaxed text-lg">{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
