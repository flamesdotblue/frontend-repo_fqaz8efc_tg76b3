import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive SaaS Landing',
    desc: 'High-converting marketing site with 3D hero and motion micro-interactions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    accent: 'from-indigo-500 to-sky-500',
  },
  {
    title: 'E-commerce Experience',
    desc: 'Smooth product browsing with instant search, filters and delightful cart flow.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    link: '#',
    accent: 'from-rose-500 to-orange-400',
  },
  {
    title: 'Portfolio Engine',
    desc: 'Modular, fast portfolio system for creators with MDX and dynamic theming.',
    tags: ['Vite', 'MDX', 'Design Systems'],
    link: '#',
    accent: 'from-emerald-500 to-teal-400',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Selected Work</h2>
          <a href="#contact" className="text-sm font-medium hover:text-indigo-500">Request full case study</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.link}
              className="group relative rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden bg-white dark:bg-neutral-900 hover:shadow-xl transition-shadow"
            >
              <div className={`h-32 bg-gradient-to-r ${p.accent}`} />
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                  <ExternalLink size={16} className="opacity-60 group-hover:opacity-100" />
                </div>
                <p className="mt-2 text-sm text-black/70 dark:text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/5">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
