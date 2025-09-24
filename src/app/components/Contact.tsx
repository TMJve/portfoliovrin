// src/components/Contact.tsx
"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

const contactLinks = [
  {
    name: "Email",
    href: "mailto:vrinly17@gmail.com",
    icon: <Mail size={24} />
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vrinly-shevanya-yunus-arifin-996709291/",
    icon: <Linkedin size={24} />
  }
];

export default function Contact() {
  return (
    <motion.section 
      id="contact" 
      className="bg-[#F4F4F4]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
        {/* FIXED APOSTROPHE HERE */}
        <h2 className="font-sans text-3xl font-bold text-[#4B4B4B]">Let&apos;s Connect</h2>
        {/* FIXED APOSTROPHE HERE */}
        <p className="mt-4 max-w-2xl font-sans text-lg text-[#4B4B4B]/70">
          I&apos;m currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.
        </p>
        
        <div className="mt-12 flex flex-col gap-6 sm:flex-row">
          {contactLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-sans font-medium text-[#4B4B4B] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {link.icon}
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}


// // src/components/Contact.tsx
// "use client";

// import { motion } from 'framer-motion';
// import { Mail, Linkedin } from 'lucide-react';

// const contactLinks = [
//   {
//     name: "Email",
//     href: "mailto:vrinly.shevanya@example.com",
//     icon: <Mail size={24} />
//   },
//   {
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/in/vrinlyshevanya/",
//     icon: <Linkedin size={24} />
//   }
// ];

// export default function Contact() {
//   return (
//     <motion.section 
//       id="contact" 
//       className="bg-[#F4F4F4]"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 1 }}
//     >
//       <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
//         {/* FIXED APOSTROPHE HERE */}
//         <h2 className="font-sans text-3xl font-bold text-[#4B4B4B]">Let&apos;s Connect</h2>
//         {/* FIXED APOSTROPHE HERE */}
//         <p className="mt-4 max-w-2xl font-sans text-lg text-[#4B4B4B]/70">
//           I&apos;m currently seeking new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out.
//         </p>
        
//         <div className="mt-12 flex flex-col gap-6 sm:flex-row">
//           {contactLinks.map((link) => (
//             <motion.a
//               key={link.name}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-sans font-medium text-[#4B4B4B] shadow-lg transition-all hover:scale-105 hover:shadow-xl"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 400, damping: 17 }}
//             >
//               {link.icon}
//               <span>{link.name}</span>
//             </motion.a>
//           ))}
//         </div>
//       </div>
//     </motion.section>
//   );
// }