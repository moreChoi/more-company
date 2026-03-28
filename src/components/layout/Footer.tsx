import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-bold text-2xl tracking-tighter text-white">
                モア<span className="text-gray-400 text-sm ml-1">株式会社</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-sm whitespace-pre-line">
              {COMPANY_INFO.slogan}
            </p>
            <address className="not-italic text-sm text-gray-500 mb-4">
              <p>{COMPANY_INFO.details.find(d => d.label === "所在地")?.value}</p>
              <p className="mt-1">{COMPANY_INFO.details.find(d => d.label === "連絡先")?.value}</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Menu</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-sm hover:text-white transition-colors">About</a></li>
              <li><a href="#message" className="text-sm hover:text-white transition-colors">Message</a></li>
              <li><a href="#orgchart" className="text-sm hover:text-white transition-colors">Organization</a></li>
              <li><a href="#stats" className="text-sm hover:text-white transition-colors">Stats</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase opacity-0 select-none hidden md:block">Menu 2</h3>
            <ul className="space-y-3 mt-0 md:-mt-9">
              <li><a href="#benefits" className="text-sm hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#company" className="text-sm hover:text-white transition-colors">Company</a></li>
              <li><a href="#values" className="text-sm hover:text-white transition-colors">Values</a></li>
              <li><a href="#contact" className="text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {currentYear} {COMPANY_INFO.nameEn}. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="#" className="hover:text-white transition-colors">サイトマップ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
