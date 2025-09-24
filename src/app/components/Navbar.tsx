// src/components/Navbar.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image'; // <-- 1. Import the Image component
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          
          {/* --- 2. Replace the text with the Image component --- */}
          <a href="#">
            <Image
              src="/logo.png" // The path to your logo in the /public folder
              alt="Vrinly Shevanya Logo"
              width={140}   // Adjust the width as needed
              height={40}  // Adjust the height as needed
              priority     // Helps load the logo faster
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <a key={link.name} href={link.href} className="group relative font-sans text-sm font-medium text-[#4B4B4B] transition-colors hover:text-[#4B4B4B]/80">
                {link.name}
                <span className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-[#E0BFB8] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact" className="rounded-full border border-[#4B4B4B] px-4 py-1.5 text-sm font-medium text-[#4B4B4B] transition-colors hover:border-[#E0BFB8] hover:bg-[#E0BFB8] hover:text-white">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={24} className="text-[#4B4B4B]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
          <button onClick={() => setIsOpen(false)} className="absolute top-7 right-6">
            <X size={24} className="text-[#4B4B4B]" />
          </button>
          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-sans text-2xl font-medium text-[#4B4B4B]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}