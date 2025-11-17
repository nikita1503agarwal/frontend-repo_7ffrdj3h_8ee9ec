import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="relative bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s plan your next marketing inflection point</h2>
        <p className="mt-4 text-white/70">
          Share goals, constraints, and timelines. We’ll return a tailored plan, channel mix, and KPI model.
        </p>
        <form className="mt-8 grid md:grid-cols-3 gap-3 text-left">
          <input type="text" placeholder="Your name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <input type="text" placeholder="Company" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <textarea placeholder="What are your growth goals?" rows="4" className="md:col-span-3 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"></textarea>
          <button type="button" className="md:col-span-3 inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
            Request a growth plan
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>
        <p className="mt-4 text-xs text-white/50">By submitting, you agree to our terms and privacy policy.</p>
      </div>
    </section>
  );
}
