// src/app/page.tsx
import Hero from "./components/Hero";// <-- 1. Import it
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="pt-20"> {/* This padding is for the fixed navbar */}
      <Hero />
      <About /> {/* <-- 2. Add it here */}
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}