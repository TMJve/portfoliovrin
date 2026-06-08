// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#4B4B4B] py-12">
      {/* Subtle rose gold accent line at top */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#E0BFB8] to-transparent" />

      <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center lg:px-12">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.25em] text-white/40">
          Vrinly Shevanya
        </p>
        <p className="font-sans text-xs text-white/25">
          &copy; {currentYear} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}