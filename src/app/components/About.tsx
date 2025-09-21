// src/components/About.tsx
"use client";

import { motion } from 'framer-motion';

const skills = [
  "Client Relationship Management",
  "Market Research & Analysis",
  "Brand Strategy",
  "Data-Driven Sales",
  "Statistical Analysis (Excel, SPSS)",
  "Digital Marketing",
];

export default function About() {
  return (
    <motion.section 
      id="about" 
      className="bg-[#F4F4F4]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex flex-col items-center gap-12 px-6 py-24 md:flex-row md:gap-20">
        
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="font-sans text-3xl font-bold text-[#4B4B4B]">
            A Passion for Brand Storytelling
          </h2>
          
          <p className="mt-6 font-sans leading-relaxed text-[#4B4B4B]/80">
            From a young age, I&apos;ve been fascinated by how iconic brands create loyalty and tell compelling stories. This curiosity led me to pursue a degree in Global Business Marketing, where I&apos;ve honed my skills in understanding the &lsquo;why&rsquo; behind consumer behavior.
          </p>
          <p className="mt-4 font-sans leading-relaxed text-[#4B4B4B]/80">
            My goal is to blend my analytical skills with a creative approach to help luxury and lifestyle brands connect with their audience in a meaningful way. I thrive in collaborative environments and am passionate about driving tangible results.
          </p>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h3 className="font-sans text-2xl font-bold text-[#4B4B4B]">My Expertise</h3>
          {/* --- CHANGE IS ON THIS LINE --- */}
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill} className="rounded-lg bg-white p-4 shadow-sm">
                <p className="font-sans text-sm font-medium text-[#4B4B4B]">{skill}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}