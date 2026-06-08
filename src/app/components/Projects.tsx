// src/components/Projects.tsx
"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projectsData = [
  {
    title: "Digital Marketing Final Report",
    description:
      "Evaluating the effectiveness of Fore Coffee's digital marketing on sales and customer engagement.",
    image: "/pdfs_image/lap1.jpeg",
    tags: ["Digital marketing analysis", "Engagement analysis", "Content creation"],
    pdfUrl: "/pdfs/digi-marketing-finalreport.pdf",
  },
  {
    title: "Loro Piana Marketing Analysis",
    description:
      "Analysis of Loro Piana's marketing effectiveness and the potential for developing strategies based on artificial intelligence.",
    image: "/pdfs_image/lap2.jpeg",
    tags: ["Data Analysis", "AI in Marketing", "Brand Strategy"],
    pdfUrl: "/pdfs/marketing-data.pdf",
  },
  {
    title: "AI Integration in CRM (Sephora)",
    description:
      "Optimizing Sephora's Customer Relationship Management through the integration of Artificial Intelligence.",
    image: "/pdfs_image/lap3.jpeg",
    tags: ["Omnichannel", "Customer journey", "CRM optimization"],
    pdfUrl: "/pdfs/scrm.pdf",
  },
  {
    title: "Consumer Preference Statistics",
    description:
      "A statistical study of consumer preferences for Nasi Goreng, Sate Ayam, and Rendang across Sumatra, Java, and Bali.",
    image: "/pdfs_image/lap4.jpeg",
    tags: ["Market research", "Brand strategy", "Competitive analysis"],
    pdfUrl: "/pdfs/business.pdf",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute left-0 top-1/3 h-[400px] w-[400px] rounded-full bg-[#E0BFB8]/[0.05] blur-3xl" />

      <div className="container mx-auto px-6 py-28 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#E0BFB8]">
            Portfolio
          </p>
          <div className="mt-3 h-[1px] w-12 bg-[#E0BFB8]/60" />
          <h2 className="mt-6 font-sans text-3xl font-bold text-[#4B4B4B] sm:text-4xl">
            Selected Work &amp; Case Studies
          </h2>
          <p className="mt-4 max-w-xl font-sans text-base text-[#4B4B4B]/60">
            Here are a few projects that showcase my skills in strategy and
            analysis.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project, index) => (
            <motion.a
              key={index}
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-transparent bg-[#FAFAF8] transition-all duration-500 hover:border-[#E0BFB8]/30 hover:shadow-xl"
              variants={itemVariants}
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden sm:h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Floating icon */}
                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={18} className="text-[#4B4B4B]" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-sans text-lg font-bold text-[#4B4B4B] transition-colors group-hover:text-[#E0BFB8]">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-[1.8] text-[#4B4B4B]/65">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#E0BFB8]/30 bg-[#E0BFB8]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-[#4B4B4B]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}