// src/components/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const contactLinks = [
  {
    name: "Email",
    label: "vrinly17@gmail.com",
    href: "mailto:vrinly17@gmail.com",
    icon: <Mail size={22} />,
  },
  {
    name: "LinkedIn",
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/vrinly-shevanya-yunus-arifin-996709291/",
    icon: <Linkedin size={22} />,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#FAFAF8]">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full border border-[#E0BFB8]/20" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full border border-[#E0BFB8]/15" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#E0BFB8]/[0.06] blur-2xl" />

      <div className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-6 py-28 lg:px-12">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-[#E0BFB8]">
            Get In Touch
          </p>
          <div className="mx-auto mt-3 h-[1px] w-12 bg-[#E0BFB8]/60" />
        </motion.div>

        <motion.h2
          className="mt-10 text-center font-sans text-3xl font-bold text-[#4B4B4B] sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          className="mt-5 max-w-lg text-center font-sans text-base leading-[1.8] text-[#4B4B4B]/60"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          I&apos;m currently seeking new opportunities and would love to hear
          from you. Whether you have a question or just want to say hi, feel
          free to reach out.
        </motion.p>

        <motion.div
          className="mt-14 flex flex-col gap-4 sm:flex-row sm:gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-[#E0BFB8]/20 bg-white px-7 py-5 transition-all duration-300 hover:border-[#E0BFB8]/50 hover:shadow-lg"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E0BFB8]/15 text-[#4B4B4B] transition-colors duration-300 group-hover:bg-[#E0BFB8] group-hover:text-white">
                {link.icon}
              </span>
              <div className="flex flex-col">
                <span className="font-sans text-xs font-medium uppercase tracking-wider text-[#4B4B4B]/40">
                  {link.name}
                </span>
                <span className="font-sans text-sm font-semibold text-[#4B4B4B]">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight
                size={16}
                className="ml-2 text-[#4B4B4B]/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#E0BFB8]"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}