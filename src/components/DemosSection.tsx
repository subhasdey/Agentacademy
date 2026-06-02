import { useState, useEffect } from "react";
import { Play, Search, Database, GitMerge, Terminal } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface DemoItem {
  icon: any;
  level: string;
  dur: string;
  progress: string;
  file: string;
  title: string;
  desc: string;
  bg: string;
  videoUrl: string;
  logs: string[];
}

const demos: DemoItem[] = [
  {
    icon: Search,
    level: 'Day 2 Lab',
    dur: '4:12',
    progress: '28%',
    file: 'file_qa_agent.py',
    title: 'File Q&A Agent',
    desc: 'A Python agent that reads local files and answers questions using Ollama — no internet, no API key. Built in the Day 2 evening session.',
    bg: 'from-gray-900 to-gray-800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-typing-on-a-computer-keyboard-in-a-dark-room-41902-large.mp4',
    logs: [
      "[INFO] Initializing File Q&A Agent...",
      "[INFO] Local Ollama service detected running llama3",
      "[FILE] Reading local curriculum file: 'camp_syllabus.txt'...",
      "[FILE] File read successful. Total bytes: 14,204",
      "[QUERY] User: 'What topics are covered on Day 3?'",
      "[OLLAMA] Chaining prompt and generating response...",
      "[OLLAMA] Token generation started...",
      "[AGENT] Response: 'Day 3 covers Agent Skill Creation, custom tools, SQLite memory, and skill chaining.'",
      "[SUCCESS] Q&A cycle complete in 1.42s"
    ]
  },
  {
    icon: Database,
    level: 'Day 3 Lab',
    dur: '5:38',
    progress: '0%',
    file: 'sqlite_memory_agent.py',
    title: 'SQLite Memory Agent',
    desc: 'An agent that stores conversation history and structured data in SQLite — so it actually remembers what happened in previous turns.',
    bg: 'from-black to-gray-800',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-matrix-style-computer-code-running-down-33230-large.mp4',
    logs: [
      "[INFO] Initializing SQLite Memory Agent...",
      "[DB] Connecting to local database 'agent_memory.db'...",
      "[DB] Verification successful. Table 'conversations' contains 42 entries.",
      "[QUERY] User: 'Do you remember my name?'",
      "[DB] Querying conversations for user id 'shivam_tyagi'...",
      "[DB] Matching record found: Name='Shivam Tyagi'",
      "[OLLAMA] Formulating response using retrieved SQLite memory context...",
      "[AGENT] Response: 'Yes, Shivam. According to our database, we discussed Python + Ollama setup yesterday!'",
      "[SUCCESS] Conversation stored and retrieval complete in 0.88s"
    ]
  },
  {
    icon: GitMerge,
    level: 'Day 4 Capstone',
    dur: '8:20',
    progress: '0%',
    file: 'multi_agent_pipeline.py',
    title: 'Multi-Agent Research Pipeline',
    desc: 'The Day 4 demo project: a Supervisor agent orchestrates a Researcher, Writer, and Analyst using MCP — running 100% locally with Ollama.',
    bg: 'from-gray-900 to-black',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-complex-analytical-charts-on-a-computer-screen-34316-large.mp4',
    logs: [
      "[INFO] Booting Supervisor Agent...",
      "[INFO] Initializing MCP (Model Context Protocol) nodes...",
      "[AGENT] Supervisor: 'Orchestrating Research Pipeline...'",
      "[TASK] Supervisor → Researcher: 'Fetch latest research papers on Local LLMs'",
      "[RESEARCHER] Fetching locally stored papers via search tool...",
      "[RESEARCHER] 3 documents found. Extracting key insights...",
      "[TASK] Supervisor → Analyst: 'Compare benchmark scores'",
      "[ANALYST] Performing mathematical analysis on extracted metrics...",
      "[TASK] Supervisor → Writer: 'Synthesize formal markdown report'",
      "[WRITER] Generating 3-page summary document...",
      "[SUCCESS] Pipeline executed successfully in 4.95s. Saved to 'pipeline_report.md'"
    ]
  }
];

