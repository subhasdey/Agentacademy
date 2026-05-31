import { Terminal, Database, Bot, Layers } from "lucide-react";

const features = [
  { icon: Terminal, title: 'Python-First Approach', desc: 'Everything is built in Python 3.11+. No frameworks to fight — just clean scripts that call Ollama, read SQLite, and orchestrate agents from first principles.' },
  { icon: Bot, title: 'Local LLMs with Ollama', desc: 'Run qwen2.5:7b, gemma3:4b, and other models 100% locally. No OpenAI key required. Learn to prompt, tool-call, and chain locally-hosted models.' },
  { icon: Database, title: 'SQLite & NoSQL Storage', desc: 'Agents that remember — persistent storage with SQLite for structured data and JSON files for flexible document storage. Build agents with real state.' },
  { icon: Layers, title: 'MCP & Multi-Agent Orchestration', desc: 'Wire agents together using Model Context Protocol. Build supervisor–worker hierarchies, pass tasks, collect results, and ship a working pipeline on Day 4.' },
];

const AgenticSection = () => (
  <section id="agentic" className="py-20 md:py-28 bg-gray-100">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <span className="section-label mb-3">07 — What You'll Use</span>
          <h2 className="font-display font-bold text-black leading-[1.15] mb-10 md:mb-12" style={{ fontSize: 'clamp(28px,4vw,48px)' }}>
            Real Tools.<br />Real Agents.
          </h2>
          <div className="border-t border-gray-300">
            {features.map(f => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="grid grid-cols-[44px_1fr] gap-5 items-start py-6 border-b border-gray-300">
                  <div className="w-9 h-9 md:w-10 md:h-10 border border-gray-300 bg-white flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon size={16} className="text-black" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[15px] text-black mb-1.5">{f.title}</h4>
                    <p className="text-gray-500 text-[13px] leading-[1.7]" style={{ fontFamily: 'Inter, sans-serif' }}>{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live terminal mockup */}
        <div className="bg-black p-8 md:p-10 md:sticky md:top-24 font-mono"
          style={{ perspective: '600px', transition: 'transform 0.3s ease' }}
          onMouseEnter={e => (e.currentTarget.style.transform = 'rotateY(-5deg) rotateX(3deg)')}
          onMouseLeave={e => (e.currentTarget.style.transform = 'none')}>
          <div className="flex gap-2 mb-6">
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
            <span className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
          </div>
          <div className="text-green-400 text-[12px] space-y-1 leading-[1.9]">
            <div><span className="text-gray-500">$</span> pip install ollama smriti-memcore crewai</div>
            <div className="text-gray-500">Installing packages...</div>
            <div><span className="text-gray-500">$</span> ollama pull qwen2.5:7b</div>
            <div className="text-gray-500">pulling manifest ████████ 100%</div>
            <div className="mt-3"><span className="text-gray-500">$</span> python agent.py</div>
            <div className="text-purple-400">{'>'} Supervisor routing task to Researcher...</div>
            <div className="text-blue-300">{'>'} Researcher: found 3 results in SQLite</div>
            <div className="text-blue-300">{'>'} Analyst: summarising findings...</div>
            <div className="text-green-300">{'>'} Output: Report generated ✓</div>
            <div className="animate-pulse text-white mt-2">█</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
export default AgenticSection;
