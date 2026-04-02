import { COMPANY_INFO } from "@/data/company";
import SectionTitle from "@/components/ui/SectionTitle";

export default function AccessSection() {
  return (
    <section id="access" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-inner relative z-10">
        <SectionTitle title="アクセス" subtitle="Access" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-4 bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-4 inline-block">Head Office</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                {COMPANY_INFO.details.find(d => d.label === "所在地")?.value}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/50">
                <h4 className="font-bold tracking-tight text-blue-900 mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                  電車でのアクセス
                </h4>
                <ul className="text-sm md:text-base text-gray-600 space-y-2 list-none p-0">
                  <li>曙橋駅のA4出口から徒歩約３分</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Map Side */}
          <div className="lg:col-span-8 h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-sm border border-gray-200">
            <iframe 
              src="https://maps.google.com/maps?q=東京都新宿区片町2-4&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
