import { Play, Search, ShoppingCart, TrendingUp } from "lucide-react";

const demos = [
  { icon: Search, level:'Intermediate', dur:'18 min', title:'Autonomous Research Agent', desc:'A 3-agent pipeline that researches any topic, synthesises findings, and produces a structured report in under 2 minutes.', bg:'from-gray-900 to-gray-800' },
  { icon: ShoppingCart, level:'Advanced', dur:'24 min', title:'E-Commerce Customer Service Agent', desc:'Intelligent customer service agent with tool-use, order lookup, refund processing, and escalation to human agents.', bg:'from-black to-gray-800' },
  { icon: TrendingUp, level:'Expert', dur:'32 min', title:'Financial Analysis Pipeline', desc:'Multi-agent system monitoring stock data, generating daily briefings, and flagging anomalies — running 100% locally with Ollama.', bg:'from-gray-900 to-black' },
];

const DemosSection = () => (
  <section id="demos" className="py-28 bg-gray-100">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="mb-16">
        <span className="section-label mb-3">04 — Demos</span>
        <h2 className="font-display font-bold text-black leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>See What Our Students Build</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-0.5 bg-gray-200">
        {demos.map(d => {
          const Icon = d.icon;
          return (
            <div key={d.title} className="bg-white group overflow-hidden">
              <div className={`h-52 bg-gradient-to-br ${d.bg} flex items-center justify-center relative`}>
                <Icon size={64} className="text-white/15" strokeWidth={1} />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
                    <Play size={18} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>
              </div>
              <div className="p-7">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>{d.level}</span>
                  <span className="text-[12px] text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>{d.dur}</span>
                </div>
                <h3 className="font-display font-bold text-[19px] text-black leading-[1.35] mb-2">{d.title}</h3>
                <p className="text-gray-500 text-[13px] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>{d.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
export default DemosSection;
