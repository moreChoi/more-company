export default function OrgChartSection() {
  return (
    <section id="orgchart" className="section-padding bg-gray-50 pb-24 text-gray-900 border-t border-gray-200">
      <div className="container-inner">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-2">組織図</h2>
          <p className="text-blue-600 font-medium tracking-widest uppercase text-sm">Organization</p>
        </div>
        
        {/* CSS-based Org Chart */}
        <div className="flex flex-col items-center justify-center mt-12 overflow-x-auto pb-8">
          
          {/* Root Level */}
          <div className="bg-blue-600 text-white font-bold py-3 px-12 rounded shadow-md z-10 w-48 text-center">
            代表取締役
          </div>
          
          {/* Vertical Line */}
          <div className="w-px h-8 bg-blue-300"></div>
          
          {/* Horizontal Line dividing branches */}
          <div className="w-[300px] md:w-[600px] h-px bg-blue-300"></div>
          
          {/* Branches */}
          <div className="flex justify-between w-[300px] md:w-[600px] relative mt-0">
            {/* Left Branch */}
            <div className="flex flex-col items-center">
              <div className="w-px h-8 bg-blue-300"></div>
              <div className="bg-white border border-blue-200 text-blue-900 font-bold py-3 px-8 rounded shadow-sm w-32 md:w-40 text-center text-sm md:text-base mb-4">
                営業本部
              </div>
              <div className="flex flex-col gap-3 w-full items-center">
                <div className="bg-blue-50 text-gray-700 py-2 px-4 text-xs md:text-sm rounded border border-blue-100 w-28 md:w-32 text-center">法人営業部</div>
                <div className="bg-blue-50 text-gray-700 py-2 px-4 text-xs md:text-sm rounded border border-blue-100 w-28 md:w-32 text-center">企画部</div>
              </div>
            </div>
            
            {/* Center Branch */}
            <div className="flex flex-col items-center">
              <div className="w-px h-8 bg-blue-300"></div>
              <div className="bg-white border border-blue-200 text-blue-900 font-bold py-3 px-8 rounded shadow-sm w-32 md:w-40 text-center text-sm md:text-base mb-4">
                開発本部
              </div>
              <div className="flex flex-col gap-3 w-full items-center">
                <div className="bg-blue-50 text-gray-700 py-2 px-4 text-xs md:text-sm rounded border border-blue-100 w-28 md:w-32 text-center">システム開発部</div>
                <div className="bg-blue-50 text-gray-700 py-2 px-4 text-xs md:text-sm rounded border border-blue-100 w-28 md:w-32 text-center">インフラ部</div>
                <div className="bg-blue-50 text-gray-700 py-2 px-4 text-xs md:text-sm rounded border border-blue-100 w-28 md:w-32 text-center">R&D室</div>
              </div>
            </div>
            
            {/* Right Branch */}
            <div className="flex flex-col items-center">
              <div className="w-px h-8 bg-blue-300"></div>
              <div className="bg-white border border-blue-200 text-blue-900 font-bold py-3 px-8 rounded shadow-sm w-32 md:w-40 text-center text-sm md:text-base mb-4">
                管理本部
              </div>
              <div className="flex flex-col gap-3 w-full items-center">
                <div className="bg-blue-50 text-gray-700 py-2 px-4 text-xs md:text-sm rounded border border-blue-100 w-28 md:w-32 text-center">総務人事部</div>
                <div className="bg-blue-50 text-gray-700 py-2 px-4 text-xs md:text-sm rounded border border-blue-100 w-28 md:w-32 text-center">財務経理部</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