const TerminalMock = ({ logs }: { logs: string[] }) => {
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedLogs([]);
    setCurrentIndex(0);
  }, [logs]);

  useEffect(() => {
    if (currentIndex < logs.length) {
      const timer = setTimeout(() => {
        setDisplayedLogs(prev => [...prev, logs[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, logs]);

  return (
    <div className="bg-black/90 border border-white/10 rounded-lg p-5 font-mono text-[12px] h-[260px] md:h-full flex flex-col justify-start overflow-y-auto">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-purple-400" />
          <span className="text-white/60 font-semibold text-[10px] tracking-wider uppercase">Agent Execution Terminal</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Active</span>
        </div>
      </div>
      <div className="flex-1 space-y-2.5">
        {displayedLogs.map((log, index) => {
          let color = "text-white/70";
          if (log.startsWith("[INFO]")) color = "text-blue-400";
          else if (log.startsWith("[FILE]")) color = "text-cyan-400";
          else if (log.startsWith("[QUERY]")) color = "text-yellow-400 font-medium";
          else if (log.startsWith("[DB]")) color = "text-amber-400";
          else if (log.startsWith("[OLLAMA]")) color = "text-purple-400";
          else if (log.startsWith("[AGENT]")) color = "text-emerald-400 font-bold";
          else if (log.startsWith("[SUCCESS]")) color = "text-emerald-500 font-extrabold";
          else if (log.startsWith("[TASK]")) color = "text-pink-400";

          return (
            <div key={index} className={`leading-relaxed break-all ${color}`}>
              {log}
            </div>
          );
        })}
        {currentIndex < logs.length && (
          <div className="flex items-center gap-1 text-white/50 leading-relaxed font-bold animate-pulse">
            <span>&gt;</span>
            <span className="w-1.5 h-3 bg-white/70 inline-block" />
          </div>
        )}
      </div>
    </div>
  );
};

const DemosSection = () => {
  const [activeDemo, setActiveDemo] = useState<DemoItem | null>(null);

  return (
    <section id="demos" className="py-28 bg-gray-100">
      <div className="max-w-[1240px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="section-label mb-3">04 — Demos</span>
          <h2 className="font-display font-bold text-black leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            What You'll Build in 4 Days
          </h2>
          <p className="text-gray-500 text-[15px] mt-3 max-w-[560px]" style={{ fontFamily: 'Inter, sans-serif' }}>
            Click on any module to watch the agent execute its workflow live. Each is built from scratch, running entirely on your local machine.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0.5 bg-gray-200">
          {demos.map(d => {
            const Icon = d.icon;
            return (
              <div 
                key={d.title} 
                className="bg-white group overflow-hidden cursor-pointer"
                onClick={() => setActiveDemo(d)}
              >
                {/* Video thumbnail with screen-recording chrome */}
                <div className={`h-56 bg-gradient-to-br ${d.bg} relative overflow-hidden`}>
                  <div className="absolute inset-4 border border-white/10 flex flex-col overflow-hidden bg-black/60">
                    {/* Window title bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2 bg-black/40 border-b border-white/10 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-red-400/50"/>
                      <div className="w-2 h-2 rounded-full bg-yellow-400/50"/>
                      <div className="w-2 h-2 rounded-full bg-green-400/50"/>
                      <span className="ml-2 text-white/25 text-[9px]" style={{ fontFamily: 'monospace' }}>{d.file}</span>
                    </div>
                    {/* Screen body (Mini terminal with CLI commands) */}
                    <div className="flex-1 p-4 font-mono text-[10px] text-white/30 flex flex-col justify-start gap-1 select-none text-left">
                      <div className="flex items-center gap-1.5 text-purple-400 font-bold mb-1">
                        <span className="text-emerald-400 font-extrabold">&gt;</span>
                        <span>{d.level === 'Day 2 Lab' ? 'python file_qa_agent.py' : d.level === 'Day 3 Lab' ? 'python sqlite_memory_agent.py' : 'python multi_agent_pipeline.py'}</span>
                      </div>
                      {d.level === 'Day 2 Lab' && (
                        <>
                          <div className="text-white/15">[INFO] Scanning local files...</div>
                          <div className="text-white/15">[Ollama] Loaded model: llama3</div>
                          <div className="text-emerald-500/25 font-bold">[SUCCESS] Ready for queries!</div>
                        </>
                      )}
                      {d.level === 'Day 3 Lab' && (
                        <>
                          <div className="text-white/15">[DB] Connecting to agent_memory.db...</div>
                          <div className="text-white/15">[DB] Found 42 stored profile records.</div>
                          <div className="text-emerald-500/25 font-bold">[SUCCESS] Agent memory loaded.</div>
                        </>
                      )}
                      {d.level === 'Day 4 Capstone' && (
                        <>
                          <div className="text-white/15">[INFO] Spawning Supervisor node...</div>
                          <div className="text-white/15">[MCP] Registered Researcher & Analyst.</div>
                          <div className="text-emerald-500/25 font-bold">[SUCCESS] Supervisor active.</div>
                        </>
                      )}
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
                  {/* Sleek floating Play button in top-right corner (does not obscure CLI commands) */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0" style={{ zIndex: 10 }}>
                    <div className="w-9 h-9 rounded-full border border-purple-500/30 bg-black/80 flex items-center justify-center shadow-lg backdrop-blur-md">
                      <Play size={12} className="text-purple-400 ml-0.5" fill="rgba(167, 139, 250, 0.2)" />
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

      {/* Video / Terminal Interactive Dialog */}
      <Dialog open={!!activeDemo} onOpenChange={(open) => !open && setActiveDemo(null)}>
        <DialogContent className="max-w-[92%] md:max-w-4xl bg-[#09090b] border-white/10 text-white p-0 rounded-none overflow-hidden" style={{ borderRadius: 0 }}>
          <div className="p-6 md:p-8">
            <DialogHeader className="mb-6">
              <div className="flex items-center gap-2 mb-2 text-purple-400 font-bold uppercase text-[10px] tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span>{activeDemo?.level}</span>
                <span>·</span>
                <span>{activeDemo?.dur}</span>
              </div>
              <DialogTitle className="font-display text-[24px] md:text-[28px] font-bold tracking-tight text-white mb-2">
                {activeDemo?.title}
              </DialogTitle>
              <DialogDescription className="text-white/60 text-[13px] md:text-[14px] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                {activeDemo?.desc}
              </DialogDescription>
            </DialogHeader>

            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {/* Left Column: Coming Soon Placeholder */}
              <div className="relative border border-white/10 overflow-hidden flex flex-col justify-center bg-[#0d0d12] h-[250px] md:h-[350px] w-full">
                <div className="w-full h-full bg-gradient-to-br from-purple-950/10 via-zinc-900 to-black flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
                  {/* Subtle technical background grid */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.05) 1px,transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />
                  
                  <div className="w-14 h-14 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5 relative z-10">
                    <Play size={18} className="text-purple-400 ml-0.5 animate-pulse" fill="rgba(167, 139, 250, 0.2)" />
                  </div>
                  
                  <span className="bg-purple-950/40 text-purple-300 text-[10px] font-bold tracking-widest uppercase px-3 py-1 mb-3 border border-purple-500/20" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Screencast Walkthrough
                  </span>
                  
                  <h4 className="font-display font-bold text-[20px] text-white mb-2">Demo Video Coming Soon</h4>
                  
                  <p className="text-white/40 text-[12px] leading-relaxed max-w-[280px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    We are currently recording the high-definition agent execution screens. Check back prior to camp launch!
                  </p>
                </div>
              </div>

              {/* Right Column: Terminal Mock */}
              <div className="h-[280px] md:h-[350px]">
                {activeDemo && <TerminalMock logs={activeDemo.logs} />}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DemosSection;
