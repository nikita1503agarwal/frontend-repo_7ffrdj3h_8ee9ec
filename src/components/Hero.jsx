import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.2),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.15),transparent_45%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500 animate-pulse" />
            Waka Marketing
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Complex, futuristic growth systems for ambitious brands
          </h1>
          <p className="mt-6 text-lg text-white/70">
            We design campaigns, experiences, and automation that convert attention into revenue. Our approach blends story, systems, and cutting-edge 3D to put your brand years ahead.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
              Start a project
            </a>
            <a href="#work" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 text-white px-6 py-3 font-medium hover:bg-white/10 transition">
              See our work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
