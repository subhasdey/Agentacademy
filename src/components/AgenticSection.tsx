import { Wrench, Users, Layers, Activity } from "lucide-react";

const features = [
  { icon: Wrench, title:'Tool-Use & Function Calling', desc:'Equip agents with real-world tools — web search, code execution, database queries, and external API calls via MCP and native function calling.' },
  { icon: Users, title:'Multi-Agent Orchestration', desc:'Design supervisor–worker hierarchies, peer collaboration networks, and event-driven pipelines using CrewAI and LangGraph.' },
  { icon: Layers, title:'Memory & Context Management', desc:'Build agents with short-term buffers, episodic memory, semantic retrieval, and persistent state across sessions using Redis and vector stores.' },
  { icon: Activity, title:'Observability & Guardrails', desc:'Monitor agent behaviour in production — distributed tracing, cost dashboards, hallucination detection, and safe fallback policies.' },
];

const AgenticSection = () => (
  <section id="agentic" className="py-28 bg-gray-100">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div>
          <span className="section-label mb-3">07 — Agentic AI Features</span>
          <h2 className="font-display font-bold text-black leading-[1.15] mb-12" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            Every Layer of the Agentic Stack
          </h2>
          <div className="border-t border-gray-300">
            {features.map(f => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="grid grid-cols-[48px_1fr] gap-6 items-start py-7 border-b border-gray-300">
                  <div className="w-10 h-10 border border-gray-300 bg-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon size={17} className="text-black" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[15px] text-black mb-1.5" style={{ fontFamily: 'Playfair Display, serif' }}>{f.title}</h4>
                    <p className="text-gray-500 text-[13px] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-black p-12 sticky top-24">
          <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-white/30 mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>Multi-Agent Pipeline — Live View</div>
          <div className="border border-white/20 px-4 py-3.5 text-white/80 text-[13px] font-medium flex items-center gap-3 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse flex-shrink-0" />
            <Users size={13} className="text-white/40 flex-shrink-0" strokeWidth={1.5} />
            Supervisor Agent — Routing task
          </div>
          <div className="ml-7 h-6 border-l border-dashed border-white/15" />
          <div className="grid grid-cols-2 gap-1 mb-1">
            {['Researcher','Writer','Analyst','Reviewer'].map(a => (
              <div key={a} className="border border-white/[0.07] px-3 py-2.5 text-white/50 text-[12px] flex items-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />{a}
              </div>
            ))}
          </div>
          <div className="ml-7 h-6 border-l border-dashed border-white/15" />
          <div className="border border-white/20 px-4 py-3.5 text-white text-[13px] font-medium flex items-center gap-3" style={{ fontFamily: 'Inter, sans-serif' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
            Output Agent — Delivering result
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AgenticSection;
