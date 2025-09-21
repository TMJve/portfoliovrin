// src/components/Projects.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

// --- Project Data ---
// You can easily update this array with her actual projects
const projectsData = [
  {
    title: "Luxury Brand Market Entry Strategy",
    description: "A comprehensive analysis of the Southeast Asian market for a European luxury brand, identifying key demographics and a multi-channel launch plan.",
    image: "/images/project-1.jpg", // Create /public/images/ and add project images
    tags: ["Market Research", "Brand Strategy", "Competitive Analysis"],
  },
  {
    title: "Consumer Behavior Data Analysis",
    description: "Utilized SPSS and Excel to analyze survey data, uncovering key insights into purchasing habits that led to a 15% projected increase in engagement.",
    image: "/images/project-2.jpg",
    tags: ["Data Analysis", "SPSS", "Consumer Insights"],
  },
  {
    title: "Digital Marketing Campaign for a Startup",
    description: "Developed and executed a social media and content marketing campaign, resulting in a 40% increase in online visibility and lead generation.",
    image: "/images/project-3.jpg",
    tags: ["Digital Marketing", "Social Media", "Content Creation"],
  },
  {
    title: "Sales Funnel Optimization",
    description: "Mapped the customer journey and identified key drop-off points, proposing a revised sales funnel strategy to improve conversion rates.",
    image: "/images/project-4.jpg",
    tags: ["Sales Strategy", "Customer Journey", "Conversion Optimization"],
  },
];

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This will make each child animate in 0.2s after the previous one
    },
  },
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

        {/* Projects Grid */}
        <motion.div 
          className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the grid is in view
        >
          {projectsData.map((project, index) => (
            <motion.div 
              key={index} 
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition-shadow hover:shadow-2xl"
              variants={itemVariants}
            >
              <div className="relative h-56 w-full">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  layout="fill" 
                  objectFit="cover" 
                  className="transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-xl font-bold text-[#4B4B4B]">{project.title}</h3>
                <p className="mt-3 font-sans text-sm leading-relaxed text-[#4B4B4B]/80">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[#E0BFB8]/50 px-3 py-1 text-xs font-medium text-[#4B4B4B]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}