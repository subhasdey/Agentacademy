import { User } from "lucide-react";

const stories = [
  { quote: "I did not know anything about agentic AI and had never worked on a project that big. With all the collaboration and work behind the project, though, I learned how to work between groups to fulfill the goals that were established. I also learned much more about professional development, especially pertaining to AI.", name:"Tesla STEM Student", role:"Tesla STEM High School" },
  { quote: "The way the instructors clearly laid out expectations for overlapping sections and agent tasks, in addition to facilitating of regular updates between groups, helped us stay in sync and steadily build to our goal.", name:"Isabel", role:"Tesla STEM High School" },
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
          25+ students have already built working AI agents through AgentAcademy. These are their stories, in their own words.
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
