// src/components/Hero.tsx
"use client"; 
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex min-h-screen items-center px-6">
        <div className="flex w-full flex-col items-center md:flex-row">
          
          <motion.div
            className="mb-12 text-center md:mb-0 md:w-1/2 md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="font-sans text-4xl font-bold tracking-tight text-[#4B4B4B] lg:text-6xl">
              Hi, I am Vrinly Shevanya.
            </h1>
            <p className="mt-6 font-sans text-lg leading-relaxed text-[#4B4B4B]/80">
              A results-oriented marketing professional with a passion for driving growth in global markets through data-driven sales and brand strategy.
            </p>
            <motion.div
              className="mt-8 flex justify-center md:justify-start"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <a href="/CV Vrinly.pdf" download className="rounded-full bg-[#E0BFB8] px-8 py-3 font-sans font-medium text-white shadow-lg transition-shadow hover:shadow-xl">
                Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex w-full justify-center md:w-1/2"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          >
            <div className="relative h-64 w-64 overflow-hidden rounded-full ring-8 ring-[#E0BFB8]/50 md:h-80 md:w-80">
              <Image src="/pfp.jpeg" alt="Professional portrait of Vrinly Shevanya" layout="fill" objectFit="cover" priority />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}