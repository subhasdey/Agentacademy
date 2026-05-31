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
          <div className="bg-gray-100 h-[440px] flex items-center justify-center relative overflow-hidden p-8">
            <svg width="100%" height="100%" viewBox="0 0 480 380" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Dashed connector lines — supervisor to workers */}
              <line x1="240" y1="88" x2="80" y2="210" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 4"/>
              <line x1="240" y1="88" x2="240" y2="210" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 4"/>
              <line x1="240" y1="88" x2="400" y2="210" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 4"/>
              {/* MCP labels on connectors */}
              <text x="148" y="158" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="0.08em">MCP</text>
              <text x="248" y="168" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="0.08em">MCP</text>
              <text x="334" y="158" textAnchor="middle" fill="#9ca3af" fontSize="9" fontFamily="Inter,sans-serif" letterSpacing="0.08em">MCP</text>
              {/* Worker to SQLite lines */}
              <line x1="80" y1="272" x2="190" y2="320" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3"/>
              <line x1="240" y1="272" x2="240" y2="320" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3"/>
              <line x1="400" y1="272" x2="290" y2="320" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3"/>
              {/* Supervisor node */}
              <rect x="140" y="28" width="200" height="60" fill="#0a0a0a"/>
              <text x="240" y="54" textAnchor="middle" fill="white" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.12em">SUPERVISOR</text>
              <text x="240" y="72" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="Inter,sans-serif">Orchestrator Agent</text>
              {/* Worker: Research */}
              <rect x="20" y="210" width="120" height="62" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
              <text x="80" y="237" textAnchor="middle" fill="#0a0a0a" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.1em">RESEARCH</text>
              <text x="80" y="253" textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="Inter,sans-serif">Worker Agent</text>
              <text x="80" y="265" textAnchor="middle" fill="#c4b5fd" fontSize="7.5" fontFamily="Inter,sans-serif">web · files · SQLite</text>
              {/* Worker: Writer */}
              <rect x="180" y="210" width="120" height="62" fill="white" stroke="#a78bfa" strokeWidth="1.5"/>
              <text x="240" y="237" textAnchor="middle" fill="#0a0a0a" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.1em">WRITER</text>
              <text x="240" y="253" textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="Inter,sans-serif">Worker Agent</text>
              <text x="240" y="265" textAnchor="middle" fill="#c4b5fd" fontSize="7.5" fontFamily="Inter,sans-serif">draft · summarise · format</text>
              {/* Worker: Analyst */}
              <rect x="340" y="210" width="120" height="62" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
              <text x="400" y="237" textAnchor="middle" fill="#0a0a0a" fontSize="10" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="0.1em">ANALYST</text>
              <text x="400" y="253" textAnchor="middle" fill="#9ca3af" fontSize="8.5" fontFamily="Inter,sans-serif">Worker Agent</text>
              <text x="400" y="265" textAnchor="middle" fill="#c4b5fd" fontSize="7.5" fontFamily="Inter,sans-serif">score · rank · report</text>
              {/* SQLite shared memory */}
              <rect x="170" y="320" width="140" height="48" fill="#f9fafb" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4 3"/>
              <text x="240" y="342" textAnchor="middle" fill="#6b7280" fontSize="9.5" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="0.06em">SQLite Memory</text>
              <text x="240" y="358" textAnchor="middle" fill="#9ca3af" fontSize="8" fontFamily="Inter,sans-serif">Shared Agent State</text>
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
