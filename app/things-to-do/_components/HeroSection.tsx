import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-slate-50 pt-32 pb-24 lg:pt-40 lg:pb-32 px-6">
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-indigo-600/30 blur-[100px] animate-pulse-soft" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] rounded-full bg-emerald-600/20 blur-[120px]" />
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[40%] rounded-full bg-blue-600/20 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-md mb-4">
          <MapPin className="w-4 h-4 text-indigo-400" />
          <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Discover Pathankot</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-lg">
          Places to Visit in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400">
            Pathankot
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
          Some cities don’t announce their beauty; they hold it gently, like a secret between the plains and the mountains, and Pathankot is exactly that.
        </p>
      </div>
    </section>
  );
}
