import { COMPANY_INFO } from "@/data/company";
import SectionTitle from "@/components/ui/SectionTitle";

export default function CeoMessageSection() {
  const { ceo } = COMPANY_INFO;

  return (
    <section id="message" className="py-24 md:py-32 lg:py-40 bg-black text-white relative flex items-center min-h-[80vh]">
      <div className="container-inner w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Title Area */}
          <div className="md:col-span-4 text-center md:text-right md:border-r border-gray-800 pr-0 md:pr-10 lg:pr-16 border-b md:border-b-0 pb-10 md:pb-0">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight mb-6 whitespace-nowrap">代表挨拶</h2>
            <p className="text-blue-500 mb-8 font-medium tracking-widest uppercase text-base lg:text-lg">Message</p>
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold mt-12">
              <span className="text-base lg:text-lg font-normal text-gray-400 block mb-3">{ceo.title}</span>
              {ceo.name}
            </div>
          </div>

          {/* Message Area */}
          <div className="md:col-span-8 text-gray-300 leading-relaxed lg:leading-loose text-lg lg:text-xl xl:text-2xl whitespace-pre-line pl-0 md:pl-6 lg:pl-10">
            {ceo.greeting}
          </div>

        </div>
      </div>
    </section>
  );
}
