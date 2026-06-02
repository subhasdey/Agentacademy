const sessions = [
  {
    label: 'SESSION 1', month: 'JUL', days: '13–16',
    title: 'July Summer Camp — Week 2',
    meta: 'Monday – Thursday · July 13, 14, 15, 16 · 5:00 PM – 7:00 PM PST · 4 days',
    tags: ['Live', 'PST', 'Hands-On', 'July 2026'],
    seats: '20 seats available', urgent: true,
    highlight: 'Mon Jul 13 → Thu Jul 16',
  },
  {
    label: 'SESSION 2', month: 'JUL', days: '20–23',
    title: 'July Summer Camp — Week 3',
    meta: 'Monday – Thursday · July 20, 21, 22, 23 · 5:00 PM – 7:00 PM PST · 4 days',
    tags: ['Live', 'PST', 'Hands-On', 'July 2026'],
    seats: '20 seats available', urgent: false,
    highlight: 'Mon Jul 20 → Thu Jul 23',
  },
];

const schedule = [
  { day: 'Day 1 (Mon)', topic: 'AI & LLM Basics', sub: 'Python + Ollama setup, first LLM script, prompt engineering' },
  { day: 'Day 2 (Tue)', topic: 'Agent & MCP Basics', sub: 'Agents, MCP protocol, tool-use, SQLite memory' },
  { day: 'Day 3 (Wed)', topic: 'Agent Skill Creation', sub: 'Custom skills, NoSQL/SQLite queries, skill chaining' },
  { day: 'Day 4 (Thu)', topic: 'Multi-Agent Project', sub: 'Build full multi-agent workflow, present demo' },
];

const ScheduleSection = () => (
  <section id="schedule" className="py-28 bg-white">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="mb-16">
        <span className="section-label mb-3">10 — Schedule</span>
        <h2 className="font-display font-bold text-black leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>Two Sessions. July 2026.</h2>
        <p className="text-gray-500 text-[15px] mt-3 max-w-[560px]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Each session runs 4 evenings, Monday through Thursday, 5–7 PM PST. Pick either or join both.
        </p>
      </div>

      {/* Session Cards with 3D effect */}
      <div className="grid md:grid-cols-2 gap-4 mb-16" style={{ perspective: '1000px' }}>
        {sessions.map(s => (
          <div key={s.title}
            className="border-2 p-10 transition-all duration-300 cursor-pointer group"
            style={{ borderColor: s.urgent ? '#a78bfa' : '#e5e7eb' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.transform = 'rotateY(-5deg) rotateX(4deg) translateZ(12px)';
              (e.currentTarget as HTMLElement).style.boxShadow = '10px 14px 40px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.transform = 'none';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}>
            {/* Date block */}
            <div className="flex items-start gap-6 mb-6">
              <div className="text-white inline-block px-5 py-3 text-center flex-shrink-0"
                style={{ background: s.urgent ? '#a78bfa' : '#0a0a0a' }}>
                <div className="text-[10px] font-bold tracking-[0.16em] uppercase opacity-70 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>{s.month}</div>
                <div className="font-display font-black leading-none" style={{ fontSize: '32px' }}>{s.days}</div>
              </div>
              <div>
                <div className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ fontFamily: 'Inter, sans-serif', color: s.urgent ? '#a78bfa' : '#9ca3af' }}>{s.label}</div>
                <h3 className="font-display font-bold text-[20px] text-black mb-1">{s.title}</h3>
                <p className="text-gray-500 text-[13px]" style={{ fontFamily: 'Inter, sans-serif' }}>{s.meta}</p>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap mb-5">
              {s.tags.map(t => (
                <span key={t} className="border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-500 px-3 py-1.5"
                  style={{ fontFamily: 'Inter, sans-serif' }}>{t}</span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-[12px] font-bold uppercase tracking-widest"
                style={{ fontFamily: 'Inter, sans-serif', color: s.urgent ? '#7c3aed' : '#9ca3af' }}>{s.seats}</div>
              <a href="#register" className="text-[11px] font-bold uppercase tracking-widest text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
                style={{ fontFamily: 'Inter, sans-serif' }}>Reserve →</a>
            </div>
          </div>
        ))}
      </div>

      {/* Daily breakdown */}
      <div>
        <div className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>Daily Breakdown (same for both sessions)</div>
        <div className="border-t border-gray-200">
          {schedule.map((s, i) => (
            <div key={i} className="border-b border-gray-200 py-5 grid md:grid-cols-[200px_1fr] gap-4">
              <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-gray-400 pt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{s.day}</div>
              <div>
                <div className="font-display font-bold text-[17px] text-black mb-1">{s.topic}</div>
                <div className="text-gray-500 text-[13px]" style={{ fontFamily: 'Inter, sans-serif' }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 px-6 py-4 border border-gray-200 bg-gray-50 text-[13px] text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
          <strong>Time:</strong> 5:00 PM – 7:00 PM Pacific (PST) &nbsp;·&nbsp; <strong>Format:</strong> Live virtual &nbsp;·&nbsp; <strong>Tools:</strong> Python, Ollama, SQLite &nbsp;·&nbsp; <strong>Price:</strong> $400 per session
        </div>
      </div>
    </div>
  </section>
);
export default ScheduleSection;
