import React from 'react';

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#070711] to-[#0a0a12]" />

      {/* Neon radial glows */}
      <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(88,101,242,0.35),transparent_60%)] blur-2xl" />
      <div className="absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,255,209,0.25),transparent_60%)] blur-2xl" />
      <div className="absolute top-1/3 -left-24 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,0,128,0.18),transparent_60%)] blur-2xl" />

      {/* Subtle scanline grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: '48px 48px, 48px 48px',
          backgroundPosition: '0 0, 0 0',
        }}
      />

      {/* Animated conic beam */}
      <div className="absolute left-1/2 top-[-10%] h-[1200px] w-[1200px] -translate-x-1/2 animate-rotate-slower opacity-20 [mask-image:radial-gradient(closest-side,black,transparent)]">
        <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,rgba(0,255,209,0.0),rgba(0,255,209,0.25),rgba(88,101,242,0.25),rgba(255,0,128,0.25),rgba(0,255,209,0.0))]" />
      </div>

      {/* Floating neon orbs */}
      <div className="absolute left-[10%] top-[28%] h-28 w-28 animate-float-slow rounded-full bg-cyan-400/30 blur-xl" />
      <div className="absolute right-[14%] top-[42%] h-24 w-24 animate-float-slower rounded-full bg-fuchsia-400/30 blur-xl" />

      {/* Wireframe spheres */}
      <svg className="absolute right-8 bottom-24 h-40 w-40 animate-float-slowest opacity-60" viewBox="0 0 200 200" fill="none">
        <defs>
          <radialGradient id="g1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ffd1" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#00ffd1" stopOpacity="0.85" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="88" stroke="url(#g1)" strokeWidth="1.2" />
        {Array.from({ length: 6 }).map((_, i) => (
          <ellipse key={i} cx="100" cy="100" rx={88 - i * 10} ry={44 - i * 5} stroke="#6ee7e999" strokeWidth="0.8" />
        ))}
      </svg>

      <svg className="absolute left-10 top-24 h-56 w-56 animate-float-slow opacity-50" viewBox="0 0 200 200" fill="none">
        <circle cx="100" cy="100" r="84" stroke="#c084fc99" strokeWidth="1" />
        {Array.from({ length: 8 }).map((_, i) => (
          <circle key={i} cx="100" cy="100" r={84 - i * 9} stroke="#a78bfa55" strokeWidth="0.8" />
        ))}
      </svg>

      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\
        <svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'>\
          <filter id=\'n\'>\
            <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/>\
          </filter>\
          <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.35\'/>\
        </svg>\n")' }} />
    </div>
  );
}

export default Background;
