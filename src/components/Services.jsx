import { motion } from 'framer-motion';
import { Zap, Radar, Globe, Layers } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Growth Engineering',
    desc: 'Acquisition + lifecycle systems across paid, organic, and partnerships. Built for compounding yield.'
  },
  {
    icon: Radar,
    title: 'Creative Systems',
    desc: 'Concept → iteration → scale. Modular ads and content guided by signal, not guesswork.'
  },
  {
    icon: Globe,
    title: 'Web Experience',
    desc: 'High‑velocity landing pages and 3D web that turn qualified traffic into conversions.'
  },
  {
    icon: Layers,
    title: 'Automation',
    desc: 'Attribution, lead routing, and enrichment that connect your stack and cut CAC.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Marketing services that move the needle</h2>
            <p className="mt-4 text-white/70 max-w-xl">
              We identify constraints, design experiments, and deploy a full‑funnel strategy that compounds. Clear hypotheses, rapid testing, measurable lift.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-white/60">
              <li>• Paid social/search media</li>
              <li>• Creative testing sprints</li>
              <li>• CRO & landing systems</li>
              <li>• Email/SMS lifecycle</li>
              <li>• Attribution & analytics</li>
              <li>• Sales enablement</li>
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition"
              >
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 grid place-items-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="mt-4 text-white font-semibold">{title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
