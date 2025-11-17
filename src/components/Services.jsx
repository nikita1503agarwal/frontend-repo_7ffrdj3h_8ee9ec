import { motion } from 'framer-motion';
import { Zap, Radar, Globe, Layers } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Growth Engineering',
    desc: 'Performance ecosystems across paid, organic, and lifecycle. Built for compounding yield.'
  },
  {
    icon: Radar,
    title: 'Creative Systems',
    desc: 'Modular ad and content systems driven by rapid experimentation and data signal.'
  },
  {
    icon: Globe,
    title: 'Web Experience',
    desc: '3D, real-time, and AI-enhanced sites designed to convert curiosity into customers.'
  },
  {
    icon: Layers,
    title: 'Automation',
    desc: 'Low-latency pipelines that turn raw attention into revenue with minimal human lift.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(255,255,255,0.04)_50%,transparent_100%)]" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Services that compound</h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Every engagement is a system. We identify constraints, design experiments, and build the stack that unlocks sustainable growth.
            </p>
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
                <p className="mt-2 text-white/70 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
