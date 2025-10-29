import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
          <div className="p-8 sm:p-10 bg-gradient-to-br from-indigo-500/10 via-sky-500/10 to-emerald-400/10">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Let’s build something memorable</h3>
            <p className="mt-2 text-black/70 dark:text-white/70 max-w-2xl">
              I help teams ship polished interfaces with motion and 3D moments that delight users.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90">
                <Mail size={16} /> you@example.com
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
                <Linkedin size={16} /> Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="p-6 flex items-center justify-between text-sm">
            <span className="text-black/60 dark:text-white/60">© {new Date().getFullYear()} Your Name. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"><Github size={18} /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
