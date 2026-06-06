import { useState } from "react";
import { Brain, Cpu, Wrench, GitMerge } from "lucide-react";

const modules = [
  {
    day: 'Day 1', icon: Brain, title: 'AI & LLM Basics',
    desc: 'Understand how Large Language Models work — transformers, tokens, embeddings, and inference. Run your first local LLM with Ollama. Learn Python basics for AI: calling models, parsing responses, and prompt design.',
    tags: ['Python', 'Ollama', 'Transformers', 'Prompting'],
    labs: ['Install Ollama + qwen2.5', 'First Python AI script', 'Prompt engineering drills'],
  },
  {
    day: 'Day 2', icon: Cpu, title: 'Agent & MCP Basics',
    desc: 'What is an AI Agent? The sense–plan–act loop. Introduction to Model Context Protocol (MCP) — how agents communicate with tools and services. Build a simple agent that reads files and answers questions.',
    tags: ['MCP', 'Tool Use', 'Agents', 'Python'],
    labs: ['Build a file-reading agent', 'MCP tool wiring', 'SQLite memory store'],
  },
  {
    day: 'Day 3', icon: Wrench, title: 'Agent Skill Creation',
    desc: 'Give your agent real skills — web search, file I/O, SQLite queries, and custom tool functions. Learn how to define tool schemas, handle outputs, and chain multiple skills together in a pipeline.',
    tags: ['Skills', 'SQLite', 'Tool Chaining', 'NoSQL'],
    labs: ['Custom skill library', 'SQLite CRUD agent', 'Skill composition pipeline'],
  },
  {
    day: 'Day 4', icon: GitMerge, title: 'Multi-Agent Workflow Project',
    desc: 'Build a production-ready multi-agent system from scratch. A supervisor agent orchestrates specialist workers — researcher, writer, analyst — using CrewAI or a custom framework. Present your project at end of day.',
    tags: ['Multi-Agent', 'CrewAI', 'Orchestration', 'Demo Day'],
    labs: ['Supervisor + worker agents', 'Full pipeline project', 'Demo presentation'],
  },
];

const CoursesSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section id="courses" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 mb-16 md:mb-20 items-end">
          <div>
            <span className="section-label mb-3">Curriculum</span>
            <h2 className="font-display font-bold text-black leading-[1.15]" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>4 Days. Zero to Agent.</h2>
          </div>
          <p className="text-gray-500 text-[15px] md:text-[16px] leading-[1.8]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Each session is 4 intensive evenings (5 PM – 7 PM PST). You'll go from first principles to shipping a working multi-agent system — all local, all hands-on, using Python, SQLite, and Ollama.
          </p>
        </div>

        {/* 3D Cards grid */}
        <div className="grid md:grid-cols-2 gap-6" style={{ perspective: '1200px' }}>
          {modules.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i}
                className="border border-gray-200 p-8 md:p-10 cursor-pointer transition-all duration-300"
                style={{
                  background: hovered === i ? '#0a0a0a' : '#fff',
                  color: hovered === i ? '#fff' : '#0a0a0a',
                  transform: hovered === i ? 'rotateY(-4deg) rotateX(3deg) translateZ(16px)' : 'rotateY(0deg) rotateX(0deg) translateZ(0px)',
                  transformStyle: 'preserve-3d',
                  boxShadow: hovered === i ? '8px 12px 40px rgba(0,0,0,0.25)' : '0 0 0 rgba(0,0,0,0)',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: hovered === i ? 'rgba(167,139,250,0.2)' : '#f3f4f6', border: hovered === i ? '1px solid rgba(167,139,250,0.4)' : '1px solid #e5e7eb' }}>
                    <Icon size={17} strokeWidth={1.5} style={{ color: hovered === i ? '#a78bfa' : '#374151' }} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.14em] uppercase mb-0.5"
                      style={{ fontFamily: 'Inter, sans-serif', color: hovered === i ? '#a78bfa' : '#9ca3af' }}>{m.day}</div>
                    <div className="font-display font-bold text-[19px] leading-tight">{m.title}</div>
                  </div>
                </div>
                <p className="text-[14px] leading-[1.75] mb-6"
                  style={{ fontFamily: 'Inter, sans-serif', color: hovered === i ? 'rgba(255,255,255,0.65)' : '#6b7280' }}>
                  {m.desc}
                </p>
                {/* Labs */}
                <div className="mb-5">
                  <div className="text-[10px] font-bold tracking-widest uppercase mb-2"
                    style={{ fontFamily: 'Inter, sans-serif', color: hovered === i ? 'rgba(255,255,255,0.35)' : '#9ca3af' }}>Labs</div>
                  {m.labs.map(lab => (
                    <div key={lab} className="flex items-center gap-2 text-[12px] mb-1"
                      style={{ fontFamily: 'Inter, sans-serif', color: hovered === i ? 'rgba(255,255,255,0.6)' : '#4b5563' }}>
                      <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: hovered === i ? '#a78bfa' : '#9ca3af' }} />
                      {lab}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {m.tags.map(t => (
                    <span key={t} className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        background: hovered === i ? 'rgba(167,139,250,0.15)' : '#f3f4f6',
                        color: hovered === i ? '#c4b5fd' : '#6b7280',
                        border: hovered === i ? '1px solid rgba(167,139,250,0.3)' : '1px solid #e5e7eb',
                      }}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech stack bar */}
        <div className="mt-10 border border-gray-200 px-8 py-6 flex flex-wrap gap-6 items-center">
          <div className="text-[10px] font-bold tracking-widest uppercase text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>Tech Stack</div>
          {['Python 3.11+', 'Ollama (Local LLM)', 'SQLite / NoSQL', 'qwen2.5 / gemma3', 'CrewAI', 'MCP Protocol'].map(t => (
            <span key={t} className="text-[12px] font-semibold text-gray-700 border border-gray-200 px-3 py-1.5"
              style={{ fontFamily: 'Inter, sans-serif' }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CoursesSection;
