import { BENEFITS_DATA } from "@/data/benefits";
import SectionTitle from "@/components/ui/SectionTitle";

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section-padding bg-gray-50 border-t border-gray-200">
      <div className="container-inner">
        <SectionTitle title="福利厚生" subtitle="Benefits" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {BENEFITS_DATA.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={benefit.id} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-blue-100 group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
