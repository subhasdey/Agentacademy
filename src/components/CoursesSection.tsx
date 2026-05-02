import { useState } from "react";
import { Grid, Zap, Bot, Database, Monitor, Star } from "lucide-react";

const modules = [
  { week:'Week 1–2', icon: Grid, title:'Foundations of Generative AI', desc:'LLMs, transformers, attention mechanisms, tokenisation and embeddings. Understanding what powers GPT-4, Claude, and Gemini from first principles.', tags:['Transformers','Embeddings','Tokenisation'] },
  { week:'Week 3–4', icon: Zap, title:'Prompt Engineering & Model APIs', desc:'OpenAI, Claude, and Grok APIs. Advanced prompting, chain-of-thought, few-shot learning, structured outputs, and native function calling.', tags:['OpenAI API','Claude API','CoT'] },
  { week:'Week 5–6', icon: Bot, title:'Building AI Agents', desc:'CrewAI, AutoGen, and LangGraph in depth. Multi-agent orchestration, tool-use, MCP (Model Context Protocol), and communication protocols.', tags:['CrewAI','LangGraph','MCP'] },
  { week:'Week 7–8', icon: Database, title:'RAG & Vector Stores', desc:'Retrieval-augmented generation, vector databases — Pinecone, Weaviate, pgvector — semantic search, and hybrid retrieval system design.', tags:['Pinecone','RAG','pgvector'] },
  { week:'Week 9–10', icon: Monitor, title:'Enterprise AI Systems', desc:'Multi-agent enterprise simulation, role-based agents, decision hierarchies, observability, distributed tracing, cost management, and guardrails.', tags:['Observability','Cost Mgmt','Guardrails'] },
  { week:'Week 11–12', icon: Star, title:'Capstone Project & Demo Day', desc:'Build and deploy a production-ready AI agent system. Portfolio review with industry mentors, demo day presentation, and certificate of completion.', tags:['Deployment','Demo Day','Certificate'] },
];

const CoursesSection = () => {
  const [hovered, setHovered] = useState<number|null>(null);
  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-16 md:mb-20 items-end">
          <div>
            <span className="section-label mb-3">03 — Curriculum</span>
            <h2 className="font-display font-bold text-black leading-[1.15]" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>What You Will Learn</h2>
          </div>
          <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8]" style={{ fontFamily: 'Inter, sans-serif' }}>
            A 12-week programme designed to take you from GenAI fundamentals to building and shipping production-grade agentic systems. Every module includes live sessions, hands-on labs, and a milestone project.
          </p>
        </div>

        <div className="border-t border-gray-200">
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i}
                className="border-b border-gray-200 transition-colors cursor-pointer py-7 md:py-9"
                style={{ background: hovered === i ? '#f9f9f9' : 'transparent' }}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
                {/* Mobile layout */}
                <div className="flex items-start gap-4 md:hidden px-0">
                  <div className="w-9 h-9 border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={15} className="text-gray-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-gray-400 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{m.week}</div>
                    <div className="font-display font-bold text-[18px] text-black mb-1.5">{m.title}</div>
                    <div className="text-gray-500 text-[13px] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>{m.desc}</div>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {m.tags.map(t => (
                        <span key={t} className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 bg-gray-100 px-2 py-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Desktop layout */}
                <div className="hidden md:grid md:grid-cols-[140px_48px_1fr_auto] md:gap-10 md:items-start">
                  <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-gray-400 pt-1" style={{ fontFamily: 'Inter, sans-serif' }}>{m.week}</div>
                  <div className="w-10 h-10 border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <Icon size={17} className="text-gray-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-[22px] text-black mb-2">{m.title}</div>
                    <div className="text-gray-500 text-[14px] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>{m.desc}</div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-end">
                    {m.tags.map(t => (
                      <span key={t} className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 bg-gray-100 px-2.5 py-1" style={{ fontFamily: 'Inter, sans-serif' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default CoursesSection;
