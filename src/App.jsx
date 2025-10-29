import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      {/* Hero with Spline */}
      <Hero />

      {/* Services strip */}
      <section id="services" className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Specialties</h2>
            <p className="text-sm text-black/60 dark:text-white/60">Interfaces that feel alive and ship fast</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
              <h3 className="font-semibold">Interactive Frontend</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">Crafting responsive apps with smooth motion and crisp details.</p>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
              <h3 className="font-semibold">3D & Micro-interactions</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">Playful 3D hero moments and subtle UI feedback that delights.</p>
            </div>
            <div className="rounded-xl border border-black/10 dark:border-white/10 p-5">
              <h3 className="font-semibold">Design Systems</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">Reusable components, accessible patterns, and scalable theming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work grid */}
      <Projects />

      {/* Footer / Contact CTA */}
      <Footer />
    </div>
  );
}

export default App;
