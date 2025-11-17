import { motion } from 'framer-motion';

const work = [
  {
    tag: 'E-commerce',
    title: 'NeonFlow — 7.2x ROAS in 90 days',
    desc: 'Creative testing engine + lifecycle pipeline unlocked efficient scale across paid social and search.',
    metrics: ['+318% revenue', 'CPAs -41%', 'AOV +22%']
  },
  {
    tag: 'SaaS',
    title: 'AetherCloud — 0→1 category launch',
    desc: 'Positioning, narrative, and demand gen motion to carve a new category with efficient CAC.',
    metrics: ['8.3k signups', '6.1% MQL→SQL', 'CAC -27%']
  },
  {
    tag: 'Fintech',
    title: 'FluxPay — scaling responsibly',
    desc: 'Introduced risk-aware paid growth loops with creative velocity and clear attribution.',
    metrics: ['+142% MoM', 'LTV +19%', 'Churn -11%']
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Case studies</h2>
            <p className="mt-3 text-white/70 max-w-xl">Outcome‑first marketing programs with measurable financial impact.</p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition">Get the deck</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {work.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6"
            >
              <span className="text-[10px] tracking-widest uppercase text-fuchsia-300/80">{w.tag}</span>
              <h3 className="mt-2 text-white font-semibold">{w.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{w.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {w.metrics.map((m) => (
                  <span key={m} className="text-xs text-white/70 border border-white/10 rounded-full px-3 py-1">{m}</span>
                ))}
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(800px_200px_at_var(--x,50%)_0%,rgba(168,85,247,0.25),transparent_60%)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
