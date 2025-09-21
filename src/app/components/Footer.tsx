// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#E0BFB8] py-8"> {/* Changed background to rose gold */}
      <div className="container mx-auto px-6 text-center">
        <p className="font-sans text-sm text-white/90"> {/* Changed text to a soft white */}
          &copy; {currentYear} Vrinly Shevanya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}