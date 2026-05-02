import { User } from "lucide-react";

const stories = [
  { quote: "Within three weeks of completing the programme, I built a RAG-based internal knowledge agent for my company. My manager asked how I did it. My promotion came two months later.", name:"Sneha K.", role:"ML Engineer, Infosys" },
  { quote: "I had no ML background — just Python. The way the instructors break down agentic concepts made it click immediately. I shipped my first production agent in week six. That still feels surreal.", name:"Arjun R.", role:"Backend Dev → AI Engineer" },
  { quote: "The capstone project was worth the entire tuition on its own. I presented a 5-agent supply chain optimiser to three VC firms. Two wanted to fund it. This programme changed everything.", name:"Meera P.", role:"Founder, AgentOps.ai" },
];

const AnecdotesSection = () => (
  <section id="anecdotes" className="py-28 bg-white">
    <div className="max-w-[1240px] mx-auto px-6 md:px-12">
      <div className="grid md:grid-cols-[1fr_2fr] gap-20 mb-20 items-center">
        <div>
          <span className="section-label mb-3">05 — Student Stories</span>
          <h2 className="font-display font-bold text-black leading-[1.15]" style={{ fontSize: 'clamp(32px,4vw,48px)' }}>Real Outcomes.</h2>
        </div>
        <p className="text-gray-500 text-[16px] leading-[1.8]" style={{ fontFamily: 'Inter, sans-serif' }}>
          Over 12,000 engineers, analysts, and developers have transformed their careers through AgentAcademy. These are their stories, in their own words.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-0.5 bg-gray-200">
        {stories.map(s => (
          <div key={s.name} className="bg-white p-12">
            <svg viewBox="0 0 48 36" width="32" height="24" className="fill-gray-200 mb-7">
              <path d="M0 36V22.5C0 10.5 6 3 18 0l3 4.5C13.5 7 10.5 11.5 10.5 16.5H18V36H0zm27 0V22.5C27 10.5 33 3 45 0l3 4.5C40.5 7 37.5 11.5 37.5 16.5H45V36H27z"/>
            </svg>
            <p className="font-display italic text-[18px] text-black leading-[1.7] mb-9">{s.quote}</p>
            <div className="h-px bg-gray-200 mb-7" />
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-black flex items-center justify-center flex-shrink-0">
                <User size={18} className="text-white" strokeWidth={1.5} />
              </div>
              <div>
                <div className="font-semibold text-[14px] text-black" style={{ fontFamily: 'Inter, sans-serif' }}>{s.name}</div>
                <div className="text-[12px] text-gray-400 mt-0.5" style={{ fontFamily: 'Inter, sans-serif' }}>{s.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default AnecdotesSection;
