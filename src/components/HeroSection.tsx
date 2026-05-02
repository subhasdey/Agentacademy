import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section className="bg-black min-h-screen flex flex-col justify-end pb-20 relative overflow-hidden">
    {/* subtle grid */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)',
      backgroundSize: '80px 80px'
    }} />
    <div className="max-w-[1240px] mx-auto px-6 md:px-12 relative z-10 w-full">
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-[12px] font-medium text-white/70 uppercase tracking-widest" style={{ fontFamily: 'Inter, sans-serif' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Spring 2026 Cohort — Now Enrolling
        </span>
      </div>

      <h1 className="font-display font-black text-white leading-[1.0] mb-10"
        style={{ fontSize: 'clamp(52px,7vw,96px)' }}>
        Build AI Agents<br />
        <em className="text-white/50 not-italic font-normal" style={{ fontStyle: 'italic' }}>That Work in</em><br />
        Production.
      </h1>

      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <p className="text-white/50 text-[16px] leading-[1.8] max-w-[420px]" style={{ fontFamily: 'Inter, sans-serif' }}>
          The most rigorous agentic AI curriculum — from prompt engineering to
          multi-agent orchestration. Designed by practitioners for engineers who build.
        </p>
        <div className="flex flex-wrap gap-4 flex-shrink-0">
          <a href="#courses" className="btn-outline-white">View Curriculum</a>
          <a href="#register" className="btn-black" style={{ background: '#fff', color: '#0a0a0a' }}>
            Enroll Now <ArrowRight size={13} />
          </a>
        </div>
      </div>

      <div className="flex flex-wrap gap-10 mt-14 pt-10 border-t border-white/10">
        {[['12,400+','Students Enrolled'],['48','Countries'],['98%','Completion Rate'],['4.9★','Average Rating'],['3.2×','Avg Salary Lift']].map(([v,l])=>(
          <div key={l}>
            <div className="font-display font-black text-white text-3xl leading-none">{v}</div>
            <div className="text-white/40 text-[12px] uppercase tracking-widest mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
