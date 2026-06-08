// src/components/Hero.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Subtle background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #4B4B4B 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative accent line */}
      <motion.div
        className="absolute left-0 top-1/2 hidden h-[1px] w-32 bg-gradient-to-r from-transparent via-[#E0BFB8] to-transparent md:block"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      />

      <div className="container relative mx-auto flex min-h-screen items-center px-6 lg:px-12">
        <div className="flex w-full flex-col items-center gap-16 md:flex-row md:gap-8 lg:gap-20">
          {/* Text Content */}
          <motion.div
            className="text-center md:w-1/2 md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Eyebrow label */}
            <motion.p
              className="mb-4 inline-block font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#E0BFB8]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Marketing &amp; Brand Strategy
            </motion.p>

            <motion.h1
              className="font-sans text-4xl font-bold leading-[1.1] tracking-tight text-[#4B4B4B] sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I am{" "}
              <span className="relative inline-block">
                Vrinly Shevanya
                <motion.span
                  className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-[#E0BFB8]/60"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
              .
            </motion.h1>

            <motion.p
              className="mt-6 max-w-lg font-sans text-base leading-[1.8] text-[#4B4B4B]/70 md:text-lg"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              A results-oriented marketing professional with a passion for
              driving growth in global markets through data-driven sales and
              brand strategy.
            </motion.p>

            <motion.div
              className="mt-10 flex items-center justify-center gap-4 md:justify-start"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <a
                href="https://drive.google.com/file/d/1HDPA0tXvF2VkTAiYzNFyCG91J-tgmUD7/view?usp=sharing"
                download
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full bg-[#4B4B4B] px-8 py-3.5 font-sans text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <span className="relative z-10">Download CV</span>
                <span className="absolute inset-0 -translate-x-full bg-[#E0BFB8] transition-transform duration-500 ease-out group-hover:translate-x-0" />
              </a>
              <a
                href="#projects"
                className="font-sans text-sm font-medium text-[#4B4B4B]/60 transition-colors hover:text-[#4B4B4B]"
              >
                View Work →
              </a>
            </motion.div>
          </motion.div>

          {/* Portrait */}
          <motion.div
            className="flex w-full justify-center md:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative ring behind */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-[#E0BFB8]/30"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-[#E0BFB8]/15"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />

              <div className="relative h-72 w-72 overflow-hidden rounded-full ring-4 ring-[#E0BFB8]/40 ring-offset-4 ring-offset-white md:h-80 md:w-80 lg:h-96 lg:w-96">
                <Image
                  src="/pfp.jpeg"
                  alt="Professional portrait of Vrinly Shevanya"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#4B4B4B]/40">
            Scroll
          </span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-[#E0BFB8]/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}