// src/components/About.tsx
"use client";
import { motion, type Variants } from "framer-motion";

const skills = [
  { name: "Client Relationship Management", icon: "🤝" },
  { name: "Market Research & Analysis", icon: "📊" },
  { name: "Brand Strategy", icon: "✦" },
  { name: "Data-Driven Sales", icon: "📈" },
  { name: "Statistical Analysis (Excel, SPSS)", icon: "🔢" },
  { name: "Digital Marketing", icon: "💡" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#FAFAF8]">
      {/* Decorative background element */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#E0BFB8]/[0.07] blur-3xl" />

      <div className="container mx-auto px-6 py-28 lg:px-12">
        {/* Section label */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#E0BFB8]">
            About Me
          </p>
          <div className="mt-3 h-[1px] w-12 bg-[#E0BFB8]/60" />
        </motion.div>

        <div className="flex flex-col gap-16 md:flex-row md:gap-20 lg:gap-28">
          {/* Left — Story */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-sans text-3xl font-bold leading-snug text-[#4B4B4B] sm:text-4xl">
              A Passion for
              <br />
              <span className="text-[#E0BFB8]">Brand Storytelling</span>
            </h2>

            <div className="mt-8 space-y-5">
              <p className="font-sans text-base leading-[1.9] text-[#4B4B4B]/75">
                From a young age, I&apos;ve been fascinated by how iconic brands
                create loyalty and tell compelling stories. This curiosity led me
                to pursue a degree in Global Business Marketing, where I&apos;ve
                honed my skills in understanding the &lsquo;why&rsquo; behind
                consumer behavior.
              </p>
              <p className="font-sans text-base leading-[1.9] text-[#4B4B4B]/75">
                My goal is to blend my analytical skills with a creative approach
                to help luxury and lifestyle brands connect with their audience
                in a meaningful way. I thrive in collaborative environments and
                am passionate about driving tangible results.
              </p>
            </div>

            {/* Decorative quote */}
            <motion.blockquote
              className="mt-10 border-l-2 border-[#E0BFB8]/60 pl-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="font-sans text-sm italic leading-relaxed text-[#4B4B4B]/50">
                &ldquo;Great brands are built on stories that people want to be
                part of.&rdquo;
              </p>
            </motion.blockquote>
          </motion.div>

          {/* Right — Skills */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-[#4B4B4B]">
              My Expertise
            </h3>

            <motion.div
              className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative overflow-hidden rounded-xl border border-[#E0BFB8]/20 bg-white p-5 transition-all duration-300 hover:border-[#E0BFB8]/50 hover:shadow-md"
                  variants={itemVariants}
                >
                  <span className="mb-2 block text-lg">{skill.icon}</span>
                  <p className="font-sans text-sm font-medium leading-snug text-[#4B4B4B]">
                    {skill.name}
                  </p>
                  {/* Hover accent */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#E0BFB8] transition-all duration-500 group-hover:w-full" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}