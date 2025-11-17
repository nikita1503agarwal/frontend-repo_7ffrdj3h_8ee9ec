import { useEffect, useRef } from 'react';

const logos = [
  'NeonFlow', 'OrbitWorks', 'QuantumLabs', 'PulseAI', 'NovaRetail', 'AetherCloud', 'HyperOps', 'Vanta', 'Solstice', 'FluxPay'
];

export default function Marquee() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start;
    let x = 0;
    const speed = 0.5;

    function step(ts) {
      if (!start) start = ts;
      const dt = ts - start;
      start = ts;
      x -= speed * (dt / 16);
      el.style.transform = `translateX(${x}px)`;
      if (Math.abs(x) > el.scrollWidth / 2) x = 0;
      requestAnimationFrame(step);
    }
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-gradient-to-r from-white/5 to-white/[0.04]">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none"/>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none"/>

      <div className="flex whitespace-nowrap py-6 will-change-transform" ref={ref}>
        {[...logos, ...logos].map((name, i) => (
          <div key={i} className="mx-8 text-white/60 hover:text-white transition-colors text-sm tracking-widest uppercase">
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}
