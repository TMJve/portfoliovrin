// src/components/Navbar.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-[#E0BFB8]/10 bg-white/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
          <a href="#" className="transition-opacity hover:opacity-70">
            <Image
              src="/logo.png"
              alt="Vrinly Shevanya Logo"
              width={140}
              height={40}
              priority
            />
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative font-sans text-sm font-medium text-[#4B4B4B]/70 transition-colors hover:text-[#4B4B4B]"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#E0BFB8] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full border border-[#4B4B4B]/20 px-5 py-2 text-sm font-medium text-[#4B4B4B] transition-all duration-300 hover:border-[#E0BFB8] hover:bg-[#E0BFB8] hover:text-white"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden"
            aria-label="Open menu"
          >
            <Menu size={24} className="text-[#4B4B4B]" />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-7"
              aria-label="Close menu"
            >
              <X size={24} className="text-[#4B4B4B]" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-2xl font-medium text-[#4B4B4B] transition-colors hover:text-[#E0BFB8]"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Decorative element in mobile menu */}
            <div className="absolute bottom-12 h-[1px] w-16 bg-[#E0BFB8]/40" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}