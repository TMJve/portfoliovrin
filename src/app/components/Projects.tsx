// src/components/Projects.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

// --- Project Data: Updated with your new image paths ---
const projectsData = [
  {
    title: "Digital Marketing Final Report",
    description: "Evaluating the effectiveness of Fore Coffee's digital marketing on sales and customer engagement.",
    image: "/pdfs_image/lap1.jpeg", // <-- Updated
    tags: ["Digital Marketing", "Sales Analysis", "Customer Engagement"],
    pdfUrl: "/pdfs/digi-marketing-finalreport.pdf"
  },
  {
    title: "Loro Piana Marketing Analysis",
    description: "Analysis of Loro Piana's marketing effectiveness and the potential for developing strategies based on artificial intelligence.",
    image: "/pdfs_image/lap2.jpeg", // <-- Updated
    tags: ["Data Analysis", "AI in Marketing", "Brand Strategy"],
    pdfUrl: "/pdfs/marketing-data.pdf"
  },
  {
    title: "AI Integration in CRM (Sephora)",
    description: "Optimizing Sephora's Customer Relationship Management through the integration of Artificial Intelligence.",
    image: "/pdfs_image/lap3.jpeg", // <-- Updated
    tags: ["CRM", "Artificial Intelligence", "Customer Experience"],
    pdfUrl: "/pdfs/scrm.pdf"
  },
  {
    title: "Consumer Preference Statistics",
    description: "A statistical study of consumer preferences for Nasi Goreng, Sate Ayam, and Rendang across Sumatra, Java, and Bali.",
    image: "/pdfs_image/lap4.jpeg", // <-- Updated
    tags: ["Business Statistics", "Consumer Research", "Data Analysis"],
    pdfUrl: "/pdfs/business.pdf"
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="container mx-auto px-6 py-24">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-sans text-3xl font-bold text-[#4B4B4B]">Selected Work & Case Studies</h2>
          <p className="mt-4 font-sans text-lg text-[#4B4B4B]/70">
            Here are a few projects that showcase my skills in strategy and analysis.
          </p>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-2xl"
              variants={itemVariants}
            >
              <div className="relative h-56 w-full">
                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-sans text-xl font-bold text-[#4B4B4B]">{project.title}</h3>
                <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-[#4B4B4B]/80">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#E0BFB8]/50 px-3 py-1 text-xs font-medium text-[#4B4B4B]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href={project.pdfUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#4B4B4B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4B4B4B]/80"
                  >
                    <Download size={16} />
                    View Report
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}