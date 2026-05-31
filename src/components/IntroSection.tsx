const IntroSection = () => (
  <section id="about" className="py-28 bg-white">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div>
          <span className="section-label mb-6">01 — Introduction</span>
          <h2 className="font-display font-bold text-black leading-[1.15] mb-8" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
            Agentic AI is the skill gap of 2026.
          </h2>
          <p className="text-gray-500 text-[16px] leading-[1.85] mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            In just 4 evenings, you go from zero to shipping a working multi-agent system — no cloud API required. Every tool runs locally on your machine: Python, Ollama, and SQLite.
          </p>
          <p className="text-gray-500 text-[16px] leading-[1.85] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            The camp is built for developers, analysts, and curious builders who want to understand AI agents from first principles — not just wrap an API. Two sessions in July 2026, 5–7 PM PST, 20 seats each.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {['Python 3.11+','Ollama (Local LLM)','SQLite','MCP Protocol','CrewAI','Tool-Use','Multi-Agent'].map(t => (
              <span key={t} className="border border-gray-200 text-[12px] font-medium text-gray-500 px-4 py-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>{t}</span>
            ))}
          </div>
          <a href="#courses" className="btn-outline-dark">Explore Curriculum</a>
        </div>
        <div className="pt-12">
          <div className="bg-gray-100 h-[440px] relative overflow-hidden flex flex-col items-center justify-between py-8 px-6">
            {/* SVG connector lines — absolute overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              {/* Supervisor → horizontal T-bar */}
              <line x1="50%" y1="88" x2="50%" y2="150" stroke="#c9c9c9" strokeWidth="1.5" strokeDasharray="5 3"/>
              <line x1="16%" y1="150" x2="84%" y2="150" stroke="#c9c9c9" strokeWidth="1.5" strokeDasharray="5 3"/>
              {/* T-bar → workers */}
              <line x1="16%" y1="150" x2="16%" y2="185" stroke="#c9c9c9" strokeWidth="1.5" strokeDasharray="5 3"/>
              <line x1="50%" y1="150" x2="50%" y2="185" stroke="#c9c9c9" strokeWidth="1.5" strokeDasharray="5 3"/>
              <line x1="84%" y1="150" x2="84%" y2="185" stroke="#c9c9c9" strokeWidth="1.5" strokeDasharray="5 3"/>
              {/* Workers → SQLite */}
              <line x1="16%" y1="278" x2="50%" y2="360" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3"/>
              <line x1="50%" y1="278" x2="50%" y2="360" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3"/>
              <line x1="84%" y1="278" x2="50%" y2="360" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3"/>
              {/* MCP labels */}
              <text x="28%" y="148" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter,sans-serif" letterSpacing="1">MCP</text>
              <text x="50%" y="148" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter,sans-serif" letterSpacing="1">MCP</text>
              <text x="72%" y="148" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter,sans-serif" letterSpacing="1">MCP</text>
            </svg>

            {/* Supervisor */}
            <div className="relative z-10 bg-black text-white text-center px-10 py-4 w-52">
              <div className="text-[9px] font-bold tracking-[0.18em] uppercase text-white/40 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Orchestrator</div>
              <div className="font-display font-bold text-[13px] tracking-[0.12em] uppercase">SUPERVISOR</div>
              <div className="text-[9px] text-white/35 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>Python · Ollama · MCP</div>
            </div>

            {/* Worker agents */}
            <div className="relative z-10 flex gap-3 w-full mt-6">
              <div className="flex-1 bg-white border border-gray-200 text-center py-4 px-2">
                <div className="text-[8px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Worker Agent</div>
                <div className="font-display font-bold text-[12px] tracking-widest uppercase text-black">RESEARCH</div>
                <div className="text-[8px] text-purple-300 mt-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>web · files · SQLite</div>
              </div>
              <div className="flex-1 bg-white border-2 text-center py-4 px-2" style={{ borderColor: '#a78bfa' }}>
                <div className="text-[8px] font-bold tracking-[0.14em] uppercase mb-1.5" style={{ fontFamily: 'Inter, sans-serif', color: '#a78bfa' }}>Worker Agent</div>
                <div className="font-display font-bold text-[12px] tracking-widest uppercase text-black">WRITER</div>
                <div className="text-[8px] mt-1.5" style={{ fontFamily: 'Inter, sans-serif', color: '#c4b5fd' }}>draft · format · edit</div>
              </div>
              <div className="flex-1 bg-white border border-gray-200 text-center py-4 px-2">
                <div className="text-[8px] font-bold tracking-[0.14em] uppercase text-gray-400 mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Worker Agent</div>
                <div className="font-display font-bold text-[12px] tracking-widest uppercase text-black">ANALYST</div>
                <div className="text-[8px] text-purple-300 mt-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>score · rank · report</div>
              </div>
            </div>

            {/* SQLite memory */}
            <div className="relative z-10 border border-dashed border-gray-300 bg-white/60 text-center px-10 py-3 mt-4">
              <div className="text-[8px] font-bold tracking-[0.16em] uppercase text-gray-400 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>Shared State</div>
              <div className="font-display font-bold text-[12px] text-gray-600 tracking-wide">SQLite Memory</div>
            </div>
          </div>
          <p className="text-[12px] text-gray-400 uppercase tracking-widest mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Agent Architecture — Multi-node Orchestration Pattern
          </p>
        </div>
      </div>
      {/* Who is this for */}
      <div className="mt-20 pt-16 border-t border-gray-100">
        <div className="mb-10">
          <span className="section-label mb-3">Who Is This For?</span>
          <h3 className="font-display font-bold text-black leading-[1.15]" style={{ fontSize: 'clamp(22px,3vw,36px)' }}>Every Role Has Something to Gain.</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-gray-200">
          {[
            { role: 'Student', benefit: 'Build a real AI project for your portfolio before you graduate. Agents are the most hirable skill in tech right now.' },
            { role: 'Teacher / Educator', benefit: 'Learn how to explain and demo AI agents to your students with working examples, not slides.' },
            { role: 'Marketer', benefit: 'Build agents that draft copy, research competitors, and summarise reports — freeing hours every week.' },
            { role: 'Financial Analyst', benefit: 'Automate data gathering and briefing generation with a local agent that reads your files and SQLite databases.' },
            { role: 'Program Manager', benefit: 'Understand what AI agents can and cannot do so you can scope, plan, and communicate projects accurately.' },
            { role: 'Product Manager', benefit: 'Stop relying on engineers to prototype. Build a working agent yourself and bring it to your next sprint.' },
            { role: 'Engineer', benefit: 'Go beyond API calls. Learn multi-agent architecture, MCP protocol, and tool-use patterns used in production.' },
            { role: 'Data Analyst', benefit: 'Chain agents to pull, clean, and summarise data from SQLite automatically — no more repetitive queries.' },
            { role: 'People Manager', benefit: 'Understand the technology your team is building so you can lead, review, and support AI projects with confidence.' },
          ].map(p => (
            <div key={p.role} className="bg-white p-7 md:p-8">
              <div className="text-[10px] font-bold tracking-[0.16em] uppercase mb-3" style={{ fontFamily: 'Inter, sans-serif', color: '#a78bfa' }}>{p.role}</div>
              <p className="text-gray-500 text-[13px] leading-[1.75]" style={{ fontFamily: 'Inter, sans-serif' }}>{p.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
export default IntroSection;
