import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Work from './components/Work';
import Approach from './components/Approach';
import CTA from './components/CTA';
import Background from './components/Background';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Background />
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <Approach />
      <CTA />
      <footer className="relative bg-black/95 border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Waka Marketing. All rights reserved.</p>
          <div className="text-white/60 text-sm">Futuristic systems for compounding growth.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
