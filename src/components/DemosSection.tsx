import { Play, Search, Database, GitMerge } from "lucide-react";

const demos = [
  { icon: Search,    level:'Day 2 Lab',     dur:'4:12', progress:'28%', file:'file_qa_agent.py',         title:'File Q&A Agent',             desc:'A Python agent that reads local files and answers questions using Ollama — no internet, no API key. Built in the Day 2 evening session.', bg:'from-gray-900 to-gray-800' },
  { icon: Database,  level:'Day 3 Lab',     dur:'5:38', progress:'0%',  file:'sqlite_memory_agent.py',   title:'SQLite Memory Agent',         desc:'An agent that stores conversation history and structured data in SQLite — so it actually remembers what happened in previous turns.', bg:'from-black to-gray-800' },
  { icon: GitMerge,  level:'Day 4 Capstone',dur:'8:20', progress:'0%',  file:'multi_agent_pipeline.py',  title:'Multi-Agent Research Pipeline',desc:'The Day 4 demo project: a Supervisor agent orchestrates a Researcher, Writer, and Analyst using MCP — running 100% locally with Ollama.', bg:'from-gray-900 to-black' },
];

const DemosSection = () => (
  <section id="demos" className="py-28 bg-gray-100">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="mb-16">
        <span className="section-label mb-3">04 — Demos</span>
        <h2 className="font-display font-bold text-black leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>What You'll Build in 4 Days</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-0.5 bg-gray-200">
        {demos.map(d => {
          const Icon = d.icon;
          return (
            <div key={d.title} className="bg-white group overflow-hidden">
              {/* Video thumbnail with screen-recording chrome */}
              <div className={`h-56 bg-gradient-to-br ${d.bg} relative overflow-hidden`}>
                <div className="absolute inset-4 border border-white/10 flex flex-col overflow-hidden">
                  {/* Window title bar */}
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-black/40 border-b border-white/10 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-red-400/50"/>
                    <div className="w-2 h-2 rounded-full bg-yellow-400/50"/>
                    <div className="w-2 h-2 rounded-full bg-green-400/50"/>
                    <span className="ml-2 text-white/25 text-[9px]" style={{ fontFamily: 'monospace' }}>{d.file}</span>
                  </div>
                  {/* Screen body */}
                  <div className="flex-1 flex items-center justify-center">
                    <Icon size={36} className="text-white/10" strokeWidth={1}/>
                  </div>
                  {/* Progress / controls bar */}
                  <div className="px-3 py-2 bg-black/40 border-t border-white/10 flex-shrink-0">
                    <div className="h-[2px] bg-white/10 mb-1.5 rounded-full overflow-hidden">
                      <div className="h-full bg-white/40 rounded-full" style={{ width: d.progress }}/>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/25 text-[9px]" style={{ fontFamily: 'monospace' }}>0:00 / {d.dur}</span>
                      <span className="text-white/25 text-[9px] font-bold tracking-widest uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>{d.level}</span>
                    </div>
                  </div>
                </div>
                {/* Play overlay on hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center" style={{ zIndex: 10 }}>
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
