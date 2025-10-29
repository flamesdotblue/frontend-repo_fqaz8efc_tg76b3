import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg">
          <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">PortaVia</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#work" className="hover:text-indigo-500 transition-colors">Work</a>
          <a href="#services" className="hover:text-indigo-500 transition-colors">Services</a>
          <a href="#contact" className="hover:text-indigo-500 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:you@example.com" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"><Mail size={18} /></a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"><Github size={18} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"><Linkedin size={18} /></a>
        </div>
      </nav>
    </header>
  );
}
