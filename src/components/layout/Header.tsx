"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NEXT_LINKS } from "@/data/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm ${isScrolled ? "py-3" : "py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image
              src="/Gemini_Generated.png"
              alt="MORE Co, Ltd"
              width={300}
              height={75}
              priority
              className="object-contain h-14 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NEXT_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            >
              お問い合わせ
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4 border-t border-gray-100">
          {NEXT_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-gray-800 hover:text-blue-600 px-2 py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.jpLabel} ({link.label})
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-600 text-white text-center rounded-lg py-3 mt-4 font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            お問い合わせ
          </a>
        </div>
      )}
    </header>
  );
}
