import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Map constraints',
    desc: 'Quant + qual audit to locate the highest-leverage constraints across your funnel.'
  },
  {
    title: 'Design experiments',
    desc: 'Hypothesis matrix and creative system to test fast and learn faster.'
  },
  {
    title: 'Build the stack',
    desc: 'Tracking, automation, and content pipelines that scale with confidence.'
  },
  {
    title: 'Compound results',
    desc: 'We iterate weekly, capturing learnings and reinvesting into the next cycle.'
  }
];

export default function Approach() {
  return (
    <section id="approach" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Our approach</h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Strategy meets systems. We build machines that learn, then let the data guide the path to outsized outcomes.
            </p>
          </div>

          <div className="grid gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <div className="absolute -left-3 -top-3 h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-indigo-500 text-white grid place-items-center text-sm font-semibold">
                  {(i + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-white font-semibold">{s.title}</h3>
                <p className="mt-1 text-white/70 text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
