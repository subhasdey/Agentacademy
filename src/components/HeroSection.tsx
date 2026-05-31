import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="bg-black min-h-screen flex flex-col justify-end pb-20 relative overflow-hidden">
    {/* 3D grid with perspective */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
      backgroundSize: '80px 80px',
      transform: 'perspective(600px) rotateX(10deg) scale(1.2)',
      transformOrigin: 'center bottom',
    }} />
    {/* Gradient glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse at center, #6366f1 0%, transparent 70%)', filter: 'blur(60px)' }} />

    <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10 w-full">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-[12px] font-medium text-white/70 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Summer 2026 — Now Enrolling · Limited Seats
        </span>
      </div>

      <h1 className="font-display font-black text-white leading-[1.0] mb-10"
        style={{ fontSize: 'clamp(48px,7vw,92px)' }}>
        Summer AI<br />
        <em className="not-italic" style={{ color: '#a78bfa' }}>Agent Camp</em><br />
        <span className="text-white/40 font-normal text-[0.55em]">Build Real Agents in 4 Days</span>
      </h1>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <p className="text-white/55 text-[16px] leading-[1.8] max-w-[480px]" style={{ fontFamily: 'Inter, sans-serif' }}>
          A hands-on summer camp for anyone who wants to build AI agents from scratch — using Python, Ollama (local LLMs), and SQLite. No cloud API required. Two sessions in July 2026, 5 PM – 7 PM daily.
        </p>
        <div className="flex flex-wrap gap-4 flex-shrink-0">
          <a href="#courses" className="btn-outline-white">View Curriculum</a>
          <a href="#register" className="btn-black" style={{ background: '#a78bfa', color: '#0a0a0a' }}>
            Reserve Seat <ArrowRight size={13} />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/10">
        {[['4 Days','Per Session'],['5 PM – 7 PM','Daily PST'],['$400','Per Session'],['2 Sessions','July 2026'],['100%','Hands-On']].map(([v,l])=>(
          <div key={l} style={{ perspective: '400px' }}>
            <div className="transition-transform duration-300" style={{ transformStyle: 'preserve-3d' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(-8deg) rotateX(6deg)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'rotateY(0deg) rotateX(0deg)')}>
              <div className="font-display font-black text-white text-3xl leading-none">{v}</div>
              <div className="text-white/40 text-[12px] uppercase tracking-widest mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{l}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
