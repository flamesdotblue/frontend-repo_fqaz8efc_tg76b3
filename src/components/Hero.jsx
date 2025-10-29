import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 border border-black/10 dark:border-white/10 text-xs text-black/70 dark:text-white/70">
            <Rocket size={14} /> Available for freelance projects
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Building playful, modern interfaces for ambitious brands
          </h1>
          <p className="mt-4 text-base sm:text-lg text-black/70 dark:text-white/70 max-w-xl">
            I craft interactive experiences that feel alive. From 3D hero moments to fast, accessible product UI.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#work" className="inline-flex items-center gap-2 rounded-md bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90">
              See my work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5">
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-black/60 dark:text-white/60">
            <div>
              <span className="font-semibold text-black dark:text-white">20+</span> projects shipped
            </div>
            <div>
              <span className="font-semibold text-black dark:text-white">5y</span> experience
            </div>
            <div>
              <span className="font-semibold text-black dark:text-white">Frontend • 3D • Brand</span>
            </div>
          </div>
        </div>

        <div className="relative h-[55vh] sm:h-[60vh] lg:h-[70vh] rounded-2xl overflow-hidden">
          {/* Spline 3D scene */}
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* subtle gradient overlays that do not block interaction */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/40 dark:to-black/40" />
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 blur-2xl bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-emerald-400/20" />
        </div>
      </div>
    </section>
  );
}
