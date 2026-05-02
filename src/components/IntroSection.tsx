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
            Companies have moved past single LLM calls. They now need engineers who can design and deploy autonomous multi-agent systems — pipelines where AI agents reason, plan, use tools, and collaborate to solve complex business problems.
          </p>
          <p className="text-gray-500 text-[16px] leading-[1.85] mb-10" style={{ fontFamily: 'Inter, sans-serif' }}>
            AgentAcademy is built entirely around this shift. We cover the complete stack: model APIs, agent frameworks, memory architectures, observability, and production deployment patterns used by leading AI teams worldwide.
          </p>
          <div className="flex flex-wrap gap-2 mb-10">
            {['CrewAI','LangGraph','AutoGen','RAG Pipelines','Tool-Use & MCP','Vector Stores','Production Deploy'].map(t => (
              <span key={t} className="border border-gray-200 text-[12px] font-medium text-gray-500 px-4 py-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>{t}</span>
            ))}
          </div>
          <a href="#courses" className="btn-outline-dark">Explore Curriculum</a>
        </div>
        <div className="pt-12">
          <div className="bg-gray-100 h-[440px] flex items-center justify-center relative overflow-hidden">
            <svg width="160" height="160" viewBox="0 0 200 200" fill="none" stroke="#d1d5db" strokeWidth="1">
              <rect x="60" y="60" width="80" height="80" rx="2"/>
              <circle cx="100" cy="100" r="20"/>
              <line x1="100" y1="20" x2="100" y2="60"/>
              <line x1="100" y1="140" x2="100" y2="180"/>
              <line x1="20" y1="100" x2="60" y2="100"/>
              <line x1="140" y1="100" x2="180" y2="100"/>
              <circle cx="100" cy="20" r="5"/><circle cx="100" cy="180" r="5"/>
              <circle cx="20" cy="100" r="5"/><circle cx="180" cy="100" r="5"/>
              <line x1="34" y1="34" x2="60" y2="60"/>
              <line x1="166" y1="34" x2="140" y2="60"/>
              <line x1="34" y1="166" x2="60" y2="140"/>
              <line x1="166" y1="166" x2="140" y2="140"/>
              <circle cx="34" cy="34" r="4"/><circle cx="166" cy="34" r="4"/>
              <circle cx="34" cy="166" r="4"/><circle cx="166" cy="166" r="4"/>
            </svg>
          </div>
          <p className="text-[12px] text-gray-400 uppercase tracking-widest mt-4" style={{ fontFamily: 'Inter, sans-serif' }}>
            Agent Architecture — Multi-node Orchestration Pattern
          </p>
        </div>
      </div>
    </div>
  </section>
);
export default IntroSection;
